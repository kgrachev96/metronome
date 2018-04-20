import * as React from "react";
import { render } from "react-dom";

import "./style.scss";

export default class App extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

    }

    public render() {
        return (
            <main>
                <div><h1>Привет!</h1></div>
            </main>
        );
    }
}
