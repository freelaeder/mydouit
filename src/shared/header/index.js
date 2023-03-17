// 应用头部组件: src/shared/header/index.js
import React from "react";
import {NavLink} from "react-router-dom";

export default class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light">
                <div className="container">
                    <a className="navbar-brand">conduit</a>
                    <ul className="nav navbar-nav pull-xs-right">
                        <li className="nav-item">
                            <NavLink className={'nav-link'} to={'/home'} > Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                <i className="ion-compose"></i>&nbsp;New Article
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                <i className="ion-gear-a"></i>&nbsp;Settings
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Sign in</a>
                        </li>
                        <li className="nav-item">
                            <NavLink className={'nav-link'} to={'/register'} > Sign up</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                <img
                                    src="https://api.realworld.io/images/smiley-cyrus.jpeg"
                                    className="user-pic"
                                    alt=""
                                />
                                coder798
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}