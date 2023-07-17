

export const ArticleCard = ({ title, author, topic, created_at, votes, article_img_url, comment_count }) => {
    console.log('in articleCard: ',  title);
    return (
        <li>
            <section className="articleCard">
                <h3 className="articleHeading">{title}</h3>
            
       
                    <p className='authorArticleCard'>By {author}</p>
                    <p className='aboutArticleCard'>About {topic}</p>
                    <p className="createdAtArticleCard">{created_at}</p>
                    <p className="votesArticleCard">{votes} votes</p>
                
         
                    <img className="imageArticleCard" src={article_img_url}></img>
                    <p className="commentCountArticleCard">{comment_count} comments</p>
           
            </section>
        </li>
    )
}