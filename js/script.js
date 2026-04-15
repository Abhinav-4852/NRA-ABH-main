// Main JavaScript file for Solanki Tours

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Load featured packages on homepage
    if (document.getElementById('featured-packages')) {
        loadFeaturedPackages();
    }

    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    // Handle enquiry form submission
    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', handleEnquiryForm);
    }

    // Init flatpickr for homepage enquiry date
    if (document.getElementById('enquiryDate')) {
        const fpEnquiry = flatpickr('#enquiryDate', {
            dateFormat: 'Y-m-d',
            altInput: true,
            altFormat: 'd-m-Y',
            minDate: 'today',
            disableMobile: true
        });
        fpEnquiry.altInput.placeholder = '4. DD-MM-YYYY 📅';
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add destination card click handlers
    const destCards = document.querySelectorAll('.destination-card');
    destCards.forEach(card => {
        card.addEventListener('click', function() {
            const dest = this.getAttribute('data-dest');
            window.location.href = `packages.html?dest=${dest}`;
        });
    });

    // Update destination package counts dynamically
    updateDestinationCounts();
});

// Handle Contact Form Submission
async function handleContactForm(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    const payload = {
        access_key: CONFIG.WEB3FORMS_ACCESS_KEY,
        subject: 'New Contact Message — Solanki Tours',
        name: form.querySelector('input[name="name"]').value,
        email: form.querySelector('input[name="email"]').value,
        phone: form.querySelector('input[name="phone"]').value,
        subject_line: form.querySelector('input[name="subject"]').value,
        message: form.querySelector('textarea[name="message"]').value
    };
    
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(payload)
        });
        const result = await response.json();
        if (result.success) {
            alert('✅ Message sent successfully! We will get back to you soon.');
            form.reset();
        } else {
            alert('❌ Failed to send message. Please try again or call us directly.');
        }
    } catch (error) {
        console.error('Contact form error:', error);
        alert('❌ Connection error. Please try again later.');
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }
}

// Handle Enquiry Form Submission (Plan Your Dream Tour)
async function handleEnquiryForm(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('input[type="submit"]');
    const originalValue = submitBtn.value;
    
    const payload = {
        access_key: CONFIG.WEB3FORMS_ACCESS_KEY,
        subject: 'New Tour Enquiry — Solanki Tours',
        name: form.querySelector('input[name="name"]').value,
        email: form.querySelector('input[name="email"]').value,
        phone: form.querySelector('input[name="phone"]').value,
        travelDate: form.querySelector('input[name="date"]').value,
        adults: form.querySelector('select[name="adults"]').value,
        kids: form.querySelector('select[name="kids"]').value || '0',
        enquiry: form.querySelector('input[name="comments"]').value
    };
    
    submitBtn.disabled = true;
    submitBtn.value = 'Sending...';
    
    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(payload)
        });
        const result = await response.json();
        if (result.success) {
            alert('✅ Enquiry sent successfully! Our team will contact you shortly with a customized quote.');
            form.reset();
        } else {
            alert('❌ Failed to send enquiry. Please try again or contact us directly.');
        }
    } catch (error) {
        console.error('Enquiry form error:', error);
        alert('❌ Connection error. Please try again later.');
    } finally {
        submitBtn.disabled = false;
        submitBtn.value = originalValue;
    }
}

// Load featured packages
function loadFeaturedPackages() {
    const container = document.getElementById('featured-packages');
    if (!container) return;

    // Get first 6 packages
    const featured = tourPackages.slice(0, 6);
    
    container.innerHTML = featured.map(pkg => createPackageCard(pkg)).join('');
}

// Update destination package counts dynamically
function updateDestinationCounts() {
    Object.keys(destinationGroupPackages).forEach(groupKey => {
        const countId = `count-${groupKey}`;
        const el = document.getElementById(countId);
        
        if (el) {
            const titles = destinationGroupPackages[groupKey];
            const count = tourPackages.filter(pkg => titles.includes(pkg.title)).length;
            el.textContent = `${count} ${count === 1 ? 'Package' : 'Packages'}`;
        }
    });
}


// Create package card HTML
function createPackageCard(pkg, activeVariantIndex) {
    const variantIdx = activeVariantIndex !== undefined ? activeVariantIndex : (pkg.defaultVariant || 0);
    const v = getVariant(pkg, variantIdx);
    const nights = v.duration.split('/')[0].trim().split(' ')[0];

    // Duration pills for consolidated packages
    let pillsHtml = '';
    if (pkg.variants && pkg.variants.length > 1) {
        const pills = pkg.variants.map((variant, i) => {
            const active = i === variantIdx ? ' pill-active' : '';
            const label = durationLabel(variant.duration);
            return `<button class="duration-pill${active}" onclick="event.stopPropagation();switchVariant(${pkg.id},${i},this)" data-pkg="${pkg.id}" data-variant="${i}">${label}</button>`;
        }).join('');
        pillsHtml = `
            <div class="duration-pills-row">
                <span class="duration-pills-label">Duration</span>
                <div class="duration-pills">${pills}</div>
            </div>`;
    }

    return `
        <div class="package-card" id="pkg-card-${pkg.id}" onclick="viewPackage(${pkg.id},${variantIdx})">
            <div class="package-image" style="background-image: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.3)), url('${pkg.image}');">
                <span class="package-badge" id="pkg-badge-${pkg.id}">${v.duration}</span>
            </div>
            <div class="package-content">
                ${pillsHtml}
                <h3 class="package-title">${pkg.title}</h3>
                <div class="package-details" id="pkg-details-${pkg.id}">
                    <span>📍 ${v.destinations.split('-')[0].trim()}</span>
                    <span>🌙 ${nights} Nights</span>
                </div>
                <div class="package-price">${pkg.price}</div>
                <div class="package-price-note">  </div>
                <div class="package-footer">
                    <span style="color: var(--text-light); font-size: 0.9rem;">${pkg.category === 'international' ? '✈️ International' : '🇮🇳 Domestic'}</span>
                    <a href="package-detail.html?id=${pkg.id}&variant=${v.variantId || ''}" class="btn-primary" style="padding: 0.5rem 1rem; font-size: 0.9rem;" id="pkg-link-${pkg.id}">View Details</a>
                </div>
            </div>
        </div>
    `;
}

// Switch visible variant on a card without page navigation
function switchVariant(pkgId, variantIndex, pillBtn) {
    const pkg = tourPackages.find(p => p.id === pkgId);
    if (!pkg || !pkg.variants) return;
    const v = pkg.variants[variantIndex];
    if (!v) return;

    // Update pill active state
    const card = document.getElementById('pkg-card-' + pkgId);
    if (card) {
        card.querySelectorAll('.duration-pill').forEach(p => p.classList.remove('pill-active'));
        pillBtn.classList.add('pill-active');

        // Update badge
        const badge = document.getElementById('pkg-badge-' + pkgId);
        if (badge) badge.textContent = v.duration;

        // Update details
        const details = document.getElementById('pkg-details-' + pkgId);
        if (details) {
            const nights = v.duration.split('/')[0].trim().split(' ')[0];
            details.innerHTML = `<span>📍 ${v.destinations.split('-')[0].trim()}</span><span>🌙 ${nights} Nights</span>`;
        }

        // Update detail link
        const link = document.getElementById('pkg-link-' + pkgId);
        if (link) link.href = `package-detail.html?id=${pkgId}&variant=${v.variantId || ''}`;

        // Update card onclick
        card.setAttribute('onclick', `viewPackage(${pkgId},${variantIndex})`);
    }
}

// View package details (optionally with a specific variant)
function viewPackage(id, variantIndex) {
    const pkg = tourPackages.find(p => p.id === id);
    let url = `package-detail.html?id=${id}`;
    if (pkg && pkg.variants && variantIndex !== undefined) {
        const v = pkg.variants[variantIndex];
        if (v && v.variantId) url += `&variant=${v.variantId}`;
    }
    window.location.href = url;
}

// Search packages
function searchPackages() {
    const destination = document.getElementById('destination-select').value;
    const duration = document.getElementById('duration-select').value;
    
    let url = 'packages.html?';
    if (destination) url += `dest=${destination}&`;
    if (duration) url += `dur=${duration}`;
    
    window.location.href = url;
}

// Utility function to get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Format duration for display
function formatDuration(duration) {
    return duration.replace(/NIGHTS?/i, 'Nights').replace(/DAYS?/i, 'Days');
}

// Get nights from duration string
function getNights(duration) {
    const match = duration.match(/(\d+)\s*NIGHT/i);
    return match ? parseInt(match[1]) : 0;
}

// Get the active variant object for a package (falls back gracefully for non-consolidated packages)
function getVariant(pkg, variantIndex) {
    if (!pkg.variants || pkg.variants.length === 0) return pkg;
    const idx = (variantIndex !== undefined && variantIndex !== null)
        ? variantIndex
        : (pkg.defaultVariant || 0);
    return pkg.variants[Math.max(0, Math.min(idx, pkg.variants.length - 1))];
}

// Short label for a duration pill, e.g. "04 NIGHTS/05 DAYS" → "4N/5D"
function durationLabel(duration) {
    const m = duration.match(/(\d+)\s*NIGHTS?\s*\/\s*(\d+)\s*DAYS?/i);
    if (m) return `${parseInt(m[1])}N/${parseInt(m[2])}D`;
    return duration;
}

// ===== Destination Group Mappings =====
const destinationGroupPackages = {
    'himachal': [
        'Shimla Tour',
        'Kullu Manali Tour',
        'Shimla Kullu Manali Tour Package',
        'Manali Weekend Tour',
        'Manali Chandigarh Car Tour',
        'Shimla Manali Car Package',
        'Manali Honeymoon Volvo Package',
        'Manali Kasol Amritsar Tour',
        'Manali Shimla Volvo Honeymoon Tour',
        'Shimla Volvo Package',
        'Grand Himachal Tour',
        'Delhi Manali Car Tour'
    ],
    'kashmir': [
        'Kashmir Paradise Tour',
        'Kashmir Tour Package'
    ],
    'uttarakhand': [
        'Uttarakhand Hill Station Tour',
        'Mussoorie Dhanaulti Tour Package',
        'Haridwar Rishikesh Tour Package',
        'Jim Corbett Jungle Safari',
        'Uttarakhand Tour Package'
    ],
    'chardham': [
        'Char Dham Yatra by Helicopter (Ex Dehradun)',
        'Do Dham Yatra by Helicopter (Ex Dehradun)',
        'Char Dham Yatra by Road (Ex Delhi)',
        'Char Dham Yatra by Road (Ex Haridwar)',
        'Badrinath Kedarnath Dham Package'
    ],
    'northeast': [
        'Darjeeling Gangtok Tour',
        'North East Tour Package',
        'North East Package'
    ],
    'rajasthan': [
        'Rajasthan Tour Package'
    ],
    'combo': [
        'Himachal with Golden Temple Tour',
        'Manali Kasol Amritsar Tour'
    ],
    'beach': [
        'Kerala Backwaters Tour',
        'Goa Beach Paradise',
        'Andaman Island Paradise',
        'Kerala Tour Package',
        'Andaman Tour Package'
    ],
    'international': [
        'Thailand Tour Package',
        'Singapore Tour Package',
        'Dubai Tour Package',
        'Sri Lanka Tour Package'
    ]
};

// Filter packages by destination
function filterByDestination(packages, destination) {
    if (destination === 'all') return packages;

    const dest = destination.toLowerCase();

    // Check if this is a group key with explicit package mappings
    if (destinationGroupPackages[dest]) {
        const titles = destinationGroupPackages[dest];
        return packages.filter(pkg => titles.includes(pkg.title));
    }

    // Fallback: match by region, or by destinations string across all variants
    return packages.filter(pkg => {
        if (pkg.region === dest) return true;
        if (pkg.variants && pkg.variants.length > 0) {
            return pkg.variants.some(v => v.destinations.toLowerCase().includes(dest));
        }
        return pkg.destinations.toLowerCase().includes(dest);
    });
}

// Filter packages by duration — for consolidated packages, match if ANY variant fits
function filterByDuration(packages, durationRange) {
    if (durationRange === 'all') return packages;

    function nightsMatch(nights) {
        switch (durationRange) {
            case '2-3':  return nights >= 2  && nights <= 3;
            case '4-5':  return nights >= 4  && nights <= 5;
            case '6-7':  return nights >= 6  && nights <= 7;
            case '8-10': return nights >= 8  && nights <= 10;
            case '10+':  return nights > 10;
            default:     return true;
        }
    }

    return packages.filter(pkg => {
        if (pkg.variants && pkg.variants.length > 0) {
            return pkg.variants.some(v => nightsMatch(getNights(v.duration)));
        }
        return nightsMatch(getNights(pkg.duration));
    });
}

// Sort packages
function sortPackages(packages, sortBy) {
    const sorted = [...packages];
    
    switch(sortBy) {
        case 'name':
            return sorted.sort((a, b) => a.title.localeCompare(b.title));
        case 'duration-asc':
            return sorted.sort((a, b) => getNights(a.duration) - getNights(b.duration));
        case 'duration-desc':
            return sorted.sort((a, b) => getNights(b.duration) - getNights(a.duration));
        default:
            return sorted;
    }
}

// Scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Filter packages by category ("domestic" / "international")
function filterByCategory(packages, category) {
    if (category === 'all') return packages;
    return packages.filter(pkg => pkg.category === category);
}

// Add scroll to top button
window.addEventListener('scroll', function() {
    const scrollBtn = document.getElementById('scrollToTop');
    if (scrollBtn) {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    }
});
