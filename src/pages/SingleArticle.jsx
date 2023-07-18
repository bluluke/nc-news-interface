import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { SingleArticleHeader } from "../components/SingleArticleHeader";
import { SingleArticleBody } from "../components/SingleArticleBody";
import { SingleArticleImage } from "../components/SingleArticleImage";
import { getSingleArticle } from "../utils/api";

export const SingleArticle = () => {
    const { article_id } = useParams();
    const [singleArticleInfo, setSingleArticleInfo] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {  
        getSingleArticle(article_id).then((singleArticleData) => {
            setSingleArticleInfo(singleArticleData[0]);
            setIsLoading(false);
        })    
    }, []);

if(isLoading) return <p>Loading...</p>;
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
                />
            </div>
    )
                
 }
