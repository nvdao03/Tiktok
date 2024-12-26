import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import FollowingPage from './pages/Following';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/following" element={<FollowingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
