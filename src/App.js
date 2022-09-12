import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet} from 'react-router-dom' 
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       Book_Review
      </header>
      <Outlet />
      <Home />
      <footer></footer>
    </div>
  );
}

export default App;
