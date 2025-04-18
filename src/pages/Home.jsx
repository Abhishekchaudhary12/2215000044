// // src/pages/Home.jsx
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Home() {
//   const [topUsers, setTopUsers] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/top-users') // Replace with your backend API
//       .then(res => setTopUsers(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div>
//       <h2 className="text-center mb-4">Top 5 Users</h2>
//       <div className="row">
//         {topUsers.map((user, index) => (
//           <div className="col-md-4 mb-3" key={index}>
//             <div className="card">
//               <img src={`https://source.unsplash.com/random/300x200?sig=${index}`} className="card-img-top" alt="User" />
//               <div className="card-body">
//                 <h5 className="card-title">{user.name}</h5>
//                 <p className="card-text">Posts: {user.postCount}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;


// src/pages/Home.jsx
import React from 'react';

const topUsers = [
  { name: "Aarav Singh", postCount: 58 },
  { name: "Meera Sharma", postCount: 52 },
  { name: "Rohan Mehta", postCount: 50 },
  { name: "Priya Verma", postCount: 47 },
  { name: "Yash Gupta", postCount: 45 }
];

function Home() {
  return (
    <div>
      <h2 className="text-center mb-4">🏆 Top 5 Active Users</h2>
      <div className="row justify-content-center">
        {topUsers.map((user, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow-sm border-primary">
              <img src={`https://source.unsplash.com/300x200/?portrait,person&sig=${index}`} className="card-img-top" alt="user" />
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">Total Posts: <strong>{user.postCount}</strong></p>
                <div className="progress">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: `${user.postCount}%` }}
                  >
                    {user.postCount}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

