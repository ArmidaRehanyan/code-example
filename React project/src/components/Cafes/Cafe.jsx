import React from "react";
import style from "./Cafe.module.css";
import {AiOutlinePhone} from "react-icons/ai";
import {BsFillStopwatchFill} from "react-icons/bs";
import {NavLink, useLocation} from "react-router-dom";

const Cafe = (props) => {
    return (
        <div className={style.content}>
            <div className={style.container}>

                {
                    (props.elem.id === 1) ?
                        <div className={style.cafeTitle}>
                            Top Restaurants in Gyumri
                        </div>
                        : ''
                }

                <div className={style.cafes}>
                    <div className={style.cafe}>
                        <div className={style.cafeCont}>
                            <div className={style.cafeImgBlock}>
                                <img src={props.elem.image} alt="Herbs" className={style.cafeImg}/>
                            </div>

                            <div className={style.cafeData}>
                                <div className={style.cafeName}>
                                    {props.elem.title}
                                </div>

                                <div className={style.cafeAddress}>
                                    {props.elem.address}
                                </div>

                                <div className={style.cafePhone}>
                                    <AiOutlinePhone/>
                                    <span className={style.phoneSpan}>
                                        {props.elem.phone}
                                    </span>
                                </div>

                                <div className={style.cafeHours}>
                                    <BsFillStopwatchFill/>
                                    <span className={style.hoursSpan}>
                                        {props.elem.hour}
                                    </span>
                                </div>

                                <div className={style.cafeButton}>
                                    <NavLink className={style.cafeBtn} to={useLocation().pathname + props.elem.toPage}>Open</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cafe;