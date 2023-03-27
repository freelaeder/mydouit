import {combineReducers} from "redux";
import userReducer from "@reducers/userReducer";
import metaReducer from "@reducers/metaReducer";
import {articleReducer} from "@reducers/articleReducer";
import {tagReducer} from "@reducers/tagReducer";
import {detailReducer} from "@reducers/detailReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";


const rootReducer = combineReducers({
    userReducer: persistReducer({ key: "userReducer", storage }, userReducer),
    metaReducer,
    articleReducer,
    tagReducer,
    detailReducer
});


export default rootReducer