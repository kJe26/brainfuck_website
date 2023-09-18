// custom components
import { 
  Route, 
  BrowserRouter as Router, 
  Routes 
} from 'react-router-dom';
import Index from './pages/Index';

// styles
import './static/styles/App.css';
import Colored from './pages/Colored';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Index/>} />
          <Route path="/colored" element={<Colored/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
