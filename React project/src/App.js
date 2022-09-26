import React from "react";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import About from "./components/About/About.jsx";
import Slider from "./components/Slider/Slider.jsx";
import Square from "./components/Square/Square.jsx";
import Olympics from "./assets/images/hotels/olympic.jpeg";
import Araks from "./assets/images/hotels/araks.jpg";
import Viktorias from "./assets/images/hotels/plaza-victoria.jpg";
import Apricot from "./assets/images/hotels/golden-apricot.jpg";
import Alexandrapols from "./assets/images/hotels/alexandrapol.jpeg";
import Herbs from "./assets/images/cafe/herbs-honey.jpg";
import Cherkezs from "./assets/images/cafe/cherkez.jpeg";
import Faetons from "./assets/images/cafe/faeton.jpg";
import Hayats from "./assets/images/cafe/hayat.jpeg";
import Arthouses from "./assets/images/cafe/arthouse.jpg"
import PaginationCafe from "./components/Pagination/PaginationCafe";
import PaginationHotel from "./components/Pagination/PaginationHotel";
import Olympic from "./components/Hotels/Olympic/Olympic";
import Araqs from "./components/Hotels/Araks/Araks";
import HerbsHoney from "./components/Cafes/HerbsHoney/HerbsHoney.jsx";
import Viktoria from "./components/Hotels/Viktoria/Viktoria";
import GoldenApricot from "./components/Hotels/GoldenApricot/GoldenApricot";
import Alexandrapol from "./components/Hotels/Alexandrapol/Alexandrapol";
import HotelInfo from "./components/HotelInfo/HotelInfo";
import Cherkez from "./components/Cafes/Cherkez/Cherkez"
import Faeton from "./components/Cafes/Faeton/Faeton"
import Hayat from "./components/Cafes/Hayat/Hayat"
import Arthouse from "./components/Cafes/Arthouse/Arthouse";
import Data from "./components/Data/Data.jsx"

function App() {
    const hotels = [
        {
            id: 1,
            title: "Olympic Hotel",
            image: Olympics,
            address: " 49 Mher Mkrtchyan Street, Gyumri, Armenia\n" +
                "0.3 mi from city centre, Gyumri",
            text: "This comfortable hotel in Gyumri offers free Wi-Fi, as well as an express\n" +
                "check-in and check-out feature and a football field. It also provides a\n" +
                "convention center, a 24-hour reception and luggage storage.",
            toPage: '/olympic',
        },
        {
            id: 2,
            title: "Araks Hotel Complex",
            image: Araks,
            address: "25 Gorki Street, Gyumri 3104, Armenia",
            text: "Located in Gyumri, Araks Hotel Complex is within a 15-minute walk of Freedom Square and Gyumri " +
                "City Stadium.Featured amenities include dry cleaning/laundry services, a 24-hour front desk, " +
                "and luggage storage. Guests may use a roundtrip airport shuttle for a surcharge, and " +
                "free self parking is available onsite.",
            toPage: '/araks',
        },
        {
            id: 3,
            title: "Viktoria Hotel",
            image: Viktorias,
            address: " 244/1 Abovyan Street, Gyumri 3104, Arm",
            text: "With a stay at Hotel Plaza Araks in Gyumri, you'll be a 2-minute walk from Freedom Square and 13" +
                "minutes by foot from Gyumri City Stadium. Featured amenities include dry cleaning/laundry services, a " +
                "24-hour front desk, and laundry facilities.",
            toPage: '/viktoria',
        },
        {
            id: 4,
            title: "Golden Apricot Hotel",
            image: Apricot,
            address: "Gorki 84/1, Gyumri 3101, Armenia",
            text: "Free WiFi access is available. Each room here will provide you with a TV, a DVD player and satellite" +
                " channels. There is also a refrigerator. Featuring a bath or shower, private bathroom also comes with" +
                " bathrobes and free toiletries. You can enjoy mountain and city views. ",
            toPage: '/apricot',
        },
        {
            id: 5,
            title: "Alexandrapol Hotel",
            image: Alexandrapols,
            address: "Mayakovskogo Street 70, 3123 Gyumri, Arm",
            text: "The rooms offer air conditioning, a minibar, hairdryer, working area and flat-screen TV with cable" +
                " channels. Guests can dine in the property’s restaurant, or eat out in the cafes and restaurants nearby. " +
                "There is also a bar on site. Room service is available upon request.",
            toPage: '/alexandrapol',
        }
    ]

    const cafes = [
        {
            id: 1,
            image: Herbs,
            title: "1. Herbs & Honey Restaurant",
            address: "Rijkov St. 5, Gyumri 3104 Armenia",
            phone: "+374 93 644645",
            hour: "Open: 08:00 AM - 11:00 PM",
            toPage: '/herbsHoney',
        },
        {
            id: 2,
            image: Cherkezs,
            title: "2. Cherkezi Dzor Restaurant",
            address: "Karmir Berd, Gyumri Armenia",
            phone: "+374 99 011520",
            hour: "Open: 08:00 AM - 11:00 PM",
            toPage: '/cherkez',
        },
        {
            id: 3,
            image: Faetons,
            title: "3. Faeton Cafes Restaurant",
            address: "Victory Ave., 3, Gyumri Armenia",
            phone: "+374 99 011520",
            hour: "Open: 08:00 AM - 11:00 PM",
            toPage: '/faeton',
        },
        {
            id: 4,
            image: Hayats,
            title: "4. Hayat Restaurant & Music Hall",
            address: "Gorki 50/8, Gyumri 3104 Armenia",
            phone: "+374 94 777067",
            hour: "Open: 09:00 AM - 02:00 PM",
            toPage: '/hayat',
        },
        {
            id: 5,
            image: Arthouses,
            title: "5. The Arthouse Coffeeshop",
            address: "Nikolay Ryzhkov Street 2 1/1, Gyumri 3104 Armenia",
            phone: "+374 94 764704",
            hour: "Open: 10:00 AM - 11:45 PM",
            toPage: '/arthouse',
        }
    ]
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/' element={<About/>}/>
                        <Route path='/slider' element={<Slider/>}/>
                        <Route path='/square' element={<Square/>}/>
                        <Route path='/data' element={<Data/>}/>
                        <Route path='/hotel' element={<PaginationHotel elements={hotels} pageName={'hotel'}/>}/>
                        <Route path='/cafe' element={<PaginationCafe elements={cafes} pageName={'cafe'}/>}/>
                        {/*<Route path='hotel/olympic' element={<Olympic />} />*/}
                        {/*<Route path='hotel/araks' element={<Araqs />} />*/}
                        {/*<Route path='hotel/viktoria' element={<Viktoria />} />*/}
                        {/*<Route path='hotel/apricot' element={<GoldenApricot />} />*/}
                        {/*<Route path='hotel/alexandrapol' element={<Alexandrapol />} />*/}
                        <Route path='hotel/:hotelName' element={<HotelInfo/>}/>
                        
                        {/*Cafe routing*/}
                        <Route path='cafe/herbsHoney' element={<HerbsHoney/>}/>
                        <Route path='cafe/cherkez' element={<Cherkez/>}/>
                        <Route path='cafe/faeton' element={<Faeton/>}/>
                        <Route path='cafe/hayat' element={<Hayat/>}/>
                        <Route path='cafe/arthouse' element={<Arthouse/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>)
}

export default App;



