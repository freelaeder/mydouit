import React, {Component} from 'react';
import {connect} from "react-redux";
import classNames from "classnames";
import {updateArticlesSlugCreator, updateAuthorProfile} from "@store/creator/articlecreator";
import withFavorite from "@src/common/withFavorite";
import FollowAuthor from "@src/common/FollowAuthor";

class ArticleMeta extends Component {
    render() {
        const {author: {image, username, following}, createdAt, favorited, favoritesCount} = this.props.article
        return (
            <div className="article-meta">
                <a href="">
                    {/*<img src={image} alt=""/>*/}
                </a>
                <div className="info">
                    <a href="" className="author">
                        {username}
                    </a>
                    <span className="date">{createdAt}</span>
                </div>
                <FollowAuthor render={(state, updateAuthorFollow) => (

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
                )

                }
                />
                &nbsp;&nbsp;
                <button onClick={() => this.props.updateFavorited(favorited)} className={classNames('btn btn-sm', {
                    ' btn-outline-primary': !favorited, ' btn-primary': favorited
                })}>
                    <i className="ion-heart"></i>
                    &nbsp; Favorite Article <span className="counter">({favoritesCount})</span>
                </button>
            </div>
        );
    }
}

export default connect((state) => ({
    article: state.detailReducer.article.result
}), {
    updateArticlesSlugCreator,
    updateAuthorProfile
})(withFavorite(ArticleMeta));
