import * as React from "react";
import { render } from "react-dom";
import { Route, Switch, withRouter } from "react-router-dom";

import Content from "../Content";
import Toolbar from "../Toolbar";

import About from "../../pages/About";
import Home from "../../pages/Home";
import Services from "../../pages/Services";
import NotFound from "../../pages/NotFound";

import "./style.scss";

class App extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

    }

    public render() {
        return (
            <section>
                <Toolbar />
                <Content>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/services" component={Services} />
                        <Route path="/about" component={About} />
                        <Route component={NotFound} />
                    </Switch>
                </Content>
            </section>
        );
    }
}

export default withRouter(App);
