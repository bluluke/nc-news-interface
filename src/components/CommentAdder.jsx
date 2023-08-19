import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../contexts/User';
import { postComment } from '../utils/api';
import { trackCharacters } from '../utils/api';


export const CommentAdder = ({ article_id, setComments }) => {
const [newComment, setNewComment] = useState("");
const [isError, setIsError] = useState(false);
const [characterMessage, setCharacterMessage] = useState()
const userForPost = useContext(UserContext);


useEffect(() => {
    setCharacterMessage(trackCharacters(newComment.length, 50))
}, [newComment])

const handleSubmit = (e) => {
    e.preventDefault();
    postComment(newComment, article_id, userForPost.user).then((postedComment) => {
        setComments((currentComments) => {
            return [postedComment, ...currentComments];
        })
    })
    .catch((err) => {
        setIsError(true);
    });
    setNewComment('');
};


    return <form className="commentAdder" onSubmit={handleSubmit}>
        {userForPost.user ? 
            <div id='commentInputContainer'>
                <label id='writeCommentMessage' htmlFor="new-comment">Write comment below</label> <br></br>
                <textarea 
                    id="new-comment" 
                    value={newComment} 
                    onChange={(e) => {
                        setNewComment(e.target.value)
                    }}
                /> <br></br>
                <div id='submitButtonContainer'>
                    <button id='submitButton' disabled={newComment.length > 50 || newComment.length === 0} >Submit</button>
                </div>
                <div id='characterCountContainer'>
                    <p id='characterCountMessage'>{characterMessage}</p>
                    {isError ? <p>There was a problem posting the comment. Comment not posted.</p> : null}
                </div>
            </div>
            : <p id="logInToComment">Log in to comment</p>}
    </form>
}