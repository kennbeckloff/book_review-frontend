import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/Navbar";
import SearchBooks from "./pages/SearchBooks";
import WantToRead from "./pages/WantToRead";
import Login from "./components/LoginForm";
import Signup from "./components/Signupform";
import SingleBook from "./pages/SingleBook";


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <AppNavbar />
          <Routes>
            <Route path="/" element={<SearchBooks />} />
            <Route path="/want" element={<WantToRead />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/book" element={<SingleBook />} />
            <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
          </Routes>
        </>
      </Router>
    </ApolloProvider>
   
  );
}

export default App;
