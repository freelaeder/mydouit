import {combineReducers} from "redux";
import userReducer from "@reducers/userReducer";
import metaReducer from "@reducers/metaReducer";
import {articleReducer} from "@reducers/articleReducer";
import {tagReducer} from "@reducers/tagReducer";

const rootReducer = combineReducers({
    userReducer,
    metaReducer,
    articleReducer,
    tagReducer

})

export default rootReducer