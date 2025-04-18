// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Trending from './pages/Trending';
import FeedPage from './pages/Feedpage';

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <nav className="nav nav-pills mb-4">
          <Link className="nav-link" to="/">Top Users</Link>
          <Link className="nav-link" to="/trending">Trending Posts</Link>
          <Link className="nav-link" to="/feed">Feed</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/feed" element={<FeedPage />} />
        </Routes>
      </div>
    </Router>
  );
}

<nav className="nav nav-pills justify-content-center mb-4">
  <Link className="nav-link" to="/">Top Users</Link>
  <Link className="nav-link" to="/trending">Trending Posts</Link>
  <Link className="nav-link" to="/feed">Feed</Link>
</nav>

export default App;
