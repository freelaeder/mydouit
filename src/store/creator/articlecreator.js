import * as types from "@types/articleTypes";
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
        dispatch({
            type: types.REQUEST_ARTICLES_SUCCESS,
            payload: {articles: res?.articles}
        })

    } catch (e) {
        if (e instanceof AxiosError) {
            dispatch({
                type: types.REQUEST_ARTICLES_ERROR,
                payload: {error: e.response?.data.errors},
            })
        }
    }

}