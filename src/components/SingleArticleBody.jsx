export const SingleArticleBody = ({author, created_at, body, votes, comment_count}) => {
    
    return (
        <article id="singleArticleBody">
            <p id="authorSingleArticle">By {author}</p>           
            <p id="createdAtSingleArticle">{created_at}</p>
            <p id="bodySingleArticle">{body}</p>
            <p id="votesSingleArticle">{votes} votes</p>
            <p id="commentCountSingleArticle">{comment_count} comments</p>        
             
        </article>
        
    )
    
}