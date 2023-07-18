import { useState } from "react"
import { patchVote } from "../utils/api"

export const SingleArticleBody = ({author, created_at, body, votes, comment_count, article_id}) => {
    
    const [timesButtonClicked, setTimesButtonClicked] = useState(0);
    const [isError, setIsError] = useState(false);

    const handleAddClick = () => {
        setTimesButtonClicked((currentTimesButtonClick) => {
            return currentTimesButtonClick + 1;
        })
        patchVote(article_id).catch((err) => {
            setTimesButtonClicked((currentTimesButtonClick) => {
                return currentTimesButtonClick - 1;
            })
            setIsError(true);
        });
    };

    return (
        <article id="singleArticleBody">
            <p id="authorSingleArticle">By {author}</p>           
            <p id="createdAtSingleArticle">{created_at}</p>
            <p id="bodySingleArticle">{body}</p>
            <p id="votesSingleArticle">{votes + timesButtonClicked} votes</p>
            <button onClick={handleAddClick} disabled={timesButtonClicked > 0}>Add vote</button>
            {isError ? <p>The vote was not successful.</p> : null}
            <p id="commentCountSingleArticle">{comment_count} comments</p>        
             
        </article>
        
    )
    
}