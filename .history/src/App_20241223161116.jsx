import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import FollowingPage from './pages/Following';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>React App</h1>
      </div>
    </Router>
  );
}

export default App;
