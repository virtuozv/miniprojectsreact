import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";

const Share = () => {
  return (
    <>
      <div className="shareContainer">
        <div className="shareBlock">
          <img src="/assets/person/1.jpeg" alt="" className="shareImg" />
          <input
            placeholder="What's in your mind, Girl Marvelous ?"
            alt="fuck this"
            className="shareContainerInput"
          />
        </div>
        <hr />
        <div className="shareIcons">
          <ul className="shareList">
            <li className="shareListItem">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </li>
            <li className="shareListItem">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </li>
            <li className="shareListItem">
              <Room htmlColor="green " className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </li>
            <li className="shareListItem">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </li>
          </ul>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </>
  );
};

export default Share;
