// src/App.js
import React from "react";
import { Provider } from "react-redux";
import store from "@store/index";

export default class App extends React.Component {
  render() {
    return <Provider store={store}>App works</Provider>;
  }
}
if (process.env.NODE_ENV === "development") {
  console.log("当前代码运行在开发环境");
  console.log(process.env.REACT_APP_BASE_URL);

} else if (process.env.NODE_ENV === "production") {
  console.log("当前代码运行在生产环境");
}