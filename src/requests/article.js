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


// 文章点赞
export function favoriteRequest(slug) {
    return RequestManager.instance.request({
        url: `/articles/${slug}/favorite`,
        method: "post",
    });
}
// 取消文章点赞
export function unFavoriteRequest(slug) {
    return RequestManager.instance.request({
        url: `/articles/${slug}/favorite`,
        method: "delete",
    });
}