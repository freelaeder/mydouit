import * as tagTypes from '../types/tagTypes'
const initialState = {
    // 标签列表
    tags: {
        result: [],
        status: "idle",
        error: null,
    },
    activeTagName:''
}

export function tagReducer(state=initialState,action){
    const {type,payload} = action
    switch (type){
        case tagTypes.REQUEST_TAGS:
            return {
                ...state,
                tags: {
                    ...state.tags,
                    status: 'padding',
                }
            }
        case tagTypes.REQUEST_TAGS_SUCCESS:
            return {
                ...state,
                tags: {
                    ...state.tags,
                    status: 'success',
                    result: payload.tags
                }
            }
        case tagTypes.REQUEST_TAGS_ERRORS:
            return {
                ...state,
                tags: {
                    ...state.tags,
                    status: 'error',
                    error: payload.error

                }
            }
        case tagTypes.SETUP_ACTIVE_TAG_NAME:
            return {
                ...state,
                activeTagName:payload
            }
        default :
            return state

    }
}