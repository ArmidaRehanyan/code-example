import Room1 from '../../../assets/images/hotels/goldenApricot/room1.jpg';
import Room2 from '../../../assets/images/hotels/goldenApricot/room2.jpg';
import Room3 from '../../../assets/images/hotels/goldenApricot/room3.jpg';
import Room4 from '../../../assets/images/hotels/goldenApricot/room4.jpg';
import Room5 from '../../../assets/images/hotels/goldenApricot/room5.jpg';
import Room6 from '../../../assets/images/hotels/goldenApricot/room6.jpg';

import Deals from '../../../assets/images/hotels/goldenApricot/deals-logo.png';

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
    hotelName: 'Golden Apricot Hotel',
    reviewTitle: ' Review for Golden Apricot Hotel',
    aboutTitle: 'About Golden Apricot Hotel',
    locationTitle : 'Where is Golden Apricot Hotel',
}

const GoldenApricot = () => {

    return HotelPrototype([{
        images: images,
        logo: Deals,
        hotelData: hotelData,
    }])

}

export default GoldenApricot;