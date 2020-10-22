import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { places } from '../fakedata/FakeData';
import PlacesCard from '../placesCard/PlacesCard';
import './FrontPage.css';
import { context } from '../../App';
import { pushLocalStorage } from '../localStorageMechanism/localStorageMechanism';
const FrontPage = (props) => {


    const history = useHistory();
    const [selectedPlace, setSelectedPlace, setIsWhite] = useContext(context);
    const [hoveredPlace, setHoveredPlace] = useState(selectedPlace || places[0]);
    setIsWhite(false);

    const handleDetail = (id) => {
        places.map(place => {
            if (place.id === id) {
                pushLocalStorage("selected", place);
                setSelectedPlace(place);
                history.push('/booking/' + id);
            }
        });
    }

    const handleOnMouseOver = (e) => {
        places.map(place => {
            if (place.name === e.target.alt) {
                setHoveredPlace(place);
                pushLocalStorage('selected', place);
            }
        })
    }


    return (
        <div className="front-page">

            <div className="description-container">
                <h1>{hoveredPlace.name}</h1>
                <p>{hoveredPlace.description}</p>
                <button onClick={() => handleDetail(hoveredPlace.id)} className="button-color">Booking</button>
            </div>

            <div className="picture-container">
                {
                    props.type.name !== 'booking' ? places.map(place =>
                        <PlacesCard key={place.id} place={place} handleOnMouseOver={handleOnMouseOver} handleDetail={handleDetail}></PlacesCard>
                    ) : props.children
                }
            </div>
        </div>
    );
};

export default FrontPage;