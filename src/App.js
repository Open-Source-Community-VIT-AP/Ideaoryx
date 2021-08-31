import './App.css';
import{BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/Home';
import Loader from './Loader';

function App() {
  return (
    <Router>
      <Loader/>
      <Home id="home"/>
    </Router> 
  );
}

export default App;
