import * as React from "react";

import "./style.scss";

export default class Content extends React.Component<any, any> {
    public render() {
        return (
            <div className="content">
                {this.props.children}
            </div>
        );
    }
}
