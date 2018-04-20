import * as React from "react";
import { HashRouter, NavLink } from "react-router-dom";

export default class ToolbarLink extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <NavLink to="" activeClassName="tab--active" {...this.props}>{this.props.children}</NavLink>
        );
    }
}
