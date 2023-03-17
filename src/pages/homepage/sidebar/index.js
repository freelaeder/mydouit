// 首页侧边栏组件: src/pages/homePage/sidebar/index.js
import React from "react";

export default class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <p>Popular Tags</p>
                <div className="tag-list">
                    <a className="tag-pill tag-default">programming</a>
                    <a className="tag-pill tag-default">javascript</a>
                    <a className="tag-pill tag-default">emberjs</a>
                    <a className="tag-pill tag-default">angularjs</a>
                    <a className="tag-pill tag-default">react</a>
                    <a className="tag-pill tag-default">mean</a>
                    <a className="tag-pill tag-default">node</a>
                    <a className="tag-pill tag-default">rails</a>
                </div>
            </div>
        );
    }
}