import React from "react";
import classes from "../styles/PostStyle.module.css"

const Comment = () => {
    return (
        <div>
            <button className={classes.button}>
                <img alt="" src='/icons/Comment.svg' style={{ marginTop: "5px" }}></img>
            </button>
        </div>
    )
};

export default Comment