import GiorgioArmani from '../../assets/images/home/GiorgioArmani.jpg'
import ZsaZsaGabor from '../../assets/images/home/ZsaZsaGabor.jpg'

// Components
import Icon from '../Icon'

const Quotes = () => {

    const quotes = [
        {
            key: 1,
            title: 'The difference between style and fashion is quality.',
            image: GiorgioArmani,
            name: 'Giorgio Armani',
            occupation: 'Fashion designer'
        },
        {
            key: 2,
            title: 'Being jealous of a beautiful woman is not going to make you more beautiful.',
            image: ZsaZsaGabor,
            name: 'Zsa Zsa Gabor',
            occupation: 'Actress, Socialite'
        },
    ]

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
                    Quotes about the Style
                </h1>
                <div className="flex flex-wrap -m-4">
                    {quotes.map(quote => {
                        return (
                            <div className="p-4 md:w-1/2 w-full" key={quote.key}>
                                <div className="h-full bg-gray-100 p-8 rounded">
                                    <Icon name="quotes" />
                                    <p className="leading-relaxed mb-6">
                                        {quote.title}
                                    </p>
                                    <a className="inline-flex items-center">
                                        <img alt="quotes" src={quote.image} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                        <div className="flex-grow flex flex-col pl-4">
                                            <span className="title-font font-medium text-gray-900">{quote.name}</span>
                                            <span className="text-gray-500 text-sm">{quote.occupation}</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Quotes;