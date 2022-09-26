import CafePrototype from "../../../components/Cafes/CafePrototype/CafePrototype"
import FaetonLogo from "../../../assets/images/cafe/faeton/cafe-logo.jpg";

const cafeData = {
    cafeName: 'Faeton cafe',
}

const Hayat = () => {
    return CafePrototype([{
        logo: FaetonLogo,
        cafeData: cafeData,
    }])
}

export default Hayat;