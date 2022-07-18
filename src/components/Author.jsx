import React from "react";
import classes from "../styles/PostStyle.module.css"

const Author = (props) => {
    return (
        <div>
            <div className={classes.username}>
                {props.username}
            </div>
            <div className={classes.time}>
                {props.time}
            </div>
        </div>
    )
}

export default Author