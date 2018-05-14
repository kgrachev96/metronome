import * as React from "react";
import { NavLink } from "react-router-dom";

export default class ToolbarLink extends React.Component<any, any> {
    public render() {
        const menuLinks = [
            { to: "/", text: "Главная" },
            { to: "/services", text: "Услуги" },
            { to: "/about", text: "О компании" },
        ];
        return (
            <div className="toolbar-links">
                {menuLinks.map((menuLink, i): any => {
                    return (
                        <NavLink key={i} to={menuLink.to} className="tab">
                            {menuLink.text}
                        </NavLink>
                    );
                })
                }
            </div>
        );
    }
}
