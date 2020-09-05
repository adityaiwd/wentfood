import React, { useState } from "react";
const Profile = (props) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const [inputAccount, setInputAccount] = useState("");
  const postCount = 5;
  const posts = [...Array(postCount)];
  return (
    <React.Fragment>
        <input onChange={(e) => setInputAccount(e.target.value)} placeholder="search profile"/>
        <img src="https://via.placeholder.com/150" alt="profile picture" />
        <div>@{props.username}</div>
        <button onClick={() => setIsFollowed(!isFollowed)}>
          {isFollowed ? "Unfollow" : "Follow"}
        </button>
        <div>Posts</div>
        <div>Follower</div>
        <div>Following</div>
        <div>Bio</div>
        {postCount === 0 ? (
          <div>No Posts</div>
        ) : (
          posts.map((_, idx) => (
            <Post src="https://via.placeholder.com/150" key={idx} />
          ))
        )}
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
    </div>
  );
}

export default App;
