import { CommentCard } from "./CommentCard";

export const CommentsList = ({ comments, setComments }) => {

    return (
        <section id="commentListContainer">
            <ul>
                {comments.map(({ author, created_at, body, comment_id, votes}) => {
                    return <CommentCard 
                                key={comment_id} 
                                author={author} 
                                created_at={created_at} 
                                body={body}
                                votes={votes}    
                                comment_id={comment_id}
                                setComments={setComments}
                            />
                })}
            </ul>
        </section>
    )
}