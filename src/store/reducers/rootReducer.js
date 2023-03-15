import {combineReducers} from "redux";
import userReducer from "@reducers/userReducer";
import metaReducer from "@reducers/metaReducer";
const rootReducer = combineReducers({
    userReducer,
    metaReducer
})

export default rootReducer