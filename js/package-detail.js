// Package Detail Page JavaScript

let currentPackage = null;
let currentVariantIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
    // Get package ID and optional variant from URL
    const packageId = parseInt(getUrlParameter('id'));
    const variantParam = getUrlParameter('variant');

    if (packageId) {
        loadPackageDetails(packageId, variantParam);
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

// Load package details, with optional variant selection
function loadPackageDetails(id, variantParam) {
    currentPackage = tourPackages.find(pkg => pkg.id === id);

    if (!currentPackage) {
        window.location.href = 'packages.html';
        return;
    }

    // Resolve which variant to show
    if (currentPackage.variants && currentPackage.variants.length > 0) {
        if (variantParam) {
            const idx = currentPackage.variants.findIndex(v => v.variantId === variantParam);
            currentVariantIndex = idx >= 0 ? idx : (currentPackage.defaultVariant || 0);
        } else {
            currentVariantIndex = currentPackage.defaultVariant || 0;
        }
    } else {
        currentVariantIndex = 0;
    }

    // Update page title
    document.title = `${currentPackage.title} - Solanki Tours`;

    // Update breadcrumb
    const breadcrumb = document.getElementById('package-breadcrumb');
    if (breadcrumb) breadcrumb.textContent = currentPackage.title;

    // Update hero image
    const heroImage = document.getElementById('package-hero');
    if (heroImage) {
        heroImage.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${currentPackage.image}')`;
    }

    // Update title
    const titleEl = document.getElementById('package-title');
    if (titleEl) titleEl.textContent = currentPackage.title;

    // Render variant tabs for consolidated packages
    renderVariantTabs(currentPackage, currentVariantIndex);

    // Render variant-specific content
    renderVariantContent(currentPackage, currentVariantIndex);

    // Update price
    const priceEl = document.getElementById('package-price');
    if (priceEl) priceEl.textContent = currentPackage.price;

    // Update best time
    const bestTimeEl = document.getElementById('best-time');
    if (bestTimeEl) bestTimeEl.textContent = getBestTime(currentPackage.region);

    // Load related packages
    loadRelatedPackages(currentPackage);
}

// Render duration tabs above the itinerary for consolidated packages
function renderVariantTabs(pkg, activeIndex) {
    // Find or create the tabs container — insert it before #package-duration if present
    let tabsContainer = document.getElementById('variant-tabs');
    if (!tabsContainer) {
        tabsContainer = document.createElement('div');
        tabsContainer.id = 'variant-tabs';
        tabsContainer.className = 'variant-tabs';
        const durationEl = document.getElementById('package-duration');
        if (durationEl && durationEl.parentNode) {
            durationEl.parentNode.insertBefore(tabsContainer, durationEl);
        }
    }

    if (!pkg.variants || pkg.variants.length <= 1) {
        tabsContainer.innerHTML = '';
        return;
    }

    tabsContainer.innerHTML = pkg.variants.map((v, i) => {
        const active = i === activeIndex ? ' tab-active' : '';
        return `<button class="variant-tab${active}" onclick="selectVariant(${i})">${durationLabel(v.duration)}</button>`;
    }).join('');
}

// Render the duration, destinations, overview, inclusions, itinerary for the selected variant
function renderVariantContent(pkg, variantIndex) {
    const v = getVariant(pkg, variantIndex);

    // Update URL without page reload so back-button works
    const newUrl = `package-detail.html?id=${pkg.id}${v.variantId ? '&variant=' + v.variantId : ''}`;
    history.replaceState(null, '', newUrl);

    const durationEl = document.getElementById('package-duration');
    if (durationEl) durationEl.textContent = formatDuration(v.duration);

    const destEl = document.getElementById('package-destinations');
    if (destEl) destEl.textContent = v.destinations;

    const overviewEl = document.getElementById('package-overview');
    if (overviewEl) overviewEl.textContent = generateOverview(pkg, v);

    const inclusionsEl = document.getElementById('package-inclusions');
    if (inclusionsEl) {
        inclusionsEl.innerHTML = v.inclusions
            .map(inc => `<li>${inc}</li>`)
            .join('');
    }

    const itineraryEl = document.getElementById('package-itinerary');
    if (itineraryEl) itineraryEl.innerHTML = generateItinerary(v);
}

// Called when a variant tab is clicked
function selectVariant(variantIndex) {
    if (!currentPackage) return;
    currentVariantIndex = variantIndex;

    // Update tab active state
    document.querySelectorAll('.variant-tab').forEach((tab, i) => {
        tab.classList.toggle('tab-active', i === variantIndex);
    });

    renderVariantContent(currentPackage, variantIndex);
}

// Generate overview text — accepts a variant object (or falls back to pkg for non-consolidated)
function generateOverview(pkg, variant) {
    const v = variant || pkg;
    const nights = getNights(v.duration);
    const category = pkg.category === 'international' ? 'international' : 'domestic';

    return `Embark on an unforgettable ${nights}-night journey through ${v.destinations}. This carefully curated ${category} tour package offers the perfect blend of adventure, relaxation, and cultural experiences. Whether you're traveling with family, friends, or as a couple, this ${pkg.title.toLowerCase()} promises memories that will last a lifetime. Our expert team has designed this itinerary to showcase the best of the region while ensuring your comfort and satisfaction throughout the journey.`;
}

// Generate itinerary HTML — accepts a variant (or pkg for non-consolidated packages)
function generateItinerary(variant) {
    const v = variant || {};
    const itinerary = v.itinerary;
    const duration = v.duration;
    const destinations = v.destinations;

    // Use real itinerary data when present
    if (itinerary && itinerary.length > 0) {
        return itinerary.map(entry => `
        <div class="itinerary-day">
            <h4>${entry.day}</h4>
            <p>${entry.description || 'Please contact us for the detailed itinerary and activity breakdown.'}</p>
        </div>
    `).join('');
    }

    // Fallback: generate generic itinerary from duration + destinations
    const nights = getNights(duration || '');
    const dests = (destinations || '').split('-').map(d => d.trim());

    let html = `
        <div class="itinerary-day">
            <h4>Day 1: Arrival</h4>
            <p>Arrive at ${dests[0] || 'destination'}. Check-in to your hotel. Welcome drink on arrival. Evening free for leisure. Overnight stay.</p>
        </div>
    `;

    for (let i = 2; i < nights; i++) {
        const dest = dests[Math.min(i - 1, dests.length - 1)];
        html += `
        <div class="itinerary-day">
            <h4>Day ${i}: ${dest} Sightseeing</h4>
            <p>After breakfast, proceed for full day sightseeing of ${dest}. Visit popular attractions and landmarks. Evening at leisure. Overnight stay at hotel.</p>
        </div>
    `;
    }

    html += `
        <div class="itinerary-day">
            <h4>Day ${nights}: Departure</h4>
            <p>After breakfast, check out from hotel. Transfer to airport/railway station for your onward journey. Tour ends with sweet memories.</p>
        </div>
    `;

    return html;
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
