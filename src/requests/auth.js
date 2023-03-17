// src/requests/auth.js
import RequestManager from "@utils/request";

// 用户注册
export function registerRequest(user) {
    return RequestManager.instance.request({
        url: "/users",
        method: "post",
        data: { user },
    });
}