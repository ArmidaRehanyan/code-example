import CafePrototype from "../../../components/Cafes/CafePrototype/CafePrototype"
import ArthouseLogo from "../../../assets/images/cafe/arthouse/cafe-logo.jpg";

const cafeData = {
    cafeName: 'Arthouse cafe',
}

const Arthouse = () => {
    return CafePrototype([{
        logo: ArthouseLogo,
        cafeData: cafeData,
    }])
}

export default Arthouse;