import RequestManager from "@utils/request";

// 获取文章列表
export function articlesRequest(params={}){
    return RequestManager.instance.request({
        url: "/articles",
        params
    })
}
// 获取用户喜欢的文章列表
export function followAuthorArticlesRequest() {
    return RequestManager.instance.request({ url: "/articles/feed" });
}