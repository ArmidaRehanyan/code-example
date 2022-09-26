import React, {useState} from "react";
import '../../App.css';
import style from "./About.module.css";

const Message = (props) => {
    const [data, setData] = useState(null);
    const [print, setPrint] = useState(false)
    function getData(val){
        setData(val.target.value)
    }
    return (
        <div className={style.messageContent}>
            <div className={style.contentMessage}>
                {props.title}
            </div>

            <div className={style.contentInput}>
                {
                    print?
                        <h4 className={style.comment}>{data}</h4>
                        :null
                }
                <input className={style.contInp} type="text" onChange={getData}/>
            </div>

            <div className={style.contentButton}>
                <button onClick={() => setPrint(true)} className={style.contBtn}>Send</button>
            </div>
        </div>
    )
}

export default Message;