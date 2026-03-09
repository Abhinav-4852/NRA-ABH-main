// ===================================
// Solanki Tours - Configuration File
// ===================================
// Centralized configuration for links, images, and settings
// Update this file to change social links, contact info, and paths across the entire site

// ===== Form Submissions via Web3Forms =====
// API_BASE_URL removed — all forms now submit via Web3Forms (see root config.js)

const siteConfig = {
    // ===== Company Info =====
    companyName: 'Solanki Tours',
    companyPhone: '7895348735',
    
    // ===== Social Media Links =====
    social: {
        facebook: '#',      // Update with actual Facebook URL
        instagram: '#',     // Update with actual Instagram URL
        twitter: '#',       // Update with actual Twitter URL
        youtube: '#',       // Update with actual YouTube URL
        whatsapp: 'https://api.whatsapp.com/send?phone=7895348735'
    },

    // ===== Social Media Icons =====
    socialIcons: {
        facebook: 'social logos white/imgi_39_203dcdc2ac8b48de89313f90d2a4cda1.png',
        instagram: 'social logos white/imgi_40_81af6121f84c41a5b4391d7d37fce12a.png',
        twitter: 'social logos white/imgi_41_23fd2a2be53141ed810f4d3dcdcd01fa.png',
        youtube: 'social logos white/imgi_42_7528824071724d12a3e6c31eee0b40d4.png'
    },

    // ===== Image Paths =====
    imagePaths: {
        baseFolder: 'Tour Package Images - Solanki Tours',
        logo: 'Solanki Tours Logo Transparent.png'
    },

    // ===== Default Package Images =====
    default: {
        himalImage: 'Tour Package Images - Solanki Tours/Shimla Kullu Manali Tour.avif',
        beachImage: 'Tour Package Images - Solanki Tours/Andaman-Island.webp',
        internationalImage: 'Tour Package Images - Solanki Tours/Dubai Tour Package.jpg',
        herculesImage: 'Tour Package Images - Solanki Tours/Golden Triangle Tour.jpg',
        kashimirImage: 'Tour Package Images - Solanki Tours/paradise-kashmir.webp',
        northeastImage: 'Tour Package Images - Solanki Tours/darjeeling Gangtok Tour.jpg',
        uttarakhandImage: 'Tour Package Images - Solanki Tours/Uttarakhand Hill Station tour.jpg',
        charDhamImage: 'Tour Package Images - Solanki Tours/Char Dham Yatra by Helicopter.jpg',
        comboImage: 'Tour Package Images - Solanki Tours/Himachal with Golden Temple.webp'
    },

    // ===== Destination Cards Configuration =====
    destinations: [
        {
            id: 'himachal',
            title: 'Himachal Pradesh Tours',
            subtitle: 'Mountains & Adventure',
            image: 'Tour Package Images - Solanki Tours/Shimla Kullu Manali Tour.avif',
            countId: 'count-himachal'
        },
        {
            id: 'kashmir',
            title: 'Kashmir Tours',
            subtitle: 'Paradise on Earth',
            image: 'Tour Package Images - Solanki Tours/paradise-kashmir.webp',
            countId: 'count-kashmir'
        },
        {
            id: 'uttarakhand',
            title: 'Uttarakhand Tours',
            subtitle: 'Hill Stations & Nature',
            image: 'Tour Package Images - Solanki Tours/Uttarakhand Hill Station tour.jpg',
            countId: 'count-uttarakhand'
        },
        {
            id: 'chardham',
            title: 'Char Dham & Pilgrimage Tours',
            subtitle: 'Sacred Himalayan Shrines',
            image: 'Tour Package Images - Solanki Tours/Char Dham Yatra by Helicopter.jpg',
            countId: 'count-chardham'
        },
        {
            id: 'northeast',
            title: 'North East India Tours',
            subtitle: 'Tea Gardens & Mountains',
            image: 'Tour Package Images - Solanki Tours/darjeeling Gangtok Tour.jpg',
            countId: 'count-northeast'
        },
        {
            id: 'combo',
            title: 'Punjab & Himachal Combo Tours',
            subtitle: 'Golden Temple & Hills',
            image: 'Tour Package Images - Solanki Tours/Himachal with Golden Temple.webp',
            countId: 'count-combo'
        },
        {
            id: 'heritage',
            title: 'Heritage & Cultural Tours',
            subtitle: 'Royal Forts & Monuments',
            image: 'Tour Package Images - Solanki Tours/Golden Triangle Tour.jpg',
            countId: 'count-heritage'
        },
        {
            id: 'beach',
            title: 'Beach & Island Tours',
            subtitle: 'Beaches & Backwaters',
            image: 'Tour Package Images - Solanki Tours/Andaman-Island.webp',
            countId: 'count-beach'
        },
        {
            id: 'international',
            title: 'International Tours',
            subtitle: 'World Tours',
            image: 'Tour Package Images - Solanki Tours/Dubai Tour Package.jpg',
            countId: 'count-international'
        }
    ],

    // ===== Footer Quick Links =====
    footerLinks: {
        popularTours: [
            { title: 'Himachal Tours', url: 'packages.html?dest=himachal' },
            { title: 'Kerala Backwaters', url: 'packages.html?dest=beach' },
            { title: 'Kashmir Paradise', url: 'packages.html?dest=kashmir' },
            { title: 'Rajasthan Heritage', url: 'packages.html?dest=heritage' },
            { title: 'International Tours', url: 'packages.html?dest=international' }
        ]
    },

    // ===== Navigation Menu =====
    navigation: [
        { label: 'Home', url: 'index.html' },
        { label: 'Packages', url: 'packages.html' },
        { label: 'Destinations', url: '#destinations' },
        { label: 'About', url: '#about' },
        { label: 'Contact', url: '#contact' }
    ],

    // ===== SEO & Meta =====
    seo: {
        siteName: 'Solanki Tours',
        twitterHandle: '@solanki-tours',
        description: 'Solanki Tours - Discover your next adventure with curated travel experiences across India and the world.',
        author: 'Solanki Tours'
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = siteConfig;
}
