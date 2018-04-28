import * as React from "react";
import * as ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { HashRouter, NavLink } from "react-router-dom";

import ToolbarLink from "../ToolbarLink";

// import * as logo from "../../images/logo@2x.png";
import * as logo_new from "../../images/logo_new@2x.png";

import "./style.scss";

export default class Toolbar extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            windowWidth: window.innerWidth,
            mobileNavVisible: false,
            menuExpanded: false,
        };

        this.handleResize = this.handleResize.bind(this);
        this.handleNavClick = this.handleNavClick.bind(this);
    }

    public componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    };

    public componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    };

    public handleResize() {
        this.setState({ windowWidth: window.innerWidth });
    };

    public handleNavClick() {
        !this.state.mobileNavVisible ?
            this.setState({ mobileNavVisible: true })
            :
            this.setState({ mobileNavVisible: false });
    };

    public render() {
        const menu = this.state.mobileNavVisible ? <ToolbarLink /> : null;
        return (
            <header>
                <HashRouter>
                    <section className="header-container">
                        <div className="container">
                            <nav className="header-content">
                                <NavLink exact to="/" className="tab"><img src={logo_new} alt="metronome-logo" /></NavLink>
                                {this.state.windowWidth < 768 ?
                                    (
                                        <div className="mobile_nav" >
                                            <span className="menu-icon-toggle" onClick={this.handleNavClick}><span></span></span>
                                            <ReactCSSTransitionGroup
                                                transitionName="example"
                                                transitionEnterTimeout={500}
                                                transitionLeaveTimeout={300}
                                            >
                                                {menu}
                                            </ReactCSSTransitionGroup>
                                        </div>
                                    )
                                    : <ToolbarLink />
                                }
                                <div className="header-contact">
                                    <h1>8 (123) 456-78-90</h1>
                                    <p>мы вам перезвоним</p>
                                </div>
                            </nav>
                        </div>
                    </section>
                </HashRouter>
            </header >
        );
    }
}
