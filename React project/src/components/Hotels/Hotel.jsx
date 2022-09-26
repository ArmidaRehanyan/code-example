import React from "react";
import style from "./Hotel.module.css";
import {NavLink, useLocation} from "react-router-dom";


const Hotel = (props) => {

    return (
        <div className={style.content}>
            <div className={style.container}>
                {
                    (props.elem.id == 1)?
                        <div className={style.title} >
                            Popular Hotels in Gyumri
                        </div>
                        :''
                }
                <div className={style.hotels}>
                    <div className={style.hotel}>
                        <div className={style.hotelCont}>
                            <div>
                                <img src={props.elem.image} alt="Olympic" className={style.hotelImg}/>
                            </div>
                            <div className={style.hotelData}>
                                <div className={style.hotelName}>
                                    {props.elem.title}
                                </div>

                                <div className={style.hotelAddress}>
                                    {props.elem.address}
                                </div>

                                <div className={style.hotelLine}>
                                </div>

                                <div className={style.hotelText}>
                                    {props.elem.text}
                                </div>

                                <div className={style.hotelButton}>
                                        <NavLink className={style.hotelBtn} to={useLocation().pathname + props.elem.toPage}> View Deals</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hotel;