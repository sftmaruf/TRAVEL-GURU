import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Hotel.css';
import { extractLocalStorage } from '../localStorageMechanism/localStorageMechanism';

const Hotel = (props) => {
    const { header, imgURL, guests, bedroom, beds, baths, facilities, flexibility, rating, price } = props.hotel;
    const stayDuration = extractLocalStorage('stayDuration');


    return (
        <Card className="hotel-component">
            <Card.Img className="hotel-image" variant="top" src={imgURL} />

            <Card.Body className="hotel-description">
                <Card.Title className="hotel-name">{header}</Card.Title>
                <Card.Text > {guests} guests   {bedroom} bedrooms  {beds} beds   {baths} baths </Card.Text>
                <Card.Text >{facilities}</Card.Text>
                <Card.Text >{flexibility}</Card.Text>
                <div className = "footer">
                    <div>
                        <Card.Text><FontAwesomeIcon className = "rating-icon" icon={faStar} /> {rating}</Card.Text>
                    </div>
                    <div>
                        <Card.Text className="footer-alignment">${price}/night</Card.Text>
                    </div>

                    <div>
                        <Card.Text className="footer-alignment total-color">${price * stayDuration} total</Card.Text>
                    </div>
                </div>
            </Card.Body>

        </Card>
    );
};

export default Hotel;