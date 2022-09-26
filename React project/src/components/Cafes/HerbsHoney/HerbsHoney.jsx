import CafePrototype from "../../../components/Cafes/CafePrototype/CafePrototype";
import HerbsLogo from "../../../assets/images/cafe/herbsHoney/cafe-logo.jpg";


const cafeData = {
    cafeName: 'Herbs Honey',
}

const HerbsHoney = () => {
    return CafePrototype([{
        logo: HerbsLogo,
        cafeData: cafeData,
    }])
}

export default HerbsHoney;