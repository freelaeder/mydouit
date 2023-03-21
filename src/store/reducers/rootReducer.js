import {combineReducers} from "redux";
import userReducer from "@reducers/userReducer";
import metaReducer from "@reducers/metaReducer";
import {articleReducer} from "@reducers/articleReducer";
const rootReducer = combineReducers({
    userReducer,
    metaReducer,
    articleReducer

})

export default rootReducer