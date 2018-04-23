import * as React from "react";

import Slider from "../../components/Slider";

import * as first_slide from "../../images/1.jpg";
import * as second_slide from "../../images/2.jpg";

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
        <div className="main-slider">
            <Slider slides={slides} />
        </div>
    );
}
