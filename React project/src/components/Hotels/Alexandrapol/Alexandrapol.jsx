import Room1 from '../../../assets/images/hotels/alexandrapol/room1.jpg';
import Room2 from '../../../assets/images/hotels/alexandrapol/room2.jpg';
import Room3 from '../../../assets/images/hotels/alexandrapol/room3.jpg';
import Room4 from '../../../assets/images/hotels/alexandrapol/room4.jpg';
import Room5 from '../../../assets/images/hotels/alexandrapol/room5.jpg';
import Room6 from '../../../assets/images/hotels/alexandrapol/room6.jpg';

import Deals from '../../../assets/images/hotels/alexandrapol/deals-logo.jpg';

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
        originalWidth: 900,
    }
];

const hotelData = {
    hotelName: 'Alexandrapol Hotel',
    reviewTitle: ' Review for Alexandrapol Hotel',
    aboutTitle: 'About Alexandrapol Hotel',
    locationTitle : 'Where is Alexandarpol Hotel',
}

const Alexandrapol = () => {

    return HotelPrototype([{
        images: images,
        logo: Deals,
        hotelData: hotelData,
        reviewTitle: hotelData,
        aboutTitle: hotelData,
        locationTitle: hotelData,
    }])

}

export default Alexandrapol;