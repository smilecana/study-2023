import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "Hana Park",
        comment: "Hello, It's Hana."
    },
    {
        name: "Geon Park",
        comment: "Hello, It's Hana."
    },
    {
        name: "Jr.Hana  Park",
        comment: "Hello, It's Jr.Hana"
    },
]
function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                );
            })}
        </div>
    )
}

export default CommentList;