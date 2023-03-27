import * as commentTypes from '@types/commentsTypes'
import {AxiosError} from "axios";

export const getCommentsCreator = (http) => async (dispatch) => {
    // 更新状态
    dispatch({type: commentTypes.REQUEST_COMMENTS})
    try {
        const response = await http()
        console.log(response, 'response----')
        return dispatch({type: commentTypes.REQUEST_COMMENTS_SUCCESS, payload: {comments: response.comments}})
    } catch (e) {
        if (e instanceof AxiosError) {
            return Promise.reject(dispatch({
                type: commentTypes.REQUEST_COMMENTS_ERROR,
                payload: e.response?.data.errors,
            }))
        } else {
            console.log(e)
        }

    }
}

// 更新本地评论列表
export const updateComments = (comment) => ({type: commentTypes.UPDATE_COMMENTS, payload: {comment}})
// delete
export const deleteComments = (id) => ({type: commentTypes.DELETE_COMMENTS, payload: {id}})

