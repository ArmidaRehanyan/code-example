import React from "react";
import style from "./Slider.module.css";
import SimpleImageSlider from "react-simple-image-slider";
import slider1 from "../../assets/images/slider/slider1.jpg";
import slider2 from "../../assets/images/slider/slider2.jpg";
import slider3 from "../../assets/images/slider/slider3.jpg";
import slider4 from "../../assets/images/slider/slider4.jpg";
import slider5 from "../../assets/images/slider/slider5.jpg";
import slider6 from "../../assets/images/slider/slider6.jpg";
import slider7 from "../../assets/images/slider/slider7.jpg";
import slider8 from "../../assets/images/slider/slider8.jpg";
import slider9 from "../../assets/images/slider/slider9.jpg";
import slider10 from "../../assets/images/slider/slider10.jpg";

const images = [
    {url: slider1},
    {url: slider2},
    {url: slider3},
    {url: slider4},
    {url: slider5},
    {url: slider6},
    {url: slider7},
    {url: slider8},
    {url: slider9},
    {url: slider10},
];

const Slider = () => {
    return (
        <div className={style.content}>
            <div className={style.slider}>
                <SimpleImageSlider
                    width={900}
                    height={800}
                    images={images}
                    showBullets={true}
                    showNavs={true}
                    slideDuration={0.5}
                />
            </div>
        </div>
    );
}
export default Slider;