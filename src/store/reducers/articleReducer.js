import * as ArtTypes from '../types/articleTypes'
import {arrayToDictionary} from "@utils/arraytoDis";

const initialState = {
    activeTabName: 'Your Feed',
    articles: {
        status: 'idle',
        result: {},
        error: null
    },
    // 当前文章的总数
    articlesCount: '',
    // 当前激活的列表下标 默认1
    activeArticleIndex: 0,
}

export function articleReducer(state = initialState, action) {
    const {type, payload} = action

    switch (type) {
        case ArtTypes.updateActiveTabName:
            return {
                ...state,
                activeTabName: payload
            }
        case ArtTypes.REQUEST_ARTICLES:
            return {
                ...state,
                articles: {
                    status: 'padding',
                    result: {},
                    error: null
                }
            }
        case ArtTypes.REQUEST_ARTICLES_SUCCESS:
            return {
                ...state,
                articles: {
                    status: 'success',
                    result: arrayToDictionary(payload.articles, 'slug'),
                    // result: arraytoDics(payload.articles),
                    error: null
                },
                articlesCount: payload.articlesCount
            }
        case ArtTypes.REQUEST_ARTICLES_ERROR:
            return {
                ...state,
                articles: {
                    status: 'error',
                    result: null,
                    error: payload.error
                }
            }
        //update slug
        case ArtTypes.UPDATE_ARTICLES_SLUG:
            if (typeof state.articles.result[payload.slug] === 'undefined') return state
            return {
                ...state,
                articles: {
                    ...state.articles,
                    result: {
                        ...state.articles.result,
                        [payload.slug]: payload
                    }
                }
            }
        // update index
        case ArtTypes.UPDATE_ACTIVE_INDEX:
            return {
                ...state,
                activeArticleIndex: payload
            }
        default:
            return state
    }
}