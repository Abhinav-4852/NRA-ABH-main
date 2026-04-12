// Convert CSV to JSON for JavaScript usage
// IMPORTANT: All itinerary day-by-day content must be double-checked against actual tour package details before display.
// Ensure the correct itinerary data is matched to the correct tour package ID.
// Do NOT display placeholder or mismatched itinerary data to users.
const tourPackages = [
    {
        id: 1,
        title: "Shimla Tour",
        duration: "03 NIGHTS/04 DAYS",
        destinations: "Delhi - Shimla - Delhi",
        price: "Contact Us",
        category: "domestic",
        region: "himachal",
        inclusions: [
            "Delhi to Shimla, Shimla to Delhi Travel",
            "Accomodation of 2 Night in the hotel",
            "Welcome drinks like coffee and tea on arrival",
            "Every day morning breakfast and dinner",
            "Full day shimla sightseeing by car",
            "Full day visit to Kufri by car",
            "Inclusive of all taxes"
        ],
        image: "Tour Package Images - Solanki Tours/Shimla Tour.avif"
    },
    {
        id: 2,
        title: "Kullu Manali Tour",
        duration: "05 NIGHTS/06 DAYS",
        destinations: "Delhi - Manali - Delhi",
        price: "Contact Us",
        category: "domestic",
        region: "himachal",
        inclusions: [
            "Delhi to Manali, Manali to Delhi Travel",
            "Accommodation for 3 Night in the hotel",
            "Welcome drink on arrival",
            "Every day morning Breakfast and Dinner in the hotel",
            "Local Manali half day sightseeing by Car",
            "Sightseeing of Rohtang Pass (Snow Point) by Car full day",
            "Kullu – Manikaran full day sightseeing by Car",
            "One candle light dinner",
            "All pick up and drops from & to hotel",
            "Inclusive of all taxes"
        ],
        image: "Tour Package Images - Solanki Tours/Kullu-Manali-Tour.webp"
    },
    {
        id: 3,
        title: "Shimla Kullu Manali Tour Package",
        duration: "6 NIGHT/7 DAYS",
        destinations: "Delhi - Shimla - Manali - Delhi",
        price: "Contact Us",
        category: "domestic",
        region: "himachal",
        inclusions: [
            "Delhi - Manali Travel",
            "Travel to Manali-Shimla",
            "Volvo tickets Shimla-Delhi",
            "Accommodation for night in shimla",
            "Manali Accommodation for 3 Nights",
            "Welcome drink on arrival",
            "Every day morning Breakfast and Dinner at hotel",
            "In Manali One candle light dinner",
            "Shimla, kufri Full day sightseeing by Car",
            "Local Manali sightseeing",
            "Rohtang/Snow point full day sightseeing by Sharing Car",
            "Sightseeing Kullu-manikaran by car",
            "Inclusion of all taxes"
        ],
        image: "Tour Package Images - Solanki Tours/Shimla Kullu Manali Tour.avif"
    },
    {
        id: 4,
        title: "Dharamshala Dalhousie Tour Package",
        duration: "05 NIGHTS/06 DAYS",
        destinations: "Delhi - Dharamshala - Dalhousie - Delhi",
        price: "Contact Us",
        category: "domestic",
        region: "himachal",
        inclusions: [
            "Delhi to Dharamshala, Dharamshala to Delhi Travel",
            "Accommodation for 2 night in Dharamshala",
            "Accommodation for 2 night in Dalhousie",
            "Welcome drink on arrival",
            "Every day morning breakfast and dinner in the hotel",
            "Pick up and drops",
            "Dharamshala Local sightseeing of by Car",
            "Local sightseeing of Mcleodgang by Car",
            "Local Dalhousie sightseeing by Car",
            "Full day sightseeing of Chamba - Khajjiar - Kalatop by Car",
            "Inclusive of all applicable taxes"
        ],
        image: "Tour Package Images - Solanki Tours/Dharamshala-Dalhousie-Tour-Package.webp"
    },
    {
        id: 5,
        title: "Kerala Backwaters Tour",
        duration: "04 NIGHTS/05 DAYS",
        destinations: "Cochin - Munnar - Thekkady - Alleppey - Cochin",
        price: "Contact Us",
        category: "domestic",
        region: "kerala",
        inclusions: [
            "2 Nights Accommodation in Munnar",
            "1 Night Accommodation in Thekkady",
            "1 Night Accommodation in Alleppey",
            "Welcome drink on arrival",
            "Daily Breakfast at Hotel",
            "Alleppey Houseboat all includes (Breakfast, Lunch & Dinner)",
            "Pick up and Drop ex Cochin",
            "All Transport and Sightseeing by Individual Car",
            "All Taxes Include"
        ],
        image: "Tour Package Images - Solanki Tours/Kerala Backwater Tour.jpg"
    },
    {
        id: 6,
        title: "Kashmir Paradise Tour",
        duration: "04 NIGHTS/05 DAYS",
        destinations: "Srinagar - Gulmarg - Pahalgam - Srinagar",
        price: "Contact Us",
        category: "domestic",
        region: "kashmir",
        inclusions: [
            "1 Night Accommodation in Srinagar Houseboat",
            "3 Night Accommodation in Srinagar Hotel",
            "Welcome drink on arrival",
            "Daily Morning Bed Tea, Breakfast & Dinner",
            "All Transfer & sightseeing by Individual Cab",
            "Pick up and Drop Srinagar",
            "Toll Taxes, Parking, Driver Allowance includes",
            "All Taxes Include"
        ],
        image: "Tour Package Images - Solanki Tours/paradise-kashmir.webp"
    },
    {
        id: 7,
        title: "Andaman Island Paradise",
        duration: "05 NIGHTS/06 DAYS",
        destinations: "Port Blair - Havelock",
        price: "Contact Us",
        category: "domestic",
        region: "andaman",
        inclusions: [
            "5 nights accommodation in quality hotels",
            "Daily breakfast",
            "Airport transfers",
            "Island hopping tours",
            "Water sports activities",
            "All taxes included"
        ],
        image: "Tour Package Images - Solanki Tours/Andaman-Island.webp"
    },
    {
        id: 8,
        title: "Golden Triangle Tour",
        duration: "04 NIGHTS/05 DAYS",
        destinations: "Delhi - Agra - Jaipur",
        price: "Contact Us",
        category: "domestic",
        region: "rajasthan",
        inclusions: [
            "1 Night Accommodation in Delhi",
            "1 Night Accommodation in Agra",
            "2 Nights Accommodation in Jaipur",
            "Welcome drink on arrival",
            "Daily Breakfast at Hotel",
            "Pick up and Drop at Delhi",
            "All transport and sightseeing by Individual Car",
            "All taxes are include"
        ],
        image: "Tour Package Images - Solanki Tours/Golden Triangle Tour.jpg"
    },
    {
        id: 9,
        title: "Darjeeling Gangtok Tour",
        duration: "04 NIGHTS/05 DAYS",
        destinations: "Darjeeling - Gangtok",
        price: "Contact Us",
        category: "domestic",
        region: "northeast",
        inclusions: [
            "2 Nights Accommodation in Darjeeling",
            "2 Nights Accommodation in Gangtok",
            "Welcome drink on arrival",
            "Daily Breakfast at Hotel",
            "Pick up and Drop at NJP Railway Station / IXB Airport",
            "All transport and sightseeing by Individual Car",
            "All taxes are include"
        ],
        image: "Tour Package Images - Solanki Tours/darjeeling Gangtok Tour.jpg"
    },
    {
        id: 10,
        title: "Uttarakhand Hill Station Tour",
        duration: "04 NIGHTS/05 DAYS",
        destinations: "Delhi - Nainital - Corbett - Delhi",
        price: "Contact Us",
        category: "domestic",
        region: "uttarakhand",
        inclusions: [
            "2 Nights Accommodation in Nainital",
            "2 Nights Accommodation in Corbett",
            "Welcome drink on arrival",
            "Daily Breakfast & Dinner at Hotel",
            "Pick up and Drop ex Delhi",
            "All Transport and Sightseeing by Individual Car",
            "All Taxes Include"
        ],
        image: "Tour Package Images - Solanki Tours/Uttarakhand Hill Station tour.jpg"
    },
    {
        id: 11,
        title: "Goa Beach Paradise",
        duration: "03 NIGHTS/04 DAYS",
        destinations: "Goa",
        price: "Contact Us",
        category: "domestic",
        region: "goa",
        inclusions: [
            "Welcome Drink on arrival in the hotel",
            "Wine bottle",
            "Morning Tea",
            "Meals as per Plan",
            "Two half days sightseeing, Boat Cruise on the day of South Goa Tour",
            "Complimentary Airport / Railway Station or Bus stop, pickup and drop",
            "Accommodation for 2 persons in A/C room",
            "Free use of swimming pool, gym and indoor games"
        ],
        image: "Tour Package Images - Solanki Tours/Goa Beach Paradise.jpg"
    },
    {
        id: 12,
        title: "Thailand Tour Package",
        duration: "04 NIGHTS/05 DAYS",
        destinations: "Pattaya - Bangkok",
        price: "Contact Us",
        category: "international",
        region: "thailand",
        inclusions: [
            "Economy Class return Airfare on Direct flight",
            "02 Nights accommodation at Pattaya",
            "02 Nights accommodation at Bangkok",
            "04 Breakfast & Early Check in Confirmed",
            "Airport Hotel return transfers Seat-In-Coach basis",
            "Coral island tour Seat-In-Coach basis (max 4 hours)",
            "Pattaya City tour on Seat-In-Coach basis (max 3 hours)",
            "All hotel taxes and service charges",
            "Airport taxes",
            "Service Taxes Included"
        ],
        image: "Tour Package Images - Solanki Tours/Thailand-pattaya.jpg"
    },
    {
        id: 13,
        title: "Singapore Tour Package",
        duration: "03 NIGHTS/04 DAYS",
        destinations: "Singapore",
        price: "Contact Us",
        category: "international",
        region: "singapore",
        inclusions: [
            "3 Nights accommodation at Hotel",
            "Daily Breakfast",
            "Singapore Half Day City Tour",
            "Airport Hotel Return Transfers",
            "All Hotel taxes and Service charges"
        ],
        image: "Tour Package Images - Solanki Tours/Singapore Tour Package.jpg"
    },
    {
        id: 14,
        title: "Dubai Tour Package",
        duration: "03 NIGHTS/04 DAYS",
        destinations: "Dubai",
        price: "Contact Us",
        category: "international",
        region: "dubai",
        inclusions: [
            "3 Nights accommodation at Hotel",
            "Daily Breakfast",
            "Dubai Half Day City Tour",
            "Desert Safari with Dinner (with Dune Bashing, Belly Dance and Bar beque Dinner)",
            "Dhow Cruise with Dinner",
            "Airport Hotel Return Transfers",
            "All Hotel taxes and Service charges"
        ],
        image: "Tour Package Images - Solanki Tours/Dubai Tour Package.jpg"
    },
    {
        id: 15,
        title: "Sri Lanka Tour Package",
        duration: "04 NIGHTS/05 DAYS",
        destinations: "Sri Lanka",
        price: "Contact Us",
        category: "international",
        region: "srilanka",
        inclusions: [
            "Transport in an A/C Micro van with the service of an English-speaking chauffeur Guide",
            "Sightseeing as mentioned",
            "Value added tax",
            "Meeting and Assistance at the airport"
        ],
        image: "Tour Package Images - Solanki Tours/Sri Lanka Tour Package.jpg"
    },

    // ── Himachal Packages (Source: rajtourtravel.in) ──────────────────────────
    {
        id: 16,
        title: "Manali Weekend Tour",
        duration: "04 NIGHTS/05 DAYS",
        destinations: "Delhi - Manali - Solong Valley - Delhi",
        price: "Contact Us",
        category: "domestic",
        region: "himachal",
        inclusions: [
            "2 AC Volvo Bus Tickets from Delhi to Manali",
            "2 AC Volvo Bus Tickets from Manali to Delhi",
            "Pick up & Drop from Volvo Bus stand to hotel",
            "04 Nights accommodation in Manali",
            "Daily Breakfast & Dinner",
            "Local Manali sightseeing",
            "Solong Valley excursion",
            "All applicable taxes"
        ],
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600"
    },
    {
        id: 17,
        title: "Manali Chandigarh Tour",
        duration: "06 NIGHTS/07 DAYS",
        destinations: "Delhi - Shimla - Manali - Chandigarh",
        price: "Contact Us",
        category: "domestic",
        region: "himachal",
        inclusions: [
            "2 Nights accommodation in Shimla",
            "3 Nights accommodation in Manali",
            "1 Night accommodation in Chandigarh",
            "Welcome drink on arrival",
            "Daily Breakfast & Dinner at hotel",
            "Shimla & Kufri sightseeing by car",
            "Local Manali sightseeing by car",
            "Rohtang Pass / Snow Point excursion",
            "All pick-ups, drops & toll taxes included"
        ],
        image: "Tour Package Images - Solanki Tours/Manali-Chandigarh.webp"
    },
    {
        id: 18,
        title: "Shimla Manali Package",
        duration: "05 NIGHTS/06 DAYS",
        destinations: "Shimla - Kufri - Kullu - Manali - Rohtang Pass",
        price: "Contact Us",
        category: "domestic",
        region: "himachal",
        inclusions: [
            "2 Nights accommodation in Shimla",
            "3 Nights accommodation in Manali",
            "Welcome drink on arrival",
            "Daily Breakfast & Dinner",
            "Shimla & Kufri full-day sightseeing by car",
            "Local Manali sightseeing by car",
            "Rohtang Pass full-day sightseeing by car",
            "Kullu–Manikaran sightseeing by car",
            "All taxes included"
        ],
        image: "Tour Package Images - Solanki Tours/Shimla Kullu Manali Tour.avif"
    },
    {
        id: 19,
        title: "Manali Honeymoon Tour Package",
        duration: "05 NIGHTS/06 DAYS",
        destinations: "Delhi - Manali - Kullu - Solong Valley - Delhi",
        price: "Contact Us",
        category: "domestic",
        region: "himachal",
        inclusions: [
            "Welcome Drink (Non Alcoholic) on arrival",
            "3 Morning Teas, 3 Breakfasts & 3 Dinners",
            "2 AC Volvo Bus Tickets Delhi to Manali & return",
            "Hotel pick-up and drop at Volvo Bus stand",
            "One candlelight dinner",
            "Kullu & Solong Valley sightseeing",
            "All applicable taxes"
        ],
        image: "Tour Package Images - Solanki Tours/Manali Shimla Honeymoon.webp"
    },
    {
        id: 20,
        title: "Manali Kasol Amritsar Tour",
        duration: "07 NIGHTS/08 DAYS",
        destinations: "Manali - Kasol - Manikaran - Dharamshala - Dalhousie - Amritsar",
        price: "Contact Us",
        category: "domestic",
        region: "himachal",
        inclusions: [
            "2 Nights accommodation in Manali",
            "1 Night accommodation in Kasol",
            "1 Night accommodation in Dharamshala",
            "1 Night accommodation in Dalhousie",
            "2 Nights accommodation in Amritsar",
            "Daily Breakfast & Dinner",
            "Manikaran Sahib visit",
            "Dharamshala & McLeod Ganj sightseeing",
            "Golden Temple visit, Wagah Border ceremony",
            "All transfers and taxes included"
        ],
        image: "Tour Package Images - Solanki Tours/Manali-Kasol-Amritsar.jpg"
    },
    {
        id: 21,
        title: "Manali Shimla Honeymoon Tour",
        duration: "06 NIGHTS/07 DAYS",
        destinations: "Delhi - Manali - Solong Valley - Kullu - Shimla - Kufri - Delhi",
        price: "Contact Us",
        category: "domestic",
        region: "himachal",
        inclusions: [
            "Delhi – Manali Volvo Bus 2 Tickets",
            "Manali – Shimla Deluxe Bus 2 Tickets",
            "Shimla – Delhi Volvo Bus 2 Tickets",
            "3 Nights accommodation in Manali",
            "2 Nights accommodation in Shimla",
            "Welcome drink & one candlelight dinner",
            "Daily Breakfast & Dinner",
            "Solong Valley, Kullu, Kufri, Shimla sightseeing",
            "All taxes included"
        ],
        image: "Tour Package Images - Solanki Tours/Manali HoneyMoon.webp"
    },
    {
        id: 22,
        title: "Delhi Shimla Tour Package",
        duration: "03 NIGHTS/04 DAYS",
        destinations: "Delhi - Shimla - Kufri - Delhi",
        price: "Contact Us",
        category: "domestic",
        region: "himachal",
        inclusions: [
            "2 Nights accommodation in Shimla (3-star hotel)",
            "Welcome drink on arrival",
            "Delhi – Shimla & Shimla – Delhi Bus Tickets",
            "Daily Breakfast & Dinner",
            "Full-day Shimla sightseeing by car",
            "Kufri excursion by car",
            "All applicable taxes"
        ],
        image: "Tour Package Images - Solanki Tours/Delhi Shimla Tour Package.webp"
    },
    {
        id: 23,
        title: "Grand Himachal Tour",
        duration: "08 NIGHTS/09 DAYS",
        destinations: "Shimla - Manali - Dharamshala - Dalhousie",
        price: "Contact Us",
        category: "domestic",
        region: "himachal",
        inclusions: [
            "2 Nights accommodation in Shimla",
            "3 Nights accommodation in Manali",
            "2 Nights accommodation in Dharamshala",
            "1 Night accommodation in Dalhousie",
            "Welcome drink on arrival",
            "Daily Breakfast & Dinner",
            "Shimla, Kufri, Manali, Rohtang, Dharamshala, McLeod Ganj, Dalhousie sightseeing",
            "All intercity transfers by AC vehicle",
            "All taxes included"
        ],
        image: "Tour Package Images - Solanki Tours/Grand Himachal.webp"
    },
    {
        id: 24,
        title: "Delhi Manali Tour",
        duration: "03 NIGHTS/04 DAYS",
        destinations: "Delhi - Manali - Delhi",
        price: "Contact Us",
        category: "domestic",
        region: "himachal",
        inclusions: [
            "3 Nights accommodation in Manali",
            "Welcome drink on arrival",
            "Daily Breakfast & Dinner",
            "Delhi – Manali – Delhi travel by AC car",
            "Local Manali sightseeing",
            "Solang Valley excursion",
            "All toll taxes & driver allowance included"
        ],
        image: "Tour Package Images - Solanki Tours/Delhi Manali Tour.webp"
    },
    {
        id: 25,
        title: "Himachal with Golden Temple Tour",
        duration: "09 NIGHTS/10 DAYS",
        destinations: "Shimla - Manali - Dharamshala - Dalhousie - Amritsar",
        price: "Contact Us",
        category: "domestic",
        region: "himachal",
        inclusions: [
            "2 Nights accommodation in Shimla",
            "3 Nights accommodation in Manali",
            "1 Night accommodation in Dharamshala",
            "1 Night accommodation in Dalhousie",
            "2 Nights accommodation in Amritsar",
            "Welcome drink on arrival",
            "Daily Breakfast & Dinner",
            "Complete Himachal sightseeing",
            "Golden Temple & Wagah Border visit",
            "All intercity transfers by AC vehicle, taxes included"
        ],
        image: "Tour Package Images - Solanki Tours/Himachal with Golden Temple.webp"
    },

    // ── Char Dham Packages (Source: triptotemples.com) ────────────────────────
    {
        id: 26,
        title: "Char Dham Yatra by Helicopter (Ex Dehradun)",
        duration: "05 NIGHTS/06 DAYS",
        destinations: "Dehradun - Yamunotri - Gangotri - Kedarnath - Badrinath - Dehradun",
        price: "Contact Us",
        category: "domestic",
        region: "chardham",
        inclusions: [
            "Helicopter transfers covering all 4 Dhams",
            "5 Nights accommodation on double/triple sharing basis",
            "Breakfast, Lunch & Dinner (pure vegetarian)",
            "1 Bottle of mineral water during travel",
            "VIP Darshan at all four shrines",
            "Palki at Yamunotri & Kedarnath shuttle service",
            "Driver allowances, toll taxes & permits",
            "All applicable taxes"
        ],
        image: "Tour Package Images - Solanki Tours/Char Dham Yatra by Helicopter.jpg"
    },
    {
        id: 27,
        title: "Do Dham Yatra by Helicopter (Ex Dehradun)",
        duration: "03 NIGHTS/04 DAYS",
        destinations: "Dehradun - Kedarnath - Badrinath - Dehradun",
        price: "Contact Us",
        category: "domestic",
        region: "chardham",
        inclusions: [
            "Helicopter transfers to Kedarnath & Badrinath",
            "3 Nights accommodation on double sharing basis",
            "Breakfast, Lunch & Dinner (pure vegetarian)",
            "Local sightseeing at both Dhams",
            "VIP Darshan arrangements",
            "All toll taxes & permits included",
            "All applicable taxes"
        ],
        image: "Tour Package Images - Solanki Tours/Do Dham Yatra by Helicopter.webp"
    },
    {
        id: 28,
        title: "Char Dham Yatra by Road (Ex Delhi)",
        duration: "11 NIGHTS/12 DAYS",
        destinations: "Delhi - Haridwar - Yamunotri - Gangotri - Kedarnath - Badrinath - Delhi",
        price: "Contact Us",
        category: "domestic",
        region: "chardham",
        inclusions: [
            "All transfers & sightseeing by bus/tempo traveller",
            "11 Nights accommodation on double/triple sharing basis",
            "All meals – Breakfast, Lunch & Dinner (pure vegetarian)",
            "1 Bottle of mineral water during travel",
            "Palki/Doli at Yamunotri",
            "Kedarnath helicopter option (at extra cost)",
            "Driver allowances, toll taxes, interstate taxes & parking",
            "All applicable taxes"
        ],
        image: "Tour Package Images - Solanki Tours/Char Dham Yatra by Road (Ex Haridwar).jpg"
    },
    {
        id: 29,
        title: "Do Dham Yatra by Road (Ex Haridwar)",
        duration: "09 NIGHTS/10 DAYS",
        destinations: "Haridwar - Yamunotri - Gangotri - Kedarnath - Badrinath - Haridwar",
        price: "Contact Us",
        category: "domestic",
        region: "chardham",
        inclusions: [
            "All transfers & sightseeing by bus/tempo traveller",
            "9 Nights accommodation on double/triple sharing basis",
            "All meals – Breakfast, Lunch & Dinner (pure vegetarian)",
            "1 Bottle of mineral water during travel",
            "Stay & meals (Guptkashi, Sitapur, Barkot, Uttarkashi, Badrinath)",
            "Driver allowances, toll & interstate taxes included",
            "All applicable taxes"
        ],
        image: "Tour Package Images - Solanki Tours/Do Dham Yatra by Road (Ex Haridwar).jpg"
    },
    {
        id: 30,
        title: "Badrinath Kedarnath Dham Package",
        duration: "05 NIGHTS/06 DAYS",
        destinations: "Haridwar - Kedarnath - Badrinath - Haridwar",
        price: "Contact Us",
        category: "domestic",
        region: "chardham",
        inclusions: [
            "5 Nights accommodation on double sharing basis",
            "All meals – Dinner, Breakfast & Lunch (pure vegetarian)",
            "All transfers by AC vehicle",
            "Kedarnath helicopter tickets (subject to availability)",
            "Badrinath darshan & local sightseeing",
            "Mana Village excursion",
            "All toll taxes & driver allowance included"
        ],
        image: "Tour Package Images - Solanki Tours/Badrinath-Kedarnath-Yatra.jpg"
    },

    // ── Mussoorie Package (Source: packthebagtours.com) ───────────────────────
    {
        id: 31,
        title: "Mussoorie Dhanaulti Tour Package",
        duration: "03 NIGHTS/04 DAYS",
        destinations: "Delhi - Mussoorie - Dhanaulti - Delhi",
        price: "Contact Us",
        category: "domestic",
        region: "uttarakhand",
        inclusions: [
            "Accommodation in Deluxe 3-Star Hotels",
            "All sightseeing & transfers by AC personal car",
            "Daily Breakfast & Dinner at hotel",
            "Tea/Coffee maker in rooms",
            "Kempty Falls, Gun Hill, Lal Tibba, Camel's Back Road sightseeing",
            "Dhanaulti: Eco Park, Surkanda Devi Temple, Adventure Park",
            "Driver T.A./D.A., toll taxes & parking included",
            "All state & GST taxes included"
        ],
        image: "Tour Package Images - Solanki Tours/Mussoorie Dhanaulti.jpg"
    },

    // ── Uttarakhand Packages (Source: justwravel.com) ─────────────────────────
    {
        id: 32,
        title: "Jim Corbett Jungle Safari",
        duration: "02 NIGHTS/03 DAYS",
        destinations: "Delhi - Jim Corbett - Delhi",
        price: "Contact Us",
        category: "domestic",
        region: "uttarakhand",
        inclusions: [
            "2 Nights accommodation at a jungle resort in Jim Corbett",
            "Daily Breakfast & Dinner",
            "Jeep Safari in Corbett Tiger Reserve (Dhikala / Bijrani zone)",
            "Elephant Safari (subject to availability)",
            "Nature walk & bird watching",
            "All transfers by AC vehicle from Delhi",
            "All forest entry & safari permit fees",
            "All applicable taxes"
        ],
        image: "Tour Package Images - Solanki Tours/jim-corbett.jpg"
    },
    {
        id: 33,
        title: "Haridwar Rishikesh Tour Package",
        duration: "03 NIGHTS/04 DAYS",
        destinations: "Delhi - Haridwar - Rishikesh - Delhi",
        price: "Contact Us",
        category: "domestic",
        region: "uttarakhand",
        inclusions: [
            "1 Night accommodation in Haridwar",
            "2 Nights accommodation in Rishikesh",
            "Welcome drink on arrival",
            "Daily Breakfast & Dinner",
            "Ganga Aarti at Har Ki Pauri, Haridwar",
            "Rishikesh sightseeing – Laxman Jhula, Ram Jhula, Triveni Ghat",
            "White water rafting (optional, at extra cost)",
            "All transfers by AC vehicle from Delhi",
            "All toll taxes & driver allowance included"
        ],
        image: "Tour Package Images - Solanki Tours/Haridwar Rishikesh.jpg"
    }
];

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = tourPackages;
}

// ─── JSON Package Loading ─────────────────────────────────────────────────────
// Fetches india-tour-packages.json and international-tour-packages.json,
// transforms each entry into the standard tourPackages format, and merges them
// in (skipping duplicates by title+duration). A "tourPackagesLoaded" event is
// dispatched on document when done — even on error — so the page always renders.

/** Default placeholder images keyed by region. */
const _REGION_IMAGES = {
    andaman:     'Tour Package Images - Solanki Tours/Andaman-Island.webp',
    himachal:    'Tour Package Images - Solanki Tours/Shimla Tour.avif',
    kerala:      'Tour Package Images - Solanki Tours/Kerala Backwater Tour.jpg',
    goa:         'Tour Package Images - Solanki Tours/Goa Beach Paradise.jpg',
    kashmir:     'Tour Package Images - Solanki Tours/paradise-kashmir.webp',
    northeast:   'Tour Package Images - Solanki Tours/darjeeling Gangtok Tour.jpg',
    rajasthan:   'Tour Package Images - Solanki Tours/Golden Triangle Tour.jpg',
    uttarakhand: 'Tour Package Images - Solanki Tours/Uttarakhand Hill Station tour.jpg',
    chardham:    'Tour Package Images - Solanki Tours/Char Dham Yatra by Helicopter.jpg',
    dubai:       'Tour Package Images - Solanki Tours/Dubai Tour Package.jpg',
    thailand:    'Tour Package Images - Solanki Tours/Thailand-pattaya.jpg',
    srilanka:    'Tour Package Images - Solanki Tours/Sri Lanka Tour Package.jpg',
    singapore:   'Tour Package Images - Solanki Tours/Singapore Tour Package.jpg',
    hongkong:    'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=600',
    switzerland: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=600',
    paris:       'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600',
    sydney:      'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600'
};

/** True once the async JSON load + merge has finished (success or error). */
let _tourDataLoaded = false;

/** Map a source_url to the region slug used in tourPackages. */
function _inferRegion(sourceUrl) {
    if (!sourceUrl) return 'india';
    if (sourceUrl.includes('himachal'))                                    return 'himachal';
    if (sourceUrl.includes('andaman'))                                     return 'andaman';
    if (sourceUrl.includes('kerala'))                                      return 'kerala';
    if (sourceUrl.includes('goa'))                                         return 'goa';
    if (sourceUrl.includes('kashmir'))                                     return 'kashmir';
    if (sourceUrl.includes('north-east'))                                  return 'northeast';
    if (sourceUrl.includes('rajasthan'))                                   return 'rajasthan';
    if (sourceUrl.includes('uttarakhand'))                                 return 'uttarakhand';
    if (sourceUrl.includes('thailand'))                                    return 'thailand';
    if (sourceUrl.includes('srilanka') || sourceUrl.includes('sri-lanka')) return 'srilanka';
    if (sourceUrl.includes('singapore'))                                   return 'singapore';
    if (sourceUrl.includes('switzerland'))                                 return 'switzerland';
    if (sourceUrl.includes('dubai'))                                       return 'dubai';
    if (sourceUrl.includes('paris'))                                       return 'paris';
    if (sourceUrl.includes('hongkong') || sourceUrl.includes('hong-kong')) return 'hongkong';
    if (sourceUrl.includes('sydney'))                                      return 'sydney';
    return 'india';
}

/** Convert "ANDAMAN TOUR PACKAGE" → "Andaman Tour Package". */
function _toTitleCase(str) {
    return (str || '').toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
}

/** Normalise "04 Nights / 05 Days" → "04 NIGHTS/05 DAYS". */
function _normaliseDuration(raw) {
    return (raw || '')
        .replace(/\s*\/\s*/g, '/')
        .replace(/nights?/gi, 'NIGHTS')
        .replace(/days?/gi,   'DAYS')
        .replace(/\s+/g, ' ')
        .trim();
}

/** Transform a raw JSON package object into the standard tourPackages shape. */
function _transformPackage(jsonPkg, id) {
    const region   = _inferRegion(jsonPkg.source_url);
    const title    = _toTitleCase(jsonPkg.package_name);
    const duration = _normaliseDuration(jsonPkg.duration);

    // Strip leading dashes/spaces: "- Port Blair - Havelock" → "Port Blair - Havelock"
    const destinations = (jsonPkg.destination_covered || '')
        .replace(/^[\s\-]+/, '')
        .trim();

    // Drop bare "-" separators and empty entries
    const rawInclusions = (jsonPkg.package_inclusions || [])
        .filter(inc => inc && inc.trim() && inc.trim() !== '-');
    const inclusions = rawInclusions.length > 0
        ? rawInclusions
        : ['Tour inclusions available on inquiry — please contact us for full package details.'];

    const price = (jsonPkg.starting_price && String(jsonPkg.starting_price).trim())
        ? String(jsonPkg.starting_price)
        : 'Contact Us';

    // Normalise itinerary to [{day, description}] regardless of source format.
    // India JSON:         [{day: "Day 1 - ...", description: "..."}]
    // International JSON: ["Day 1 - Dubai", ...]
    const itinerary = (Array.isArray(jsonPkg.itinerary_days) ? jsonPkg.itinerary_days : [])
        .map(entry =>
            typeof entry === 'object' && entry !== null
                ? { day: entry.day || '', description: entry.description || '' }
                : { day: String(entry), description: '' }
        );

    return {
        id,
        title,
        duration,
        destinations,
        price,
        category:  jsonPkg.region === 'international' ? 'international' : 'domestic',
        region,
        inclusions,
        itinerary,
        image:     _REGION_IMAGES[region] || 'Tour Package Images - Solanki Tours/Shimla Tour.avif'
    };
}

/** Fetch both JSON files, transform and merge into tourPackages, then signal readiness. */
(async function _loadJsonPackages() {
    try {
        const [indiaRes, intlRes] = await Promise.all([
            fetch('india-tour-packages.json'),
            fetch('international-tour-packages.json')
        ]);

        if (!indiaRes.ok || !intlRes.ok) throw new Error('JSON fetch returned non-OK status');

        const [indiaData, intlData] = await Promise.all([indiaRes.json(), intlRes.json()]);

        const jsonPackages = [
            ...(indiaData.packages || []),
            ...(intlData.packages  || [])
        ];

        let nextId = Math.max(...tourPackages.map(p => p.id)) + 1;

        // Dedup by normalised "title|duration" to avoid near-identical entries
        const existingKeys = new Set(
            tourPackages.map(p => `${p.title.toLowerCase()}|${p.duration.toLowerCase()}`)
        );

        for (const raw of jsonPackages) {
            const pkg = _transformPackage(raw, nextId);
            const key = `${pkg.title.toLowerCase()}|${pkg.duration.toLowerCase()}`;
            if (!existingKeys.has(key)) {
                tourPackages.push(pkg);
                existingKeys.add(key);
                nextId++;
            }
        }
    } catch (err) {
        console.warn('[Solanki Tours] Could not load JSON package files:', err);
    } finally {
        _tourDataLoaded = true;
        document.dispatchEvent(new CustomEvent('tourPackagesLoaded'));
    }
}());

/**
 * Run callback once both the DOM and JSON package data are ready.
 * Safe to call at any point — handles all timing combinations.
 */
function onTourDataReady(callback) {
    if (_tourDataLoaded && document.readyState !== 'loading') {
        callback();
        return;
    }
    let domOk  = document.readyState !== 'loading';
    let dataOk = _tourDataLoaded;
    function tryRun() { if (domOk && dataOk) callback(); }
    if (!domOk)  document.addEventListener('DOMContentLoaded',   () => { domOk  = true; tryRun(); }, { once: true });
    if (!dataOk) document.addEventListener('tourPackagesLoaded', () => { dataOk = true; tryRun(); }, { once: true });
}
