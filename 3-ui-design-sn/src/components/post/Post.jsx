import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useState } from "react";

const Post = ({ item }) => {
  const [like, setLike] = useState(item.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <>
      <div className="postContainer">
        <div className="postInformation">
          <div className="postTopLeft">
            <img
              src={Users.filter((u) => u.id === item.userId)[0].profilePicture}
              alt=""
              className="postImg"
            />
            <div className="persona">
              {Users.filter((u) => u.id === item.userId)[0].username}
            </div>
            <div className="postData">{item.date}</div>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postContent">
          <div className="postTitle">{item.desc}</div>
          <img className="postImage" src={item.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="assets/like.png"
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src="assets/heart.png"
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">{like} people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{item.comment} comments</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
