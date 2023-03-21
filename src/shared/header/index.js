// 应用头部组件: src/shared/header/index.js
import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import LoginView from "@shared/header/loginView";
import LogoutView from "@shared/header/logoutView";

 class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        conduit
                    </Link>
                    {/* 渲染登录后显示的导航视图 */}
                    <LoginView />
                    {/* 渲染登录前显示的导航视图 */}
                    <LogoutView />

                </div>
            </nav>
        );
    }
}

export default connect()(Header)