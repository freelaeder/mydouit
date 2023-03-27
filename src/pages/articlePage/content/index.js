import React, {Component} from 'react';

class ArticleContent extends Component {
    render() {
        return (
            <div className="row article-content">
                <div className="col-md-12">
                    <div>
                        {
                            this.props.article.body
                        }
                    </div>
                    {/*<h2 id="introducing-ionic">Introducing RealWorld.</h2>*/}
                    {/*<p>It's a great solution for learning how other frameworks work.</p>*/}
                    <ul className="tag-list" style={{marginTop:25}}>
                        {
                            this.props.article.tagList.map(item => <li key={item} className="tag-default tag-pill tag-outline">{item}</li>)
                        }

                    </ul>
                </div>
            </div>
        );
    }
}

export default ArticleContent;