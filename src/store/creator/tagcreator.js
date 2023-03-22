import * as tagTypes from '../types/tagTypes'
import {AxiosError} from "axios";

export const tagCreator = (http) => async (dispatch) => {
    // 更新请求
    dispatch({type: tagTypes.REQUEST_TAGS})
    // 捕获错误发送请求
    try {
        const res = await http()
        return dispatch({type: tagTypes.REQUEST_TAGS_SUCCESS, payload: {tags: res.tags}})
    } catch (e) {
        if (e instanceof AxiosError) {
            return Promise.reject(
                dispatch({type: tagTypes.REQUEST_TAGS_ERRORS, payload: {error: e.response?.data.errors}})
            )
        }
    }
}

// 激活tag
export const setActiveTagCreator = (tabName) => ({
    type: tagTypes.SETUP_ACTIVE_TAG_NAME, payload: tabName
})