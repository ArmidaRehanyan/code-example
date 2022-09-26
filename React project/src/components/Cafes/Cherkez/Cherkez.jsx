import CafePrototype from "../../../components/Cafes/CafePrototype/CafePrototype"
import CherkezLogo from "../../../assets/images/cafe/cherkez/cafe-logo.jpg";

const cafeData = {
    cafeName: 'Cherkez Dzor',
}

const Cherkez = () => {
    return CafePrototype([{
        logo: CherkezLogo,
        cafeData: cafeData,
    }])
}

export default Cherkez;