import React from "react";
import log from "../../log.jpg";
import Message from "./message";
import style from "./About.module.css";

function About() {
    return(
        <div className={style.content}>
            <div className={style.contentImg}>
                <img src={log} alt="Logo"/>
            </div>

            <div className={style.Gyumri}>
                <div className={style.contentTitle}>
                    <h1>About Gyumri</h1>
                </div>
                <p className={style.contentText}>
                    In ancient time, there was Kumayri settlement in the place of the city.
                    The settlement’s name originates from the name of the Cimmerian, the tribe
                    (Scythian contemporaries) inhabited this territory. The Kumayri was mentioned for
                    the first time in the VII-VI centuries BC. In the Middle Ages the city was named as Gyumri.
                    For a long period, it was under the Arabs, then under the Turks and Persians. In the course
                    of Russian-Persian wars Kumayri became a part of the Russian Empire in 1804, and in 1837 the
                    territory of Kumayri became the place where the new Alexandropol Russian fortress was established
                    in honor of Empress Alexandra Fyedorovna, the wife of Nikolai I. From that moment the city began its
                    development. Late in the XIX century, when a rail junction was built there, the city became one of the
                    trade centers in Transcaucasia. In 1924 the city was re-named to Leninakan and when Armenia was proclaimed
                    independent it returned its name Gyumri.

                    Today Gyumri is an industrial center. There is a regional museum, historical and cultural reserve,
                    picture gallery, besides there are five churches, a monastery and orthodox chapel. The most beautiful
                    and valuable among the churches is considered the Amenaprkich Church (Church of our Saviour). It was
                    erected in 1860-1873 under Tadevos Andikyan’s project. The Church was built after the manner of the Ani
                    Cathedral Church (Turkey), but along with this, the Amenaprkich Church is more spacious and has round-shaped
                    windows. In the western part of the church there is a bell tower. The church’s inside part is richly
                    decorated with different ornaments. In the Soviet times, the church was closed while the bell tower was
                    blown up in 1937. In 1988 during the Spitak earthquake the church was almost completely destroyed but
                    Rafael Egoyan initiated to start restoration works which are still underway.
                </p>
            </div>

            <Message title="Send a message about Gyumri" />

        </div>
    )
}

export default About;