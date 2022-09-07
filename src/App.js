import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavbar from "./src/components/Navbar.js";
import SearchBooks from "./src/pages/SearchBooks.js";
import WantToRead from "./src/pages/WantToRead.js";
import Login from "./src/components/LoginForm.js";
import Signup from "./src/components/Signupform.js";
import SingleBook from "./src/pages/SingleBook.js";




const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
 
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (   
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
   
  );
}

export default App;
