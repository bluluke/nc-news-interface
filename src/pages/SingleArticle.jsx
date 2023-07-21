import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { SingleArticleHeader } from "../components/SingleArticleHeader";
import { SingleArticleBody } from "../components/SingleArticleBody";
import { SingleArticleImage } from "../components/SingleArticleImage";
import { CommentsList } from "../components/CommentsList";
import { getSingleArticle, getComments } from "../utils/api";
import { CommentAdder } from "../components/CommentAdder";

export const SingleArticle = () => {
    const { article_id } = useParams();
    const [singleArticleInfo, setSingleArticleInfo] = useState(null);  
    
    const [isLoading, setIsLoading] = useState(true);
    const [comments, setComments] = useState(); 

    useEffect(() => {  
        getSingleArticle(article_id).then((singleArticleData) => {
            setSingleArticleInfo(singleArticleData);
        })
        getComments(article_id).then((comments) => {
            setComments(comments);
            setIsLoading(false);
        })    
    }, []);

if(isLoading || singleArticleInfo === null) return <p>Loading...</p>;
    return (
        <div id="singleArticle">
                <SingleArticleHeader title={singleArticleInfo.title}/>  
                <SingleArticleImage article_img_url={singleArticleInfo.article_img_url}/>
                <SingleArticleBody     
                    key={singleArticleInfo.article_id} 
                    author={singleArticleInfo.author} 
                    body={singleArticleInfo.body}
                    created_at={singleArticleInfo.created_at} 
                    comment_count={singleArticleInfo.comment_count}
                    votes={singleArticleInfo.votes}     
                    article_id={singleArticleInfo.article_id}            
                />
                <CommentAdder article_id={article_id} setComments={setComments}/>
                <CommentsList comments={comments} setComments={setComments}/>
            </div>
    )
                
 }
