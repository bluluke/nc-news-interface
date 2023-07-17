import { ArticleCard } from "./ArticleCard"
import { useEffect, useState } from 'react';
import { getArticles } from "../utils/api";

export const ArticleList = () => {

const [articleCards, setArticleCards] = useState();
const [isLoading, setIsloading] = useState(true); 
useEffect(() => {
    getArticles().then((articleData) => {
        setArticleCards(articleData);
        setIsloading(false);
    })
}, []);

if(isLoading) return <p>Loading...</p>;
    return (
        <section id="articleListContainer"> 
            <ul id="articleList">
                {articleCards.map(({ article_id, title, author, topic, created_at, votes, article_img_url, comment_count }) => {
                        return <ArticleCard key={article_id} title={title} author={author} topic={topic} created_at={created_at} votes={votes} article_img_url={article_img_url} comment_count={comment_count}/>
                })}
            </ul>
        </section>
    )
}