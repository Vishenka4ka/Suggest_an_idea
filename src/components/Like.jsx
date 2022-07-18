import React, { useState } from "react";
import classes from "../styles/PostStyle.module.css"

const Like = () => {
    const [likes, setLikes] = useState(10)
    const [check, setCheck] = useState(false)

    const like = () => {
        check !== true ? setLikes(likes + 1) : setLikes(likes - 1)
        setCheck(!check)
    }

    return (
        <div style={{display: "flex"}}>
            <button className={classes.button} onClick={like}>
                <img alt="" src='/icons/Like.svg' style={{ marginTop: "5px" }}></img>
            </button>
            <div className={classes.like}>{likes}</div>
        </div>
    )
};

export default Like