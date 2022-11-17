import { Link } from 'react-router-dom';

// Images
import logo from '../../../../assets/images/home/logo.png'

const Header = () => {

    return (
        <>
            <header className="text-gray-600 body-font bg-purple-200">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src={logo} alt="logo"/>
                        <span className="ml-3 text-xl">Gyumri Brand</span>
                    </Link>

                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link to="/sign-up" className="mr-5 hover:text-gray-900">Sign up</Link>
                        <Link to="/sign-in" className="mr-5 hover:text-gray-900">Sign in</Link>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;