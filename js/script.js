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

    // Handle contact form
    // Forms now submit directly to Formspree - no JS interception needed

    // Forms now submit directly to Formspree - no JS interception needed

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
function createPackageCard(pkg) {
    const nights = pkg.duration.split('/')[0].trim().split(' ')[0];
    
    return `
        <div class="package-card" onclick="viewPackage(${pkg.id})">
            <div class="package-image" style="background-image: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.3)), url('${pkg.image}');">
                <span class="package-badge">${pkg.duration}</span>
            </div>
            <div class="package-content">
                <h3 class="package-title">${pkg.title}</h3>
                <div class="package-details">
                    <span>📍 ${pkg.destinations.split('-')[0].trim()}</span>
                    <span>🌙 ${nights} Nights</span>
                </div>
                <div class="package-price">${pkg.price}</div>
                <div class="package-price-note">Per person on twin sharing</div>
                <div class="package-footer">
                    <span style="color: var(--text-light); font-size: 0.9rem;">${pkg.category === 'international' ? '✈️ International' : '🇮🇳 Domestic'}</span>
                    <a href="package-detail.html?id=${pkg.id}" class="btn-primary" style="padding: 0.5rem 1rem; font-size: 0.9rem;">View Details</a>
                </div>
            </div>
        </div>
    `;
}

// View package details
function viewPackage(id) {
    window.location.href = `package-detail.html?id=${id}`;
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
        'Kashmir Paradise Tour'
    ],
    'uttarakhand': [
        'Uttarakhand Hill Station Tour',
        'Mussoorie Dhanaulti Tour Package',
        'Haridwar Rishikesh Tour Package',
        'Jim Corbett Jungle Safari'
    ],
    'chardham': [
        'Char Dham Yatra by Helicopter (Ex Dehradun)',
        'Do Dham Yatra by Helicopter (Ex Dehradun)',
        'Char Dham Yatra by Road (Ex Delhi)',
        'Char Dham Yatra by Road (Ex Haridwar)',
        'Badrinath Kedarnath Dham Package'
    ],
    'northeast': [
        'Darjeeling Gangtok Tour'
    ],
    'combo': [
        'Himachal with Golden Temple Tour',
        'Manali Kasol Amritsar Tour'
    ],
    'heritage': [
        'Golden Triangle Tour'
    ],
    'beach': [
        'Kerala Backwaters Tour',
        'Goa Beach Paradise',
        'Andaman Island Paradise'
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

    // Fallback: match by region or destination string
    return packages.filter(pkg =>
        pkg.destinations.toLowerCase().includes(dest) ||
        pkg.region === dest
    );
}

// Filter packages by duration
function filterByDuration(packages, durationRange) {
    if (durationRange === 'all') return packages;
    
    return packages.filter(pkg => {
        const nights = getNights(pkg.duration);
        
        switch(durationRange) {
            case '2-3':
                return nights >= 2 && nights <= 3;
            case '4-5':
                return nights >= 4 && nights <= 5;
            case '6-7':
                return nights >= 6 && nights <= 7;
            case '8-10':
                return nights >= 8 && nights <= 10;
            case '10+':
                return nights > 10;
            default:
                return true;
        }
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
