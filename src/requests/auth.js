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

export function loginRequest(user){
    return RequestManager.instance.request({
        url:'/users/login',
        method:'post',
        data:{user}
    })
}

export function followRequest(username) {
    return RequestManager.instance.request({
        url: `/profiles/${username}/follow`,
        method: "post",
    });
}
// 取消关注用户
export function unFollowRequest(username) {
    return RequestManager.instance.request({
        url: `/profiles/${username}/follow`,
        method: "delete",
    });
}