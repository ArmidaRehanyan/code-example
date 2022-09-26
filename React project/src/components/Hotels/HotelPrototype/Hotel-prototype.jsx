import React from "react";
import ImageGallery from 'react-image-gallery';
import {Button, Modal} from 'react-bootstrap';
import {useState} from "react";
import Count from '../../IncDec/IncDec.jsx';
import DatePicker from "../../Calendar/Calendar.jsx";
import Ratings from "../../Raitings/Raiting";
import LessText from "../../../js/LessText";

import style from './Hotel-prototype.module.css'


const HotelPrototype = (props) => {

    const dataInfo = props[0];
    const images = dataInfo.images;
    const logo = dataInfo.logo;
    const hotelData = dataInfo.hotelData;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [hotelInfo, setHotelInfo] = useState({
        'rooms': 0,
        'adults': 0,
        'children': 0
    });
    const childToParent = (name, childData) => {
        let updatedValue = {};
        updatedValue[name] = childData
        setHotelInfo(hotelInfo => ({
            ...hotelInfo,
            ...updatedValue
        }))
    }
    return (
        <div className={style.content}>
            <div className={style.hotelCont}>
                <div className={style.hotelName}>
                    {hotelData.hotelName}
                </div>
                <div className={style.hotelSlider}>
                    <ImageGallery items={images}/>
                </div>
                <div className={style.hotelDeals}>
                    <div className={style.dealsCont}>
                        <div className={style.dealsData}>
                            <h1 className={style.dealsTitle}>Set your travel dates to check availability and prices</h1>
                            <div className={style.dealsCount}>
                                <div className={style.rooms}>
                                    <span>{hotelInfo['rooms']}</span> rooms
                                </div>
                                <div className={style.guests}>
                                    <span>{hotelInfo['adults']}</span> adults
                                </div>
                                <div className={style.children}>
                                    <span>{hotelInfo['children']}</span> children
                                </div>
                            </div>
                            <div className={style.checkCount}>
                                <Button variant="primary" onClick={handleShow} className={style.checkBtn}>
                                    Select quantity
                                </Button>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Select quantity</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className={style.items}>
                                            <div className={style.item}>
                                                <div className={style.itemNames}>
                                                    <div className={style.itemName}>
                                                        Room
                                                    </div>
                                                    <div className={style.itemName}>
                                                        Adults
                                                    </div>
                                                    <div className={style.itemName}>
                                                        Children
                                                    </div>
                                                </div>
                                                <div className={style.itemCounts}>
                                                    <div className={style.itemCount}>
                                                        <Count name='rooms' childToParent={childToParent}/>
                                                    </div>
                                                    <div className={style.itemCount}>
                                                        <Count name='adults' childToParent={childToParent}/>
                                                    </div>
                                                    <div className={style.itemCount}>
                                                        <Count name='children' childToParent={childToParent}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose} className={style.checkBtn}>
                                            Close
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                            <div className={style.calendar}>
                                <DatePicker/>
                            </div>
                            <div className={style.checkPrice}>
                                <button className={style.priceBtn}>Check prices</button>
                            </div>
                        </div>
                        <div className={style.dealsImg}>
                            <img src={logo} alt="Deals" height="170"/>
                        </div>
                    </div>
                </div>
                <div className={style.reviews}>
                    <div className={style.reviewTitle}>
                        {hotelData.reviewTitle}
                    </div>
                    <div className={style.reviewItems}>
                        <div className={style.reviewItem}>
                            <div className={style.reviewName}>
                                Cleanliness
                            </div>
                            <div className={style.reviewRait}>
                                <Ratings/>
                            </div>
                        </div>
                        <div className={style.reviewItem}>
                            <div className={style.reviewName}>
                                Comfort
                            </div>
                            <div className={style.reviewRait}>
                                <Ratings/>
                            </div>
                        </div>
                        <div className={style.reviewItem}>
                            <div className={style.reviewName}>
                                Location
                            </div>
                            <div className={style.reviewRait}>
                                <Ratings/>
                            </div>
                        </div>
                        <div className={style.reviewItem}>
                            <div className={style.reviewName}>
                                Services
                            </div>
                            <div className={style.reviewRait}>
                                <Ratings/>
                            </div>
                        </div>
                        <div className={style.reviewItem}>
                            <div className={style.reviewName}>
                                Staff
                            </div>
                            <div className={style.reviewRait}>
                                <Ratings/>
                            </div>
                        </div>
                        <div className={style.reviewItem}>
                            <div className={style.reviewName}>
                                Value for money
                            </div>
                            <div className={style.reviewRait}>
                                <Ratings/>
                            </div>
                        </div>
                    </div>
                    <div className={style.hotelAbout}>
                        <div className={style.aboutTitle}>
                            {hotelData.aboutTitle}
                        </div>
                        <div className={style.aboutText}>
                            <LessText
                                text="This comfortable hotel in Gyumri offers free Wi-Fi, as well as an express check-in and check-out
                                 feature and a football field. It also provides a convention center, a 24-hour reception and luggage storage.
                                 Olympic Hotel Gyumri offers 12 air conditioned rooms. Each one comes with a flat-screen TV with cable channels,
                                 as well as a private bathroom.
                                 Olympic Hotel Gyumri houses both a restaurant and a bar where guests can unwind at the end of the day with
                                 dinner and a drink. There is also a range of breakfast options available each day.
                                 Guests travelling by car can take advantage of free private parking on site at Olympic Hotel Gyumri. Shirak
                                 Airport is a 15-minute drive away.
                                 At the hotel, the rooms are fitted with a wardrobe. Complete with a private bathroom fitted with a shower and slippers,
                                 all rooms at Olympic Hotel have a flat-screen TV and air conditioning, and selected rooms also boast a seating area. All
                                 guest rooms will provide guests with a fridge.
                                 Guests at the accommodation can enjoy a continental or a à la carte breakfast.
                                 Guests at Olympic Hotel will be able to enjoy activities in and around Gyumri, like hiking.
                                 Spitak is 36 km from the hotel.
                                 Couples particularly like the location — they rated it 8.2 for a two-person trip.
                                 Olympic Hotel has been welcoming Booking.com guests since 5 Sept 2018.
                                 Distance in property description is calculated using OpenStreetMap
                                 "
                            />
                        </div>
                    </div>

                    <div className={style.hotelMapCont}>
                        <div className={style.hotelMapTitle}>
                            {hotelData.locationTitle}
                        </div>
                        <div className={style.map}>
                            <iframe className={style.hotelMap}
                                    src="https://maps.google.com/maps?q=gyumri%20olympic%20hotel&t=&z=13&ie=UTF8&iwloc=&output=embed">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelPrototype;