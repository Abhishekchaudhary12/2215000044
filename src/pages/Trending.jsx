// // src/pages/Trending.jsx
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Trending() {
//   const [trendingPosts, setTrendingPosts] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/trending-posts') // Replace with your backend API
//       .then(res => setTrendingPosts(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div>
//       <h2 className="text-center mb-4">Trending Posts</h2>
//       {trendingPosts.map((post, index) => (
//         <div className="card mb-3" key={index}>
//           <img src={`https://source.unsplash.com/random/400x250?sig=${index}`} className="card-img-top" alt="Post" />
//           <div className="card-body">
//             <h5 className="card-title">{post.title}</h5>
//             <p className="card-text">{post.content}</p>
//             <p className="card-text"><small className="text-muted">Comments: {post.commentCount}</small></p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Trending;


// src/pages/Trending.jsx
import React from 'react';

const trendingPosts = [
  {
    title: "The Power of AI in 2025",
    content: "AI is revolutionizing how we live. Let's explore how it's changing industries.",
    commentCount: 128
  },
  {
    title: "React vs Angular: Who Wins?",
    content: "A detailed comparison of React and Angular for frontend development.",
    commentCount: 128
  }
];

function Trending() {
  return (
    <div>
      <h2 className="text-center mb-4">🔥 Trending Posts</h2>
      {trendingPosts.map((post, index) => (
        <div className="card mb-4 shadow" key={index}>
          <img src={`https://source.unsplash.com/600x300/?technology,code&sig=${index}`} className="card-img-top" alt="trending" />
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.content}</p>
            <span className="badge bg-warning text-dark">💬 {post.commentCount} Comments</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Trending;
