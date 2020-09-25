export const typeBooking = {
    name: 'booking',
    label1: 'Origin',
    label2: 'Destination'
}

export const places = [
    { id: 1, name: 'Sajek Valley', img: 'https://iili.io/2zR81S.png', description: 'Sajek valley is known for its natural environment and is surrounded by mountains, dense forest, and grassland hill tracks. Many small rivers flow through the mountains among which the Kachalong and the Machalong are notable. On the way to Sajek valley, one has to cross the Mayni range and the Mayni river...',  lat: 23.3843, lng: 92.2920 },
    { id: 2, name: 'SREMANGAL', img: 'https://iili.io/2zRvB2.png', description: 'Srimangal/Sreemangal is a city in Sylhet Division in Bangladesh. Sreemangal is situated in Moulvibazar district in sylhet division. It is famous for tea garden. Rain all time occurs here. Nature has adorned sreemangal with green tress. Its natural scenery is very charming. It soothes one’s eyes. The first tea garden in Bangladesh which names “Malni chho ra tea garden” is here...' , lat: 24.3019, lng: 91.7601},
    { id: 3, name: 'SUNDARBANS', img: 'https://iili.io/2zReLl.png', description: 'sundarbanss, The largest single block of tidal halophytic mangrove forest in the world, located in the southwestern part of Bangladesh. It lies on the Ganges-Brahmaputra Delta at the point where it merges with the bay of bengal...', lat: 22.4379, lng: 89.5859},
]

export const hotels = [
    { id: 1, place: 'sremangal', header: 'Grand Sultan', guests: 4, bedroom: 2, beds: 2, baths:2, facilities: '1. Wifi 2. Air conditioning 3. Kitchen ', flexibility: 'Cancellation flexibility available', rating: '4.9 (20)', price: '34', imgURL: 'https://iili.io/27XTnj.jpg', lat: 24.3017256, lng: 91.7641354},
    { id: 2, place: 'sremangal', header: 'DuSai Resort', guests: 4, bedroom: 2, beds: 2, baths: 2, facilities: '1. Wifi 2. Air conditioning 3. Kitchen ', flexibility: 'Cancellation flexibility available', rating: '4.8 (10)', price: '52', imgURL: 'https://iili.io/27XuMx.jpg', lat: 24.4310865, lng: 91.7613033 },
    { id: 3, place: 'sremangal', header: 'Shanti Bari', guests: 4, bedroom: 2, beds: 2, baths: 2, facilities: '1. Wifi 2. Air conditioning 3. Kitchen ', flexibility: 'Cancellation flexibility available', rating: '4.9 (25)', price: '44', imgURL: 'https://iili.io/27wuMG.jpg', lat: 24.2900014, lng: 91.7643514 },
    
    { id: 4, place: 'sundarbans', header: 'Hotel Castle Salam', guests: 4, bedroom: 2, beds: 2, baths: 2, facilities: '1. Wifi 2. Air conditioning 3. Kitchen ', flexibility: 'Cancellation flexibility available', rating: '4.5 (61)', price: '', imgURL: 'https://iili.io/27vXyl.jpg', lat: 22.8098324, lng: 89.5602641 },
    { id: 5, place: 'sundarbans', header: 'Sundarban eco resort', guests: 2, bedroom: 1, beds: 1, baths: 1, facilities: '1. Wifi 2. Air conditioning 3. Kitchen ', flexibility: 'Cancellation flexibility available', rating: '4.5 (61)', price: '', imgURL: 'https://iili.io/27eMVn.jpg', lat: 22.4393381, lng: 89.58177 },
    { id: 6, place: 'sundarbans', header: 'Tiger Garden Int. Hotel', guests: 2, bedroom: 1, beds: 1, baths: 1, facilities: '1. Wifi 2. Air conditioning 3. Kitchen ', flexibility: 'Cancellation flexibility available', rating: '4.5 (61)', price: '', imgURL: 'https://iili.io/2AyEy7.jpg', lat: 22.8213164, lng: 89.5510461 },

    { id: 7, place: 'sajek valley', header: 'Meghpunji', guests: 2, bedroom: 1, beds: 1, baths: 1, facilities: '1. Wifi 2. Air conditioning 3. Kitchen ', flexibility: 'Cancellation flexibility available', rating: '4.5 (61)', price: '', imgURL: 'https://iili.io/2RJ892.jpg', lat: 23.385952, lng: 92.292489 },
    { id: 8, place: 'sajek valley', header: 'Sumui eco resort', guests: 2, bedroom: 1, beds: 1, baths: 1, facilities: '1. Wifi 2. Air conditioning 3. Kitchen ', flexibility: 'Cancellation flexibility available', rating: '4.5 (61)', price: '', imgURL: 'https://iili.io/27V1J1.jpg', lat: 23.3819661, lng: 92.2945774 },
    { id: 9, place: 'sajek valley', header: 'Dancing Cloud Resort Sajek Valley', guests: 2, bedroom: 1, beds: 1, baths: 1, facilities: '1. Wifi 2. Air conditioning 3. Kitchen ', flexibility: 'Cancellation flexibility available', rating: '4.5 (61)', price: '', imgURL: 'https://iili.io/2RJSuS.jpg', lat: 23.3864319, lng: 92.2905231 },


]

export const countHotel = (paramHotel) => {
    let count = 0;
    hotels.map(hotel => {
        hotel.place === paramHotel &&
            count++;
    })

    return count;
}