import * as React from "react";

// import Slider from "../../components/Slider";

import MainTextSlider from "../../components/MainTextSlider";

import * as first_slide from "../../images/1.jpg";
import * as second_slide from "../../images/2.jpg";
import * as backgr from "../../images/4@2x.jpg";
import * as backgr2 from "../../images/Filters@2x.jpg";


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
                        <div className="up-block-text">
                            <h1>Бухгалтерия в такт бизнеса.</h1>
                            <p>Помогаем нашим клиентам в вопросах ведения бухгалтерского и управленческого учёта.</p>
                        </div>
                        <ul className="up-actions">
                            <li><a className="button main special">Оставить заявку</a></li>
                            <li><a className="button main">Подробнее</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <MainTextSlider />
            <div className="middle-block">
                <div className="container">
                    <div className="middle-content">
                        <div className="middle-text">
                            <h2>Услуги</h2>
                            <p>Ipsum quis semper consequat, sem nibh mattis arcu, quis porttitor lorem justo in tellus. Aenean lacinia
<br />interdum nisl felis et dui viverra, nec accumsan tempus quam ultricies.</p>
                        </div>

                        <div className="middle-features">
                            <section>
                                <span className="icon major fa-tag"></span>
                                <h3>Quam adipiscing</h3>
                                <p>Feugiat lorem quis semper consequat, sem nibh mattis arcu, amet porttitor lorem justo in cumsan quam ultricies magna tempus.</p>
                            </section>
                            <section>
                                <span className="icon major fa-tag"></span>
                                <h3>Quam adipiscing</h3>
                                <p>Feugiat lorem quis semper consequat, sem nibh mattis arcu, amet porttitor lorem justo in cumsan quam ultricies magna tempus.</p>
                            </section>
                            <section>
                                <span className="icon major fa-tag"></span>
                                <h3>Quam adipiscing</h3>
                                <p>Feugiat lorem quis semper consequat, sem nibh mattis arcu, amet porttitor lorem justo in cumsan quam ultricies magna tempus.</p>
                            </section>
                            <section>
                                <span className="icon major fa-tag"></span>
                                <h3>Quam adipiscing</h3>
                                <p>Feugiat lorem quis semper consequat, sem nibh mattis arcu, amet porttitor lorem justo in cumsan quam ultricies magna tempus.</p>
                            </section>
                        </div>

                    </div>
                </div>
            </div>
            <div className="q-block">

            </div>
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
            <div></div>
        </div>
    );
}
