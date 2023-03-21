// src/shared/articles/article/index.js
import React from "react";

export default class Article extends React.Component {
    //
    render() {
        const {author:{username,image},body,createAt,description,favoritesCount,title} = this.props
        return (
            <div className="article-preview">
                <div className="article-meta">
                    <a href="">
                        <img src={image} alt="" />
                    </a>
                    <div className="info">
                        <a href="" className="author">
                            {username}
                        </a>
                        <span className="date">{createAt}</span>
                    </div>
                    <button className="btn btn-outline-primary btn-sm pull-xs-right">
                        <i className="ion-heart"></i> {favoritesCount}
                    </button>
                </div>
                <a href="" className="preview-link">
                    <h1>{title}</h1>
                    <p>{body}</p>
                    <span>Read more...</span>
                </a>
            </div>
        );
    }
}