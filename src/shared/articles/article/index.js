// src/shared/articles/article/index.js
import React from "react";
import {connect} from "react-redux";
import classNames from "classnames";
import {favoriteRequest, unFavoriteRequest} from "@requests/article";
import {updateArticlesSlugCreator} from "@store/creator/articlecreator";
import {Link} from "react-router-dom";

class Article extends React.Component {
    state = {
        // 点赞或取消点赞请求的加载状态
        favoriteRequestStatus: "idle",
        // 点赞或取消点赞请求的错误信息
        favoriteRequestError: null,
    }

    updateFavorite = async (slug) => {
        // 如果正在对当前文章进行点赞或取消点赞, 阻止程序继续向下执行防止重复请求
        if (this.state.favoriteRequestStatus === "loading") return;
        // 更新状态
        this.setState({
            favoriteRequestStatus: 'loading',
            favoriteRequestError: null
        })
        try {
            const res = await (this.props.favorited ? unFavoriteRequest(slug) : favoriteRequest(slug))
            // 更新本地状态
            const {updateArticlesSlugCreator} = this.props
            updateArticlesSlugCreator(res.article)
            console.log(res,'slug')
            this.setState({
                favoriteRequestStatus: 'success',
                favoriteRequestError: null
            })
        } catch (e) {
            this.setState({
                favoriteRequestStatus: 'error',
                favoriteRequestError: e.response?.data.errors,
            })
        }
    }

    render() {
        const {
            author: {username, image},
            body,
            createAt,
            description,
            favoritesCount,
            title,
            favorited,
            slug
        } = this.props
        return (
            <div className="article-preview">
                <div className="article-meta">
                    <a  href="" >
                        <img src={image} alt=""/>
                    </a>
                    <div className="info">
                        <a href="" className="author">
                            {username}
                        </a>
                        <span className="date">{createAt}</span>
                    </div>
                    <button onClick={() => this.updateFavorite(slug)}
                            className={classNames("btn  btn-sm pull-xs-right", {
                                'btn-outline-primary': !favorited,
                                'btn-primary': favorited,
                                disabled: this.favoriteRequestStatus === 'loading'
                            })}>
                        <i className="ion-heart"></i> {favoritesCount}
                    </button>
                </div>
                <div  className="preview-link">
                    <Link  id="RouterNavLink"  to={`/article/${slug}`}>
                        <h1>{title}</h1>
                    </Link>
                    <p>{body}</p>
                    <span>Read more...</span>
                </div >
            </div>
        );
    }
}

export default connect(undefined,{
    updateArticlesSlugCreator
})(Article)