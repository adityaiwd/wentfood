import React, { useState } from "react";

const Profile = (props) => {
  const [isFollowed,setIsFollowed] = useState(false)
  return (
    <React.Fragment>
      <div className="App">
        <img src="https://via.placeholder.com/300" alt="profile picture" />
        <div>@{props.username}</div>
        <button onClick={() => setIsFollowed(!isFollowed)}>{isFollowed? "Unfollow" : "Follow"}</button>
        <div>Posts</div>
        <div>Follower</div>
        <div>Following</div>
        <div>Bio</div>
      </div>
    </React.Fragment>
  );
};

const Post = (props) => (
  <React.Fragment>
    <div className="App">
      <img src={props.src} alt="post" />
    </div>
  </React.Fragment>
);

function App() {
  const username = "instagram";
  return (
    <div>
      <Profile username={username} />
      <Post src="https://via.placeholder.com/150" />
    </div>
  );
}

export default App;
