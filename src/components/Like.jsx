import React, { useState } from "react";
import classes from "../styles/PostStyle.module.css"

const Like = (props) => {
    const [likes, setLikes] = useState(props.likes)
    const [isLiked, setIsLiked] = useState(false)
    const [src, setSrc] = useState('/icons/Like.svg')

    const like = () => {
        isLiked !== true ? setLikes(likes + 1) : setLikes(likes - 1)
        isLiked !== true ? setSrc('/icons/Liked.svg') : setSrc('/icons/Like.svg')
        setIsLiked(!isLiked)
    }

    return (
        <div style={{display: "flex"}}>
            <button className={classes.button} onClick={like}>
                <img alt="" src={src} style={{ marginTop: "5px" }}></img>
            </button>
            <div className={classes.like}>{likes}</div>
        </div>
    )
};

export default Like;