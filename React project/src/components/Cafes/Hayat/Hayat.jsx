import CafePrototype from "../../../components/Cafes/CafePrototype/CafePrototype";
import HayatLogo from "../../../assets/images/cafe/hayat/cafe-logo.jpg";

const cafeData = {
    cafeName: 'Hayat cafe',
}

const Hayat = () => {
    return CafePrototype([{
        logo: HayatLogo,
        cafeData: cafeData,
    }])
}

export default Hayat;