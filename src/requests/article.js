import RequestManager from "@utils/request";

// 获取文章列表
export function articlesRequest(params = {}) {
    return RequestManager.instance.request({
        url: "/articles",
        params
    })
}

// 获取用户喜欢的文章列表
export function followAuthorArticlesRequest(params = {}) {
    return RequestManager.instance.request({url: "/articles/feed", params});
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

// 根据文章 slug 获取文章详情
export function articleBySlugRequest(slug) {
    return RequestManager.instance.request({url: `/articles/${slug}`});
}

// 获取文章评论列表
export function commentsRequest(slug) {
    return RequestManager.instance.request({url: `/articles/${slug}/comments`});
}

// 发表文章评论
export function publishCommentRequest(slug, body) {
    return RequestManager.instance.request({
        url: `/articles/${slug}/comments`,
        method: "post",
        data: {
            comment: {body},
        },
    });
}

export function deleteCommentRequest(slug, id) {
    return RequestManager.instance.request({
        url: `/articles/${slug}/comments/${id}`,
        method: "delete",
    });
}