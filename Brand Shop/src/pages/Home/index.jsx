// Helmet
import { Helmet } from 'react-helmet';

// Components
import { Products, Quotes } from "../../components";

// Images
import hero from '../../assets/images/home/hero.jpeg'

const Home = () => {

    return (
        <div>
            <Helmet>
                <title> Gyumri Brand Shop | Home </title>
            </Helmet>

            <section className="text-gray-600 body-font bg-gradient-to-b from-purple-200 to-white">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img src={hero} alt="Random shopping image" />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            Create Your own style and image
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            If You are hypercritical, <b>NEVER MIND</b>, You will find Your style in Gyumri Brand 😉.
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mx-auto">
                    <h1 className="text-4xl">
                        Latest Products
                    </h1>

                    <Products />

                    <Quotes />
                </div>
            </section>
        </div>
    );
};

export default Home;