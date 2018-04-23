import * as React from "react";
import { render } from "react-dom";

export default class Slide extends React.Component<any, IPropSlide> {
    constructor(props: any) {
        super(props);
    }
    public render() {
        const slideStyle = { backgroundImage: `url( ${this.props.background})` };
        return (
            <div
                className="slider__slide"
                data-active={this.props.active}
                style={slideStyle}
            >
                <div className="slider__slide__text">{this.props.text}</div>
            </div>
        );
    }
}
