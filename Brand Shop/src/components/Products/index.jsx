import {useEffect, useState} from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const Products = () => {
    const [data, setData] = useState([]);
    const [dataCategories, setDataCategories] = useState([]);
    const [category, setCategory] = useState('all');
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    let isMounted = true;
    let limit = 30;

    useEffect(() => {
        const getCategories = async () => {
            const res = await fetch('https://fakestoreapi.com/products/categories');
            if (isMounted) {
                let categories = ['all', ...await res.clone().json()]
                setDataCategories(categories);
                setLoading(false);
            }
        }

        const getProducts = async () => {
            setLoading(true);

            const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);

            if (isMounted) {
                setData(await res.clone().json());
                setFilter(await res.clone().json());
                setLoading(false);
            }

            return () => isMounted = false
        }

        getProducts();
        getCategories();
    }, [])

    const filterProduct = (evt) => {
        let filter = evt.target.value;
        setCategory(filter);

        if(filter === 'all') return setFilter(data)

        return setFilter(data.filter(el => el.category === filter));
    }

    const categoryLoading = (
        <button disabled type="button"
                className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
            <svg role="status" className="inline w-4 h-4 mr-2 text-gray-200 animate-spin light:text-gray-600 fill-purple-600"
                 viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"/>
                <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"/>
            </svg>
            Loading...
        </button>
    );

    const Categories = (
        dataCategories.map((cat, index) => {
            return (
                <button
                    key={index}
                    value={cat}
                    onClick={filterProduct}
                    className={`py-2 px-4 mx-2  ${cat === category ? 'text-purple-700 border-purple-700' : 'text-purple-400 border-purple-400'} capitalize rounded-lg border-2 transition-colors duration-500 delay-300 hover:border-purple-700 hover:text-purple-700`}
                >
                    {cat}
                </button>
            )
        })
    );

    const loadingData =  (
        <>
            <div className="lg:w-1/4 md:w-1/2 p-3 w-full">
                <Skeleton height={320}/>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-3 w-full">
                <Skeleton height={320}/>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-3 w-full">
                <Skeleton height={320}/>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-3 w-full">
                <Skeleton height={320}/>
            </div>
        </>
    );

    const shuffleProducts = (arr) => {
        let currentIndex = arr.length,  randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
        }

        return arr;
    }

    return (
        <div>
            <div className="buttons-group flex flex-row justify-center items-center my-2">
                {!loading ? Categories : categoryLoading}
            </div>

            <div className="flex flex-wrap mt-5">
                {loading ? loadingData : shuffleProducts(filter).map(product => {
                    return (
                        <div className="lg:w-1/4 md:w-1/2 p-3 w-full" key={product.id}>
                            <div className={`p-2 cursor-pointer rounded-lg shadow hover:shadow-lg hover:shadow-purple-500/40 transition`}>
                                <a className="block relative h-64 rounded overflow-hidden">
                                    <img alt={product.title} className="object-cover object-center w-full h-full block" src={product.image} />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                        {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                                    </h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">
                                        {product.title.substring(0, 10)}
                                    </h2>
                                    <p className="mt-1">${product.price}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Products;