import * as React from "react";
import { HashRouter, NavLink } from "react-router-dom";

import ToolbarLink from "../ToolbarLink";

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
                        <nav className="header-content">
                            <h1>Метроном</h1>
                            <ul className="toolbar-links">
                                <li><ToolbarLink exact to="/" className="tab">Главная</ToolbarLink></li>
                                <li><ToolbarLink to="/about" className="tab">О компании</ToolbarLink></li>
                                <li><ToolbarLink to="/services" className="tab">Услуги</ToolbarLink></li>
                                <li><ToolbarLink to="/prices" className="tab">Цены</ToolbarLink></li>
                            </ul>
                        </nav>
                    </section>
                </HashRouter>
            </header>
        );
    }
}
