import { useContext, useState, useEffect } from "react"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../contexts/User";
import { deleteComment } from "../utils/api";




export const CommentCard = ({author, created_at, body, votes, comment_id, setComments}) => {
    const userForCommentDelete = useContext(UserContext);
    const [commentIdToDelete, setCommentIdToDelete] = useState(comment_id);
    const [isClicked, setIsClicked] = useState(false);
  

    useEffect(() => {
        if(isClicked) {
        deleteComment(commentIdToDelete).then(() => {
            optimisticDeleteComment(commentIdToDelete) 
        })
        .catch((err) => {
            handleError()   
        })
        }
    }, [isClicked])


    const handleError = () => {   
        toast("There was a problem. Comment was not deleted.", {
            position: "top-center",
            bodyClassName: 'toastBody',
        });
    };
    const handleDeleteClick = (event) => {
        setIsClicked(true);
     }
    const optimisticDeleteComment = (commentIdToDelete) => {
        setComments((currentComments) => 
            currentComments.filter((comment) => comment.comment_id !== commentIdToDelete)
        );
    }

    return (
        <li>
            <section id="commentCard">
                <p id="authorCommentCard">{author}</p>
                <p id="createdAtCommentCard">{new Date(created_at).toLocaleDateString()}</p>
                <p id="bodyCommentCard">{body}</p>
                <p id="votesCommentCard">{votes} votes</p>
                {author === userForCommentDelete.user ? 
                <button value={comment_id} onClick={(handleDeleteClick)}>Delete Comment</button> 
                : null}
            </section>
        </li>
    )
}