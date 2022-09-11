import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import LandingPage from './pages/LandingPage';
// import Home from './pages/Home';
import { Outlet} from 'react-router-dom' 


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Kenya National Library Service Book Review
      </header>
      <Outlet />
      <footer></footer>
    </div>
  );
}

export default App;
