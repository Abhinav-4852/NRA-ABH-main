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

tourPackages.push({
    id:           34,
    title:        "Shimla Volvo Tour Package",
    duration:     "03 NIGHTS/04 DAYS",
    destinations: "Delhi - Shimla - Delhi",
    price:        "Contact Us",
    category:     "domestic",
    region:       "himachal",
    inclusions:   [
            "Delhi to Shimla, Shimla to Delhi Volvo Bus tickets.",
            "Accomodation of 2 Night in the hotel",
            "Welcome drinks like coffee and tea on arrival",
            "Every day morning breakfast and dinner",
            "Full day shimla sightseeing by car",
            "Full day visit to Kufri by car",
            "Inclusive of all taxes"
        ],
    itinerary:    [
            { day: "Day 1 - Delhi - Shimla (350 Kms.)", description: "First day upon your arrival at Delhi Volvo bus stand catch the volvo bus from Delhi to Shimla. Overnight will be in the Volvo bus." },
            { day: "Day 2 - Local Shimla", description: "Second day on your arrival in shimla, check into the hotel in shimla. After some rest proceed for the local sightseeing such as Vaishno Devi Temple, Sankat Mochan Temple,Advance study, State Museum. In the evening visit nearby places like Lakkar bazaar and mall road. Stay and dinner will be in the hotel." },
            { day: "Day 3 - Shimla (Kufri)", description: "In the morning after breakfast continue with the full day sightseeing of Kufri, Indira Gandhi Tourist Park, Fun World, Chini Banglow, Faggu Valley view, Green Valley, Mini Zoo, Wild Flower Hall. Stay in the hotel with dinner." },
            { day: "Day 4 - Shimla - Delhi (350 Kms.)", description: "In the morning after your breakfast,check out from the hotel and board the Volvo bus from Shimla Volvo bus stand to Delhi." }
        ],
    image:        "Tour Package Images - Solanki Tours/Shimla Tour.avif"
});
tourPackages.push({
    id:           35,
    title:        "Kullu Manali Volvo Tour Package",
    duration:     "05 NIGHTS/06 DAYS",
    destinations: "Delhi - Manali - Delhi",
    price:        "Contact Us",
    category:     "domestic",
    region:       "himachal",
    inclusions:   [
            "Delhi to Manali, Manali to Delhi Volvo Bus tickets",
            "Accommodation for 3 Night in the hotel.",
            "Welcome drink on arrival",
            "Every day morning Breakfast and Dinner in the hotel",
            "Local Manali half day sightseeing by Car",
            "sightseeing of Rohtang Pass (Snow Point) by Car full day",
            "Kullu â Manikaran full day sightseeing by Car",
            "One candle light dinner",
            "All pick up and drops from Volvo stand to hotel",
            "Inclusive of all taxes"
        ],
    itinerary:    [
            { day: "Day 1 - Delhi - Manali (570 Kms.)", description: "First day upon your arrival at Delhi Volvo bus stand catch the volvo bus from Delhi to Shimla. Overnight will be in the Volvo bus." },
            { day: "Day 2 - Arrive Manali (Local Manali Sightseeing)", description: "In the morning arrive manali, check in to the hotel In manali. After rest continue with the local sightseeing of manali such as Manu Temple,some Monasteries, Vashist Village, Club House and like Hadimba Devi Temple. Overnight stay and dinner in the hotel." },
            { day: "Day 3 - Manali (Rohtang Pass ( Snow Point)", description: "After breakfast in the morning continue with the full day sightseeing of places like Gulaba, Marhi, Gulaba, Marhi. Have dinner and stay in the hotel." },
            { day: "Day 4 - Manali (Kullu - Manikaran)", description: "On the fourth day after breakfast proceed for the sightseeing of full day such as, Kasol Valley, Rabbit Farm, Kullu Valley, Shawls Factory and Manikaran. Stay and Dinner is in the hotel." },
            { day: "Day 5 - Manali - Delhi (570 Kms.)", description: "In the morning after having breakfast check out from the manali hotel and proceed for the return journey to Delhi by volvo. Overnight journey in the Volvo bus." },
            { day: "Day 6 - Manali - Delhi (570 Kms.)", description: "Arrive Delhi bus stand then proceed for your onward journey from here." }
        ],
    image:        "Tour Package Images - Solanki Tours/Shimla Tour.avif"
});
tourPackages.push({
    id:           36,
    title:        "Shimla Kullu Manali Volvo Tour Package",
    duration:     "06 NIGHTS/07 DAYS",
    destinations: "Delhi - Shimla - Kullu - Manali - Delhi",
    price:        "Contact Us",
    category:     "domestic",
    region:       "himachal",
    inclusions:   [
            "Delhi - Manali Volvo tickets",
            "Deluxe bus tickets from Manali-Shimla",
            "Volvo tickets Shimla-Delhi",
            "Accommodation for night in shimla",
            "Manali Accommodation for 3 Nights",
            "Welcome drink on arrival",
            "Every day morning Breakfast and Dinner at hotel",
            "In Manali One candle light dinner",
            "shimla, kufri Full day sightseeing by Car",
            "local Manali sightseeing",
            "Rohtang/ Snow point full day sightseeing by Sharing Car",
            "Sightseeing Kullu-manikaran by car",
            "Inclusion of all taxes"
        ],
    itinerary:    [
            { day: "Day 1 - Delhi - Manali (570 Kms.)", description: "Arrive Delhi bus stand and catch the Volvo bus from Delhi for manali. Overnight in the Volvo bus." },
            { day: "Day 2 - Manali (Local Sightseeing)", description: "In the morning arrive manali and check in to the hotel. After some rest driver will take you to visit local sightseeing places of manali like Vashishth Village , Club house, Hadimba Devi Temple, Manu Temple and and monasteries. Night stay and dinner in the hotel." },
            { day: "Day 3 - Manali (Rohtang Pass)", description: "On third day after breakfast our driver will take you to the full day sightseeing of Gulaba, Marhi, Kothi Gorge, and Rohtang Pass.come back to hotel for overnight stay and dinner." },
            { day: "Day 4 - Manali (Kullu - Manikaran)", description: "In the morning after breakfast driver will take you to the sightseeing of kullu and manikaran. Return back to the hotel for dinner and overnight stay." },
            { day: "Day 5 - Manali - Shimla ( 250 Kms.)", description: "After having breakfast check out from the manali and by Volvo bus reach shimla. Upon arrival in shimla by evening and check in to the Shimla hotel. In the evening explore Lakker Bazar, Mall Road, Ridge, and Church. Stay in shimla hotel with dinner." },
            { day: "Day 6 - Shimla", description: "After breakfast in the hotel, visit the sightseeing places, Kufri, Indira Gandhi tourist park, Faggu Valley view, Fun World, Mini Zoo, Wild Flower Hall,Chini Banglow and Green Valley. Stay and dinner in the hotel." },
            { day: "Day 7 - Shimla - Delhi ( 350 Kms.)", description: "In the morning have your breakfast checkout from the hotel and catch the bus from shimla toward Delhi." }
        ],
    image:        "Tour Package Images - Solanki Tours/Shimla Tour.avif"
});
tourPackages.push({
    id:           37,
    title:        "Dharamshala Dalhousie Volvo Tour Package",
    duration:     "05 NIGHTS/06 DAYS",
    destinations: "Delhi - Dharamshala - Dalhousie - Delhi",
    price:        "Contact Us",
    category:     "domestic",
    region:       "himachal",
    inclusions:   [
            "Delhi to Dharamshala, Dharamshala to Delhi Volvo tickets",
            "Accommodation for 2 night in Dharamshala",
            "Accommodation for 2 night in Dalhousie",
            "Welcome drink on arrival",
            "Every day morning breakfast and dinner in the hotel",
            "Pick up and drops",
            "Dharamshala Local sightseeing of by Car",
            "Local sightseeing of Mcleodgang by Car",
            "Local Dalhousie sightseeing by Car",
            "Full day sightseeing of Chamba - Khajjiar - Kalatop by Car",
            "Inclusive of all applicable taxes."
        ],
    itinerary:    [
            { day: "Day 1 - Delhi - Dharamshala (530 Kms.)", description: "Arrive Delhi volvo bus stand and catch the bus for Dharamshala . Overnight in the volvo bus." },
            { day: "Day 2 - Dharamshala Arrival (Local Dharamshala)", description: "On the second day you will arrive dharamshala in the morning. Check in to the hotel and after some time visit local sightseeing of dharamshala such as Tea Garden, Cricket Stadium,, and Local market etc. Overnight stay and dinner in the hotel." },
            { day: "Day 3 - Dharamshala (Local Mcleodganj)", description: "After breakfast, proceed for the full day local McLeod Ganj sightseeing such as , Sun Set Point, Church, Swiming Pool, Kangra art museum, Water Fall, , Dal Lake, Naddi, Dalai Lama Temple, Bhgshunag TempleWar Memorial etc. Stay in the hotel with dinner." },
            { day: "Day 4 - Dharamshala - Dalhousie (Local Dalhousie)", description: "On the fourth day, after breakfast in the morning, proceed for Dalhousie. Upon arrival Check in to the Dalhousie hotel. After some break visit the local sightseeing of Dalhousie such as Panj Pulla, Churches, Satdhara, like Subhash baoli, and Bara Pather. Night stay and dinner in the hotel." },
            { day: "Day 5 - Dalhousie (Chamba - Khajjiar - Kalatop)", description: "After breakfast continue with the full day sightseeing of places like chamba, khajjiar and kalatop. Stay and dinner in the hotel of Dalhousie." },
            { day: "Day 6 - Dalhousie - Dharamshala - Delhi (530 Kms.)", description: "Last day after morning breakfast. Check out from hotel and driver will take you to the dharamshala,. Catch Volvo bus to Delhi from Dharamshala. Overnight in the Volvo bus." }
        ],
    image:        "Tour Package Images - Solanki Tours/Shimla Tour.avif"
});
tourPackages.push({
    id:           38,
    title:        "Shimla Kullu Manali Car Tour Package",
    duration:     "05 NIGHTS/06 DAYS",
    destinations: "Delhi - Shimla - Kullu - Manali - Delhi",
    price:        "Contact Us",
    category:     "domestic",
    region:       "himachal",
    inclusions:   [
            "2 Nights Accommodation in Shimla for 2 Nights",
            "3 Nights Accommodation in Manali for 3 Nights",
            "On arriving Welcome drink",
            "Every day Morning Bed Tea, Breakfast & Dinner",
            "One Candle light dinner in Manali",
            "One basket of Fresh fruits in Manali",
            "Pick up & drop ex Delhi",
            "All transfers & sightseeing's will be by Individual Car",
            "Including of toll taxes, parking charges, driver charges, fuel cost inclusive",
            "All taxes are included"
        ],
    itinerary:    [
            { day: "Day 1 - Delhi - Shimla (340 Kms) 7 Hrs.", description: "When Arrive at Delhi, our representative will meet you and shift you to Shimla. Check in the hotel in evening and then free to visit at Mall road and Lakker bazar. Dinner and overnight stay at Hotel in shimla." },
            { day: "Day 2 - Shimla (Local Shimla)", description: "After having morning breakfast then you can proceed to full day sightseeing of Jakhoo Hills, Green Valley, White Flower hall, Kufri, Indira Tourist Park & Mini zoo in Shimla. Evening time will be free to visit Mall Road for Shopping. Dinner and Overnight stay at Hotel.in shimla" },
            { day: "Day 3 - Shimla - Manali (260 Kms) 7 Hrs (Kullu – Manikaran)", description: "After having your morning breakfast then transferred to Manali. Check in hotel at evening in manali. In between shimla-manali journey there will be visit kullu - Manikaran sightseeing.Dinner and Overnight stay at hotel in manali." },
            { day: "Day 4 - Manali (Local Manali)", description: "After having morning breakfast move forward ,visit to full day local Manali sightseeing like Hadimba Devi Temple, Manu Temple, Tibetan Monastery and Vashisht Village. Evening time free to roam around the places like Mall Road .Back to Hotel. Dinner & Overnight stay at hotel ion manali" },
            { day: "Day 5 - Manali (Rohtang Pass)", description: "After having morning breakfast move forward to full day Kothi, George , Gulaba , Marhi ,Rohtang Pass ( Snow point ).back to hotel. Dinner & Overnight stay at Hotel in manali." },
            { day: "Day 6 - Manali - Delhi ( 570 Kms ) 13 Hrs.", description: "After having morning breakfast then you check out from hotel and move towards Delhi. Drop at Delhi airport, railway station, proceed for your onward journey." }
        ],
    image:        "Tour Package Images - Solanki Tours/Shimla Tour.avif"
});
tourPackages.push({
    id:           39,
    title:        "Shimla Kullu Manali Chandigarh Car Tour",
    duration:     "06 NIGHTS/07 DAYS",
    destinations: "Delhi - Shimla - Kullu - Manali - Chandigarh - Delhi",
    price:        "Contact Us",
    category:     "domestic",
    region:       "himachal",
    inclusions:   [
            "Accommodation in Shimla for 2 Nights",
            "Accommodation in Manali for 3 Nights",
            "Accommodation in Chandigarh for 1 night",
            "On arriving Welcome drink",
            "Every day Morning Bed Tea, Breakfast & Dinner",
            "One Candle light dinner in Manali",
            "One basket of Fresh Fruits in Manali",
            "Pick up & drop ex Delhi",
            "All transfers & sightseeing's will be by Individual Car",
            "Inclusive of toll taxes, fuel cost, parking and driver charges",
            "All taxes are included"
        ],
    itinerary:    [
            { day: "Day 1 - Delhi - Shimla (340 Kms) 7 Hrs.", description: "When you will arrive at Delhi, our representative will meet you and will shift you to Shimla. Check in the hotel by evening and visit at mall road and Lakker bazar and many more in the evening. Dinner and overnight stay at Hotel in the shimla." },
            { day: "Day 2 - Shimla (Local Shimla)", description: "After having morning breakfast go for a full day sightseeing of Green Valley, Jakhoo Hills, White Flower hall, Kufri, Indira Tourist Park & Mini zoo. Come back to Hotel in the evening. Visit to Mall Road for Shopping. Dinner and Overnight stay at Hotel in shimla." },
            { day: "Day 3 - Shimla - Manali (260 Kms ) 7 Hrs ( Kullu – Manikaran)", description: "After having morning breakfast transfer to Manali. By Evening check in hotel. In between your transfer there will be visit to kullu - Manikaran sightseeing. Dinner and Overnight stay at hotel in manali." },
            { day: "Day 4 - Manali (Local Manali)", description: "After having morning breakfast go for a full day visit to local Manali sightseeing Manu Temple, Hadimba Devi Temple, Tibetan Monastery and Vashisht Village. Evening time will be free to roam around the places like Mall Road. Come Back to Hotel. Dinner and Overnight stay at hotel in manali." },
            { day: "Day 5 - Manali (Rohtang Pass)", description: "After having morning breakfast go for full day visit to places like Kothi, George, Gulaba, Marhi, Rohtang Pass (Snow point). Dinner and Overnight stay at Hotel in manali." },
            { day: "Day 6 - Manali - Chandigarh (330 Kms ) 8 Hrs", description: "After having morning breakfast transfer to Chandigarh. Check in hotel by the evening and after taking having some rest go for a visit to local Chandigarh sightseeing like Rock Garden, Rose Garden, Shukhna Lake .Dinner and Overnight stay at hotel in Chandigarh." },
            { day: "Day 7 - Chandigarh - Delhi ( 240 Kms ) 4 Hrs.", description: "After having morning breakfast then check out the hotel and move towards Delhi. Drop at Delhi airport, railway station. Proceed for your onward journey." }
        ],
    image:        "Tour Package Images - Solanki Tours/Shimla Tour.avif"
});
tourPackages.push({
    id:           40,
    title:        "Unlimited Himahcal Legend Car Tour Package",
    duration:     "08 NIGHTS/09 DAYS",
    destinations: "Delhi â Shimla - Kullu - Manali - Dharamshala - Dalhousie - Delhi",
    price:        "Contact Us",
    category:     "domestic",
    region:       "himachal",
    inclusions:   [
            "Accommodation in Shimla for 2 Nights",
            "Accommodation in Manali for 3 Nights",
            "Accommodation in Dharamshala for 1 Night",
            "Accommodation in Dalhousie for 2 nights",
            "On arriving Welcome drink",
            "Every day Morning Bed Tea, Breakfast & Dinner",
            "One Candle Light Dinner in Manali",
            "One basket of Fresh Fruits in Manali",
            "All Transfers & sightseeing's will be by Individual Car",
            "Pick up and Drop ex Delhi",
            "Including of Toll Taxes, Parking, and Driver Allowance includes All Taxes are Included."
        ],
    itinerary:    [
            { day: "Day 1 - Delhi - Shimla (350 Kms )", description: "When Arrive at Delhi, our representative will meet you and shift you to Shimla. Arrival at Shimla by evening, check into hotel & free to visit Mall Road. Dinner and overnight stay at Hotel in shimla." },
            { day: "Day 2 - Shimla ( Local Shimla )", description: "After having morning breakfast go for visit to Shimla sightseeing Kufri, Jakhoo Hills, Voisroi Lodge, Indira Gandhi Tourist Park, Mini Zoo, Chini Bunglow. Evening time free to roam around the places of Shimla town - The Mall and the Ridge. Dinner and Overnight stay at hotel in shimla." },
            { day: "Day 3 - Shimla - Manali ( 260 Kms ) ( Kullu - Manikaran )", description: "After having morning breakfast transfer to Manali. In between your transfer there will be Kullu - Manikaran sightseeing. Arrive at Manali by the Evening and check into hotel. Dinner and overnight at hotel in manali." },
            { day: "Day 4 - Manali ( Local Manali )", description: "After having morning breakfast go for visit to local Manali sightseeing, Manu Temple, Tibetan Monastery and Vashisht Village, Hadimba Devi Temple. Evening time free to visit Mall Road .come back to Hotel. Dinner and Overnight stay at hotel in manali." },
            { day: "Day 5 - Manali ( Rohtang Pass / Snow Point )", description: "After having morning breakfast go for visit to Kothi - Gorge, Gulaba, Marhi, Rohtang Pass (Snow Point). Dinner and Overnight at hotel in manali." },
            { day: "Day 6 - Manali - Dharamshala ( 240 Kms )", description: "After having morning breakfast transfer to Dharamshala .Check into Hotel. After having some rest go for local Dharamshala sightseeing Lord Eligin's Memorial, Bhagshunath Temple, Dal Lake and Water Fall, Cricket Stadium. Dinner & Overnight stay at Hotel in Dharamshala." },
            { day: "Day 7 - Dharamshala - Dalhousie ( 140 Kms )", description: "After having morning breakfast transfer to Dalhousie. Check into hotel. After that go for local sightseeing of Dalhousie Churches, Subhash Baoli, Bara Pather Panchpula etc. Dinner and overnight stay at hotel in Dalhousie." },
            { day: "Day 8 - Dalhousie (Chamba - Khajjiar – Kalatop)", description: "After having morning breakfast go for full day sightseeing of Chamba, Khajjiar, Kalatop. Dinner and Overnight stay at Hotel in Dalhousie." },
            { day: "Day 9 - Dalhousie - Delhi ( 580 Kms )", description: "" }
        ],
    image:        "Tour Package Images - Solanki Tours/Shimla Tour.avif"
});
tourPackages.push({
    id:           41,
    title:        "Unlimited Himachal & Golden Temple Car Tour",
    duration:     "09 NIGHTS/10 DAYS",
    destinations: "Delhi âShimla - Kullu - Manali- Dharamshala - Dalhousie - Amritsar",
    price:        "Contact Us",
    category:     "domestic",
    region:       "himachal",
    inclusions:   [
            "Accommodation in Shimla for 2 Nights",
            "Accommodation in Manali for 3 Nights",
            "Accommodation in Dharamshala for 1 Night",
            "Accommodation in Dalhousie for 2 Nights",
            "Accommodation in Amritsar 1 Night",
            "On arriving Welcome drink",
            "Every day Morning Bed Tea, Breakfast & Dinner",
            "One Candle Light Dinner in Manali",
            "One basket of Fresh Fruits in Manali",
            "All Transfers & sightseeing's will be by Individual Car",
            "Pick up and Drop ex Delhi",
            "Inclusive of all Parking charge, Toll Tax, Driver Allowance",
            "All Taxes are Included."
        ],
    itinerary:    [
            { day: "Day 1 - Delhi - Shimla (350 Kms )", description: "When arrive at Delhi, our representative will meet you and shift you to Shimla. Arrival at Shimla by the evening, check into hotel & free to visit Mall Road. Dinner and overnight stay at Hotel in shimla." },
            { day: "Day 2 - Shimla ( Local Shimla )", description: "After having morning breakfast go for visit to Shimla sightseeing Kufri, Jakhoo Hills, Voisroi Lodge, Indira Gandhi Tourist Park, Mini Zoo, Chini Bunglow. Evening time free to roam around the places of Shimla town - The Mall and the Ridge. Dinner and Overnight stay at hotel in shimla." },
            { day: "Day 3 - Shimla - Manali ( 260 Kms ) ( Kullu - Manikaran )", description: "After having morning breakfast transfer to Manali. In between your transfer there will be Kullu - Manikaran sightseeing. Arrive at Manali by the Evening and check into hotel. Dinner and overnight at hotel in manali." },
            { day: "Day 4 - Manali ( Local Manali )", description: "After having morning breakfast go for visit to local Manali sightseeing, Manu Temple, Tibetan Monastery and Vashisht Village, Hadimba Devi Temple. Evening time free to visit Mall Road .come back to Hotel. Dinner and Overnight stay at hotel in manali." },
            { day: "Day 5 - Manali ( Rohtang Pass / Snow Point )", description: "After having morning breakfast go for visit to Kothi - Gorge, Gulaba, Marhi, Rohtang Pass (Snow Point). Dinner and Overnight at hotel in manali." },
            { day: "Day 6 - Manali - Dharamshala ( 240 Kms )", description: "After having morning breakfast transfer to Dharamshala .Check into Hotel. After having some rest go for local Dharamshala sightseeing Lord Eligin's Memorial, Bhagshunath Temple, Dal Lake and Water Fall, Cricket Stadium. Dinner & Overnight stay at Hotel in Dharamshala." },
            { day: "Day 7 - Dharamshala - Dalhousie ( 140 Kms )", description: "After having morning breakfast transfer to Dalhousie. Check into hotel. After that go for local sightseeing of Dalhousie Churches, Subhash Baoli, Bara Pather Panchpula etc. Dinner and overnight stay at hotel in Dalhousie." },
            { day: "Day 8 - Dalhousie (Chamba - Khajjiar – Kalatop)", description: "After having morning breakfast go for full day sightseeing of Chamba, Khajjiar, Kalatop. Dinner and Overnight stay at Hotel in Dalhousie." },
            { day: "Day 9 - Dalhousie - Amritsar ( 190 Kms )", description: "After having morning breakfast transfer to Amritsar. Check into hotel. After having some rest go for visit to local Amritsar sightseeing Golden Temple, Jallianwala bagh, Wagah Border. Dinner & Overnight stay at Hotel in Amritsar." },
            { day: "Day 10 - Amritsar - Delhi ( 480 Kms )", description: "After having morning breakfast move towards Delhi. Drop at airport, bus stand railway station. Proceed for your onward journey." }
        ],
    image:        "Tour Package Images - Solanki Tours/Shimla Tour.avif"
});
tourPackages.push({
    id:             42,
    title:          "Andaman Tour Package",
    price:          "Contact Us",
    category:       "domestic",
    region:         "andaman",
    image:          "Tour Package Images - Solanki Tours/Andaman-Island.webp",
    duration:       "04 NIGHTS/05 DAYS",
    destinations:   "Port Blair - Ross Island - North Bay - Port Blair",
    inclusions:     [
            "Tour inclusions available on inquiry — please contact us for full package details."
        ],
    itinerary:      [
            { day: "Day 1 - Depart from Andaman Islands", description: "On arrive at Port Blair airport, our representative will receive and escorted to the hotel. After check-in at the hotel and little relax, start with the sightseeing with Anthropological Museum, which displays the tools, models habitats, art and handcrafts of the aboriginal tribes of Andaman & Nicobar Islands from Anthropological Museum, we proceed to Corbyn's, Cove beach. Light & Sound Show at Cellular Jail. At evening, we move for the Light and Sound Show at Cellular Jail where the saga of the freedom struggle brought alive." },
            { day: "Day 2 - Ross Island", description: "In Morning, after breakfast we will proceed for a cruising towards Ross Island and Harbour Cruise (Viper Island). Ross Island, the erstwhile capital of Port Blair during the British regime, it now stands an imposing relic, with the structure almost in debris. A small museum displays photographs and other antiques of the Britishers, relevant to these islands. Harbour Cruise (Viper Island) .In afternoon, we proceed for a cruise of harbour, the panoramic view of seven points from sea i.e.; harbour, floating docks, etc including a trip to Viper Island the place of execution. Meals : Breakfast" },
            { day: "Day 3 - North Bay", description: "In the Morning, we proceed for a full day joyful trip to North Bay Island (Coral Island) by ferry. North Bay, offers exotic coral, colorful fishes and underwater marine life. We can view these colorful corals & underwater marine life via in glass bottom boat and snorkeling (optional)." },
            { day: "Day 4 - Port Blair", description: "After Breakfast, we take you for the tour of Port Blair city which covers Cellular Jail (National Memorial), Chatham saw mill (the oldest and biggest mill in Asia), Forest Museum, Mini Zoo, Samundrika (Naval Marine Museum), Aquarium (Fisheries Museum), Science Centre, Gandhi Park, Marina Park, Andaman Water Sports Complex. In the evening, we proceed to Sagarika ( the Govt. Emporium of Handcraft) and local market for shopping. Meals : Breakfast" },
            { day: "Day 5 - Port Blairp", description: "Drop to Port Blair / Harbour for Return journey with a wonderful holiday memories." }
        ],
    defaultVariant: 0,
    variants: [
        {
            variantId:    "and-4n",
            duration:     "04 NIGHTS/05 DAYS",
            destinations: "Port Blair - Ross Island - North Bay - Port Blair",
            inclusions:   [
            "Tour inclusions available on inquiry — please contact us for full package details."
        ],
            itinerary:    [
            { day: "Day 1 - Depart from Andaman Islands", description: "On arrive at Port Blair airport, our representative will receive and escorted to the hotel. After check-in at the hotel and little relax, start with the sightseeing with Anthropological Museum, which displays the tools, models habitats, art and handcrafts of the aboriginal tribes of Andaman & Nicobar Islands from Anthropological Museum, we proceed to Corbyn's, Cove beach. Light & Sound Show at Cellular Jail. At evening, we move for the Light and Sound Show at Cellular Jail where the saga of the freedom struggle brought alive." },
            { day: "Day 2 - Ross Island", description: "In Morning, after breakfast we will proceed for a cruising towards Ross Island and Harbour Cruise (Viper Island). Ross Island, the erstwhile capital of Port Blair during the British regime, it now stands an imposing relic, with the structure almost in debris. A small museum displays photographs and other antiques of the Britishers, relevant to these islands. Harbour Cruise (Viper Island) .In afternoon, we proceed for a cruise of harbour, the panoramic view of seven points from sea i.e.; harbour, floating docks, etc including a trip to Viper Island the place of execution. Meals : Breakfast" },
            { day: "Day 3 - North Bay", description: "In the Morning, we proceed for a full day joyful trip to North Bay Island (Coral Island) by ferry. North Bay, offers exotic coral, colorful fishes and underwater marine life. We can view these colorful corals & underwater marine life via in glass bottom boat and snorkeling (optional)." },
            { day: "Day 4 - Port Blair", description: "After Breakfast, we take you for the tour of Port Blair city which covers Cellular Jail (National Memorial), Chatham saw mill (the oldest and biggest mill in Asia), Forest Museum, Mini Zoo, Samundrika (Naval Marine Museum), Aquarium (Fisheries Museum), Science Centre, Gandhi Park, Marina Park, Andaman Water Sports Complex. In the evening, we proceed to Sagarika ( the Govt. Emporium of Handcraft) and local market for shopping. Meals : Breakfast" },
            { day: "Day 5 - Port Blairp", description: "Drop to Port Blair / Harbour for Return journey with a wonderful holiday memories." }
        ]
        },
        {
            variantId:    "and-5n",
            duration:     "05 NIGHTS/06 DAYS",
            destinations: "Port Blair - Havelock",
            inclusions:   [
            "Tour inclusions available on inquiry — please contact us for full package details."
        ],
            itinerary:    [
            { day: "Day 1 - Port Blair", description: "Upon arrival at Port Blair in the morning. Our representative will transfer to hotel. After lunch, proceed for Chidiya Tapu - about 31 kms from Port Blair - generally known as the \"Bird Island\" covered with lush green mangroves and beautiful beach with breath-taking sunset - all of which creates a mesmerizing environment. In the evening, attend the enthralling Sound and Light Show at Cellular Jail - where the heroic saga of the Indian freedom struggle is brought alive. Overnight stay at Port Blair." },
            { day: "Day 2 - Port Blair", description: "After breakfast in the morning visit for a full-day Excursion to Jolly Buoy or Red Skin (Coral Island) - to see coral reefs, exotic varieties of beautiful ornamental fishes and other marine life. The glass bottom boat ride helps one to take a closer look at the vast coral colonies. Optional Activities - Snorkelling, Swimming, Trekking. Overnight stay at Port Blair. Meals : Breakfast" },
            { day: "Day 3 - Havelock", description: "Early morning departure by inter-island ferry to Havelock Island(57 kms by sea from Port Blair). Stay here overnight amongst sandy beach and lush green forest in a comfortable beach resort. Then after quick refreshment proceed to the Asia's Best Beach \"Radhanagar Beach (Beach No.7)\". Overnight stay at Havelock." },
            { day: "Day 4 - Havelock", description: "After breakfast, proceed to Elephant Beach for adventurous snorkeling experience. â€œSnorkeling is leisure water sports in which a person swims on the surface of water wearing the face mask and view in the underwater coralsâ€. Overnight stay at Havelock. Meals : Breakfast" },
            { day: "Day 5 - Havelock", description: "Return from Havelock to Port Blair in the evening and transfer to hotel." },
            { day: "Day 6 - Harbour", description: "Transfer to Airport/Harbour for return flight/voyage." }
        ]
        },
        {
            variantId:    "and-6n",
            duration:     "06 NIGHTS/07 DAYS",
            destinations: "Port Blair - Coral Island - Havelock - Ross Island",
            inclusions:   [
            "Tour inclusions available on inquiry — please contact us for full package details."
        ],
            itinerary:    [
            { day: "Day 1 - Port Blair", description: "Arrival at Port Blair in the morning by flight/ship and transfer to hotel. After lunch, visit the Corbyn's Cove Beach - 9 kms from Port Blair - a coconut palm fringed beach, ideal for swimming, sun-basking & bathing. Then proceed for a leisurely cruise (Harbour Cruise) in a steamer along the Port Blair Harbour - which takes one to Viper Island. The gallows atop a hillock here is sight to watch." },
            { day: "Day 2 - Coral Island", description: "Start after Breakfast for a full-day Excursion to North Bay (Coral Island) - to see coral reefs, exotic varieties of beautiful ornamental fishes and other marine life. The glass bottom boat ride helps one to take a closer look at the vast coral colonies. Optional Activities - Snorkeling, Swimming, Trekking. Meals : Breakfast" },
            { day: "Day 3 - Havelock", description: "Early morning departure by inter-island ferry to Havelock Island (57 kms by sea from Port Blair). Stay here overnight amongst sandy beach and lush green forest in a comfortable beach resort. Then after lunch proceed to the Kalapathar beach where you can watch the beautiful sunset. Optional activities are swimming. Overnight stay at Havelock. Honey moon cake will be placed at the resort where you are staying. Meals : Lunch" },
            { day: "Day 4 - Radhanagar Beach", description: "After breakfast, proceed to the Asia's Best Beach \"Radhanagar Beach\". Return from Havelock Island in the evening and transfer to hotel in Port Blair. Meals : Breakfast" },
            { day: "Day 5 - Havelock", description: "After breakfast, start for a full-day tour of places in & around Port Blair (City Tour) - covering the famous Cellular Jail, Chatham Saw Mill (oldest & largest in Asia), Mini Zoo, Anthropological Museum, Fisheries (Marine) Museum, Science Centre, Naval Marine Museum (Samudrika) and the Cottage Industries Emporium (Sagarika) - for shopping & souvenirs. In the evening, attend the enthralling Sound and Light Show at Cellular Jail - where the heroic saga of the Indian freedom struggle is brought alive. Meals : Breakfast" },
            { day: "Day 6 - Ross Island", description: "After breakfast, visit Ross Island - from where the Britishers' governed the entire A&N islands at the time of pre Independence. This island is an ideal destination for nature walk amidst sylvan surroundings with deers, peacocks, exotic birds, etc. After lunch, visit Chidiya Tapu - about 31 kms from Port Blair - generally known as the \"Bird Island\" covered with lush green mangroves and beautiful beach with breath-taking sunset. Optional Activities - Swimming, Trekking & Snorkeling. Exotic Dinner at a sea facing restaurant at Port Blair on the fixed menu. Meals : Breakfast, Lunch, Dinner" },
            { day: "Day 7 - Ross Island", description: "Transfer to Airport/Harbour for return flight/voyage to onward destination. Meals : Breakfast, Lunch, Dinner" }
        ]
        }
    ]
});
tourPackages.push({
    id:             45,
    title:          "Kerala Tour Package",
    price:          "Contact Us",
    category:       "domestic",
    region:         "kerala",
    image:          "Tour Package Images - Solanki Tours/Kerala Backwater Tour.jpg",
    duration:       "02 NIGHTS/03 DAYS",
    destinations:   "Cochin - Munnar - Cochin",
    inclusions:     [
            "2 Nights Accommodation in Munnar",
            "Welcome drink on arrival",
            "Daily Breakfast at Hotel",
            "Pick up and Drop ex Cochin",
            "All Transport and Sightseeing by Individual Car",
            "All Taxes Include."
        ],
    itinerary:      [
            { day: "Day 1 - Cochin – Munnar", description: "On arrival at Cochin, we will meet you and proceed to Munnar. Check in the hotel and after taking some rest proceed to local sightseeing and market visit. Overnight stay at Hotel." },
            { day: "Day 2 - Munnar", description: "In the Morning after breakfast proceed to full day local sightseeing of Munnar like the confluence of three mountain streams - Mudrapuzha, Nallathanni and Kundale, Munnar is 1600 Meter above sea level and Mattupetty Dam, Kundale Lake and Echo point. Afternoon proceed to Rajamalai were the rarest species of mountain goat, \"Nilgiri Thars\", can be spotted etc. Overnight stay at Hotel." },
            { day: "Day 3 - Munnar - Cochin Drop", description: "Morning after breakfast check out from hotel and proceed to Cochin. Drop at Cochin airport, railway station with onward journey." }
        ],
    defaultVariant: 0,
    variants: [
        {
            variantId:    "ker-2n",
            duration:     "02 NIGHTS/03 DAYS",
            destinations: "Cochin - Munnar - Cochin",
            inclusions:   [
            "2 Nights Accommodation in Munnar",
            "Welcome drink on arrival",
            "Daily Breakfast at Hotel",
            "Pick up and Drop ex Cochin",
            "All Transport and Sightseeing by Individual Car",
            "All Taxes Include."
        ],
            itinerary:    [
            { day: "Day 1 - Cochin – Munnar", description: "On arrival at Cochin, we will meet you and proceed to Munnar. Check in the hotel and after taking some rest proceed to local sightseeing and market visit. Overnight stay at Hotel." },
            { day: "Day 2 - Munnar", description: "In the Morning after breakfast proceed to full day local sightseeing of Munnar like the confluence of three mountain streams - Mudrapuzha, Nallathanni and Kundale, Munnar is 1600 Meter above sea level and Mattupetty Dam, Kundale Lake and Echo point. Afternoon proceed to Rajamalai were the rarest species of mountain goat, \"Nilgiri Thars\", can be spotted etc. Overnight stay at Hotel." },
            { day: "Day 3 - Munnar - Cochin Drop", description: "Morning after breakfast check out from hotel and proceed to Cochin. Drop at Cochin airport, railway station with onward journey." }
        ]
        },
        {
            variantId:    "ker-3n",
            duration:     "03 NIGHTS/04 DAYS",
            destinations: "Cochin - Munnar - Alleppey - Cochin",
            inclusions:   [
            "2 Nights Accommodation in Munnar",
            "1 Night Accommodation in Alleppey",
            "Welcome drink on arrival",
            "Daily Breakfast at Hotel",
            "Alleppey Houseboat all includes (Breakfast, Lunch & Dinner)",
            "Pick up and Drop ex Cochin",
            "All Transport and Sightseeing by Individual Car",
            "All Taxes Include."
        ],
            itinerary:    [
            { day: "Day 1 - Cochin – Munnar", description: "On arrival at Cochin, we will meet you and proceed to Munnar. Check in the hotel and after taking some rest proceed to local sightseeing and market visit. Overnight stay at Hotel." },
            { day: "Day 2 - Munnar", description: "In the Morning after breakfast proceed to full day local sightseeing of Munnar like the confluence of three mountain streams - Mudrapuzha, Nallathanni and Kundale, Munnar is 1600 Meter above sea level and Mattupetty Dam, Kundale Lake and Echo point. Afternoon proceed to Rajamalai were the rarest species of mountain goat, \"Nilgiri Thars\", can be spotted etc. Overnight stay at Hotel." },
            { day: "Day 3 - Munnar - Alleppey", description: "In the Morning after breakfast checks out from hotel and proceed to Alleppey and check in the houseboat at alleppey and enjoy the backwater destination. Overnight stay in Houseboat." },
            { day: "Day 3 - Alleppey - Cochin Drop", description: "Morning after breakfast check out from houseboat and proceed to Cochin. Drop at Cochin airport, railway station with onward journey." }
        ]
        },
        {
            variantId:    "ker-4n",
            duration:     "04 NIGHTS/05 DAYS",
            destinations: "Cochin - Munnar - Thekkady - Alleppey - Cochin",
            inclusions:   [
            "2 Nights Accommodation in Munnar",
            "1 Night Accommodation in Alleppey",
            "1 Night Accommodation in Alleppey",
            "Welcome drink on arrival",
            "Daily Breakfast at Hotel",
            "Alleppey Houseboat all includes (Breakfast, Lunch & Dinner)",
            "Pick up and Drop ex Cochin",
            "All Transport and Sightseeing by Individual Car",
            "All Taxes Include."
        ],
            itinerary:    [
            { day: "Day 1 - Cochin – Munnar", description: "On arrival at Cochin, we will meet you and proceed to Munnar. Check in the hotel and after taking some rest proceed to local sightseeing and market visit. Overnight stay at Hotel." },
            { day: "Day 2 - Munnar", description: "In the Morning after breakfast proceed to full day local sightseeing of Munnar like the confluence of three mountain streams - Mudrapuzha, Nallathanni and Kundale, Munnar is 1600 Meter above sea level and Mattupetty Dam, Kundale Lake and Echo point. Afternoon proceed to Rajamalai were the rarest species of mountain goat, \"Nilgiri Thars\", can be spotted etc. Overnight stay at Hotel." },
            { day: "Day 3 - Munnar - Thekkady", description: "Morning after breakfast check out from hotel and proceed to Thekkady and check in the hotel. Then Proceed to full day local Thekkady sightseeing like - one of the world's most fascinating wild life reserves The Periyar wild life sanctuary is spread across 777 sq km of which 360 sq km is thick ever green forest and Boating at Periyar Lake, Spice Plantation visit and Elephant Ride. Overnight stay at Hotel." },
            { day: "Day 4 - Thekkady - Alleppey", description: "Morning after breakfast check out from hotel and proceed to Alleppey and check in the houseboat and enjoy the backwater destination. Overnight stay in Houseboat." },
            { day: "Day 5 - Alleppey - Cochin Drop", description: "Morning after breakfast check out from Houseboat at alleppey and proceed to Cochin. Drop at Cochin airport, railway station with onward journey." }
        ]
        },
        {
            variantId:    "ker-5n",
            duration:     "05 NIGHTS/06 DAYS",
            destinations: "Cochin - Munnar - Thekkady - Alleppey - Cochin",
            inclusions:   [
            "1 Night Accommodation in Cochin",
            "2 Nights Accommodation in Munnar",
            "1 Night Accommodation in Thekkady",
            "1 Night Accommodation in Alleppey",
            "Welcome drink on arrival",
            "Daily Breakfast at Hotel",
            "Alleppey Houseboat all includes (Breakfast, Lunch & Dinner)",
            "Pick up and Drop ex Cochin",
            "All Transport and Sightseeing by Individual Car",
            "All Taxes Include."
        ],
            itinerary:    [
            { day: "Day 1 - Cochin arrival", description: "Upon arrival at Cochin, our representative will meet you and proceed to Hotel. Check in the hotel and after taking some rest proceed to local Cochin sightseeing like The Queen of Arabian Sea, this is one of the finest natural harbors in the World and was one of the major centers for commerce and trade with British, Chinese, Portugese, Dutch, etc. and Cochin famous Dutch Palace, Jewish Synagogue, Jewish Street, St. Francis Church and Chinese Fishing Nets. Overnight stay at Hotel." },
            { day: "Day 2 - Cochin - Munnar", description: "Morning after breakfast check out from hotel and proceed to Munnar. Check in the hotel and after taking some proceed to local city and market visit. Overnight stay at Hotel." },
            { day: "Day 3 - Munnar", description: "Morning after breakfast proceed to full day local Munnar sightseeing like the confluence of three mountain streams - Mudrapuzha, Nallathanni and Kundale, Munnar is 1600 Meter above sea level and Mattupetty Dam, Kundale Lake and Echo point. Afternoon proceed to Rajamalai were the rarest species of mountain goat, \"Nilgiri Thars\", can be spotted etc. Overnight stay at Hotel." },
            { day: "Day 4 - Munnar - Thekkady", description: "Morning after breakfast check out from hotel and proceed to Thekkady and check in the hotel. Then Proceed to full day local Thekkady sightseeing like - one of the world's most fascinating wild life reserves The Periyar wild life sanctuary is spread across 777 sq km of which 360 sq km is thick ever green forest and Boating at Periyar Lake, Spice Plantation visit and Elephant Ride. Overnight stay at Hotel." },
            { day: "Day 5 - Thekkady - Alleppey", description: "Morning after breakfast check out from hotel and proceed to Alleppey and check in the houseboat and enjoy the backwater destination. Overnight stay in Houseboat." },
            { day: "Day 6 - Alleppey - Cochin Drop", description: "Morning after breakfast check out from Houseboat and proceed to Cochin. Drop at Cochin airport, railway station with onward journey." }
        ]
        },
        {
            variantId:    "ker-6n",
            duration:     "06 NIGHTS/07 DAYS",
            destinations: "Cochin - Munnar - Thekkady - Alleppey - Kovalam - Trivandrum - Cochin",
            inclusions:   [
            "2 Nights Accommodation in Munnar",
            "1 Night Accommodation in Thekkady",
            "1 Night Accommodation in Alleppey",
            "2 Nights Accommodation in Kovalam",
            "Welcome drink on arrival",
            "Daily Breakfast at Hotel",
            "Alleppey Houseboat all includes (Breakfast, Lunch & Dinner)",
            "Pick up from Cochin and Drop ex Trivandrum/Cochin",
            "All Transport and Sightseeing by Individual Car",
            "All Taxes Include."
        ],
            itinerary:    [
            { day: "Day 1 - Cochin - Munnar", description: "On arrival at Cochin, we will meet you and proceed to Munnar. Check in the hotel and after taking some rest proceed to local city and market visit. Overnight stay at Hotel." },
            { day: "Day 2 - Munnar", description: "Morning after breakfast proceed to full day local Munnar sightseeing like the confluence of three mountain streams - Mudrapuzha, Nallathanni and Kundale, Munnar is 1600 Meter above sea level and Mattupetty Dam, Kundale Lake and Echo point. Afternoon proceed to Rajamalai were the rarest species of mountain goat, \"Nilgiri Thars\", can be spotted etc. Overnight stay at Hotel." },
            { day: "Day 3 - Munnar - Thekkady", description: "Morning after breakfast check out from hotel and proceed to Thekkady and check in the hotel. Then Proceed to full day local Thekkady sightseeing like - one of the world's most fascinating wild life reserves The Periyar wild life sanctuary is spread across 777 sq km of which 360 sq km is thick ever green forest and Boating at Periyar Lake, Spice Plantation visit and Elephant Ride. Overnight stay at Hotel." },
            { day: "Day 4 - Thekkady - Alleppey", description: "Morning after breakfast check out from hotel and proceed to Alleppey and check in the houseboat and enjoy the backwater destination. Overnight stay in Houseboat." },
            { day: "Day 5 - Alleppey - Kovalam", description: "Morning after breakfast check out from houseboat and proceed to Kovalam and check in the hotel. And full day enjoy the swimming of the sea and sun set point. Overnight stay at Hotel." },
            { day: "Day 6 - Kovalam - Trivandrum - Kovalam", description: "Morning after breakfast proceed to full day local Trivandrum sightseeing. Trivandrum is the or Thiruvananthapuram is the capital of Kerala and Trivandrum has an ancient city with a history dating back as early as 1000 BC. and The Padmanabhaswami Temple, Srichitra Art Gallery, Napier Museum and Zoo etc. Overnight stay at Hotel." },
            { day: "Day 7 - Kovalam - Trivandrum / Cochin Drop", description: "Morning after breakfast check out from Hotel and proceed to Cochin. Drop at Cochin airport, railway station with onward journey." }
        ]
        },
        {
            variantId:    "ker-7n",
            duration:     "07 NIGHTS/08 DAYS",
            destinations: "Cochin - Munnar - Thekkady - Alleppey - Kovalam - Trivandrum - Kanyakumari - Cochin",
            inclusions:   [
            "2 Nights Accommodation in Munnar",
            "1 Night Accommodation in Thekkady",
            "1 Night Accommodation in Alleppey",
            "2 Nights Accommodation in Kovalam",
            "1 Night Accommodation in Kanyakumari",
            "Welcome drink on arrival",
            "Daily Breakfast at Hotel",
            "Alleppey Houseboat all includes (Breakfast, Lunch & Dinner)",
            "Pick up from Cochin and Drop ex Trivandrum/Cochin",
            "All Transport and Sightseeing by Individual Car",
            "All Taxes Include."
        ],
            itinerary:    [
            { day: "Day 1 - Cochin - Munnar", description: "On arrival at Cochin, we will meet you and proceed to Munnar. Check in the hotel and after taking some rest proceed to local city and market visit. Overnight stay at Hotel." },
            { day: "Day 2 - Munnar", description: "Morning after breakfast proceed to full day local Munnar sightseeing like the confluence of three mountain streams - Mudrapuzha, Nallathanni and Kundale, Munnar is 1600 Meter above sea level and Mattupetty Dam, Kundale Lake and Echo point. Afternoon proceed to Rajamalai were the rarest species of mountain goat, \"Nilgiri Thars\", can be spotted etc. Overnight stay at Hotel." },
            { day: "Day 3 - Munnar - Thekkady", description: "Morning after breakfast check out from hotel and proceed to Thekkady and check in the hotel. Then Proceed to full day local Thekkady sightseeing like - one of the world's most fascinating wild life reserves The Periyar wild life sanctuary is spread across 777 sq km of which 360 sq km is thick ever green forest and Boating at Periyar Lake, Spice Plantation visit and Elephant Ride. Overnight stay at Hotel." },
            { day: "Day 4 - Thekkady - Alleppey", description: "Morning after breakfast check out from hotel and proceed to Alleppey and check in the houseboat and enjoy the backwater destination. Overnight stay in Houseboat." },
            { day: "Day 5 - Alleppey - Kovalam", description: "Morning after breakfast check out from houseboat and proceed to Kovalam and check in the hotel. And full day enjoy the swimming of the sea and sun set point. Overnight stay at Hotel." },
            { day: "Day 6 - Kovalam - Trivandrum - Kovalam", description: "Morning after breakfast proceed to full day local Trivandrum sightseeing. Trivandrum is the or Thiruvananthapuram is the capital of Kerala and Trivandrum has an ancient city with a history dating back as early as 1000 BC. and The Padmanabhaswami Temple, Srichitra Art Gallery, Napier Museum and Zoo etc. Overnight stay at Hotel." },
            { day: "Day 7 - Kovalam - Kanyakumari", description: "Morning after breakfast proceeds to Kanyakumari. Check in the hotel and after taking some rest proceed to local Kanyakumari sightseein like Swami Vivekananda memorial statue, Padmanbhapuram Palace, Suchithram Temple, Devi Kanyakumari Temple, Gandhidham and Trivenisagam and the Sunset in the evening etc. Overnight stay at Hotel." },
            { day: "Day 8 - Kanyakumari - Trivendrum / Cochin Drop", description: "In the morning after breakfast check out from Hotel and proceed to Cochin. Drop at Cochin airport, railway station with onward journey." }
        ]
        }
    ]
});
tourPackages.push({
    id:             51,
    title:          "Kashmir Tour Package",
    price:          "Contact Us",
    category:       "domestic",
    region:         "kashmir",
    image:          "Tour Package Images - Solanki Tours/paradise-kashmir.webp",
    duration:       "02 NIGHTS/03 DAYS",
    destinations:   "Srinagar",
    inclusions:     [
            "1 Night Accommodation in Srinagar Houseboat",
            "1 Night Accommodation in Srinagar Hotel",
            "Welcome drink on arrival",
            "Daily Morning Bed Tea, Breakfast & Dinner",
            "All Transfer & sightseeing by Individual Cab",
            "Pick up and Drop Srinagar",
            "Toll Taxes, Parking, Driver Allowance includes",
            "All Taxes Include."
        ],
    itinerary:      [
            { day: "Day 1 - Srinagar arrival", description: "On arrival at Srinagar airport, we will meet you and transfer to houseboat. Check in the houseboat and day free for local activities. Overnight stay at Houseboat." },
            { day: "Day 2 - Local Srinagar", description: "Morning after breakfast proceed to full day local Srinagar sightseeing like Mughal Gardens, The Nihat Bagh ( The Garden of Pleasure ), Shalimar Bagh, Shankracharya Temple and Magnificient Srinaga city and Lakes. Overnight stay at Hotel." },
            { day: "Day 3 - Srinagar Drop", description: "Morning after breakfast check out from hotel and drop at Srinagar airport with onward journey" }
        ],
    defaultVariant: 0,
    variants: [
        {
            variantId:    "kas-2n",
            duration:     "02 NIGHTS/03 DAYS",
            destinations: "Srinagar",
            inclusions:   [
            "1 Night Accommodation in Srinagar Houseboat",
            "1 Night Accommodation in Srinagar Hotel",
            "Welcome drink on arrival",
            "Daily Morning Bed Tea, Breakfast & Dinner",
            "All Transfer & sightseeing by Individual Cab",
            "Pick up and Drop Srinagar",
            "Toll Taxes, Parking, Driver Allowance includes",
            "All Taxes Include."
        ],
            itinerary:    [
            { day: "Day 1 - Srinagar arrival", description: "On arrival at Srinagar airport, we will meet you and transfer to houseboat. Check in the houseboat and day free for local activities. Overnight stay at Houseboat." },
            { day: "Day 2 - Local Srinagar", description: "Morning after breakfast proceed to full day local Srinagar sightseeing like Mughal Gardens, The Nihat Bagh ( The Garden of Pleasure ), Shalimar Bagh, Shankracharya Temple and Magnificient Srinaga city and Lakes. Overnight stay at Hotel." },
            { day: "Day 3 - Srinagar Drop", description: "Morning after breakfast check out from hotel and drop at Srinagar airport with onward journey" }
        ]
        },
        {
            variantId:    "kas-3n",
            duration:     "03 NIGHTS/04 DAYS",
            destinations: "Srinagar - Gulmarg - Srinagar",
            inclusions:   [
            "1 Night Accommodation in Srinagar Houseboat",
            "2 Night Accommodation in Srinagar Hotel",
            "Welcome drink on arrival",
            "Daily Morning Bed Tea, Breakfast & Dinner",
            "All Transfer & sightseeing by Individual Cab",
            "Pick up and Drop Srinagar",
            "Toll Taxes, Parking, Driver Allowance includes",
            "All Taxes Include."
        ],
            itinerary:    [
            { day: "Day 1 - Srinagar arrival", description: "On arrival at Srinagar airport, we will meet you and transfer to houseboat. Check in the houseboat and day free for local activities. Overnight stay at Houseboat." },
            { day: "Day 2 - Local Srinagar", description: "Morning after breakfast proceed to full day local Srinagar sightseeing like Mughal Gardens, The Nihat Bagh ( The Garden of Pleasure ), Shalimar Bagh, Shankracharya Temple and Magnificient Srinaga city and Lakes. Overnight stay at Hotel." },
            { day: "Day 3 - Srinagar - Gulmarg - Srinagar ( 60 Kms )", description: "Morning after breakfast proceed to full day sightseeing of Gulmarg. The Beautiful Gulmarg with Splendor of Nature and Snowy Mountain. One can have Gondola Ride ( Cable Car ) From Gulmarg to Khilanmarg ( At Client's Own cost ). In evening back to Srinagar and Overnight stay at Hotel." },
            { day: "Day 4 - Srinagar Drop", description: "Morning after breakfast check out from hotel and drop at Srinagar airport with onward journey." }
        ]
        },
        {
            variantId:    "kas-4n",
            duration:     "04 NIGHTS/05 DAYS",
            destinations: "Srinagar - Gulmarg - Pahalgam - Srinagar",
            inclusions:   [
            "1 Night Accommodation in Srinagar Houseboat",
            "3 Night Accommodation in Srinagar Hotel",
            "Welcome drink on arrival",
            "Daily Morning Bed Tea, Breakfast & Dinner",
            "All Transfer & sightseeing by Individual Cab",
            "Pick up and Drop Srinagar",
            "Toll Taxes, Parking, Driver Allowance includes",
            "All Taxes Include."
        ],
            itinerary:    [
            { day: "Day 1 - Srinagar arrival", description: "On arrival at Srinagar airport, we will meet you and transfer to houseboat. Check in the houseboat and day free for local activities. Overnight stay at Houseboat." },
            { day: "Day 2 - Local Srinagar", description: "Morning after breakfast proceed to full day local Srinagar sightseeing like Mughal Gardens, The Nihat Bagh ( The Garden of Pleasure ), Shalimar Bagh, Shankracharya Temple and Magnificient Srinaga city and Lakes. Overnight stay at Hotel." },
            { day: "Day 3 - Srinagar - Gulmarg - Srinagar ( 60 Kms )", description: "Morning after breakfast proceed to full day sightseeing of Gulmarg. The Beautiful Gulmarg with Splendor of Nature and Snowy Mountain. One can have Gondola Ride ( Cable Car ) From Gulmarg to Khilanmarg ( At Client's Own cost ). In evening back to Srinagar and Overnight stay at Hotel." },
            { day: "Day 4 - Srinagar - Pahalgam - Srinagar ( 95 Kms )", description: "Morning after breakfast proceed to full day sightseeing of Pahalgam. Full day of Excursion Pahalgam and on te way visit Saffron Fields, Avantipura Ruims and Anantang, Sulphur Springs. Enjoy the nature and the roaring rivers. In evening back to Srinagar and Overnight stay at Hotel." },
            { day: "Day 5 - Srinagar Drop", description: "Morning after breakfast check out from hotel and drop at Srinagar airport with onward journey." }
        ]
        },
        {
            variantId:    "kas-5n",
            duration:     "05 NIGHTS/06 DAYS",
            destinations: "Srinagar - Gulmarg - Pahalgam - Sonmarg - Srinagar",
            inclusions:   [
            "1 Night Accommodation in Srinagar Houseboat",
            "4 Night Accommodation in Srinagar Hotel",
            "Welcome drink on arrival",
            "Daily Morning Bed Tea, Breakfast & Dinner",
            "All Transfer & sightseeing by Individual Cab",
            "Pick up and Drop Srinagar",
            "Toll Taxes, Parking, Driver Allowance includes",
            "All Taxes Include."
        ],
            itinerary:    [
            { day: "Day 1 - Srinagar arrival", description: "On arrival at Srinagar airport, we will meet you and transfer to houseboat. Check in the houseboat and day free for local activities. Overnight stay at Houseboat." },
            { day: "Day 2 - Local Srinagar", description: "Morning after breakfast proceed to full day local Srinagar sightseeing like Mughal Gardens, The Nihat Bagh ( The Garden of Pleasure ), Shalimar Bagh, Shankracharya Temple and Magnificient Srinaga city and Lakes. Overnight stay at Hotel." },
            { day: "Day 3 - Srinagar - Gulmarg - Srinagar ( 60 Kms )", description: "Morning after breakfast proceed to full day sightseeing of Gulmarg. The Beautiful Gulmarg with Splendor of Nature and Snowy Mountain. One can have Gondola Ride ( Cable Car ) From Gulmarg to Khilanmarg ( At Client's Own cost ). In evening back to Srinagar and Overnight stay at Hotel." },
            { day: "Day 4 - Srinagar - Pahalgam - Srinagar ( 95 Kms )", description: "Morning after breakfast proceed to full day sightseeing of Pahalgam. Full day of Excursion Pahalgam and on te way visit Saffron Fields, Avantipura Ruims and Anantang, Sulphur Springs. Enjoy the nature and the roaring rivers. In evening back to Srinagar and Overnight stay at Hotel." },
            { day: "Day 5 - Srinagar - Sonmarg - Srinagar ( 85 Kms )", description: "Morning after breakfast proceed to full day sightseeing of Sonmarg. Full day of Excursion of Sonmarg and Sonmarg is the Gateway of Ladakh. In evening back to Srinagar and Overnight stay at Hotel." },
            { day: "Day 6 - Srinagar Drop", description: "Morning after breakfast check out from hotel and drop at Srinagar airport with onward journey." }
        ]
        },
        {
            variantId:    "kas-6n",
            duration:     "06 NIGHTS/07 DAYS",
            destinations: "Srinagar - Gulmarg - Pahalgam - Sonmarg - Srinagar",
            inclusions:   [
            "1 Night Accommodation in Srinagar Houseboat",
            "4 Night Accommodation in Srinagar Hotel",
            "1 Night Accommodation in Pahalgam Hotel",
            "Welcome drink on arrival",
            "Daily Morning Bed Tea, Breakfast & Dinner",
            "All Transfer & sightseeing by Individual Cab",
            "Pick up and Drop Srinagar",
            "Toll Taxes, Parking, Driver Allowance includes",
            "All Taxes Include."
        ],
            itinerary:    [
            { day: "Day 1 - Srinagar arrival", description: "On arrival at Srinagar airport, we will meet you and transfer to houseboat. Check in the houseboat and day free for local activities. Overnight stay at Houseboat." },
            { day: "Day 2 - Local Srinagar", description: "Morning after breakfast proceed to full day local Srinagar sightseeing like Mughal Gardens, The Nihat Bagh ( The Garden of Pleasure ), Shalimar Bagh, Shankracharya Temple and Magnificient Srinaga city and Lakes. Overnight stay at Hotel." },
            { day: "Day 3 - Srinagar - Gulmarg - Srinagar ( 60 Kms )", description: "Morning after breakfast proceed to full day sightseeing of Gulmarg. The Beautiful Gulmarg with Splendor of Nature and Snowy Mountain. One can have Gondola Ride ( Cable Car ) From Gulmarg to Khilanmarg ( At Client's Own cost ). In evening back to Srinagar and Overnight stay at Hotel." },
            { day: "Day 4 - Srinagar - Pahalgam ( 95 Kms )", description: "Morning after breakfast proceed to full day sightseeing of Pahalgam. Full day of Excursion Pahalgam and on the way visit Saffron Fields, Avantipura Ruims and Anantang, Sulphur Springs. Enjoy the nature and the roaring rivers. Overnight stay at Hotel." },
            { day: "Day 5 - Pahalgam - Srinagar ( 95 Kms )", description: "Morning after breakfast proceed to Srinagar. En route enjoy the Film city destination of Pahalgam and natural beauty. In evening check in the hotel and Overnight stay at Hotel." },
            { day: "Day 6 - Srinagar - Sonmarg - Srinagar ( 85 Kms )", description: "Morning after breakfast proceed to full day sightseeing of Sonmarg. Full day of Excursion of Sonmarg and Sonmarg is the Gateway of Ladakh. In evening back to Srinagar and Overnight stay at Hotel." },
            { day: "Day 7 - Srinagar Drop", description: "Morning after breakfast check out from hotel and drop at Srinagar airport with onward journey." }
        ]
        },
        {
            variantId:    "kas-9n",
            duration:     "09 NIGHTS/10 DAYS",
            destinations: "Jammu - Katra - Patnitop - Srinagar - Gulmarg - Pahalgam - Sonmarg - Jammu Drop",
            inclusions:   [
            "2 Night Accommodation in Katra Hotel",
            "1 Night Accommodation in Patnitop Hotel",
            "5 Night Accommodation in Srinagar Hotel",
            "1 Night Accommodation in Pahalgam Hotel",
            "Welcome drink on arrival",
            "Daily Morning Bed Tea, Breakfast & Dinner",
            "All Transfer & sightseeing by Individual Cab",
            "Pick up and Drop Jammu",
            "Toll Taxes, Parking, Driver Allowance includes",
            "All Taxes Include."
        ],
            itinerary:    [
            { day: "Day 1 - Jammu - Katra", description: "On arrival at Jammu, we will meet you and transfer to Katra. Check in the hotel and day at leisure. Overnight stay at Hotel." },
            { day: "Day 2 - Katra ( Vaishno Devi Darshan )", description: "Morning after breakfast proceed to Vaishno Devi Darshan. Overnight stay at Hotel." },
            { day: "Day 3 - Katra - Patnitop ( 50 Kms )", description: "Morning after breakfast proceed to Patnitop. Full day Excursion of Patnitop and Chinar Garden, Maha Devi Temple. One can enjoy activities like Trekking, Horse Riding, Long Walks in Cedar Trees. Overnight stay at Hotel." },
            { day: "Day 4 - Patnitop - Srinagar ( 250 Kms )", description: "Morning after breakfast proceed to Srinagar. Check in the houseboat and evening free for local market visit. Overnight stay at Hotel." },
            { day: "Day 5 - Local Srinagar", description: "Morning after breakfast proceed to full day local Srinagar sightseeing like Mughal Gardens, The Nihat Bagh ( The Garden of Pleasure ), Shalimar Bagh, Shankracharya Temple and Magnificient Srinaga city and Lakes. Overnight stay at Hotel." },
            { day: "Day 6 - Srinagar - Gulmarg - Srinagar ( 60 Kms )", description: "Morning after breakfast proceed to full day sightseeing of Gulmarg. The Beautiful Gulmarg with Splendor of Nature and Snowy Mountain. One can have Gondola Ride ( Cable Car ) From Gulmarg to Khilanmarg ( At Client's Own cost ). In evening back to Srinagar and Overnight stay at Hotel." },
            { day: "Day 7 - Srinagar - Pahalgam ( 95 Kms )", description: "Morning after breakfast proceed to full day sightseeing of Pahalgam. Full day of Excursion Pahalgam and on te way visit Saffron Fields, Avantipura Ruims and Anantang, Sulphur Springs. Enjoy the nature and the roaring rivers. Overnight stay at Hotel." },
            { day: "Day 8 - Pahalgam - Srinagar ( 95 Kms )", description: "Morning after breakfast proceed to Srinagar. En route enjoy the Film city destination of Pahalgam and natural beauty. In evening check in the hotel and Overnight stay at Hotel." },
            { day: "Day 9 - Srinagar - Sonmarg - Srinagar ( 85 Kms )", description: "Morning after breakfast proceed to full day sightseeing of Sonmarg. Full day of Excursion of Sonmarg and Sonmarg is the Gateway of Ladakh. In evening back to Srinagar and Overnight stay at Hotel." },
            { day: "Day 10 - Srinagar - Jammu Drop", description: "Morning after breakfast check out from hotel and proceed to Jammu. Drop at Jammu airport, railway station with onward journey." }
        ]
        }
    ]
});
tourPackages.push({
    id:             57,
    title:          "North East Tour Package",
    price:          "Contact Us",
    category:       "domestic",
    region:         "northeast",
    image:          "Tour Package Images - Solanki Tours/darjeeling Gangtok Tour.jpg",
    duration:       "03 NIGHTS/04 DAYS",
    destinations:   "Darjeeling",
    inclusions:     [
            "3 Nights Accommodation in Darjeeling",
            "Welcome drink on arrival",
            "Daily Breakfast at Hotel",
            "Pick up and Drop at NJP Raliway Station / IXB Airport",
            "All transport and sightseeing by Individual Car",
            "All taxes are include."
        ],
    itinerary:      [
            { day: "Day 1 - NJP Railway Station / IXB Airport - Darjeeling ( 95 Kms. )", description: "On arrival at NJP Railway Station / IXB Airport, we will meet you and transfer to Darjeeling. Check in the hotel and day at leisure for local market visit. Overnight stay in Hotel." },
            { day: "Day 2 - Darjeeling ( Local Darjeeling )", description: "Early Morning proceed to Tiger hill to see the Spectacular Sunrise over Mt. Khangchendzongha ( 28,208 ft. Worlds 3rd highest peak ), on the way back visit Ghoom Monastery and Batasia Loop. Himalayan Mountaineering Institute, P.N.Zoological Park, Tenzing Rock, TIbetan Refugee Self-Help Center, Tea Garden, Japanese Temple etc. Overnight stay in Hotel." },
            { day: "Day 3 - Darjeeling - Mirik - Darjeeling", description: "Morning after breakfast proceed to full excursion tour to Mirik Lake ( 4900 ft ) route Indo - Nepal Border. Mirik is famous for its man-made Sumendu Lake, Cardamom plantations and tea estates, Boating in lake. In evening back to Darjeeling and Overnight stay in Hotel." },
            { day: "Day 4 - Darjeeling - NJP Railway Station / IXB Airport Drop", description: "Morning after breakfast check out from Hotel and Drop at NJP Railway Station / IXB Airport with onward journey." }
        ],
    defaultVariant: 0,
    variants: [
        {
            variantId:    "ne-3n",
            duration:     "03 NIGHTS/04 DAYS",
            destinations: "Darjeeling",
            inclusions:   [
            "3 Nights Accommodation in Darjeeling",
            "Welcome drink on arrival",
            "Daily Breakfast at Hotel",
            "Pick up and Drop at NJP Raliway Station / IXB Airport",
            "All transport and sightseeing by Individual Car",
            "All taxes are include."
        ],
            itinerary:    [
            { day: "Day 1 - NJP Railway Station / IXB Airport - Darjeeling ( 95 Kms. )", description: "On arrival at NJP Railway Station / IXB Airport, we will meet you and transfer to Darjeeling. Check in the hotel and day at leisure for local market visit. Overnight stay in Hotel." },
            { day: "Day 2 - Darjeeling ( Local Darjeeling )", description: "Early Morning proceed to Tiger hill to see the Spectacular Sunrise over Mt. Khangchendzongha ( 28,208 ft. Worlds 3rd highest peak ), on the way back visit Ghoom Monastery and Batasia Loop. Himalayan Mountaineering Institute, P.N.Zoological Park, Tenzing Rock, TIbetan Refugee Self-Help Center, Tea Garden, Japanese Temple etc. Overnight stay in Hotel." },
            { day: "Day 3 - Darjeeling - Mirik - Darjeeling", description: "Morning after breakfast proceed to full excursion tour to Mirik Lake ( 4900 ft ) route Indo - Nepal Border. Mirik is famous for its man-made Sumendu Lake, Cardamom plantations and tea estates, Boating in lake. In evening back to Darjeeling and Overnight stay in Hotel." },
            { day: "Day 4 - Darjeeling - NJP Railway Station / IXB Airport Drop", description: "Morning after breakfast check out from Hotel and Drop at NJP Railway Station / IXB Airport with onward journey." }
        ]
        },
        {
            variantId:    "ne-4n",
            duration:     "04 NIGHTS/05 DAYS",
            destinations: "Darjeeling - Gangtok",
            inclusions:   [
            "2 Nights Accommodation in Darjeeling",
            "2 Nights Accommodation in Gangtok",
            "Welcome drink on arrival",
            "Daily Breakfast at Hotel",
            "Pick up and Drop at NJP Raliway Station / IXB Airport",
            "All transport and sightseeing by Individual Car",
            "All taxes are include."
        ],
            itinerary:    [
            { day: "Day 1 - NJP Railway Station / IXB Airport - Darjeeling ( 95 Kms. )", description: "On arrival at NJP Railway Station / IXB Airport, we will meet you and transfer to Darjeeling. Check in the hotel and day at leisure for local market visit. Overnight stay in Hotel." },
            { day: "Day 2 - Darjeeling ( Local Darjeeling )", description: "Early Morning proceed to Tiger hill to see the Spectacular Sunrise over Mt. Khangchendzongha ( 28,208 ft. Worlds 3rd highest peak ), on the way back visit Ghoom Monastery and Batasia Loop. Himalayan Mountaineering Institute, P.N.Zoological Park, Tenzing Rock, TIbetan Refugee Self-Help Center, Tea Garden, Japanese Temple etc. Overnight stay in Hotel." },
            { day: "Day 3 - Darjeeling - Gangtok ( Local Gangtok )", description: "Morning after breakfast proceed to Gangtok. Check in the hotel and after taking some rest proceed to local Gangtok sightseeing like Banzakhri Falls, Cottage Industry and Handicraft Centre, Flower Show, Dro - dul Chorten & Institute of Tibetology etc. Overnight stay in Hotel." },
            { day: "Day 4 - Gangtok ( Tsomgo Lake & Baba Mandir )", description: "Morning after breakfast proceed to excursion of Tsomgo Lake ( 12,400 ft. ) & Baba Mandir ( 13,200 ft. ). In evening back to Gangtok and Overnight stay in Hotel." },
            { day: "Day 5 - Gangtok - NJP Railway Station / IXB Airport Drop", description: "Morning after breakfast check out from Hotel and Drop at NJP Railway Station / IXB Airport with onward journey ." }
        ]
        },
        {
            variantId:    "ne-5n",
            duration:     "05 NIGHTS/06 DAYS",
            destinations: "Darjeeling - Kalimpong - Gangtok",
            inclusions:   [
            "2 Nights Accommodation in Darjeeling",
            "1 Night Accommodation in Kalimpong",
            "2 Nights Accommodation in Gangtok",
            "Welcome drink on arrival",
            "Daily Breakfast at Hotel",
            "Pick up and Drop at NJP Raliway Station / IXB Airport",
            "All transport and sightseeing by Individual Car",
            "All taxes are include."
        ],
            itinerary:    [
            { day: "Day 1 - NJP Railway Station / IXB Airport - Darjeeling ( 95 Kms. )", description: "On arrival at NJP Railway Station / IXB Airport, we will meet you and transfer to Darjeeling. Check in the hotel and day at leisure for local market visit. Overnight stay in Hotel." },
            { day: "Day 2 - Darjeeling ( Local Darjeeling )", description: "Early Morning proceed to Tiger hill to see the Spectacular Sunrise over Mt. Khangchendzongha ( 28,208 ft. Worlds 3rd highest peak ), on the way back visit Ghoom Monastery and Batasia Loop. Himalayan Mountaineering Institute, P.N.Zoological Park, Tenzing Rock, TIbetan Refugee Self-Help Center, Tea Garden, Japanese Temple etc. Overnight stay in Hotel." },
            { day: "Day 3 - Darjeeling - Kalimpong ( Local Kalimpong )", description: "Morning after breakfast proceed to Kalimpong. Check in the hotel and after taking some rest proceed to local Kalimpong sightseeing like Mangal Dham, Deolo Hill, Dr. Graham's Home, Golf Garden, Durpin Dara Hill & Flower Nurseries etc. Overnight stay in Hotel." },
            { day: "Day 4 - Kalimpong - Gangtok ( Local Gangtok )", description: "Morning after breakfast proceed to Gangtok. Check in the hotel and after taking some rest proceed to local Gangtok sightseeing like Banzakhri Falls, Cottage Industry and Handicraft Center, Flower Show, Dro - dul Chorten & Institute of Tibetology etc. Overnight stay in Hotel." },
            { day: "Day 5 - Gangtok ( Tsomgo Lake & Baba Mandir )", description: "Morning after breakfast proceed to excursion of Tsomgo Lake ( 12,400 ft. ) & Baba Mandir ( 13,200 ft. ). In evening back to Gangtok and Overnight stay in Hotel." },
            { day: "Day 6 - Gangtok - NJP Railway Station / IXB Airport Drop", description: "Morning after breakfast check out from Hotel and Drop at NJP Railway Station / IXB Airport with onward journey ." }
        ]
        },
        {
            variantId:    "ne-7n",
            duration:     "07 NIGHTS/08 DAYS",
            destinations: "Darjeeling - Pelling - Gangtok",
            inclusions:   [
            "2 Nights Accommodation in Darjeeling",
            "2 Nights Accommodation in Pelling",
            "3 Nights Accommodation in Gangtok",
            "Welcome drink on arrival",
            "Daily Breakfast at Hotel",
            "Pick up and Drop at NJP Raliway Station / IXB Airport",
            "All transport and sightseeing by Individual Car",
            "All taxes are include."
        ],
            itinerary:    [
            { day: "Day 1 - NJP Railway Station / IXB Airport - Darjeeling ( 95 Kms. )", description: "On arrival at NJP Railway Station / IXB Airport, we will meet you and transfer to Darjeeling. Check in the hotel and day at leisure for local market visit. Overnight stay in Hotel." },
            { day: "Day 2 - Darjeeling ( Local Darjeeling )", description: "Early Morning proceed to Tiger hill to see the Spectacular Sunrise over Mt. Khangchendzongha ( 28,208 ft. Worlds 3rd highest peak ), on the way back visit Ghoom Monastery and Batasia Loop. Himalayan Mountaineering Institute, P.N.Zoological Park, Tenzing Rock, TIbetan Refugee Self-Help Center, Tea Garden, Japanese Temple etc. Overnight stay in Hotel." },
            { day: "Day 3 - Darjeeling - Pelling", description: "Morning after breakfast proceed to Pelling. Check in the hotel and after taking some rest proceed to local Market visit. Overnight stay in Hotel." },
            { day: "Day 4 - Pelling", description: "Morning after breakfast proceed to full day sightseeing of Darap Village, Rimbi water Falls, Sewaro Rock Garden, Khecheopalri Lake& Khangchendzongha watefalls, Pemayantse Monastery, Rabdantse Ruins, New Halipad Ground etc. Overnight stay in Hotel." },
            { day: "Day 5 - Pelling - Gangtok", description: "Morning after breakfast proceed to Gangtok. Check in the hotel and after taking some rest proceed to local Market visit. Overnight stay in Hotel." },
            { day: "Day 6 - Gangtok ( Local Gangtok )", description: "Morning after breakfast proceed to local Gangtok sightseeing like Tashi View Point, Banzakhri Falls, Cottage Industry and Handicraft Center, Flower Show, Dro - dul Chorten & Institute of Tibetology etc. Overnight stay in Hotel." },
            { day: "Day 7 - Gangtok ( Tsomgo Lake & Baba Mandir )", description: "Morning after breakfast proceed to excursion of Tsomgo Lake ( 12,400 ft. ) and Baba Mandir ( 13,200 ft. ). In evening back to Gangtok and Overnight stay in Hotel." },
            { day: "Day 8 - Gangtok - NJP Railway Station / IXB Airport Drop", description: "Morning after breakfast check out from Hotel and Drop at NJP Railway Station / IXB Airport with onward journey ." }
        ]
        },
        {
            variantId:    "ne-8n",
            duration:     "08 NIGHTS/09 DAYS",
            destinations: "Darjeeling - Kalimpong - Pelling - Gangtok",
            inclusions:   [
            "2 Nights Accommodation in Darjeeling",
            "2 Nights Accommodation in Pelling",
            "3 Nights Accommodation in Gangtok",
            "Welcome drink on arrival",
            "Daily Breakfast at Hotel",
            "Pick up and Drop at NJP Raliway Station / IXB Airport",
            "All transport and sightseeing by Individual Car",
            "All taxes are include."
        ],
            itinerary:    [
            { day: "Day 1 - NJP Railway Station / IXB Airport - Darjeeling ( 95 Kms. )", description: "On arrival at NJP Railway Station / IXB Airport, we will meet you and transfer to Darjeeling. Check in the hotel and day at leisure for local market visit. Overnight stay in Hotel." },
            { day: "Day 2 - Darjeeling ( Local Darjeeling )", description: "Early Morning proceed to Tiger hill to see the Spectacular Sunrise over Mt. Khangchendzongha ( 28,208 ft. Worlds 3rd highest peak ), on the way back visit Ghoom Monastery and Batasia Loop. Himalayan Mountaineering Institute, P.N.Zoological Park, Tenzing Rock, TIbetan Refugee Self-Help Center, Tea Garden, Japanese Temple etc. Overnight stay in Hotel." },
            { day: "Day 3 - Darjeeling - Kalimpong ( Local Kalimpong )", description: "Morning after breakfast proceed to Kalimpong. Check in the hotel and after taking some rest proceed to local Kalimpong sightseeing like Mangal Dham, Deolo Hill, Dr. Graham's Home, Golf Garden, Durpin Dara Hill & Flower Nurseries etc. Overnight stay in Hotel." },
            { day: "Day 4 - Kalimpong - Pelling", description: "Morning after breakfast proceed to Pelling. Check in the hotel and after taking some rest proceed to local Market visit. Overnight stay in Hotel." },
            { day: "Day 5 - Pelling", description: "Morning after breakfast proceed to full day sightseeing of Darap Village, Rimbi water Falls, Sewaro Rock Garden, Khecheopalri Lake& Khangchendzongha watefalls, Pemayantse Monastery, Rabdantse Ruins, New Halipad Ground etc. Overnight stay in Hotel." },
            { day: "Day 6 - Pelling - Gangtok", description: "Morning after breakfast proceed to Gangtok. Check in the hotel and after taking some rest proceed to local Market visit. Overnight stay in Hotel." },
            { day: "Day 7 - Gangtok ( Local Gangtok )", description: "Morning after breakfast proceed to local Gangtok sightseeing like Tashi View Point, Banzakhri Falls, Cottage Industry and Handicraft Centre, Flower Show, Dro - dul Chorten & Institute of Tibetology etc. Overnight stay in Hotel." },
            { day: "Day 8 - Gangtok ( Tsomgo Lake & Baba Mandir )", description: "Morning after breakfast proceed to excursion of Tsomgo Lake ( 12,400 ft. ) & Baba Mandir ( 13,200 ft. ). In evening back to Gangtok and Overnight stay in Hotel." },
            { day: "Day 9 - Gangtok - NJP Railway Station / IXB Airport Drop", description: "Morning after breakfast check out from Hotel and Drop at NJP Railway Station / IXB Airport with onward journey." }
        ]
        }
    ]
});
tourPackages.push({
    id:             62,
    title:          "Rajasthan Tour Package",
    price:          "Contact Us",
    category:       "domestic",
    region:         "rajasthan",
    image:          "Tour Package Images - Solanki Tours/Golden Triangle Tour.jpg",
    duration:       "03 NIGHTS/04 DAYS",
    destinations:   "Delhi - Jaipur - Delhi",
    inclusions:     [
            "1 Night Accommodation in Delhi",
            "2 Nights Accommodation in Jaipur",
            "Welcome drink on arrival",
            "Daily Breakfast at Hotel",
            "Pick up and Drop at Delhi",
            "All transport and sightseeing by Individual Car",
            "All taxes are include."
        ],
    itinerary:      [
            { day: "Day 1 - Delhi arrival ( Local Delhi )", description: "On arrival at Delhi, we will meet you and transfer to hotel. Check in the hotel and after taking some rest proceed to local Delhi sightseeing like Raj-Ghat, India Gate, President Bhawan, Qutub Minnar, Lotus Temple etc. Overnight stay in Hotel." },
            { day: "Day 2 - Delhi - Jaipur ( Local Jaipur ) 265 Kms.", description: "Morning after breakfast proceed to Jaipur- the fabled \"pink city\" of the desert named after Jai Singh, the former Maharaja of Jaipur. This is the only city in the world symbolizing the nine divisions of the universe through the nine rectangular sectors subdividing it. Arrive Jaipur and check in the hotel and evening free. Overnight stay in Hotel." },
            { day: "Day 3 - Jaipur ( Local Jaipur )", description: "Morning after breakfast proceed to local Jaipur Sightseeing like the majestic Amber Fort, is one that cannot be easily described. Ride up on Elephants to the former capital of the royals set against the backdrop of the wooded hills. Later visit the City Palace, Palace of Winds also known as Hawa Mahal, this elaborate building, now little more than a faÃ§ade, is encrusted with delicate screen sand carved balconies from which the royal ladies, confined to their quarters, could sneak views of the outside world. Past, present and future merge at Jai Singh's observatory, where time has been accurately measured since the 17th century. Overnight stay in Hotel." },
            { day: "Day 4 - Jaipur - Delhi Drop ( 265 Kms. )", description: "Morning after breakfast check out from Hotel and proceed to Delhi. Drop at Delhi airport, railway station with onward journey." }
        ],
    defaultVariant: 0,
    variants: [
        {
            variantId:    "raj-3n",
            duration:     "03 NIGHTS/04 DAYS",
            destinations: "Delhi - Jaipur - Delhi",
            inclusions:   [
            "1 Night Accommodation in Delhi",
            "2 Nights Accommodation in Jaipur",
            "Welcome drink on arrival",
            "Daily Breakfast at Hotel",
            "Pick up and Drop at Delhi",
            "All transport and sightseeing by Individual Car",
            "All taxes are include."
        ],
            itinerary:    [
            { day: "Day 1 - Delhi arrival ( Local Delhi )", description: "On arrival at Delhi, we will meet you and transfer to hotel. Check in the hotel and after taking some rest proceed to local Delhi sightseeing like Raj-Ghat, India Gate, President Bhawan, Qutub Minnar, Lotus Temple etc. Overnight stay in Hotel." },
            { day: "Day 2 - Delhi - Jaipur ( Local Jaipur ) 265 Kms.", description: "Morning after breakfast proceed to Jaipur- the fabled \"pink city\" of the desert named after Jai Singh, the former Maharaja of Jaipur. This is the only city in the world symbolizing the nine divisions of the universe through the nine rectangular sectors subdividing it. Arrive Jaipur and check in the hotel and evening free. Overnight stay in Hotel." },
            { day: "Day 3 - Jaipur ( Local Jaipur )", description: "Morning after breakfast proceed to local Jaipur Sightseeing like the majestic Amber Fort, is one that cannot be easily described. Ride up on Elephants to the former capital of the royals set against the backdrop of the wooded hills. Later visit the City Palace, Palace of Winds also known as Hawa Mahal, this elaborate building, now little more than a faÃ§ade, is encrusted with delicate screen sand carved balconies from which the royal ladies, confined to their quarters, could sneak views of the outside world. Past, present and future merge at Jai Singh's observatory, where time has been accurately measured since the 17th century. Overnight stay in Hotel." },
            { day: "Day 4 - Jaipur - Delhi Drop ( 265 Kms. )", description: "Morning after breakfast check out from Hotel and proceed to Delhi. Drop at Delhi airport, railway station with onward journey." }
        ]
        },
        {
            variantId:    "raj-4n-golden",
            duration:     "04 NIGHTS/05 DAYS",
            destinations: "Delhi - Agra - Jaipur ( Golden Triangle )",
            inclusions:   [
            "1 Night Accommodation in Delhi",
            "1 Night Accommodation in Agra",
            "2 Nights Accommodation in Jaipur",
            "Welcome drink on arrival",
            "Daily Breakfast at Hotel",
            "Pick up and Drop at Delhi",
            "All transport and sightseeing by Individual Car",
            "All taxes are include."
        ],
            itinerary:    [
            { day: "Day 1 - Delhi arrival ( Local Delhi )", description: "On arrival at Delhi, we will meet you and transfer to hotel. Check in the hotel and after taking some rest proceed to local Delhi sightseeing like Raj-Ghat, India Gate, President Bhawan, Qutub Minnar, Lotus Temple etc. Overnight stay in Hotel." },
            { day: "Day 2 - Delhi - Agra ( Local Agra ) 200 Kms.", description: "Morning after breakfast proceed to Agra and en route Sikandra sightseeing. In Agra check in the hotel and proceed to local Agra sightseeing like Taj Mahal, Agra Fort, It mad ud daulla etc. Overnight stay in Hotel." },
            { day: "Day 3 - Agra - Jaipur ( Local Jaipur ) 235 Kms.", description: "Morning after breakfast proceed to Jaipur- the fabled \"pink city\" of the desert named after Jai Singh, the former Maharaja of Jaipur. This is the only city in the world symbolizing the nine divisions of the universe through the nine rectangular sectors subdividing it. The palaces and forts of the yesteryears, which were witnesses to the royal processions and splendours are now living monuments enroute visiting Fatehpur Sikri-a perfectly preserved red sandstone Ã¢â¬Åghost town\" which was the estranged capital of mughal emperor Akbar, built in 1569 and deserted when its water supply failed. Arrive Jaipur in late evening & transfer to hotel. Overnight stay in Hotel." },
            { day: "Day 4 - Jaipur ( Local Jaipur )", description: "Morning after breakfast proceed to local Jaipur Sightseeing like the majestic Amber Fort, is one that cannot be easily described. Ride up on Elephants to the former capital of the royals set against the backdrop of the wooded hills. Later visit the City Palace, Palace of Winds also known as Hawa Mahal, this elaborate building, now little more than a faÃÂ§ade, is encrusted with delicate screen sand carved balconies from which the royal ladies, confined to their quarters, could sneak views of the outside world. Past, present and future merge at Jai Singh's observatory, where time has been accurately measured since the 17th century. Overnight stay in Hotel." },
            { day: "Day 5 - Jaipur- Delhi Drop 265 Kms.", description: "Morning after breakfast proceed to Delhi and Drop at Delhi airport, railway station with onward journey .." }
        ]
        },
        {
            variantId:    "raj-4n-pushkar",
            duration:     "04 NIGHTS/05 DAYS",
            destinations: "Delhi - Jaipur - Ajmer - Pushkar",
            inclusions:   [
            "1 Night Accommodation in Delhi",
            "1 Night Accommodation in Pushkar",
            "2 Nights Accommodation in Jaipur",
            "Welcome drink on arrival",
            "Daily Breakfast at Hotel",
            "Pick up and Drop at Delhi",
            "All transport and sightseeing by Individual Car",
            "All taxes are include."
        ],
            itinerary:    [
            { day: "Day 1 - Delhi arrival ( Local Delhi )", description: "On arrival at Delhi, we will meet you and transfer to hotel. Check in the hotel and after taking some rest proceed to local Delhi sightseeing like Raj-Ghat, India Gate, President Bhawan, Qutub Minnar, Lotus Temple etc. Overnight stay in Hotel." },
            { day: "Day 2 - Delhi - Jaipur ( Local Jaipur ) 265 Kms.", description: "Morning after breakfast proceed to Jaipur- the fabled â€œpink city\" of the desert named after Jai Singh, the former Maharaja of Jaipur. This is the only city in the world symbolizing the nine divisions of the universe through the nine rectangular sectors subdividing it. Arrive Jaipur and check in the hotel and evening free. Overnight stay in Hotel." },
            { day: "Day 3 - Jaipur ( Local Jaipur )", description: "Morning after breakfast proceed to local Jaipur Sightseeing like the majestic Amber Fort, is one that cannot be easily described. Ride up on Elephants to the former capital of the royals set against the backdrop of the wooded hills. Later visit the City Palace, Palace of Winds also known as Hawa Mahal, this elaborate building, now little more than a faÃ§ade, is encrusted with delicate screen sand carved balconies from which the royal ladies, confined to their quarters, could sneak views of the outside world. Past, present and future merge at Jai Singh's observatory, where time has been accurately measured since the 17th century. Overnight stay in Hotel." },
            { day: "Day 4 - Jaipur - Ajmer - Pushkar ( 145 Kms. )", description: "Morning after breakfast proceed to Ajmer. In Ajmer visit The Dargah of the Great Sufi Sain Khwaja Moinuddin Chishti, Madintual Hind and The Madina of India and Mosque of white marble then proceed to Pushkar. Pushkar is just 15kms from Ajmer, In Pushkar visit Brahma Temple. Pushkat boasts of its temple and evening free for local Market visit. Overnight stay at Hotel." },
            { day: "Day 5 - Pushkar - Delhi Drop ( 400 Kms. )", description: "Morning after breakfast check out from Hotel and proceed to Delhi. Drop at Delhi airport, railway station with onward journey" }
        ]
        },
        {
            variantId:    "raj-6n",
            duration:     "06 NIGHTS/07 DAYS",
            destinations: "Delhi - Jaipur - Ajmer - Pushkar - Udaipur",
            inclusions:   [
            "1 Night Accommodation in Delhi",
            "1 Night Accommodation in Pushkar",
            "2 Nights Accommodation in Jaipur",
            "2 Nights Accommodation in Udaipur",
            "Welcome drink on arrival",
            "Daily Breakfast at Hotel",
            "Pick up and Drop at Udaipur",
            "All transport and sightseeing by Individual Car",
            "All taxes are include."
        ],
            itinerary:    [
            { day: "Day 1 - Delhi arrival ( Local Delhi )", description: "On arrival at Delhi, we will meet you and transfer to hotel. Check in the hotel and after taking some rest proceed to local Delhi sightseeing like Raj-Ghat, India Gate, President Bhawan, Qutub Minnar, Lotus Temple etc. Overnight stay in Hotel." },
            { day: "Day 2 - Delhi - Jaipur ( Local Jaipur ) 265 Kms.", description: "Morning after breakfast proceed to Jaipur- the fabled â€œpink city\" of the desert named after Jai Singh, the former Maharaja of Jaipur. This is the only city in the world symbolizing the nine divisions of the universe through the nine rectangular sectors subdividing it. Arrive Jaipur and check in the hotel and evening free. Overnight stay in Hotel." },
            { day: "Day 3 - Jaipur ( Local Jaipur )", description: "Morning after breakfast proceed to local Jaipur Sightseeing like the majestic Amber Fort, is one that cannot be easily described. Ride up on Elephants to the former capital of the royals set against the backdrop of the wooded hills. Later visit the City Palace, Palace of Winds also known as Hawa Mahal, this elaborate building, now little more than a faÃ§ade, is encrusted with delicate screen sand carved balconies from which the royal ladies, confined to their quarters, could sneak views of the outside world. Past, present and future merge at Jai Singh's observatory, where time has been accurately measured since the 17th century. Overnight stay in Hotel." },
            { day: "Day 4 - Jaipur - Ajmer - Pushkar ( 145 Kms. )", description: "Morning after breakfast proceed to Ajmer. In Ajmer visit The Dargah of the Great Sufi Sain Khwaja Moinuddin Chishti, Madintual Hind and The Madina of India and Mosque of white marble then proceed to Pushkar. Pushkar is just 15kms from Ajmer, In Pushkar visit Brahma Temple. Pushkat boasts of its temple and evening free for local Market visit. Overnight stay at Hotel." },
            { day: "Day 5 - Pushkar - Udaipur ( 300 Kms. )", description: "Morning after breakfast proceed to Udaipur. En route sightseeing of Ranakpur. In evening Check in the hotel in Udaipur and evening free for local market visit. Overnight stay at Hotel." },
            { day: "Day 6 - Udaipur ( Local Udaipur )", description: "Morning after breakfast proceed to local sightseeing of Udaipur. Visit the Lake Pichola set on The backdrop of Aravali hills, The City Palace museum, the Jagdish Temple, Sahelion kin Bari ( Queen's resort for their friends ) Bhartiya Lok Kala Mandir and Pratap Memorial. Overnight stay in Hotel." },
            { day: "Day 7 - Udipur Drop( 400 Kms. )", description: "Morning after breakfast check out from Hotel and Drop at Udaipur airport, railway station with onward journey ." }
        ]
        },
        {
            variantId:    "raj-7n",
            duration:     "07 NIGHTS/08 DAYS",
            destinations: "Udaipur - Mount Abu - Jodhpur - Jaisalmer - Mandawa",
            inclusions:   [
            "2 Nights Accommodation in Udaipur",
            "1 Night Accommodation in Mount Abu",
            "1 Night Accommodation in Jodhpur",
            "2 Nights Accommodation in Jaisalmer",
            "1 Night Accommodation in Mandawa",
            "Welcome drink on arrival",
            "Daily Breakfast at Hotel",
            "Pick up and Drop at Mandawa",
            "All transport and sightseeing by Individual Car",
            "All taxes are include."
        ],
            itinerary:    [
            { day: "Day 1 - Udaipur arrival", description: "On arrival at Udaipur, we will meet you and transfer to hotel. Check in the hotel and day at leisure for local market visit. Overnight stay in Hotel." },
            { day: "Day 2 - Udaipur ( Local Udaipur )", description: "Morning after breakfast proceed to local sightseeing of Udaipur. Visit the Lake Pichola set on The backdrop of Aravali hills, The City Palace museum, the Jagdish Temple, Sahelion kin Bari ( Queen's resort for their friends ) Bhartiya Lok Kala Mandir and Pratap Memorial. Overnight stay in Hotel." },
            { day: "Day 3 - Udaipur - Mount Abu", description: "Morning after breakfast proceed to Mount Abu. Mount Abu is a Hill station in Rajasthan. In Mount Abu a number of Jain Temples. In Mount Abu check in the hotel and proceed to local Mount abu sightseeing like Delwara Jain Temple Complex, Nakki Lake and Sunset Point etc. Overnight stay in Hotel." },
            { day: "Day 4 - Mount Abu - Jodhpur", description: "Morning after breakfast proceed to Jodhpur. Check in the hotel and proceed to local Jodhpur sightseeing like Umaid Bhawan, The most striking part is the spectacle view of the marvelous cenotaphs and the hall of local heros of the wars. Evening free for local market visit and overnight stay in Hotel." },
            { day: "Day 5 - Jodhpur - Jaisalmer", description: "Morning after breakfast proceed to Jaisalmer. Check in the hotel and proceed to local Jaisalmer. Jaisalmer is famous for the Unique Havelis. In Jaisalmer sightseeing of Jain Temples, The Sonar Quila ( the fort ) Patwaon ki haveli and some other havelis in evening visit the attraction of the Town is Gadisar Lake. Overnight stay in Hotel." },
            { day: "Day 6 - Jaisalmer", description: "Morning after breakfast proceed to local Jaisalmer sightseeing like The exciting Sam or Khuri village ( Famous for Camel Cart ride ) and Sunset point on the sand dunes. You can enjoy the Camel safari in the Jaisalmet desert and the cultural programs preformed by the local artists and musicians and other desert safari etc. Overnight stay in Hotel." },
            { day: "Day 7 - Jaisalmer - Mandawa", description: "Morning after breakfast proceed to Mandawa. Check in the hotel and after taking some rest proceed to local Mandawa sightseeing like The exquisite small village of Shekhawati this place is embellished by many ravishing havelis of 18th and 19th century built by the rich and the famous merchants and the famous paintings of the village. Overnight stay in Hotel." },
            { day: "Day 8 - Mandawa", description: "Morning after breakfast check out from hotel and drop at airport, railway station with onward journey" }
        ]
        },
        {
            variantId:    "raj-13n",
            duration:     "13 NIGHTS/14 DAYS",
            destinations: "Cochin - Delhi - Agra - Jaipur - Ajmer - Pushkar - Udaipur - Mount Abu - Jodhpur - Jaisalmer - Mandawa",
            inclusions:   [
            "1 Night Accommodation in Delhi",
            "1 Night Accommodation in Agra",
            "2 Night Accommodation in Jaipur",
            "1 Night Accommodation in Pushkar",
            "2 Nights Accommodation in Udaipur",
            "1 Night Accommodation in Mount Abu",
            "1 Night Accommodation in Jodhpur",
            "2 Nights Accommodation in Jaisalmer",
            "1 Night Accommodation in Mandawa",
            "Welcome drink on arrival",
            "Daily Breakfast at Hotel",
            "Pick up and Drop at Ex Delhi",
            "All transport and sightseeing by Individual Car",
            "All taxes are include."
        ],
            itinerary:    [
            { day: "Day 1 - Delhi arrival ( Local Delhi )", description: "On arrival at Delhi, we will meet you and transfer to hotel. Check in the hotel and after taking some rest proceed to local Delhi sightseeing like Raj-Ghat, India Gate, President Bhawan, Qutub Minnar, Lotus Temple etc. Overnight stay in Hotel." },
            { day: "Day 2 - Delhi - Agra ( Local Agra ) 200 Kms.", description: "Morning after breakfast proceed to Agra and en route Sikandra sightseeing. In Agra check in the hotel and proceed to local Agra sightseeing like Taj Mahal, Agra Fort, It mad ud daulla etc. Overnight stay in Hotel." },
            { day: "Day 3 - Agra - Jaipur ( Local Jaipur ) 235 Kms.", description: "Morning after breakfast proceed to Jaipur- the fabled â€œpink city\" of the desert named after Jai Singh, the former Maharaja of Jaipur. This is the only city in the world symbolizing the nine divisions of the universe through the nine rectangular sectors subdividing it. The palaces and forts of the yesteryears, which were witnesses to the royal processions and splendours are now living monuments enroute visiting Fatehpur Sikri-a perfectly preserved red sandstone â€œghost town\" which was the estranged capital of mughal emperor Akbar, built in 1569 and deserted when its water supply failed. Arrive Jaipur in late evening & transfer to hotel. Overnight stay in Hotel." },
            { day: "Day 4 - Jaipur ( Local Jaipur )", description: "Morning after breakfast proceed to local Jaipur Sightseeing like the majestic Amber Fort, is one that cannot be easily described. Ride up on Elephants to the former capital of the royals set against the backdrop of the wooded hills. Later visit the City Palace, Palace of Winds also known as Hawa Mahal, this elaborate building, now little more than a faÃ§ade, is encrusted with delicate screen sand carved balconies from which the royal ladies, confined to their quarters, could sneak views of the outside world. Past, present and future merge at Jai Singh's observatory, where time has been accurately measured since the 17th century. Overnight stay in Hotel." },
            { day: "Day 5 - Jaipur - Ajmer - Pushkar ( 145 Kms. )", description: "Morning after breakfast proceed to Ajmer. In Ajmer visit The Dargah of the Great Sufi Sain Khwaja Moinuddin Chishti, Madintual Hind and The Madina of India and Mosque of white marble then proceed to Pushkar. Pushkar is just 15kms from Ajmer, In Pushkar visit Brahma Temple. Pushkat boasts of its temple and evening free for local Market visit. Overnight stay at Hotel." },
            { day: "Day 6 - Pushkar - Udaipur", description: "Morning after breakfast proceed to Udaipur. Check in the hotel and after taking some rest proceed to local market visit. Overnight stay in Hotel." },
            { day: "Day 7 - Udaipur ( Local Udaipur )", description: "Morning after breakfast proceed to local sightseeing of Udaipur. Visit the Lake Pichola set on The backdrop of Aravali hills, The City Palace museum, the Jagdish Temple, Sahelion kin Bari ( Queen's resort for their friends ) Bhartiya Lok Kala Mandir and Pratap Memorial. Overnight stay in Hotel." },
            { day: "Day 8 - Udaipur - Mount Abu", description: "Morning after breakfast proceed to Mount Abu. Mount Abu is a Hill station in Rajasthan. In Mount Abu a number of Jain Temples. In Mount Abu check in the hotel and proceed to local Mount abu sightseeing like Delwara Jain Temple Complex, Nakki Lake and Sunset Point etc. Overnight stay in Hotel." },
            { day: "Day 9 - Mount Abu - Jodhpur", description: "Morning after breakfast proceed to Jodhpur. Check in the hotel and proceed to local Jodhpur sightseeing like Umaid Bhawan, The most striking part is the spectacle view of the marvelous cenotaphs and the hall of local heros of the wars. Evening free for local market visit and overnight stay in Hotel." },
            { day: "Day 10 - Jodhpur - Jaisalmer", description: "Morning after breakfast proceed to Jaisalmer. Check in the hotel and proceed to local Jaisalmer. Jaisalmer is famous for the Unique Havelis. In Jaisalmer sightseeing of Jain Temples, The Sonar Quila ( the fort ) Patwaon ki haveli and some other havelis in evening visit the attraction of the Town is Gadisar Lake. Overnight stay in Hotel." },
            { day: "Day 11 - Jaisalmer", description: "Morning after breakfast proceed to local Jaisalmer sightseeing like The exciting Sam or Khuri village ( Famous for Camel Cart ride ) and Sunset point on the sand dunes. You can enjoy the Camel safari in the Jaisalmet desert and the cultural programs preformed by the local artists and musicians and other desert safari etc. Overnight stay in Hotel." },
            { day: "Day 12 - Jaisalmer - Mandawa", description: "Morning after breakfast proceed to Mandawa. Check in the hotel and after taking some rest proceed to local Mandawa sightseeing like The exquisite small village of Shekhawati this place is embellished by many ravishing havelis of 18th and 19th century built by the rich and the famous merchants and the famous paintings of the village. Overnight stay in Hotel." },
            { day: "Day 13 - Mandawa - Bikaner", description: "Morning after breakfast proceed to Bikaner. Check in the hotel and after taking some rest proceed to local Bikaner sightseeing like Havelis, Famous park and cultural programs etc. Overnight stay at Hotel." },
            { day: "Day 14 - Bikaner - Delhi", description: "Morning after breakfast check out from hotel and proceed to Delhi. Drop at Delhi airport, railway station with onward journey" }
        ]
        }
    ]
});
tourPackages.push({
    id:             68,
    title:          "Uttarakhand Tour Package",
    price:          "Contact Us",
    category:       "domestic",
    region:         "uttarakhand",
    image:          "Tour Package Images - Solanki Tours/Uttarakhand Hill Station tour.jpg",
    duration:       "03 NIGHTS/04 DAYS",
    destinations:   "Delhi - Nainital - Delhi",
    inclusions:     [
            "3 Nights Accommodation in Nanital",
            "Welcome drink on arrival",
            "Daily Breakfast & Dinner at Hotel",
            "Pick up and Drop ex Delhi",
            "All Transport and Sightseeing by Individual Car",
            "All Taxes Include."
        ],
    itinerary:      [
            { day: "Day 1 - Delhi - Nainital", description: "On arrival at Delhi, our representative will meet you and proceed to Nanital. Check in the hotel and after some rest visit to local market Overnight stay at Hotel." },
            { day: "Day 2 - Nainital", description: "Morning after breakfast visit to Nanital sightseeing like Naini Lake, Mall road, Boating Club, Cable Car Ride & Thandi Sadak etc. Overnight stay at Hotel." },
            { day: "Day 3 - Nainital", description: "Morning after breakfast proceed to Nanital sightseeing like lakes tour of Bhim Tal, Sat Tal, Naukuchia Tal , Snow point & Mall road. Overnight stay at Hotel." },
            { day: "Day 4 - Nanital - Delhi", description: "Morning after breakfast check out from hotel and proceed to Delhi. Drop at Delhi airport, railway station for onward journey." }
        ],
    defaultVariant: 0,
    variants: [
        {
            variantId:    "utt-3n",
            duration:     "03 NIGHTS/04 DAYS",
            destinations: "Delhi - Nainital - Delhi",
            inclusions:   [
            "3 Nights Accommodation in Nanital",
            "Welcome drink on arrival",
            "Daily Breakfast & Dinner at Hotel",
            "Pick up and Drop ex Delhi",
            "All Transport and Sightseeing by Individual Car",
            "All Taxes Include."
        ],
            itinerary:    [
            { day: "Day 1 - Delhi - Nainital", description: "On arrival at Delhi, our representative will meet you and proceed to Nanital. Check in the hotel and after some rest visit to local market Overnight stay at Hotel." },
            { day: "Day 2 - Nainital", description: "Morning after breakfast visit to Nanital sightseeing like Naini Lake, Mall road, Boating Club, Cable Car Ride & Thandi Sadak etc. Overnight stay at Hotel." },
            { day: "Day 3 - Nainital", description: "Morning after breakfast proceed to Nanital sightseeing like lakes tour of Bhim Tal, Sat Tal, Naukuchia Tal , Snow point & Mall road. Overnight stay at Hotel." },
            { day: "Day 4 - Nanital - Delhi", description: "Morning after breakfast check out from hotel and proceed to Delhi. Drop at Delhi airport, railway station for onward journey." }
        ]
        },
        {
            variantId:    "utt-4n",
            duration:     "04 NIGHTS/05 DAYS",
            destinations: "Delhi -Nainital - Corbett - Delhi",
            inclusions:   [
            "2 Nights Accommodation in Nanital",
            "2 Nights Accommodation in Corbett",
            "Welcome drink on arrival",
            "Daily Breakfast & Dinner at Hotel",
            "Pick up and Drop ex Delhi",
            "All Transport and Sightseeing by Individual Car",
            "All Taxes Include."
        ],
            itinerary:    [
            { day: "Day 1 - Delhi - Nainital", description: "On arrival at Delhi, our representative will meet you and proceed to Nanital. Check in the hotel and after some rest visit to local market Overnight stay at Hotel." },
            { day: "Day 2 - Nainital", description: "Morning after breakfast visit to Nanital sightseeing like Naini Lake, Mall road, Boating Club, Cable Car Ride & Thandi Sadak etc. Overnight stay at Hotel." },
            { day: "Day 3 -Nainital - Corbett", description: "Morning after breakfast visit to Corbett- a national park most famous for hill & Shivalik ranges and is being called as the perfect tigers land. Check in the hotel in Corbett and rest of the day free. Overnight stay at Hotel." },
            { day: "Day 4 - Corbett", description: "Morning after breakfast proceed to Jim Park Corbett, Elephant Safari then back to Hotel. Overnight stay at Hotel." },
            { day: "Day 5 - Corbett", description: "Morning after breakfast check out from hotel and proceed to Delhi. Drop at Delhi airport, railway station for your onward journey." }
        ]
        },
        {
            variantId:    "utt-6n",
            duration:     "06 NIGHTS/07 DAYS",
            destinations: "Delhi - Nainital - Corbett - Mussoorie - Delhi",
            inclusions:   [
            "2 Nights Accommodation in Nanital",
            "2 Nights Accommodation in Corbett",
            "2 Nights Accommodation in Mussoorie",
            "Welcome drink on arrival",
            "Daily Breakfast & Dinner at Hotel",
            "Pick up and Drop ex Delhi",
            "All Transport and Sightseeing by Individual Car",
            "All Taxes Include."
        ],
            itinerary:    [
            { day: "Day 1 - Delhi - Nainital", description: "On arrival at Delhi, our representative will meet you and proceed to Nanital. Check in the hotel and after some rest visit to local market Overnight stay at Hotel." },
            { day: "Day 2 - Nainital", description: "Morning after breakfast visit to Nanital sightseeing like Naini Lake, Mall road, Boating Club, Cable Car Ride & Thandi Sadak etc. Overnight stay at Hotel." },
            { day: "Day 3 -Nainital - Corbett", description: "Morning after breakfast visit to Corbett- a national park most famous for hill & Shivalik ranges and is being called as the perfect tigers land. Check in the hotel in Corbett and rest of the day free. Overnight stay at Hotel." },
            { day: "Day 4 - Corbett", description: "Morning after breakfast proceed to Jim Park Corbett, Elephant Safari then back to Hotel. Overnight stay at Hotel." },
            { day: "Day 5 - Corbett - Mussoorie", description: "Morning after breakfast proceed to Mussoorie. Check in the hotel and after taking some rest proceed to local Market and Mall Road visit. Overnight stay at Hotel." },
            { day: "Day 6 - Mussoorie", description: "Morning after breakfast proceed to local Sightseeing like Kempty Fall, Lal Tibba, Gun Hill, Municipal Garden etc. Overnight stay at Hotel." },
            { day: "Day 7 - Mussoorie - Delhi", description: "Morning after breakfast check out from hotel and proceed to Delhi. Drop at Delhi airport, railway station for onward journey." }
        ]
        },
        {
            variantId:    "utt-8n",
            duration:     "08 NIGHTS/09 DAYS",
            destinations: "Delhi -Nainital - Corbett - Ranikhet - Kausani - Mussoorie - Delhi",
            inclusions:   [
            "2 Nights Accommodation in Nanital",
            "2 Nights Accommodation in Corbett",
            "2 Nights Accommodation in Mussoorie",
            "2 Nights Accommodation in Ranikhet",
            "Welcome drink on arrival",
            "Daily Breakfast & Dinner at Hotel",
            "Pick up and Drop ex Delhi",
            "All Transport and Sightseeing by Individual Car",
            "All Taxes Include."
        ],
            itinerary:    [
            { day: "Day 1 - Delhi - Nainital", description: "On arrival at Delhi, our representative will meet you and proceed to Nanital. Check in the hotel and after some rest visit to local market Overnight stay at Hotel." },
            { day: "Day 2 - Nainital", description: "Morning after breakfast visit to Nanital sightseeing like Naini Lake, Mall road, Boating Club, Cable Car Ride & Thandi Sadak etc. Overnight stay at Hotel." },
            { day: "Day 3 -Nainital - Corbett", description: "Morning after breakfast visit to Corbett- a national park most famous for hill & Shivalik ranges and is being called as the perfect tigers land. Check in the hotel in Corbett and rest of the day free. Overnight stay at Hotel." },
            { day: "Day 4 - Corbett", description: "Morning after breakfast proceed to Jim Park Corbett, Elephant Safari then back to Hotel. Overnight stay at Hotel." },
            { day: "Day 5 - Corbett - Ranikhet", description: "Morning after breakfast proceed to Ranikhet. Check in the hotel and after taking some rest proceed to local market, ancient Temple and The Majestic Himalayas sightseeing . Overnight stay at Hotel." },
            { day: "Day 6 - Ranikhet - Kausani - Ranikhet", description: "Morning after breakfast proceed to Kausani. In Kausani sightseeing of Gita-Anashakti Yoga and near by River Kosi there's a picnic spot. In evening back to Ranikhet and Overnight stay at Hotel." },
            { day: "Day 7 - Ranikhet - Mussoorie", description: "Morning after breakfast proceed to Mussoorie. Check in the hotel and after taking some rest proceed to local Market and Mall Road visit. Overnight stay at Hotel." },
            { day: "Day 8 - Mussoorie", description: "Morning after breakfast proceed to local Sightseeing like Kempty Fall, Lal Tibba, Gun Hill, Municipal Garden etc. Overnight stay at Hotel." },
            { day: "Day 9 - Mussoorie - Delhi", description: "Morning after breakfast check out from hotel and proceed to Delhi. Drop at Delhi airport, railway station with onward journey" }
        ]
        }
    ]
});
tourPackages.push({
    id:           72,
    title:        "Dubai",
    duration:     "03 NIGHTS/04 DAYS",
    destinations: "Dubai",
    price:        "Contact Us",
    category:     "international",
    region:       "dubai",
    inclusions:   [
            "3 Nights accommodation at Hotel",
            "Daily Breakfast",
            "Dubai Half Day City Tour",
            "Dessert Safari with Dinner (with Dune Bashing, Belly Dance and Bar beque Dinner)",
            "Dhow Cruise with Dinner",
            "Airport Hotel Return Transfers",
            "All Hotel taxes and Service charges."
        ],
    itinerary:    [
            { day: "Day 1 - Dubai", description: "Arrive in Dubai International Airport and meet the local tour operator. Get transferred to the Hotel. Check-in to the Hotel. Remaining day at own leisure. Enjoy an overnight stay at Hotel." },
            { day: "Day 2 - Dubai", description: "Enjoy Breakfast at the Hotel. Later proceed for Half day City Tour. Enjoy Desert Safari in the evening. After Dinner, return back to the Hotel. Enjoy overnight stay at Hotel." },
            { day: "Day 3 - Dubai", description: "Enjoy Breakfast in the Hotel. Day free at own leisure. In the evening enjoy Dhow Cruise with Dinner. Overnight stay at Hotel." },
            { day: "Day 4 - Dubai", description: "Enjoy Breakfast at the Hotel. Check-out from the Hotel and get transferred to the Airport." }
        ],
    image:        "Tour Package Images - Solanki Tours/Dubai Tour Package.jpg"
});
tourPackages.push({
    id:           73,
    title:        "Hongkong",
    duration:     "05 NIGHTS/06 DAYS",
    destinations: "Hongkong - Macau - Star Pisces",
    price:        "Contact Us",
    category:     "international",
    region:       "hongkong",
    inclusions:   [
            "2 Nights accommodation in Hong Kong.",
            "2 Nights accommodation in Macau.",
            "1 Night accommodation on Star Pisces",
            "Daily Buffet Breafast",
            "All Meals on the Cruise.",
            "Half day Hong Kong City tour",
            "Half day Macau City tour with Indian lunch.",
            "Return Ferry tickets Hong Kong - Macau - Hong Kong",
            "Return Airport Transfers & Cruise Terminal Transfers",
            "All Transfers and Sightseeing on SIC basis",
            "All Hotel taxes and Service charges."
        ],
    itinerary:    [
            { day: "Day 1 - Arrival In Hong Kong", description: "Meals:On arrival in Hong Kong, transfer to the hotel. Check-in to the hotel. In the evening embark on an exciting tour of Hong Kong Island covering the Victoria Peak, which attracts close to 7 million visitors annually. Also, visit the Aberdeen Fishing Village, which is home to the boat people (fishermen) and renders a picturesque view of fishing boats, trawlers and yacht. Return to the hotel for a comfortable overnight stay." },
            { day: "Day 2 - Hong Kong (Day At Leisure)", description: "After enjoying breakfast, spend the day at leisure." },
            { day: "Day 3 - Hong Kong - Star Pisces", description: "Breakfast in the Hotel. Remaining Day is Free at own Leisure. Later transfer to Cruise Terminal to board the Star Pisces. Enjoy overnight stay on Cruise." },
            { day: "Day 4 - Star Pisces - Hong Kong - Macau", description: "Disembark Cruise. Meet & Assistance at Cruise terminal and transfer to Ferry Pier to take ferry for Macau. Arrive Macau and transfer to the Hotel, where you will Check in (Normal Check in time is 15:00 Hours). Overnight stay at hotel in Macau." },
            { day: "Day 5 - Macau Sightseeing Tour", description: "After a delicious breakfast, go for a half-day city tour of Macau, covering places such as the Ruins of St. Paul's Church, a 17th century Portuguese Cathedral and the Senado Square, which has been Macau's urban centre for centuries. During this tour, you will also get to visit other important attractions such as the Na Cha Temple, section of the old city walls and A-Ma Temple. Afterwards have a comfortable overnight stay at the hotel." },
            { day: "Day 6 - Macau-Hong Kong Airport", description: "After breakfast at the hotel, check-out and transfer by hotel complimentary shuttle to pier and take direct ferry to Hong Kong airport to board your flight for back home." }
        ],
    image:        "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=600"
});
tourPackages.push({
    id:           74,
    title:        "Paris",
    duration:     "02 NIGHTS/03 DAYS",
    destinations: "Paris",
    price:        "Contact Us",
    category:     "international",
    region:       "paris",
    inclusions:   [
            "Tour inclusions available on inquiry — please contact us for full package details."
        ],
    itinerary:    [
            { day: "Day 1 - Arrive Paris", description: "Welcome to Paris, the fashion capital of the world, where you begin your Europe Tour. On Arrival, you will be met by our Travel Representative outside the customs area, who will welcome you and take you to the hotel for check-in. Enjoy Dinner & overnight stay at hotel in Paris." },
            { day: "Day 2 - Paris City tour", description: "After breakfast, you will proceed for Paris City tour. See Arc de Triomphe, the Champs Elysees, arguably the most well known avenue in the world, the magnificent Opera, Town Hall and the National Assembly, Louvre the famous Notre Dame Cathedral. Later visit Eiffel Tower, the symbol of Paris. Evening is free for leisure. Enjoy Dinner & overnight stay at hotel in Paris." },
            { day: "Day 3 - Paris-Departure", description: "After a continental breakfast, you will Check-out from the hotel and drp to airport fo your further destination." }
        ],
    image:        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600"
});
tourPackages.push({
    id:           75,
    title:        "Singapore",
    duration:     "03 NIGHTS/04 DAYS",
    destinations: "Singapore",
    price:        "Contact Us",
    category:     "international",
    region:       "singapore",
    inclusions:   [
            "3 Nights accommodation at Hotel",
            "Daily Breakfast",
            "Singapore Half Day City Tour",
            "Airport Hotel Return Transfers",
            "All Hotel taxes and Service charges."
        ],
    itinerary:    [
            { day: "Day 1 - Arrive Singapore", description: "Arrive Singapore, one of the most enjoyable cities in South East Asia. Meet with our local tour operator representative. Transfer to the hotel, where you will Check-in. Evening is free at own leisure to explore Singapore and savour its finest delicacies. Overnight stay at hotel." },
            { day: "Day 2 - Singapore", description: "Enjoy breakfast at hotel. Remaining day is Free at own Leisure. You will be provided 2-in-1 Hippo Pass which offers you unlimited access to travel in Hippo City Hop on-Hop off buses for full two days. The buses cover all the major attractions of Singapore and you can hop onâ€\"hop off multiple times during the day. Enjoy the attractions of Singapore as per your choice and leisure. Overnight stay at Hotel." },
            { day: "Day 3 - Singapore", description: "Enjoy breakfast at hotel. Rest of the day at leisure to explore the City on your own or you can opt for some optional Sightseeing tour (at Additional Cost). Overnight stay at hotel." },
            { day: "Day 4 - Singapore", description: "Enjoy breakfast at hotel. Later Check-out from hotel (as per hotels Check out time). Later transfer to the Airport." }
        ],
    image:        "Tour Package Images - Solanki Tours/Singapore Tour Package.jpg"
});
tourPackages.push({
    id:           76,
    title:        "Srilanka",
    duration:     "04 NIGHTS/05 DAYS",
    destinations: "Srilanka",
    price:        "Contact Us",
    category:     "international",
    region:       "srilanka",
    inclusions:   [
            "Transport in an A/C Micro van with the service of an English-speaking chauffeur Guide.",
            "Sightseeing as mentioned above.",
            "Value added tax.",
            "Meeting and Assistance at the airport."
        ],
    itinerary:    [
            { day: "Day 1 -Arrive Sri Lanka", description: "Upon arrival in Sri lanka, our representative will meet you and transfer to Dambulla. Visit to Polonnaruwa in Afternoon and return to hotel till evening. Overnight stay at hotel." },
            { day: "Day 2 - Sri Lanka", description: "After breakfast climb the Sigiriya Rock fortress. Thereafter proceed to Kandy. En route visit a spice garden and a batik factory. Arrive in Kandy and check-in to hotel. Rest of the day at leisure. Overnight stay at Hotel" },
            { day: "Day 3 - Sri Lanka", description: "After breakfast commence sightseeing in Kandy including Upper Lake Drive, Market Square, the Temple of the Sacred Tooth Relic and Royal Botanical gardens." },
            { day: "Day 4 - Sri Lanka", description: "After breakfast proceed to Colombo. Afternoon commence sightseeing and shopping in Colombo. Overnight stay at Hotel" },
            { day: "Day 5 - Sri Lanka", description: "After breakfast transfer to airport to connect with the departure flight." }
        ],
    image:        "Tour Package Images - Solanki Tours/Sri Lanka Tour Package.jpg"
});
tourPackages.push({
    id:           77,
    title:        "Switzerland",
    duration:     "04 NIGHTS/05 DAYS",
    destinations: "Switzerland",
    price:        "Contact Us",
    category:     "international",
    region:       "switzerland",
    inclusions:   [
            "Tour inclusions available on inquiry — please contact us for full package details."
        ],
    itinerary:    [
            { day: "Day 1 - Arrive Switzerland (by Coach)", description: "On arrival in Zurich, transfer to the hotel where you will Check in. Rest day at leisure. Enjoy Dinner & overnight stay at hotel in Switzerland." },
            { day: "Day 2 - Switzerland- Zurich City tour + Rhine Falls", description: "After breakfast, you will proceed for an Orientation tour of Zurich. visit the St. Peter's Church and the famous churches of Fraumunster and Grossmunster with its twin Romanesque towers. Later we drive to Rhine Falls. The Rhine Falls is the largest plain waterfall in Europe, near the town of Schaffhausen in northern Switzerland. Fall are 150 m (450 Ft.) Wide & 23 m (75 Ft.) High. Return back to the Hotel. Enjoy Dinner & overnight stay at hotel in Switzerland." },
            { day: "Day 3 - Switzerland", description: "After a continental breakfast, the day is free OR we suggest you to take a full day excursion to Mount Titlis with Ice-Flyer and Lucerne City tour. visit to Mt. Titlis. Your journey to Mt. Titlis pass through a series of three different cable cars. At Mt. Titlis you have free time to play and enjoy in the snow, visit the Ice Cave or just relax at the restaurant. Later in the Afternoon move towards another beautiful city Lucerne and enjoy your orientation tour which comprises of famous Lion monuments, Kappelbruck Bridge. This is the ideal place to purchase branded Swiss watches, swiss chocolates, swiss army knives, souvenirs, etc. Enjoy Dinner & overnight stay at hotel in Switzerland." },
            { day: "Day 4 - Switzerland", description: "After breakfast, the day is free for you to relax OR we suggest you to take an opportunity to visitJungfraujoch and picturesque Interlaken (Optional - at Additional Cost). Our scenic drive to Lauterbrunnen, from where we board a train to Jungfraujoch. takes us along lovely lakes and mountain passes. Marvel at the changes in the Alpine scenery as your charming cog-wheel train takes you on a unique journey. Experience the magic of the mountains at the Sphinx Terrace. See the breathtaking Jungfrau Peak and the awesome Aletsch Glacier.Thereafter you will proceed for your Journey to Interlaken. Here you will visit Interlaken City. Later transfer to the Hotel & you can spend time to relax at the many cafes or shop for Swiss watches, chocolates, memorabilia, etc.overnight stay at hotel in Switzerland." },
            { day: "Day 5 - Return Home with Wonderful Memories", description: "After a continental breakfast, you will check out of the hotel and drive to the Airport to catch your Flight back to Delhi. Its time to say goodbye to all the new friends you have made. We would like you to spare a few minutes of your time to write and tell us how you enjoyed your tour and any suggestions you may have for the future. We hope you take back happy memories of your Tour with D.Paul's Travel." }
        ],
    image:        "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=600"
});
tourPackages.push({
    id:           78,
    title:        "Sydney",
    duration:     "05 NIGHTS/06 DAYS",
    destinations: "Sydney",
    price:        "Contact Us",
    category:     "international",
    region:       "sydney",
    inclusions:   [
            "Economy Class return Airfare.",
            "5 Nights accommodation with Breakfast in Sydney.",
            "Hotel Aspire / Ibis / Metro or Similar",
            "Sydney City tour (No Return drop off)",
            "Airport transfers",
            "All Tours & Transfers on Seat In Coach (Sharing) basis.",
            "Australian Visa fees",
            "All taxes."
        ],
    itinerary:    [
            { day: "Day 1 - Arrive Sydney- Showboats Dinner Cruise", description: "On arrival, our local representative will be waiting at the airport to welcome and transfer you to the hotel. Welcome to the Harbour City of Australia. Check In to your hotel and relax for a while. In the evening, get ready for the Sydney Showboats Dinner Cruise (at Additional Cost), Australia's most luxurious paddle wheeler, renowned for its famous dinner cruise and show. Entertainment is assured right from the moment you step on board. Captivating array of outstanding Australian performers, in-house magicians, dynamic vocalists and dancers from the finest international venues in vibrant costumes guarantee to delight audiences. Perfect for a romantic night out or any celebration that demands fun and entertainment combined with amazing restaurant dining experience. Overnight stay at hotel in Sydney." },
            { day: "Day 2 - Sydney- Guided City Tour", description: "After morning breakfast, we head for a Sydney City Tour that covers Opera House (from Inside), Sydney Tower, Sydney Aquarium and Sydney Wildlife World. We will start with a tour to the world famous Sydney Opera House. Discover the unknown history and magic of this place and discover the magnificent beauty. We proceed to Harbour Bridge, then to the Nature's Wonder, the Rocks, will head further to Lady Macquarie's Chair, one of the best vantage points in Sydney and then to spectacular Hyde Park and a stopover at Darling Harbour, one of Australia's major attractions. Our tour will not be complete without visiting Sydney Tower- the tallest free-standing structure, walk under water to explore Australia's rich & diverse aquatic life at Sea Life Sydney Aquarium. Experience a real Australian adventure at Sydney Wild Life World, now known as Wild Life Sydney Zoo and meet some of Australia's cutest national icons, including koalas and yellow footed rock wallabies! Overnight stay at hotel in Sydney." },
            { day: "Day 3 - Sydney- Blue Mountains & Wildlife Park", description: "Enjoy morning breakfast. Today we will go for a full day Blue Mountains and Australian Wildlife Park Tour. (at Additional Cost). Enroute the Blue Mountains, enjoy the most spectacular views over the Jamison Valley and Kings Tableland. We visit Katoomba with its most famous attraction, The Three Sisters and Echo Point. We will tour along some of the most scenic roads of Blue Mountains. We will head for a breathtaking lookout overlooking the Megalong Valley and beyond to the Great Dividing Range. Discover here why the Blue Mountains are so called. We will then visit Australian Wildlife Park to play with koalas, kangaroos and other Australian native animals. Return after a simply unforgettable day. Overnight stay at hotel in Sydney." },
            { day: "Day 4 - Sydney- Day Free", description: "Enjoy breakfast at hotel. Today the day is Free for you to Explore the Nearby Places on your own or we suggest you to opt for Value Pack which includes Tickets to Sydney Aquarium, Sydney Tower Eye & Dolphin Watch Cruise (at Additional Cost). Overnight stay at hotel in Sydney." },
            { day: "Day 5 - Sydney- Day Free", description: "" },
            { day: "Day 6 - Sydney - Delhi", description: "Get up to a beautiful Aussie morning. Store the beauty in your eyes. Pack the bags and get ready to have breakfast. Today we check out from hotel and drive to airport. Return home with loads of pleasant memories." }
        ],
    image:        "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600"
});
tourPackages.push({
    id:           79,
    title:        "Thailand",
    duration:     "04 NIGHTS/05 DAYS",
    destinations: "Pattaya - Bangkok",
    price:        "Contact Us",
    category:     "international",
    region:       "thailand",
    inclusions:   [
            "Economy Class return Airfare on Direct flight",
            "02 Nights accommodation at Pattaya",
            "02 Nights accommodation at Bangkok",
            "04 Breakfast & Early Check in Confirmed",
            "Airport Hotel return transfers Seat-In-Coach basis.",
            "Coral island tour Seat-In-Coach basis (max 4 hours)",
            "Pattaya City tour on Seat-In-Coach basis (max 3 hours)",
            "All hotel taxes and service charges",
            "Airport taxes",
            "Service Taxes Included."
        ],
    itinerary:    [
            { day: "Day 1 - Pattaya", description: "Arrive Bangkok, Welcome at the airport at Gate No. 3, near, information center (subject to change kindly check your vouchers) after clearing custom, visa processing, baggage claim transfer to Pattaya. Check in to the hotel in Pattaya. Day free at leisure. Overnight at hotel." },
            { day: "Day 2 - Pattaya", description: "Breakfast in the hotel (7 AM. to 9 AM). Transfer to Coral Island at 9 A.M Sharp by normal boat (one can buy optional tour Water sports at your own cost). Rest Day free at leisure. Overnight at hotel." },
            { day: "Day 3 - Pattaya - Bangkok", description: "Breakfast in the hotel (7 AM. to 9 AM).After breakfast check out from the hotel and take a city tour on the way with as visit to World Gems Collection show room. Check in the Bangkok hotel at around 4.00 - 4.30P.M. Evening free leisure. Overnight at hotel" },
            { day: "Day 4 - Bangkok", description: "Breakfast in the hotel (7 AM. to 9 AM). Day free at leisure. Overnight at hotel." },
            { day: "Day 5 - Bangkok", description: "Breakfast in the hotel (7 AM. to 9 AM).Check Out from the hotel (enjoy your free day for shopping or enjoying the extra add ons mentioned in the list above). Later take your transfer to airport." }
        ],
    image:        "Tour Package Images - Solanki Tours/Thailand-pattaya.jpg"
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = tourPackages;
}
