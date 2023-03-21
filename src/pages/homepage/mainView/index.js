// 首页主视图组件: src/pages/homePage/mainView/index.js
import React from "react";
import {TabItems, Tabs} from "@shared/tabs";
import {connect} from "react-redux";
import {getArticlesListCreator, setArticleCreator} from "@store/creator/articlecreator";
import {articlesRequest, followAuthorArticlesRequest} from "@requests/article";
import Articles from "@shared/articles";

class MainView extends React.Component {
    componentDidMount() {
        const {token} = this.props
        if(token){
            this.getFollowArticles()
        }else {
            this.getGloBalArticles()
        }

    }

    getFollowArticles = () => {
        const {setArticleCreator,getArticlesListCreator} = this.props
        setArticleCreator('Your Feed')
        getArticlesListCreator(followAuthorArticlesRequest)
    }
    getGloBalArticles = () => {
        const {setArticleCreator,getArticlesListCreator} = this.props
        setArticleCreator('Global Feed')
        getArticlesListCreator(articlesRequest)
    }
    render() {
        const {token,activeTabName} = this.props
        return (
            <>
                <div className="feed-toggle">
                    <Tabs>
                        {
                            token && (
                                <TabItems active={activeTabName === 'Your Feed'} onClick={this.getFollowArticles}>
                                    Your feed
                                </TabItems>
                            )
                        }
                        <TabItems active={activeTabName === 'Global Feed'} onClick={this.getGloBalArticles}>
                            Global feed
                        </TabItems>
                    </Tabs>
                </div>
                <Articles />

            </>
        );
    }
}

export default connect((state) => ({
    token: state.userReducer.user.token,
    activeTabName: state.articleReducer.activeTabName
}), {setArticleCreator,getArticlesListCreator})(MainView)