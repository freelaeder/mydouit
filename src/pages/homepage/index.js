// 首页页面组件: src/pages/homePage/index.js
import React from "react";
import Banner from "@pages/homepage/banner";
import MainView from "@pages/homepage/mainView";
import Sidebar from "@pages/homepage/sidebar";
import {Helmet} from "react-helmet";
import {Navigate, Outlet} from "react-router-dom";
import {connect} from "react-redux";

 class HomePage extends React.Component {

    render() {
        return (
            <div className="home-page">
                <Helmet>
                    <title>conduit - Home Page</title>
                    <meta name="description" content="a place to share knowledge" />
                </Helmet>
                {/*<h1>outlet</h1>*/}
                {/*<Outlet />*/}
                <Banner/>
                <div className="container page">
                    <div className="row">
                        <div className="col-md-9">
                            <MainView />
                        </div>
                        <div className="col-md-3">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default connect()(HomePage)
