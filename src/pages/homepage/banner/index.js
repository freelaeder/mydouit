// 首页 Banner 组件: src/pages/homePage/banner/index.js
import React from "react";

export default class Banner extends React.Component {
    render() {
        return (
            <div className="banner">
                <div className="container">
                    <h1 className="logo-font">conduit</h1>
                    <p>A place to share your knowledge.</p>
                </div>
            </div>
        );
    }
}