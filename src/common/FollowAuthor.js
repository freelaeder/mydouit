import React, {Component} from 'react';
import {followRequest, unFollowRequest} from "@requests/auth";
import {connect} from "react-redux";
import {updateAuthorProfile} from "@store/creator/articlecreator";

class FollowAuthor extends Component {
    state = {
        // 关注用户/取消关注用户请求的请求状态
        followRequestStatus: "idle",
        // 关注用户/取消关注用户请求的错误信息
        followRequestError: null,
    }

    updateAuthorFollow = async (username, following) => {
        const {updateAuthorProfile} = this.props
        if (this.state.followRequestStatus === 'loading') return
        // 更新状态
        this.setState({
            followRequestStatus: 'loading',
            followRequestError: null
        })
        try {
            // 根据是否关注发送请求
            const res = await (following ? unFollowRequest(username) : followRequest(username))
            // update redux
            updateAuthorProfile(res.profile)
            // 更新请求状态
            this.setState({
                followRequestStatus: "success",
                followRequestError: null,
            });
        } catch (e) {
            // 更新请求状态
            this.setState({
                followRequestStatus: "error",
                followRequestError: e.response?.data.errors,
            });
        }

    }


    render() {
        const {state, updateAuthorFollow} = this
        return (
            this.props.render(state, updateAuthorFollow)
        );
    }
}

export default connect(undefined,{
    updateAuthorProfile
})(FollowAuthor);