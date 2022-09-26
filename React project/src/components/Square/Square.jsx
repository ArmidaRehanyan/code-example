import React from "react";
import style from "./Square.module.css";
import squareImg from "../../assets/images/square.jpg"

const Square = (props) =>{
    return (
        <div className={style.content}>
            <div className={style.title}>
                Vardanants Square in Gyumri
            </div>

            <div className={style.squareImg}>
                <img src={squareImg} alt="Square" className={style.imgSquare}/>
            </div>

            <div className={style.squareHistory}>
                Vartanants Square (Armenian: Վարդանանց Հրապարակ Vartanants Hraparak) or Vardanants Square,
                is the large central town square in Gyumri, Armenia. It is bordered by the Abovyan street from
                the west, Gai street from the north, Shahumyan street from the east and Vahan Cheraz street from
                the south. It has a rectangular shape (280 by 140 meters).

                The square was known as the May Uprising Square (Armenian: Մայիսյան Ապստամբության հրապարակ),
                named after the failed Bolshevik uprising against the Dashnak government of the First Republic of
                Armenia in May 1920.The square was opened during the 1930s under the Soviet rule, based on the
                original plan of Alexander Tamanian and the revised plan of D. Chislian.
                The square is decorated with several fountains with a memorial to the Battle of Avarayr at the central part.
                The memorial was erected in 2008 and includes a group of historic Armenian figures who led the Armenian army
                's campaign against Sassanid Persia. The equestrian statue of Vartan Mamikonian is erected at the centre of
                the memorial. The other four statues depict the Catholicos Hovsep I of Armenia, Ghevond Yerets,
                V. Mamikonian's mother and the prince Arshavir II Kamsarakan.
            </div>

            <div className={style.squareMap}>
                <iframe src="https://maps.google.com/maps?q=vardanants%20square&t=&z=13&ie=UTF8&iwloc=&output=embed" className={style.map}>
                </iframe>
            </div>
        </div>
    )
}

export default Square;