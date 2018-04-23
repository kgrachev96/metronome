import * as React from "react";
import { render } from "react-dom";

import Slide from "../Slide/index";

import "./style.scss";

export default class Slider extends React.Component<IPropSlider, IStateSlider> {
    constructor(props: any) {
        super(props);

        this.state = {
            activeSlide: 0,
            interval: 3,
            autoplay: true,
        };

        this.pause = this.pause.bind(this);
        this.resume = this.resume.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
    }

    private timerId: any;

    public componentDidMount() {
        this.timerId = setInterval(() => {
            if (this.state.autoplay) {
                this.nextSlide();
            }
        }, this.state.interval * 1000);
    }

    public componentWillUnmount() {
        clearInterval(this.timerId);
    }

    public pause() {
        this.setState({ autoplay: false });
    }

    public resume() {
        this.setState({ autoplay: true });
    }

    public prevSlide() {
        const slide = this.state.activeSlide - 1 < 0
            ? this.props.slides.length - 1
            : this.state.activeSlide - 1;
        this.setState({
            activeSlide: slide,
        });
    }

    public nextSlide() {
        const slide = this.state.activeSlide + 1 < this.props.slides.length
            ? this.state.activeSlide + 1
            : 0;
        this.setState({
            activeSlide: slide,
        });
    }

    public render() {
        const slides = this.props.slides;
        return (
            <div id="slider" onMouseEnter={this.pause} onMouseLeave={this.resume}>
                {slides.map((slide, index) => {
                    return (
                        <Slide
                            key={slide.id}
                            background={slide.background}
                            text={slide.text}
                            active={index === this.state.activeSlide}
                        />
                    );
                })}
                <div className="rightArrow" onClick={this.nextSlide}><i className="fa fa-4x fa-arrow-circle-right"></i></div>
                <div className="leftArrow" onClick={this.prevSlide}> <i className="fa fa-4x fa-arrow-circle-left"></i></div>
            </div>
        );
    }
}
