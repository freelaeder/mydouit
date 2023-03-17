// src/store/index.js
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "@reducers/rootReducer";
import thunk from "redux-thunk";
// 导入持久化
import storage from 'redux-persist/lib/storage'
import {persistReducer} from "redux-persist";

const middlewares = [thunk];

const enhancers =
    process.env.NODE_ENV === "production"
        ? applyMiddleware(...middlewares)
        : composeWithDevTools(applyMiddleware(...middlewares));
const persistConfig = {
    key:'root',
    storage,
}
const store = createStore(persistReducer(persistConfig,rootReducer), enhancers);

export default store;