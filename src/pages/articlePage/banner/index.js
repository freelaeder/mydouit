import React, {Component} from 'react';
import ArticleMeta from "@pages/articlePage/meta";

class ArticleBanner extends Component {
    render() {
        return (
            <div className="banner">
                <div className="container">
                    <h1>{this.props.title}</h1>
                    {/*<ArticleMeta />*/}
                </div>
            </div>
        );
    }
}

export default ArticleBanner;