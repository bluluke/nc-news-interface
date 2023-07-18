export const CommentCard = ({author, created_at, body, votes}) => {
    return (
        <li>
            <section id="commentCard">
                <p id="authorCommentCard">{author}</p>
                <p id="createdAtCommentCard">{new Date(created_at).toLocaleDateString()}</p>
                <p id="bodyCommentCard">{body}</p>
                <p id="votesCommentCard">{votes} votes</p>
            </section>
        </li>
    )
}