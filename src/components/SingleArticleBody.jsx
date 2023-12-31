import { useState } from "react"
import { patchVote } from "../utils/api"

export const SingleArticleBody = ({author, created_at, body, votes, comment_count, article_id}) => {
    
    const [userHasVoted, setUserHasVoted] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleAddClick = () => {
            setUserHasVoted(true)
            patchVote(article_id)
            .catch((err) => {
                setIsError(true);
            });
    };

    return (
        <article id="singleArticleBody">
            <div id='articleTopInfo'>
                <p id="authorSingleArticle">By {author}</p>           
                <p id="createdAtSingleArticle">{new Date(created_at).toLocaleDateString()}</p>
            </div>
            <p id="bodySingleArticle">{body}</p>
            <div id='articleBottomInfo'>
                <p id="votesSingleArticle">{userHasVoted && !isError ? votes + 1 : votes} votes</p>
                <button id="addVoteButton" onClick={handleAddClick} disabled={userHasVoted}>Add vote</button>
                {isError ? <p>The vote was not successful.</p> : null}
                <p id="commentCountSingleArticle">{comment_count} comments</p>        
            </div>
        </article>
        
    )
    
}

