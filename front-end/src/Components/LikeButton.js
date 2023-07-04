import { useState } from "react";
import likeIcon from '../Components/images/up.png'
import dislikeIcon from '../Components/images/down.png'

const LikeButton = ()=>{
    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);
 
    const [activeBtn, setActiveBtn] = useState("none");
    const handleLikeClick = () => {
        if (activeBtn === "none") {
          setLikeCount(likeCount + 1);
          setActiveBtn("like");
          return;
        }
     
        if (activeBtn === 'like'){
          setLikeCount(likeCount - 1);
          setActiveBtn("none");
          return;
        }
     
        if (activeBtn === "dislike") {
          setLikeCount(likeCount + 1);
          setDislikeCount(dislikeCount - 1);
          setActiveBtn("like");
        }
      };
      const handleDislikeClick = () => {
        if (activeBtn === "none") {
          setDislikeCount(dislikeCount + 1);
          setActiveBtn("dislike");
          return;
        }
       
        if (activeBtn === 'dislike'){
          setDislikeCount(dislikeCount - 1);
          setActiveBtn("none");
          return;
        }
     
        if (activeBtn === "like") {
          setDislikeCount(dislikeCount + 1);
          setLikeCount(likeCount - 1);
          setActiveBtn("dislike");
        }
      };
    
   

    return (
    
        <div className="btn-lik-container row">
            <button
            className={` ${activeBtn === "like" ? "like-active" : ""} col-auto like-btn`}
            onClick={handleLikeClick}
            >
              <span className='like'><img src={likeIcon} alt='like'/> :</span>
            <span className="material-symbols-rounded">{likeCount}</span>

            </button>
        
            <button
            className={` ${activeBtn === "dislike" ? "dislike-active" : ""} col-auto like-btn`}
            onClick={handleDislikeClick}
            >
            <span className='like'><img src={dislikeIcon} alt='like'/> :</span>
            <span className="material-symbols-rounded">{dislikeCount}</span>
            </button>
        </div>

    )
}
export default LikeButton