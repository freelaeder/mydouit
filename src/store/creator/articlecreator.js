import * as types from "@types/articleTypes";
import * as profileTypes from '@types/profileTypes'
import {AxiosError} from "axios";
// 更新当前激活
export const setArticleCreator = (tabName) => ({type: types.updateActiveTabName, payload: tabName})
// 获取文章列表
export const getArticlesListCreator = (http) => async (dispatch) => {
    //更新状态
    dispatch({type: types.REQUEST_ARTICLES})
    // 捕获错误
    try {
        const res = await http()
        return dispatch({
            type: types.REQUEST_ARTICLES_SUCCESS, payload: {articles: res?.articles, articlesCount: res?.articlesCount}
        })

    } catch (e) {
        if (e instanceof AxiosError) {
            return Promise.reject(dispatch({
                type: types.REQUEST_ARTICLES_ERROR, payload: {error: e.response?.data.errors},
            }))
        }
    }

}
// update slug
export const updateArticlesSlugCreator = (article) => ({type: types.UPDATE_ARTICLES_SLUG, payload: article})

// 根据slug 获取文章详情
export const getArticleBySlugCreator = (http) => async (dispatch) => {
    // padding
    dispatch({type: types.REQUEST_ARTICLE_BY_SLUG})
    //success
    try {
        const res = await http()
        return dispatch({type: types.REQUEST_ARTICLE_BY_SLUG_SUCCESS, payload: {article: res.article}})
    } catch (e) {
        return Promise.reject(dispatch({
            type: types.REQUEST_ARTICLE_BY_SLUG_ERROR, payload: {error: e.response?.data.errors}
        }))
    }
}

// 更新作者信息
export const updateAuthorProfile = (profile) => ({type: profileTypes.UPDATE_PROFILE, payload: profile})

// 更新下标
export const updateActiveIndex = (index) => ({type: types.UPDATE_ACTIVE_INDEX, payload: index})