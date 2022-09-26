import Room1 from '../../../assets/images/hotels/viktoria/room1.jpg';
import Room2 from '../../../assets/images/hotels/viktoria/room2.jpg';
import Room3 from '../../../assets/images/hotels/viktoria/room3.jpg';
import Room4 from '../../../assets/images/hotels/viktoria/room4.jpg';
import Room5 from '../../../assets/images/hotels/viktoria/room5.jpg';
import Room6 from '../../../assets/images/hotels/viktoria/room6.jpg';

import Deals from '../../../assets/images/hotels/viktoria/deals-logo.png';

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
];

const hotelData = {
    hotelName: 'Viktoria Hotel',
    reviewTitle: ' Review for Viktoria Hotel',
    aboutTitle: 'About Viktoria Hotel',
    locationTitle : 'Where is Viktoria Hotel',
}

const Viktoria = () => {

    return HotelPrototype([{
        images: images,
        logo: Deals,
        hotelData: hotelData,
    }])

}

export default Viktoria;