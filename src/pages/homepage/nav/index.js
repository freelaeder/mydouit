import React from 'react';
import DynamicList from "@pages/homepage/nav/navTool";
import {connect} from "react-redux";

const Nav = (props) => {
    const {itemCount, articleStatus, articleIndex} = props
    return (
        <>
            {
                articleStatus === 'padding' ? (
                        <nav>
                            <ul className="pagination">
                                <li className="page-item ng-scope"> list-- padding</li>
                            </ul>
                        </nav>
                    ) :
                    <nav>
                        <ul className="pagination">
                            <DynamicList activeIndex={articleIndex} itemCount={itemCount}/>
                        </ul>
                    </nav>
            }
        </>

    );
};

export default connect((state) => ({
    itemCount: state.articleReducer.articlesCount,
    articleStatus: state.articleReducer.articles.status,
    articleIndex: state.articleReducer.activeArticleIndex
}))(Nav);