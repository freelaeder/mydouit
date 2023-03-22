// 首页侧边栏组件: src/pages/homePage/sidebar/index.js
import React from "react";
import {connect} from "react-redux";
import {setActiveTagCreator, tagCreator} from "@store/creator/tagcreator";
import {tagsRequest} from "@requests/tag";
import {getArticlesListCreator, setArticleCreator} from "@store/creator/articlecreator";
import {articlesRequest} from "@requests/article";

class Sidebar extends React.Component {
    componentDidMount() {
        const {tagCreator} = this.props
        tagCreator(tagsRequest)
    }

    setActiveTag = (tagName) => {
        const {setActiveTagCreator, setArticleCreator,getArticlesListCreator} = this.props
        // 激活tag
        setActiveTagCreator(tagName)
        // 激活本地的tab
        setArticleCreator('Tag Feed')
        // 获取文章
        getArticlesListCreator(() => articlesRequest({tagName}))

    }

    render() {
        const {tags} = this.props
        return (
            <div className="sidebar">
                <p>Popular Tags</p>
                <div className={'tag-list'}>
                    {
                        tags.status === 'padding' ?
                            <a className="tag-pill tag-default"> padding</a> : tags.status === 'error' ?
                                <div> error</div> : tags.result.length === 0 ? (
                                    <a className="tag-pill tag-default">tag list emtry</a>
                                ) : tags.result.map(item => (
                                    <a onClick={() => this.setActiveTag(item)} key={item}
                                       className="tag-pill tag-default">{item}</a>
                                ))
                    }
                </div>


            </div>
        );
    }
}

export default connect((state) => ({
        tags: state.tagReducer.tags
    }), {
        tagCreator,
        setActiveTagCreator,
        getArticlesListCreator,
        setArticleCreator
    }
)(Sidebar)