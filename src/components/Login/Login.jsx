import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
let base64 = require('base-64');

const Login = () => {
  const form = useRef();
  const navigate = useNavigate();

  // Handling functions
  const handleSubmit = async (event) => {
    event.preventDefault();
    // handle login or registration logic

    const uri =
      'http://smart-survival-api.us-east-1.elasticbeanstalk.com/usuario';
    const email = form.current.email.value;
    const password = form.current.password.value;
    const response = await fetch(uri, {
      method: 'GET',
      headers: {
        authorization: 'Basic ' + base64.encode(email + ':' + password),
      },
    });

    if (response.status !== 200) {
      const data = await response.json();
      alert(data.error.message);
    } else {
      const data = await response.json();

      console.log(data);
      if (data.token !== '') {
        localStorage.setItem('token', data.token);
        navigate('/my-profile');
      } else {
        alert('Error');
      }
    }
  };

  const handleCreateAccount = async (event) => {
    event.preventDefault();
    navigate('/register');
  };

  const handleForgotPassword = async (event) => {
    event.preventDefault();
    navigate('/forgotPassword');
  };

  return (
    <div className='auth-form-container'>
      <form
        ref={form}
        className='login-form-container'
        onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          id='email'
          name='user'
          required
        />
        <br />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          name='password'
          required
        />
        <br />
        <div>
          <button
            className='enter-btn'
            type='submit'>
            Entrar
          </button>
        </div>
        <div>
          <button
            className='create-account-btn'
            onClick={handleCreateAccount}>
            Crear una cuenta
          </button>
        </div>
        <div>
          <button
            className='forgot-password-btn'
            onClick={handleForgotPassword}>
            ¿Olvidaste tu contraseña?
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
