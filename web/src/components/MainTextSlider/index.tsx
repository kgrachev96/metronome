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
            autoplaySpeed: 2000,
            pauseOnHover: true,
        };
        return (
            <div>
                <Slider {...settings}>
                    <div className="slider-content">
                        <h3>Бухгалтерский учёт</h3>
                        <p>Много текстаМного текстаМного текстаМного текстаМного текстаМного текстаМного текстаМного текстаМного текста</p>
                    </div>
                    <div className="slider-content">
                        <h3>Аудит кампании</h3>
                        <p>Много текстаМного текстаМного текстаМного текстаМного текстаМного текстаМного текстаМного текстаМного текста</p>
                    </div>
                    <div className="slider-content">
                        <h3>Управленческий учёт</h3>
                        <p>Много текстаМного текстаМного текстаМного текстаМного текстаМного текстаМного текстаМного текстаМного текста</p>
                    </div>
                    <div className="slider-content">
                        <h3>Аутсорсинг</h3>
                        <p>Много текстаМного текстаМного текстаМного текстаМного текстаМного текстаМного текстаМного текстаМного текста</p>
                    </div>
                    <div className="slider-content">
                        <h3>Что-то ещё</h3>
                        <p>Много текстаМного текстаМного текстаМного текстаМного текстаМного текстаМного текстаМного текстаМного текста</p>
                    </div>
                    <div className="slider-content">
                        <h3>Что-то ещё</h3>
                        <p>Много текстаМного текстаМного текстаМного текстаМного текстаМного текстаМного текстаМного текстаМного текста</p>
                    </div>
                </Slider>
            </div>
        );
    }
}
