// Convert CSV to JSON for JavaScript usage
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
        image: "Tour Package Images - Solanki Tours/Shimla Volvo Tour package.jpg"
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
        image: "Tour Package Images - Solanki Tours/Kullu Manali Volvo Tour Package.jpg"
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
        image: "Tour Package Images - Solanki Tours/Dharamshala Dalhouse Volvo Tour Package.jpg"
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
        image: "https://images.unsplash.com/photo-1631217784848-6ae72f2d6293?w=600"
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
        image: "Tour Package Images - Solanki Tours/Andaman Island Paradise.jpg"
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
        image: "Tour Package Images - Solanki Tours/Thailand Tour Package.jpg"
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
        title: "Manali Chandigarh Car Tour",
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
        image: "https://images.unsplash.com/photo-1597580124372-26c39b3d78fc?w=600"
    },
    {
        id: 18,
        title: "Shimla Manali Car Package",
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
        title: "Manali Honeymoon Volvo Package",
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
        image: "https://images.unsplash.com/photo-1544986581-efac9be1fd66?w=600"
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
        image: "https://images.unsplash.com/photo-1619112095032-b8aced56f5f0?w=600"
    },
    {
        id: 21,
        title: "Manali Shimla Volvo Honeymoon Tour",
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
        image: "https://images.unsplash.com/photo-1590077428593-a4e5b3e5c3b0?w=600"
    },
    {
        id: 22,
        title: "Shimla Volvo Package",
        duration: "03 NIGHTS/04 DAYS",
        destinations: "Delhi - Shimla - Kufri - Delhi",
        price: "Contact Us",
        category: "domestic",
        region: "himachal",
        inclusions: [
            "2 Nights accommodation in Shimla (3-star hotel)",
            "Welcome drink on arrival",
            "Delhi – Shimla & Shimla – Delhi Volvo Bus Tickets",
            "Daily Breakfast & Dinner",
            "Full-day Shimla sightseeing by car",
            "Kufri excursion by car",
            "All applicable taxes"
        ],
        image: "Tour Package Images - Solanki Tours/Shimla Volvo Tour package.jpg"
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
        image: "https://images.unsplash.com/photo-1609188076864-c35269136c95?w=600"
    },
    {
        id: 24,
        title: "Delhi Manali Car Tour",
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
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600"
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
        image: "https://images.unsplash.com/photo-1619112095032-b8aced56f5f0?w=600"
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
        image: "https://images.unsplash.com/photo-1561361058-c24e3d3c0e35?w=600"
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
        image: "https://images.unsplash.com/photo-1629994101748-9c89e66d8a33?w=600"
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
        image: "https://images.unsplash.com/photo-1592813932014-56a57c12c4af?w=600"
    },
    {
        id: 29,
        title: "Char Dham Yatra by Road (Ex Haridwar)",
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
        image: "https://images.unsplash.com/photo-1580181423476-7d5b4f658c81?w=600"
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
        image: "https://images.unsplash.com/photo-1597977052073-bd16889c49e5?w=600"
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
        image: "https://images.unsplash.com/photo-1610543695571-88c8cf2c68e0?w=600"
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
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600"
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
        image: "https://images.unsplash.com/photo-1585503418537-88331351ad99?w=600"
    }
];

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = tourPackages;
}
