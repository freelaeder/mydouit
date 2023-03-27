import React from "react";
import {publishCommentRequest} from "@requests/article";
import {connect} from "react-redux";
import {updateComments} from "@store/creator/commentsCreator";

class CommentForm extends React.Component {

    state = {
        // 记录用户输入的评论内容
        comment: "",
        // 发布评论请求的请求状态
        publishCommentRequestStatus: "idle",
        // 发布评论请求的错误信息
        publishCommentRequestError: null,
    };

    updateComment = async (event) => {
        const {result: {slug}, updateComments} = this.props
        const {comment, publishCommentRequestStatus} = this.state
        // 阻止默认行为
        event.preventDefault()
        if (publishCommentRequestStatus === 'pending') return
        if (!comment.trim()) return;

        this.setState({
            publishCommentRequestStatus: 'pending',
            publishCommentRequestError: null
        })
        // 发送i请求
        try {
            const res = await publishCommentRequest(slug, comment)
            updateComments(res.comment)
            this.setState({
                publishCommentRequestStatus: 'success',
                publishCommentRequestError: null,
                comment: ''
            })
        } catch (e) {
            console.log(e, 'updateComment')
            this.setState({
                publishCommentRequestStatus: 'error',
                publishCommentRequestError: e
            })
        }


    }

    render() {
        const {publishCommentRequestStatus, comment} = this.state
        const {author: {image}} = this.props.result
        return (
            <>
                <form className="card comment-form" onSubmit={this.updateComment}>
                    <div className="card-block">
            <textarea
                onChange={(event) => this.setState({comment: event.target.value})}
                className="form-control"
                value={comment}
                placeholder="Write a comment..."
                rows="3"
            ></textarea>
                    </div>
                    <div className="card-footer">
                        <img
                            src={image}
                            className="comment-author-img"
                            alt=""
                        />
                        <button
                            className="btn btn-sm btn-primary">{publishCommentRequestStatus === 'pending' ? 'publishing' : 'Post Comment'}</button>
                    </div>
                </form>

            </>
        );
    }
}

export default connect((state) => ({
    result: state.detailReducer.article.result
}), {
    updateComments
})(CommentForm)