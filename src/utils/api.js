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

export const getSingleArticle = (articleId) => {
    return articlesApi.get(`/articles/${articleId}`).then((res) => {
        return res.data[0];
    })
}

export const getComments = (articleId) => {
    return articlesApi.get(`/articles/${articleId}/comments`).then((res) => {
    return res.data.comments;
    })
}



export const patchVote = (articleId) => {
    const incVote = {
        inc_votes: 1
    };
    return articlesApi.patch(`/articles/${articleId}`, incVote)
    .then(( {data}) => {
        return data.article[0];
    });
}
