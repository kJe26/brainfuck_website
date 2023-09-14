// custom components
import { 
  Route, 
  BrowserRouter as Router, 
  Routes 
} from 'react-router-dom';
import Index from './pages/Index';

// styles
import './static/styles/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Index/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
