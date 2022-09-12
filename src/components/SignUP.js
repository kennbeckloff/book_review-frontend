import React, { useState } from "react";
import axios from "axios";

function SignUp() {

  const [formData, setFormData] = useState({name:"", username: "", email: "", password: "" })
  function handleChange(event) {
    const key = event.target.id;
    const value = event.target.value;

    setFormData({
      ...formData,
      [key]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios.post("https://boookreview-v1.herokuapp.com/users/register", formData)
      .then((response) => {
        if (Object.values(response.data).length > 1) {
          alert("User registered successfully");
        } else {
          alert("User already exist");
        }
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      
      <div className="mb-3">
        <label>username</label>
        <input type="text" className="form-control" placeholder="username" id="username" 
        onChange={handleChange} value={formData.username}/>
      </div>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          id="email" onChange={handleChange} value={formData.email}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          id="password" onChange={handleChange} value={formData.password}
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/Login">Login?</a>
      </p>
    </form>
  );
}

export default SignUp;
