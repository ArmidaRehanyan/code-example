import React, {useState, Suspense } from 'react';
import ReactPaginate from "react-paginate";
import style from "./Pagination.module.css";
import Hotel from "../Hotels/Hotel";
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from "react-icons/ai";

// function loadComponent(name) {
//     name = name.charAt(0).toUpperCase() + name.slice(1);
//     const Component = React.lazy(() =>
//         import(`../${name}s/${name}`)4
//     );
//     return Component
// }

const PaginationHotel = (props) => {

    // const Component = loadComponent(props.pageName);

    console.log(props.pageName, props.elements)

    let limit = 4;
    let allElements = props.elements;
    let elementsCount = allElements.length;
    let pageCount = Math.ceil(elementsCount / limit)

    let arr = allElements.slice(0, 4)

    const [items, setItems] = useState(arr);

    const drawPage = (currentPosition, limit) => {

        let hotels = allElements.slice(currentPosition, currentPosition + limit);

        setItems(hotels)
    }

    const handlePageClick = (data) => {
        let currentPosition = limit * data.selected;

        drawPage(currentPosition, limit)
    }

    return (
        <div className={style.cafe_component}>
            <div>
                {/*<Suspense fallback={<div>Loading...</div>}>*/}
                {
                    items.map((el, index) => <Hotel elem={el} key={el.id} /> )
                }
                {/*</Suspense>*/}
            </div>
            <ReactPaginate
                previousLabel={<AiOutlineDoubleLeft />}
                nextLabel={<AiOutlineDoubleRight />}
                breakLabel={'...'}
                pageCount={pageCount}
                marginPagesDisplayed={3}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={'pagination justify-content-center'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'}
            />
        </div>
    )

}

export default PaginationHotel;