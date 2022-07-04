import "./post.css";
import { MoreVert } from "@material-ui/icons";

const Post = () => {
  return (
    <>
      <div className="postContainer">
        <div className="postInformation">
          <div className="postTopLeft">
            <img src="/assets/person/1.jpeg" alt="" className="postImg" />
            <div className="persona">Girl Marvelous</div>
            <div className="postData">5 min ago</div>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postContent">
          <div className="postTitle">Love For All, Hatred For None</div>
          <img className="postImage" src="assets/post/1.jpeg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" alt="" />
            <img className="likeIcon" src="assets/heart.png" alt="" />
            <span className="postLikeCounter">32 people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
