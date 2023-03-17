// src/store/reducers/userReducer.js
import {save_user} from "@types/userTypes";

const initialState = {
    // 用户信息
    user: {},
    name:{}
};

export default function userReducer(state = initialState, action) {
    const {type,payload} = action
    switch (type) {
        case save_user:
            return {
                ...state,
                user: payload.user
            }
        default:
            return state;
    }
}