

export const ArticleCard = ({ title, author, topic, created_at, votes, article_img_url, comment_count }) => {
    const formattedDate = new Date(created_at).toLocaleDateString();
    return (
        <li>
            <section className="articleCard">
                <h3 className="articleHeading">{title}</h3>
            
       
                    <p className='authorArticleCard'>Author: {author}</p>
                    <p className="createdAtArticleCard">{formattedDate}</p>
                    <p className='aboutArticleCard'>Topic: {topic}</p>
                
         
                    <img className="imageArticleCard" src={article_img_url}></img>
                    <p className="votesArticleCard">{votes} votes</p>
                    <p className="commentCountArticleCard">{comment_count} comments</p>
           
            </section>
        </li>
    )
}