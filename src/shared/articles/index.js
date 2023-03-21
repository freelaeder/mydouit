import React, {Component} from 'react';
import Article from "@shared/articles/article";
import {connect} from "react-redux";

class Articles extends Component {
    render() {
        const {articles: {status, result, error}} = this.props
        // 将文章字典转换为文章数组
        const articlesArray = Object.values(result);
        console.log(articlesArray,'array')
        return <>
            {
                status === 'padding' ? <div> data padding</div> : status === 'error' ?
                    <div>error </div> : articlesArray.length === 0 ? <div> list emtry</div> : articlesArray.map(item => <Article key={item.slug} {...item}  />)
            }

        </>
    }
}

export default connect((state) => ({
    articles: state.articleReducer.articles
}))(Articles);