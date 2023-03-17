// 首页主视图组件: src/pages/homePage/mainView/index.js
import React from "react";

export default class MainView extends React.Component {
    render() {
        return (
            <>
                <div className="feed-toggle">
                    <ul className="nav nav-pills outline-active">
                        <li className="nav-item">
                            <a className="nav-link disabled">Your Feed</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active">Global Feed</a>
                        </li>
                    </ul>
                </div>
                <div className="article-preview">
                    <div className="article-meta">
                        <a>
                            <img src="http://i.imgur.com/Qr71crq.jpg" alt="" />
                        </a>
                        <div className="info">
                            <a className="author">Eric Simons</a>
                            <span className="date">January 20th</span>
                        </div>
                        <button className="btn btn-outline-primary btn-sm pull-xs-right">
                            <i className="ion-heart"></i> 29
                        </button>
                    </div>
                    <a className="preview-link">
                        <h1>How to build webapps that scale</h1>
                        <p>This is the description for the post.</p>
                        <span>Read more...</span>
                    </a>
                </div>
                <div className="article-preview">
                    <div className="article-meta">
                        <a>
                            <img src="http://i.imgur.com/N4VcUeJ.jpg" alt="" />
                        </a>
                        <div className="info">
                            <a className="author">Albert Pai</a>
                            <span className="date">January 20th</span>
                        </div>
                        <button className="btn btn-outline-primary btn-sm pull-xs-right">
                            <i className="ion-heart"></i> 32
                        </button>
                    </div>
                    <a className="preview-link">
                        <h1>
                            The song you won't ever stop singing. No matter how hard you try.
                        </h1>
                        <p>This is the description for the post.</p>
                        <span>Read more...</span>
                    </a>
                </div>
            </>
        );
    }
}