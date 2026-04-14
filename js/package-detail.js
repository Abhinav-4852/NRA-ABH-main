// Package Detail Page JavaScript

let currentPackage = null;

document.addEventListener('DOMContentLoaded', function() {
    // Get package ID from URL
    const packageId = parseInt(getUrlParameter('id'));
    
    if (packageId) {
        loadPackageDetails(packageId);
    } else {
        // Redirect to packages page if no ID
        window.location.href = 'packages.html';
    }
    
    // Handle quick inquiry form
    const form = document.getElementById('quickInquiryForm');
    if (form) {
        form.addEventListener('submit', handleQuickInquiry);
    }

    // Init flatpickr for quick inquiry travel date
    if (document.getElementById('quickTravelDate')) {
        const fpQuick = flatpickr('#quickTravelDate', {
            dateFormat: 'Y-m-d',
            altInput: true,
            altFormat: 'd-m-Y',
            minDate: 'today',
            disableMobile: true
        });
        fpQuick.altInput.placeholder = 'DD-MM-YYYY 📅';
    }
});

// Load package details
function loadPackageDetails(id) {
    currentPackage = tourPackages.find(pkg => pkg.id === id);
    
    if (!currentPackage) {
        window.location.href = 'packages.html';
        return;
    }
    
    // Update page title
    document.title = `${currentPackage.title} - Solanki Tours`;
    
    // Update breadcrumb
    const breadcrumb = document.getElementById('package-breadcrumb');
    if (breadcrumb) {
        breadcrumb.textContent = currentPackage.title;
    }
    
    // Update hero image
    const heroImage = document.getElementById('package-hero');
    if (heroImage) {
        heroImage.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${currentPackage.image}')`;
    }
    
    // Update title
    const titleEl = document.getElementById('package-title');
    if (titleEl) {
        titleEl.textContent = currentPackage.title;
    }
    
    // Update duration
    const durationEl = document.getElementById('package-duration');
    if (durationEl) {
        durationEl.textContent = formatDuration(currentPackage.duration);
    }
    
    // Update destinations
    const destEl = document.getElementById('package-destinations');
    if (destEl) {
        destEl.textContent = currentPackage.destinations;
    }
    
    // Update overview
    const overviewEl = document.getElementById('package-overview');
    if (overviewEl) {
        overviewEl.textContent = generateOverview(currentPackage);
    }
    
    // Update inclusions
    const inclusionsEl = document.getElementById('package-inclusions');
    if (inclusionsEl) {
        inclusionsEl.innerHTML = currentPackage.inclusions
            .map(inc => `<li>${inc}</li>`)
            .join('');
    }
    
    // Update itinerary
    const itineraryEl = document.getElementById('package-itinerary');
    if (itineraryEl) {
        itineraryEl.innerHTML = generateItinerary(currentPackage);
    }
    
    // Update price
    const priceEl = document.getElementById('package-price');
    if (priceEl) {
        priceEl.textContent = currentPackage.price;
    }
    
    // Update best time
    const bestTimeEl = document.getElementById('best-time');
    if (bestTimeEl) {
        bestTimeEl.textContent = getBestTime(currentPackage.region);
    }
    
    // Load related packages
    loadRelatedPackages(currentPackage);
}

// Generate overview text
function generateOverview(pkg) {
    const nights = getNights(pkg.duration);
    const category = pkg.category === 'international' ? 'international' : 'domestic';
    
    return `Embark on an unforgettable ${nights}-night journey through ${pkg.destinations}. This carefully curated ${category} tour package offers the perfect blend of adventure, relaxation, and cultural experiences. Whether you're traveling with family, friends, or as a couple, this ${pkg.title.toLowerCase()} promises memories that will last a lifetime. Our expert team has designed this itinerary to showcase the best of the region while ensuring your comfort and satisfaction throughout the journey.`;
}

// Generate itinerary — uses actual day labels from JSON when available
function generateItinerary(pkg) {
    // Use real itinerary data loaded from JSON if present.
    // Each entry is {day, description} — description may be empty for international packages.
    if (pkg.itinerary && pkg.itinerary.length > 0) {
        return pkg.itinerary.map(entry => `
        <div class="itinerary-day">
            <h4>${entry.day}</h4>
            <p>${entry.description || 'Please contact us for the detailed itinerary and activity breakdown.'}</p>
        </div>
    `).join('');
    }

    // Fallback: generate a generic itinerary from duration + destinations
    const nights = getNights(pkg.duration);
    const destinations = pkg.destinations.split('-').map(d => d.trim());

    let itinerary = `
        <div class="itinerary-day">
            <h4>Day 1: Arrival</h4>
            <p>Arrive at ${destinations[0]}. Check-in to your hotel. Welcome drink on arrival. Evening free for leisure. Overnight stay.</p>
        </div>
    `;

    for (let i = 2; i < nights; i++) {
        const dest = destinations[Math.min(i - 1, destinations.length - 1)];
        itinerary += `
        <div class="itinerary-day">
            <h4>Day ${i}: ${dest} Sightseeing</h4>
            <p>After breakfast, proceed for full day sightseeing of ${dest}. Visit popular attractions and landmarks. Evening at leisure. Overnight stay at hotel.</p>
        </div>
    `;
    }

    itinerary += `
        <div class="itinerary-day">
            <h4>Day ${nights}: Departure</h4>
            <p>After breakfast, check out from hotel. Transfer to airport/railway station for your onward journey. Tour ends with sweet memories.</p>
        </div>
    `;

    return itinerary;
}

// Get best time to visit
function getBestTime(region) {
    const times = {
        'himachal': 'March to June, September to December',
        'kerala': 'September to March',
        'kashmir': 'April to October',
        'rajasthan': 'October to March',
        'andaman': 'October to May',
        'northeast': 'October to April',
        'uttarakhand': 'March to June, September to November',
        'goa': 'November to February',
        'thailand': 'November to February',
        'singapore': 'February to April',
        'dubai': 'November to March',
        'srilanka': 'December to March'
    };
    
    return times[region] || 'Throughout the year';
}

// Load related packages
function loadRelatedPackages(currentPkg) {
    const container = document.getElementById('related-packages');
    if (!container) return;
    
    // Find packages in same region or category
    const related = tourPackages
        .filter(pkg => 
            pkg.id !== currentPkg.id && 
            (pkg.region === currentPkg.region || pkg.category === currentPkg.category)
        )
        .slice(0, 3);
    
    if (related.length > 0) {
        container.innerHTML = related.map(pkg => createPackageCard(pkg)).join('');
    } else {
        // Show random packages if no related found
        const random = tourPackages
            .filter(pkg => pkg.id !== currentPkg.id)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);
        container.innerHTML = random.map(pkg => createPackageCard(pkg)).join('');
    }
}


// Handle quick inquiry form
async function handleQuickInquiry(e) {
    e.preventDefault();

    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.textContent : '';

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Add package context
    data.package = currentPackage ? currentPackage.title : 'Unknown';
    data.packageId = currentPackage ? currentPackage.id : '';

    // Build Web3Forms payload
    const payload = {
        access_key: CONFIG.WEB3FORMS_ACCESS_KEY,
        subject: `Quick Inquiry: ${data.package}`,
        name: data.name || '',
        email: data.email || '',
        phone: data.phone || '',
        travelDate: data.travelDate || '',
        travelers: data.travelers || '',
        requirements: data.requirements || '',
        package: data.package
    };

    if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Sending...'; }

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(payload)
        });
        const result = await response.json();
        if (result.success) {
            alert(`✅ Thank you for your inquiry about ${data.package}! Our travel experts will contact you within 24 hours.`);
            form.reset();
        } else {
            alert('❌ Failed to send inquiry. Please try again or contact us directly.');
        }
    } catch (error) {
        console.error('Inquiry error:', error);
        alert('❌ Connection error. Please try again later.');
    } finally {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = originalText; }
    }
}
