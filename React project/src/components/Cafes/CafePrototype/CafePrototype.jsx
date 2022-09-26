import React from "react";
import style from "./CafePrototype.module.css";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const cafePrototype = (props) => {
    const accordionData = [
        {
            id: 1,
            title: 'Sandwiches',
            content1: `Brisket.......................................$22`,
            content2: `Pulled Pork...................................$22`,
            content3: `Chopped Beef..................................$22`,
            content4: `Sausage.......................................$22`,
            content5: `Tipsy Texan...................................$22`,
        },
        {
            id: 2,
            title: 'By The Pound',
            content1: `Chopped Beef..................................$22`,
            content2: `Ribs..........................................$22`,
            content3: `Turkey........................................$22`,
            content4: `Sausage.......................................$22`,
            content5: `Pinto Beans...................................$22`,
        },
        {
            id: 3,
            title: 'Soups',
            content1: `Rich soup with vegetables and greens..................................................$1200`,
            content2: `spicy Indian style soup with small pieces of chicken breast.......................$1300`,
            content3: `Creamy mushroom soup with croutons................................................$1000`,
            content4: `Cubes of marinated cheese on toast roasted in olive oil with balsamic...................$1050`,
            content5: `Cheese with olives on fragrant toasts baked in oven....................................$1050`,
        },
        {
            id: 4,
            title: 'Main courses` chicken',
            content1: `Grilled chicken breast, served with puree..................................................$1300`,
            content2: `Spicy Indian style soup with small pieces of chicken breast................................$1300`,
            content3: `Chicken rolls in Italian style on the vegetable “pillow”...................................$2700`,
            content4: `Pork schnitzel filled with ham and cheese, served with French fried potatoes...............$2800`,
            content5: `Breaded schnitzel, served with potatoes “Risolli” and mayonnaise sauce with herbs..........$2700`,
        }
    ]
    const dataInfo = props[0];
    const logo = dataInfo.logo;
    const cafeData = dataInfo.cafeData;

    return (
        <div className={style.content}>
            <div className={style.cafeCont}>
                <div className={style.cafeName}>
                    {cafeData.cafeName}
                </div>

                <div className={style.cafeLogo}>
                    <img src={logo} width={740}/>
                </div>

                <div className={style.menu}>
                    Menu
                </div>

                <div className={style.accordion}>

                    {
                        <Accordion allowZeroExpanded>
                            {
                                accordionData.map((el, index, ) => {
                                    return (
                                        <AccordionItem key={el.id}>
                                            <AccordionItemHeading className={style.accordion__heading}>
                                                <AccordionItemButton>
                                                    {el.title}
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    {el.content1}
                                                </p>
                                                <p>
                                                    {el.content2}
                                                </p>
                                                <p>
                                                    {el.content3}
                                                </p>
                                                <p>
                                                    {el.content4}
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    )
                                })
                            }
                        </Accordion>
                    }

                </div>

            </div>
        </div>
    )
}

export default cafePrototype;
