import axios from "axios";

const articlesApi = axios.create({ 
    baseURL: "https://nc-news-api-tpln.onrender.com/api"
});

export const getArticles = () => {
    return articlesApi.get("/articles").then((res) => {
        const articleCardProps = res.data.map((article) => {
            const {title, author, topic, created_at, votes, comment_count} = article; 
            return {title, author, topic, created_at, votes, comment_count};
        })
        return articleCardProps;
    })
}
