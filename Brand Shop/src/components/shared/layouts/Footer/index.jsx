// Components
import Icon from '../../../Icon'

// Images
import logo from '../../../../assets/images/home/logo.png'

const Footer = () => {

    return (
        <>
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <a href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <img src={logo} alt="logo"/>
                        <span className="ml-3 text-xl">Gyumri Brand</span>
                    </a>
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">©
                        {new Date().getFullYear()} Gyumri Brand
                    </p>
                    <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a className="text-gray-500">
                            <Icon name="facebook" />
                        </a>
                        <a className="ml-3 text-gray-500">
                            <Icon name="twitter" />
                        </a>
                        <a className="ml-3 text-gray-500">
                            <Icon name="instagram" />
                        </a>
                        <a className="ml-3 text-gray-500">
                            <Icon name="linkedin" />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;