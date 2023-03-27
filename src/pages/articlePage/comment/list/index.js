// src/pages/articlePage/comment/item/index.js
import React from "react";
import CommentItem from "@pages/articlePage/comment/item";
import {connect} from "react-redux";
import {getCommentsCreator} from "@store/creator/commentsCreator";
import {commentsRequest} from "@requests/article";

class CommentList extends React.Component {
    componentDidMount() {

        this.getCommentList()
    }

    getCommentList = () => {
        const {slug, getCommentsCreator} = this.props
        getCommentsCreator(() => commentsRequest(slug))
    }

    render() {
        const {result, status} = this.props.comments
        const {slug} = this.props
        const commentsArray = Object.values(result);
        return (
            <>
                {
                    status === 'pending' ? <div>pending</div> : commentsArray.length === 0 ?
                        <div> 暂无评论哦</div> : commentsArray.map(item => <CommentItem slug={slug}
                                                                                        getCommentList={this.getCommentList}
                                                                                        key={item.id} {...item} />)
                }
            </>
        );
    }
}

export default connect((state) => ({
    comments: state.detailReducer.comment
}), {
    getCommentsCreator
})(CommentList)