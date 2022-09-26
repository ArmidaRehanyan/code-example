import style from "./Olympic.module.css";
import Room1 from '../../../assets/images/hotels/olympic/room1.jpg';
import Room2 from '../../../assets/images/hotels/olympic/room2.jpg';
import Room3 from '../../../assets/images/hotels/olympic/room3.jpg';
import Room4 from '../../../assets/images/hotels/olympic/room4.jpg';
import Room5 from '../../../assets/images/hotels/olympic/room5.jpg';
import Room6 from '../../../assets/images/hotels/olympic/room6.jpg';
import Room7 from '../../../assets/images/hotels/olympic/room7.jpg';
import Room8 from '../../../assets/images/hotels/olympic/room8.jpg';
import Deals from '../../../assets/images/hotels/olympic/deals-logo.png';

import HotelPrototype  from '../HotelPrototype/Hotel-prototype'

const images = [
    {
        original: Room1,
        thumbnail: Room1,
        originalHeight: 700,
        originalWidth: 900,
    },
    {
        original: Room2,
        thumbnail: Room2,
        originalHeight: 700,
        originalWidth: 900,
    },
    {
        original: Room3,
        thumbnail: Room3,
        originalHeight: 700,
        originalWidth: 900,
    },
    {
        original: Room4,
        thumbnail: Room4,
        originalHeight: 700,
        originalWidth: 900,
    },
    {
        original: Room5,
        thumbnail: Room5,
        originalHeight: 700,
        originalWidth: 900,
    },
    {
        original: Room6,
        thumbnail: Room6,
        originalHeight: 700,
        originalWidth: 700,
    },
    {
        original: Room7,
        thumbnail: Room7,
        originalHeight: 700,
        originalWidth: 900,
    },
    {
        original: Room8,
        thumbnail: Room8,
        originalHeight: 700,
        originalWidth: 900,
    },
];

const hotelData = {
    hotelName: 'Olympic Hotel',
    reviewTitle: ' Review for Olympic Hotel',
    aboutTitle: 'About Olympic Hotel',
    locationTitle : 'Where is Olympic Hotel',
}

const Olympic = () => {

    return HotelPrototype([{
        images: images,
        logo: Deals,
        hotelData: hotelData,
    }])

}

export default Olympic;