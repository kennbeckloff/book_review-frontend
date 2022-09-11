import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './components/Login';
import SignUp from './components/SignUP';
import Books from './components/Books';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route exact path='/' element={<LandingPage />}>
        <Route exact path='login' element={<Login />} />
          <Route exact path='sign-up' element={<SignUp />} />
          <Route exact path='///' element={<Login />} />
      </Route>
      <Route eaxact path='/home' element={ <App />}>
        <Route exact path='books' element={<Books />}/>
        <Route exact path='/home/' element={<Books />}/>
      </Route>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
