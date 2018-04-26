import * as React from "react";
import { HashRouter, NavLink } from "react-router-dom";

import ToolbarLink from "../ToolbarLink";

// import * as logo from "../../images/logo@2x.png";
import * as logo_new from "../../images/logo_new@2x.png";

import "./style.scss";

export default class Toolbar extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <header>
                <HashRouter>
                    <section className="header-container">
                        <div className="container">
                            <nav className="header-content">
                                <ToolbarLink exact to="/" className="tab"><img src={logo_new} alt="metronome-logo" /></ToolbarLink>
                                <ul className="toolbar-links">
                                    <li><ToolbarLink exact to="/" className="tab">Главная</ToolbarLink></li>
                                    <li><ToolbarLink to="/services" className="tab">Услуги</ToolbarLink></li>
                                    <li><ToolbarLink to="/about" className="tab">О компании</ToolbarLink></li>
                                    <li><ToolbarLink to="/prices" className="tab">Цены</ToolbarLink></li>
                                </ul>
                                <div className="header-contact">
                                    <h1>8 (123) 456-78-90</h1>
                                    <p>мы вам перезвоним</p>
                                </div>
                            </nav>
                        </div>
                    </section>
                </HashRouter>
            </header>
        );
    }
}
