// 首页主视图组件: src/pages/homePage/mainView/index.js
import React from "react";
import {TabItems, Tabs} from "@shared/tabs";
import {connect} from "react-redux";
import {getArticlesListCreator, setArticleCreator, updateActiveIndex} from "@store/creator/articlecreator";
import {articlesRequest, followAuthorArticlesRequest} from "@requests/article";
import Articles from "@shared/articles";

class MainView extends React.Component {
    componentDidMount() {
        const {token} = this.props
        if (token) {
            this.getFollowArticles()
        } else {
            this.getGloBalArticles()
        }


    }

    getFollowArticles = () => {
        const {setArticleCreator, getArticlesListCreator,updateActiveIndex} = this.props
        setArticleCreator('Your Feed')
        getArticlesListCreator(followAuthorArticlesRequest)
        // 如果点击了切换列表，重置index为0
        updateActiveIndex(0)
    }
    getGloBalArticles = () => {
        const {setArticleCreator, getArticlesListCreator,updateActiveIndex} = this.props
        setArticleCreator('Global Feed')
        getArticlesListCreator(articlesRequest)
        // 如果点击了切换列表，重置index为0
        updateActiveIndex(0)
    }

    render() {
        const {token, activeTagName, activeTabName} = this.props
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
                        {
                            activeTabName === 'Tag Feed' && (
                                <TabItems active={true} onClick={this.getGloBalArticles}>
                                    {activeTagName}
                                </TabItems>
                            )
                        }

                    </Tabs>
                </div>
                <Articles/>

            </>
        );
    }
}

export default connect((state) => ({
    token: state.userReducer.user.token,
    activeTabName: state.articleReducer.activeTabName,
    activeTagName: state.tagReducer.activeTagName
}), {setArticleCreator, getArticlesListCreator, updateActiveIndex})(MainView)