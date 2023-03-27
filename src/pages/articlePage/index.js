import React from "react";
import ArticleBanner from "@pages/articlePage/banner";
import ArticleContent from "@pages/articlePage/content";
import ArticleMeta from "@pages/articlePage/meta";
import {CommentForm, CommentList} from "@pages/articlePage/comment";
import {Link, useParams} from "react-router-dom";
import {connect} from "react-redux";
import {getArticleBySlugCreator} from "@store/creator/articlecreator";
import {articleBySlugRequest} from "@requests/article";


class ArticlePage extends React.Component {
    componentDidMount() {
        const {getArticleBySlugCreator, slug} = this.props
        getArticleBySlugCreator(() => articleBySlugRequest(slug))
    }

    render() {
        const {title} = this.props.article.result
        const { token } =this.props
        return (
            <>
                {
                    this.props.article.status === 'success' ? (
                        <div className="article-page">
                            <ArticleBanner title={title}/>
                            <div className="container page">
                                <ArticleContent article={this.props.article.result}/>
                                <hr/>
                                <div className="article-actions">
                                    <ArticleMeta/>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-12 col-md-8 offset-md-2">
                                        {/*判断用户是否登录 */}
                                        {
                                            token ? <>
                                                <CommentForm/>
                                                <CommentList slug={this.props.slug}/>
                                            </> : <p>
                                                <Link to="/login">Sign in</Link>
                                                &nbsp;or&nbsp;
                                                <Link to="/register">sign up</Link>
                                                &nbsp;to add comments on this article.
                                            </p>

                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    ): null
                }


            </>
        );
    }
}

function DetailWrapper(props) {
    // 用来获取路径中的参数
    const {slug} = useParams()
    return <ArticlePage slug={slug} {...props} />
}


export default connect((state) => ({
    article: state.detailReducer.article,
    token: state.userReducer.user.token

}), {
    getArticleBySlugCreator,
})(DetailWrapper)