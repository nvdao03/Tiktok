import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route) => {
            return (
              <Route key={} path={route.path} element={route.component} />
            )
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
