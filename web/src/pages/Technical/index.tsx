import * as React from "react";
import { render } from "react-dom";

import * as technical_tech from "../../images/metronome-tech.gif";
import * as technical from "../../images/technical.gif";

import "./style.scss";

export default class Technical extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

    }

    public render() {
        return (
            <section id="technical_block">
                <div className="technical-content">
                    <img src={technical_tech} alt="technical_work" />
                    <h1>На сайте проводятся технические работы.</h1>
                    <p>Приносим свои извинения за доставленные неудобства.</p>
                </div>
            </section>
        );
    }
}
