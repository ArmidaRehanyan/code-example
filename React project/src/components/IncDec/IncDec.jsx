import { useState } from 'react';
import style from "./IncDec.module.css"
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

export default function Count(prop) {
    function ButtonIncrement(props) {

        return (
            <button onClick={props.onClickFunc} className={style.incBtn}>
                <AiOutlinePlus />
            </button>
        )
    }

    function ButtonDecrement(props) {

        return (
            <button onClick={props.onClickFunc} className={style.decBtn}>
                <AiOutlineMinus />
            </button>
        )
    }

    function Display(props) {
        return (
            <label className={style.countLabel}>{props.message}</label>
        )
    }


    function outputValues (props, count) {
        props.childToParent(props.name, count)
    }

    let [counter, setCounter] = useState(0);
    const incrementCounter = () => {
        setCounter(++counter);
        outputValues(prop,counter)
    }
    let decrementCounter = () => {
        setCounter(--counter);
        outputValues(prop,counter)
    }

    if(counter<=0) {
        decrementCounter = () => {
            setCounter(0);
            outputValues(prop,0);
        }
    }

    return (
        <div>
            <ButtonIncrement onClickFunc={incrementCounter}/>
            <Display message={counter}/>
            <ButtonDecrement onClickFunc={decrementCounter}/>
        </div>
    );
}