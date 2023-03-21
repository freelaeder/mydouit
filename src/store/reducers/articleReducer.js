import * as ArtTypes from '../types/articleTypes'
import {arraytoDics, arrayToDictionary} from "@utils/arraytoDis";
const initialState = {
    activeTabName:'Your Feed',
    articles :{
        status:'idle',
        result:{},
        error:null
    }
}

export function articleReducer(state= initialState,action){
    const {type,payload} = action

    switch (type){
        case ArtTypes.updateActiveTabName:
            return {
                ...state,
                activeTabName: payload
            }
        case ArtTypes.REQUEST_ARTICLES:
            return {
                ...state,
                articles:{
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
                    result: arrayToDictionary(payload.articles,'slug'),
                    // result: arraytoDics(payload.articles),
                    error: null
                }
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
        default:
            return state
    }
}