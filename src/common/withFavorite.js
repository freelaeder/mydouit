import {connect} from "react-redux";
import {updateArticlesSlugCreator} from "@store/creator/articlecreator";
import {favoriteRequest, unFavoriteRequest} from "@requests/article";
import React from "react";

export default function withFavorite(Component) {
    class Favorite extends React.Component {
        state = {
            // 点赞或取消点赞请求的加载状态
            favoriteRequestStatus: "idle", // 点赞或取消点赞请求的错误信息
            favoriteRequestError: null,
        };
        updateFavorited = async (favorites) => {
            if (this.state.favoriteRequestStatus === 'pending') return
            this.setState({
                favoriteRequestStatus: 'pending', favoriteRequestError: null
            })
            try {
                const {updateArticlesSlugCreator, article} = this.props
                const res = await (favorites ? unFavoriteRequest(article.slug) : favoriteRequest(article.slug))
                updateArticlesSlugCreator(res.article)
                // 更新请求加载状态
                this.setState({
                    favoriteRequestStatus: "success",
                    favoriteRequestError: null,
                });
            } catch (e) {
                // 更新请求加载状态
                this.setState({
                    favoriteRequestStatus: "error",
                    favoriteRequestError: e.response?.data.errors,
                });
            }
        }
        // 渲染视图
        render() {
            return (
                <Component {...this.props} {...this.state} updateFavorited={this.updateFavorited}/>
            );
        }
    }


    return connect(undefined,{updateArticlesSlugCreator})(Favorite)

}