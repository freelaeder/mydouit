import * as ArtTypes from '../types/articleTypes'
import * as profileTypes from '@types/profileTypes'
import * as commentTypes from '../types/commentsTypes'
import {arrayToDictionary} from "@utils/arraytoDis";
// 初始状态
const initialState = {
    // 文章详情
    article: {
        // 文章详情数据
        result: {},
        // 记录请求加载状态
        status: "idle",
        // 记录请求加载错误信息
        error: null,
    },
    // 评论
    comment: {
        result: {},
        status: 'idle',
        error: null

    }
};

export function detailReducer(state = initialState, action) {
    const {type, payload} = action
    switch (type) {
        //padding
        case ArtTypes.REQUEST_ARTICLE_BY_SLUG:
            return {
                ...state,
                article: {
                    ...state.article,
                    status: 'padding'
                }
            }
        case ArtTypes.REQUEST_ARTICLE_BY_SLUG_SUCCESS:
            return {
                ...state,
                article: {
                    ...state.article,
                    result: payload.article,
                    status: 'success'
                }
            }
        case ArtTypes.REQUEST_ARTICLE_BY_SLUG_ERROR:
            return {
                ...state,
                article: {
                    ...state.article,
                    error: payload.error,
                    status: 'error'
                }
            }
        case ArtTypes.UPDATE_ARTICLES_SLUG:
            return {
                ...state,
                article: {
                    ...state.article,
                    result: payload
                }
            }
        // 更新作者信息
        case profileTypes.UPDATE_PROFILE:
            return {
                ...state,
                article: {
                    ...state.article,
                    result: {
                        ...state.article.result,
                        author: payload,
                    }
                }
            }
        case commentTypes.REQUEST_COMMENTS:
            return {
                ...state,
                comment: {
                    status: 'pending',
                    result: {},
                    error: null
                }
            }
        case commentTypes.REQUEST_COMMENTS_SUCCESS:
            return {
                ...state,
                comment: {
                    status: 'success',
                    result: arrayToDictionary(payload.comments, 'id'),
                    error: null
                }
            }
        case commentTypes.REQUEST_COMMENTS_ERROR:
            return {
                ...state,
                comment: {
                    status: 'error',
                    result: {},
                    error: payload
                }
            }
        case commentTypes.UPDATE_COMMENTS:
            return {
                ...state,
                comment: {
                    ...state.comment,
                    result: {
                        ...state.comment.result,
                        [payload.comment.id]: payload.comment
                    }
                }
            }
        case commentTypes.DELETE_COMMENTS:
            const newResult = {...state.comment.result}
            delete newResult[payload.id]
            console.log(payload, 'payload')
            return {
                ...state,
                comment: {
                    ...state.comment,
                    result: newResult
                }
            }
        case ArtTypes.RESET_ARTICLE:
            return {
                ...initialState
            }
        default:
            return state
    }

}