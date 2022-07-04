import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";

const Feed = () => {
  return (
    <div className="feed">
      <Share />
      {Posts.map((i) => (
        <Post key={i.id} item={i} />
      ))}
    </div>
  );
};

export default Feed;
