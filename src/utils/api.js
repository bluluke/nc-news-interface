import axios from "axios";

const articlesApi = axios.create({ 
    baseURL: "https://nc-news-api-tpln.onrender.com/api"
});

export const getArticles = (topic, sortByOrder) => {

    let endpoint = `/articles`;
    if(topic !== 'all') {
        endpoint+=`?topic=${topic}`;
        if(sortByOrder !== null) {
            endpoint+=`&&${sortByOrder}`
        }
    } else {
        if(sortByOrder !== null) {
            endpoint+=`?${sortByOrder}`
        }
    } 
    return articlesApi.get(endpoint).then((res) => {
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

export const postComment = (newComment, articleId, user) => {
    const postRequestBody = {
        username: user,
        body: newComment
       };
    return articlesApi.post(`/articles/${articleId}/comments`,postRequestBody)
    .then(({data}) => {
        return data.comment[0];
    });   
};


export const trackCharacters = (currentLength, maxLength) => {
    let message = '';
    const difference = maxLength - currentLength;
    if(difference === 1) {
        message =`1 character remaining`
       } 
   else if(difference >= 2 || difference === 0) {
    message = `${difference} characters remaining`
   }
   else if(difference === -1) {
    message = `1 character over the limit`
   } else {
    message = `${currentLength - maxLength} characters over the limit`
   }
    return message;
}

export const getTopics = () => {
    return articlesApi.get('/topics').then((res) => {
        const topics = res.data.map((topic) => {
            return topic.slug;
        })
        return topics;
    })
}

export const getTopicToFetch = (currentTopic, currentLocation) => {
    const urlSearchParams = new URLSearchParams(currentLocation.search);
    const topicParam = urlSearchParams.get('topic');
    return topicParam || currentTopic;
}


export const capitaliseFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


export const getSortByOrder = (currentLocation) => {
    const urlSearchParams = new URLSearchParams(currentLocation.search);
    const sortBy = urlSearchParams.get('sort_by');
    const order = urlSearchParams.get('order');
    let sortByOrder;
    if(sortBy === null || order === null) {
        sortByOrder = null;
    } else {
        sortByOrder = `sort_by=${sortBy}&&order=${order}`
    }
    return sortByOrder;
}

export const deleteComment = (commentId) => {
   return articlesApi.delete(`/comments/${commentId}`).then((res) => { 
   })
}