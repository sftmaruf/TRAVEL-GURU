import React, { useContext, useEffect, useState } from 'react';
import { context } from '../../App';
import { countHotel, hotels } from '../fakedata/FakeData';
import Hotel from '../hotel/Hotel';
import { extractLocalStorage } from '../localStorageMechanism/localStorageMechanism';
import MapGoogle from '../mapgoogle/MapGoogle';
import './Search.css';

const Search = () => {

    const [selectedPlace, setSelectedPlace, setIsWhite] = useContext(context);
    setIsWhite(true);

    const [activePlace, setActivePlace] = useState({});

    useEffect(() => {
        const place = extractLocalStorage('selected');
        setActivePlace(place);
    }, []);


    return (
        <div className="search-container">

            {
                JSON.stringify(activePlace) !== '{}' &&
                <div className="hotel-container">
                    <div className="hotel-header">
                        <h4>{countHotel(activePlace.name.toLowerCase())} stays {}</h4>
                        <h3>Stay in {activePlace.name}</h3>
                    </div>

                    {
                        hotels.map(hotel => {
                            return hotel.place === activePlace.name.toLowerCase() && <span><Hotel hotel={hotel}></Hotel></span>
                        })
                    }
                </div>
            }
            <div className="map-component">
                <MapGoogle selectedPlace={selectedPlace} activePlace={activePlace.name}></MapGoogle>
            </div>
        </div>
    );
};

export default Search;