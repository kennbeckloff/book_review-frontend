import {Link} from 'react-router-dom';
import { useState} from 'react';

function Login(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      try {
        const mutationResponse = await login({
          variables: { email: formState.email, password: formState.password },
        });
        const token = mutationResponse.data.login.token;
        Auth.login(token);
      } catch (e) {
        console.log(e);
      }
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    return (
      <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
        <Link to="/signup">Don't have an account?<br></br>Sign Up instead!</Link>
        <h2>Login</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="uk-form-width-default">
            <label htmlFor="email">Email address:</label>
            <input
            className='uk-input uk-form-width-default uk-border-rounded'
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="uk-form-width-default">
            <label htmlFor="pwd" >Password:</label>
            <input 
            className='uk-input uk-form-width-default uk-border-rounded'
               placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          {error ? (
            <div>
              <p className="error-text">The provided credentials are incorrect</p>
            </div>
          ) : null}
            <button  className="uk-button uk-button-default" type="submit">Submit</button>
         
        </form>
      </div>
      
    );
  }
  
  export default Login;