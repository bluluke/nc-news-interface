

export const ArticleCard = ({ title, author, topic, created_at, votes, article_img_url, comment_count }) => {
    const formattedDate = new Date(created_at).toLocaleDateString();
    return (
        <li>
            <section className="articleCard">
                <h3 className="articleHeading">{title}</h3>
            
       
                    <p className='authorArticleCard'>By {author}</p>
                    <p className='aboutArticleCard'>About {topic}</p>
                    <p className="createdAtArticleCard">{formattedDate}</p>
                    <p className="votesArticleCard">{votes} votes</p>
                
         
                    <img className="imageArticleCard" src={article_img_url}></img>
                    <p className="commentCountArticleCard">{comment_count} comments</p>
           
            </section>
        </li>
    )
}