import React, {Component} from 'react';
import {connect} from "react-redux";
import classNames from "classnames";
import {resetArticles, updateArticlesSlugCreator, updateAuthorProfile} from "@store/creator/articlecreator";
import withFavorite from "@src/common/withFavorite";
import FollowAuthor from "@src/common/FollowAuthor";
import DeleteArticleButton from "@pages/articlePage/meta/deleteArticles";


class ArticleMeta extends Component {


    // 渲染删除文章、编辑文章按钮
    deleteAndEditButtons() {
        const {slug} = this.props.article
        return (
            <DeleteArticleButton slug={slug} onArticleDeleted={this.props.resetArticles}/>
        );
    }


    render() {
        const {author: {image, username, following}, createdAt, favorited, favoritesCount} = this.props.article
        return (
            <div className="article-meta">
                <a href="">
                    <img src={image} alt=""/>
                </a>
                <div className="info">
                    <a href="" className="author">
                        {username}
                    </a>
                    <span className="date">{createdAt}</span>
                </div>
                {
                    username === this.props.userName ? this.deleteAndEditButtons() :
                        <FollowAuthor render={(state, updateAuthorFollow) => (
                            <>
                                <button onClick={() => updateAuthorFollow(username, following)}
                                        className={
                                            classNames('btn btn-sm', {
                                                'btn-outline-secondary': !following,
                                                ' btn-secondary': following,
                                                disabled: state.followRequestStatus === "loading"
                                            })
                                        }>
                                    <i className="ion-plus-round"></i>
                                    &nbsp; {following ? 'Unfollow' : 'Follow'} Eric Simons
                                </button>
                                &nbsp;&nbsp;
                                <button onClick={() => this.props.updateFavorited(favorited)}
                                        className={classNames('btn btn-sm', {
                                            ' btn-outline-primary': !favorited, ' btn-primary': favorited
                                        })}>
                                    <i className="ion-heart"></i>
                                    &nbsp; Favorite Article <span className="counter">({favoritesCount})</span>
                                </button>
                            </>
                        )
                        }
                        />
                }


            </div>
        );
    }
}

export default connect((state) => ({
    article: state.detailReducer.article.result,
    // 获取用户信息
    userName: state.userReducer.name,
}), {
    updateArticlesSlugCreator,
    updateAuthorProfile,
    resetArticles
})(withFavorite(ArticleMeta));
