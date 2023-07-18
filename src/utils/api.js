import axios from "axios";

const articlesApi = axios.create({ 
    baseURL: "https://nc-news-api-tpln.onrender.com/api"
});

export const getArticles = () => {
    return articlesApi.get("/articles").then((res) => {
        const articleCardProps = res.data.map((article) => {
            const {article_id, title, author, topic, created_at, votes, article_img_url, comment_count} = article; 
            return {article_id, title, author, topic, created_at, votes, article_img_url, comment_count};
        })
        return articleCardProps;
    })
}
