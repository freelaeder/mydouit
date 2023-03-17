// src/App.js
import React from "react";
import routers from "@src/router";
import {useRoutes} from "react-router-dom";
import Layout from "@shared/layout";

export default function App ()  {
    //使用路由
    const route = useRoutes(routers)
        return (
            <>
                <Layout>
                    {
                        route
                    }
                </Layout>
            </>
        )

}
// if (process.env.NODE_ENV === "development") {
//     console.log("当前代码运行在开发环境");
//     console.log(process.env.REACT_APP_BASE_URL);
//
// } else if (process.env.NODE_ENV === "production") {
//     console.log("当前代码运行在生产环境");
// }