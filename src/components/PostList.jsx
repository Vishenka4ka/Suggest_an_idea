import React from "react";
import Post from "./Post";

const PostList = () => {
    const posts = [
        {
            username: "Клим Саныч",
            title: "Здравствуйте",
            description: "Мы любим животных и стараемся поддерживать тех из них.",
            time: "18 июля 2022 г. 8:58"
        },
        {
            username: "Дмитрий Пучков",
            title: "Здравствуйте",
            description: "Кому не посчастливилось иметь ласковых хозяев и тёплый кров.",
            time: "18 июля 2022 г. 8:58"
        },
        {
            username: "Дмитрий Пучков", 
            title: "Здравствуйте", 
            description: "И благодаря их труду ежегодно сотни питомцев находят свой новый дом.",
            time: "18 июля 2022 г. 8:58"
        },
        {
            username: "Дмитрий Пучков", 
            title: "Здравствуйте", 
            description: "И благодаря их труду ежегодно сотни питомцев находят свой новый дом.",
            time: "18 июля 2022 г. 8:58"
        }
    ]

    return (
        <div>
            {posts.map(post =>
                <Post post={post} />
            )}
        </div>
    )
};

export default PostList

