import * as React from "react";
import { render } from "react-dom";

import "./main.scss";

export default class App extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

    }

    public render() {
        return (
            <main><h1>Привет!!!!</h1></main>
        );
    }
}
