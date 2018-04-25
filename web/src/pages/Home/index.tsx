import * as React from "react";

import Slider from "../../components/Slider";

import * as first_slide from "../../images/1.jpg";
import * as second_slide from "../../images/2.jpg";

import "./style.scss";

const slides = [
    {
        id: 1,
        background: first_slide,
        text: "Бухгалтерский учёт",
    },
    {
        id: 2,
        background: second_slide,
        text: "Бухгалтерский учёт",
    },
];

export default function Home() {
    return (
        <div className="main-page">
            <div className="up-block">
                <div className="container">
                    <div className="up-block-content">
                        <h1>Бухгалтерия в такт бизнеса.</h1>
                        <p>Помогаем нашим клиентам в вопросах ведения бухгалтерского и управленческого учёта.</p>
                    </div>
                </div>
            </div>
            {/* <Slider slides={slides} /> */}
            {/* <div className="metronome-block">
                <span className="circle-one">1</span>
                <span className="circle-two">2</span>
                <div className="metronome">
                    <div className="metronome-body">
                        <div className="stick"></div>
                        <div className="circle"></div>
                        <div className="body"></div>
                    </div>
                </div>
                <span className="circle-three">3</span>
                <span className="circle-four">4</span>
            </div> */}
        </div>
    );
}
