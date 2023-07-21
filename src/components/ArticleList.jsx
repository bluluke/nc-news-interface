import { Link } from "react-router-dom";
import { ArticleCard } from "./ArticleCard"
import { useEffect, useState } from 'react';
import { getArticles, getTopicToFetch, getSortByOrder } from "../utils/api";


export const ArticleList = ({currentTopic, currentLocation, setApiError}) => {

const [articleCards, setArticleCards] = useState();
const [isLoading, setIsloading] = useState(true); 


useEffect(() => {
    setIsloading(true);
    const getSortByOrderResult = getSortByOrder(currentLocation);
    const topicToFetch = getTopicToFetch(currentTopic, currentLocation);

    getArticles(topicToFetch, getSortByOrderResult)
    .then((articleData) => {
        setArticleCards(articleData);
        setIsloading(false);
    })
    .catch((error) => {
        setApiError(error)
    })
}, [currentLocation]);

if(isLoading) return <p>Loading...</p>;
    return (
        <section id="articleListContainer"> 
            <ul id="articleList">
                {articleCards.map(({ article_id, title, author, topic, created_at, votes, article_img_url, comment_count }) => {
                        return <Link to={`/articles/${article_id}`} key={article_id}>
                                    <ArticleCard title={title} author={author} topic={topic} created_at={created_at} votes={votes} article_img_url={article_img_url} comment_count={comment_count}/>
                                </Link>
                })}
            </ul>
        </section>
    )
}



