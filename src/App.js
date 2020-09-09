import React, { useState } from "react";
import "./style.css";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Content from "./components/Content";
import Download from "./components/Download";
import Footer from "./components/Footer";

// const Post = (props) => <img src={props.src} alt="post" />;
// const Profile = (props) => {
//   const [isFollowed, setIsFollowed] = useState(false);
//   const [inputAccount, setInputAccount] = useState("");
//   const postCount = 5;
//   const posts = [...Array(postCount)];
//   return (
//     <React.Fragment>
//       <input
//         onChange={(e) => setInputAccount(e.target.value)}
//         placeholder="search profile"
//       />
//       <img src="https://via.placeholder.com/150" alt="profile picture" />
//       <div>@{props.username}</div>
//       <button onClick={() => setIsFollowed(!isFollowed)}>
//         {isFollowed ? "Unfollow" : "Follow"}
//       </button>
//       <div>{postCount} Posts</div>
//       <div>Follower</div>
//       <div>Following</div>
//       <div>Bio</div>
//       {postCount === 0 ? (
//         <div>No Posts</div>
//       ) : (
//         <div className="posts">
//           {posts.map((_, idx) => (
//             <Post src="https://via.placeholder.com/300" key={idx} className="post"/>
//           ))}
//         </div>
//       )}
//     </React.Fragment>
//   );
// };



function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Content />
      <Download />
      <Footer/>
    </div>
  );
}

export default App;
