// // src/pages/FeedPage.jsx
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function FeedPage() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetchPosts(); // Initial fetch

//     const interval = setInterval(() => {
//       fetchPosts(); // Fetch every 5 seconds
//     }, 5000);

//     return () => clearInterval(interval); // Clean up
//   }, []);

//   const fetchPosts = () => {
//     axios.get('http://localhost:5000/api/posts') // Replace with your backend API
//       .then(res => setPosts(res.data.reverse())) // Newest on top
//       .catch(err => console.error(err));
//   };

//   return (
//     <div>
//       <h2 className="text-center mb-4">Live Feed</h2>
//       {posts.map((post, index) => (
//         <div className="card mb-3" key={post.id || index}>
//           <img src={`https://source.unsplash.com/random/400x250?sig=${index + 100}`} className="card-img-top" alt="Feed" />
//           <div className="card-body">
//             <h5 className="card-title">{post.title}</h5>
//             <p className="card-text">{post.content}</p>
//             <p className="card-text"><small className="text-muted">Posted by: {post.user}</small></p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default FeedPage;


// src/pages/FeedPage.jsx
import React, { useState, useEffect } from 'react';

function FeedPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // simulate fetching posts every 5 seconds
    const interval = setInterval(() => {
      const newPost = {
        title: `Post #${posts.length + 1}`,
        content: "This is a new update in your feed.",
        user: "User " + (Math.floor(Math.random() * 10) + 1)
      };
      setPosts(prev => [newPost, ...prev]);
    }, 5000);

    return () => clearInterval(interval);
  }, [posts]);

  return (
    <div>
      <h2 className="text-center mb-4">📢 Live Feed</h2>
      {posts.map((post, index) => (
        <div className="card mb-3" key={index}>
          <img src={`https://source.unsplash.com/600x300/?news,blog&sig=${index + 10}`} className="card-img-top" alt="feed" />
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.content}</p>
            <small className="text-muted">Posted by: {post.user}</small>
          </div>
        </div>
      ))}
      {posts.length === 0 && (
        <div className="alert alert-info text-center">Loading feed... please wait</div>
      )}
    </div>
  );
}

export default FeedPage;
