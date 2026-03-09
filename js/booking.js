// Booking Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Populate package dropdown
    populatePackageDropdown();
    
    // Init flatpickr for travel date (altInput shows DD-MM-YYYY; hidden value stays ISO for validation)
    if (document.getElementById('travelDate')) {
        const fpBooking = flatpickr('#travelDate', {
            dateFormat: 'Y-m-d',
            altInput: true,
            altFormat: 'd-m-Y',
            minDate: 'today',
            disableMobile: true
        });
        fpBooking.altInput.placeholder = 'DD-MM-YYYY 📅';
    }
    
    // Handle form submission
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBooking);
    }
    
    // Check for pre-selected package from URL
    const pkgId = getUrlParameter('pkg');
    if (pkgId) {
        const select = document.getElementById('package');
        if (select) {
            select.value = pkgId;
        }
    }
});

// Populate package dropdown
function populatePackageDropdown() {
    const select = document.getElementById('package');
    if (!select) return;
    
    // Group packages by category
    const domestic = tourPackages.filter(pkg => pkg.category === 'domestic');
    const international = tourPackages.filter(pkg => pkg.category === 'international');
    
    // Add domestic packages
    if (domestic.length > 0) {
        const domesticGroup = document.createElement('optgroup');
        domesticGroup.label = 'Domestic Tours';
        
        domestic.forEach(pkg => {
            const option = document.createElement('option');
            option.value = pkg.id;
            option.textContent = `${pkg.title} (${pkg.duration})`;
            domesticGroup.appendChild(option);
        });
        
        select.appendChild(domesticGroup);
    }
    
    // Add international packages
    if (international.length > 0) {
        const intlGroup = document.createElement('optgroup');
        intlGroup.label = 'International Tours';
        
        international.forEach(pkg => {
            const option = document.createElement('option');
            option.value = pkg.id;
            option.textContent = `${pkg.title} (${pkg.duration})`;
            intlGroup.appendChild(option);
        });
        
        select.appendChild(intlGroup);
    }
}

// Handle booking form submission
async function handleBooking(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.textContent : '';

    // Get form data
    const formData = new FormData(form);
    const data = {};
    
    for (let [key, value] of formData.entries()) {
        if (key === 'interests') {
            if (!data[key]) data[key] = [];
            data[key].push(value);
        } else {
            data[key] = value;
        }
    }
    
    // Attach selected package details
    const packageId = data.package;
    if (packageId && packageId !== 'custom') {
        const selectedPackage = tourPackages.find(pkg => pkg.id === parseInt(packageId));
        if (selectedPackage) {
            data.packageDetails = {
                title: selectedPackage.title,
                duration: selectedPackage.duration,
                destinations: selectedPackage.destinations
            };
        }
    }
    
    if (!validateBookingForm(data)) return;
    
    // Build Web3Forms payload
    const packageName = data.packageDetails ? data.packageDetails.title : 'Custom Package';
    const payload = {
        access_key: CONFIG.WEB3FORMS_ACCESS_KEY,
        subject: `Booking Request: ${packageName} — Solanki Tours`,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        city: data.city || '',
        country: data.country || '',
        package: packageName,
        destination: data.destination || '',
        duration: data.duration || '',
        travelDate: data.travelDate,
        travelers: data.travelers,
        accommodation: data.accommodation || '',
        budget: data.budget || '',
        travelType: data.travelType || '',
        interests: Array.isArray(data.interests) ? data.interests.join(', ') : (data.interests || ''),
        requirements: data.requirements || '',
        hearAbout: data.hearAbout || ''
    };

    if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Submitting...'; }

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(payload)
        });
        const result = await response.json();
        if (result.success) {
            showSuccessMessage(data);
            form.reset();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            alert('❌ Failed to submit booking request. Please try again or contact us directly.');
        }
    } catch (error) {
        console.error('Booking error:', error);
        alert('❌ Connection error. Please try again later.');
    } finally {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = originalText; }
    }
}

// Validate booking form
function validateBookingForm(data) {
    // Check required fields
    if (!data.firstName || !data.lastName) {
        alert('Please enter your full name');
        return false;
    }
    
    if (!data.email) {
        alert('Please enter your email address');
        return false;
    }
    
    if (!data.phone) {
        alert('Please enter your phone number');
        return false;
    }
    
    if (!data.destination) {
        alert('Please select a destination');
        return false;
    }
    
    if (!data.travelDate) {
        alert('Please select a travel date');
        return false;
    }
    
    if (!data.travelers || data.travelers < 1) {
        alert('Please enter number of travelers');
        return false;
    }
    
    if (!data.terms) {
        alert('Please agree to the terms and conditions');
        return false;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address');
        return false;
    }
    
    // Validate phone format (basic check)
    const phoneRegex = /^[\d\s\+\-\(\)]+$/;
    if (!phoneRegex.test(data.phone)) {
        alert('Please enter a valid phone number');
        return false;
    }
    
    // Check if travel date is in the future
    const travelDate = new Date(data.travelDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (travelDate < today) {
        alert('Travel date must be in the future');
        return false;
    }
    
    return true;
}

// Show success message
function showSuccessMessage(data) {
    const packageName = data.packageDetails ? data.packageDetails.title : 'Custom Package';
    const message = `
        🎉 Booking Request Submitted Successfully!
        
        Thank you, ${data.firstName}!
        
        We have received your booking request for:
        ${packageName}
        
        Travel Date: ${formatDate(data.travelDate)}
        Number of Travelers: ${data.travelers}
        
        Our travel experts will contact you within 24 hours at:
        📧 ${data.email}
        📞 ${data.phone}
        
        We look forward to planning your perfect trip!
    `;
    
    alert(message);
}

// Format date for display
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Auto-fill destination based on package selection
document.addEventListener('change', function(e) {
    if (e.target.id === 'package') {
        const packageId = e.target.value;
        
        if (packageId && packageId !== 'custom') {
            const pkg = tourPackages.find(p => p.id === parseInt(packageId));
            
            if (pkg) {
                // Try to match destination
                const destSelect = document.getElementById('destination');
                if (destSelect && pkg.region) {
                    const matchingOption = Array.from(destSelect.options).find(
                        opt => opt.value.toLowerCase() === pkg.region.toLowerCase()
                    );
                    
                    if (matchingOption) {
                        destSelect.value = matchingOption.value;
                    }
                }
                
                // Set duration
                const durationSelect = document.getElementById('duration');
                if (durationSelect) {
                    const nights = getNights(pkg.duration);
                    
                    if (nights >= 2 && nights <= 3) {
                        durationSelect.value = '2-3';
                    } else if (nights >= 4 && nights <= 5) {
                        durationSelect.value = '4-5';
                    } else if (nights >= 6 && nights <= 7) {
                        durationSelect.value = '6-7';
                    } else if (nights >= 8 && nights <= 10) {
                        durationSelect.value = '8-10';
                    } else if (nights > 10) {
                        durationSelect.value = '10+';
                    }
                }
            }
        }
    }
});
