import React, {useEffect, useLayoutEffect, useState} from 'react';
import {connect} from "react-redux";
import classNames from "classnames";
import {getArticlesListCreator, updateActiveIndex} from "@store/creator/articlecreator";
import {articlesRequest, followAuthorArticlesRequest} from "@requests/article";

function DynamicList(props) {
    //向上取整的场景
    const listCount = Math.ceil(props.itemCount / 10);
    // 根据listCount生成空数组
    const listArray = Array.from({length: listCount}, () => []);


    // 点击li的方法
    const updateList = (index) => {
        const {updateActiveIndex, getArticlesListCreator, activeTabName} = props
        try {
            // 更新本地下标
            updateActiveIndex(index)
            // 判断activeTabName 获取文章
            activeTabName === 'Your Feed' ? getArticlesListCreator(() => followAuthorArticlesRequest({
                    limit: 10,
                    offset: index * 10
                })) :
                // 获取global文章列表
                getArticlesListCreator(() => articlesRequest({
                    limit: 10,
                    offset: index * 10
                }))
        } catch (e) {
            console.log(e)
        }


    }

    //渲染listArray 每一项的内容方法
    function renderLists() {
        const buttons = listArray.map((list, index) => (
            <li key={index} onClick={() => updateList(index)} className={classNames('page-item ng-scope', {
                'active': props.activeIndex === index
            })}>
                <a className="page-link ng-binding" href="#">{index + 1}</a>
            </li>
        ));
        return <div>{buttons}</div>;
    }

    // 若没有传递 itemCount 返回 null
    return listCount ? renderLists() : null;
}

export default connect((state) => ({
    activeTabName: state.articleReducer.activeTabName
}), {
    updateActiveIndex,
    getArticlesListCreator
})(DynamicList);