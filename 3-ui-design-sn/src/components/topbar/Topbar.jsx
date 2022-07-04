import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="topBarLeft">
        <div className="logo">Social Network</div>
      </div>
      <div className="topBarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topBarRight">
        <div className="topbarLinks">
          <div className="topbarLink">Homepage</div>
          <div className="topbarLink">Timeline</div>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person /> <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat /> <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications /> <span className="topbarIconBadge">3</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  );
};

export default Topbar;
