import React from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { hotels } from '../fakedata/FakeData';

const libraries = ["places"]

const mapContainerStyle = {
  width: '30vw',
  height: '85vh',
  minWidth: '330px',
  borderRadius: '25px',
};

const MapGoogle = (props) => {

  const { lat, lng } = props.selectedPlace;

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
    libraries,
  });

  if (loadError) return "Error loading map";
  if (!isLoaded) return "Loading Maps";

  return (
    <div style={{ height: 'auto', width: 'auto', paddingTop: '20px' }}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={16}
        center={{
          lat: lat,
          lng: lng
        }}
      >
        {
          hotels.map(hotel => {
            return hotel.place === props.activePlace.toLowerCase() &&
              <Marker
                position={{
                  lat: hotel.lat,
                  lng: hotel.lng
                }}
              ></Marker>
          })
        }
      </GoogleMap>
    </div>

  );
};

export default MapGoogle;

