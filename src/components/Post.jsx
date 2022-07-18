import React from "react";
import classes from "../styles/PostStyle.module.css"
import Like from "./Like"
import Author from "./Author"
import Comment from "./Comment"

const Post = (props) => {
    return (
        <div className={classes.post}>
            <Author username={props.post.username} time={props.post.time} />
            <div className={classes.description}>
                {props.post.description}
            </div>
            <div className={classes.button_container}>
                <Like />
                <Comment />
            </div>
        </div>
    )
}

export default Post;