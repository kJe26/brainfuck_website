// custom components
import Index from './pages/Index';
import Colored from './pages/Colored';

// react libraries
import { 
  Route, 
  BrowserRouter as Router, 
  Routes 
} from 'react-router-dom';

// styles
import './static/styles/App.css';

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
