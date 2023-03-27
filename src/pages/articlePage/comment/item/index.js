// src/pages/articlePage/comment/item/index.js
import React from "react";
import {deleteCommentRequest} from "@requests/article";
import {connect} from "react-redux";
import {deleteComments} from "@store/creator/commentsCreator";
import dateFormat from "dateformat";

class CommentItem extends React.Component {


    deleteComment = async (id) => {
        // delete comment
        const {slug, deleteComments} = this.props
        const res = await deleteCommentRequest(slug, id)
        deleteComments(id)
    }

    render() {
        const {id, createAt, body, author: {username, image, following}} = this.props
        return (
            <div className="card">
                <div className="card-block">
                    <p className="card-text">
                        {body}
                    </p>
                </div>
                <div className="card-footer">
                    <a href="" className="comment-author">
                        <img
                            src={image}
                            className="comment-author-img"
                            alt=""
                        />
                    </a>
                    &nbsp;
                    <a href="" className="comment-author">
                        {username}
                    </a>
                    <span className="date-posted">{dateFormat(createAt,"yyyy-mm-dd")} </span>
                    <span className="mod-options">

            <i onClick={() => this.deleteComment(id)} className="ion-trash-a"></i>
          </span>
                </div>
            </div>
        );
    }
}


export default connect(undefined, {
    deleteComments
})(CommentItem)