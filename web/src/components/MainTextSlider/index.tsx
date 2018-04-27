import * as React from "react";
import Slider from "react-slick";

import "./style.scss";

export default class MainTextSlider extends React.Component {
    public render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true,
            responsive: [
                {
                    breakpoint: 921,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        };
        return (
            <div className="slider-block">
                <Slider {...settings}>
                    <div className="slider-content">
                        <div className="slider-text">
                            <h1>Бухгалтерский учёт</h1>
                            <p>Много текстаМного текстаМного текстаМного текстаМного текстаМного текстаМного текстаМного текстаМного текста</p>
                        </div>
                    </div>
                    <div className="slider-content">
                        <div className="slider-text">
                            <h1>Аудит кампании</h1>
                            <p>Много текстаМного текстаМного текстаМного текстаМного текстаМного текстаМного текстаМного текстаМного текста</p>
                        </div>
                    </div>
                    <div className="slider-content">
                        <div className="slider-text">
                            <h1>Управленческий учёт</h1>
                            <p>Много текстаМного текстаМного текстаМного текстаМного текстаМного текстаМного текстаМного текстаМного текста</p>
                        </div>
                    </div>
                    <div className="slider-content">
                        <div className="slider-text">
                            <h1>Аутсорсинг</h1>
                            <p>Много текстаМного текстаМного текстаМного текстаМного текстаМного текстаМного текстаМного текстаМного текста</p>
                        </div>
                    </div>
                    <div className="slider-content">
                        <div className="slider-text">
                            <h1>Что-то ещё</h1>
                            <p>Много текстаМного текстаМного текстаМного текстаМного текстаМного текстаМного текстаМного текстаМного текста</p>
                        </div>
                    </div>
                    <div className="slider-content">
                        <div className="slider-text">
                            <h1>Что-то ещё</h1>
                            <p>Много текстаМного текстаМного текстаМного текстаМного текстаМного текстаМного текстаМного текстаМного текста</p>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}
