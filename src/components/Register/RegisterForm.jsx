import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterForm.css';

function RegisterForm(props) {
  const navigate = useNavigate();
  // Create a ref for each input field
  const nameRef = useRef();
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const academicDegreeRef = useRef();
  const ageRef = useRef();
  const mexicoStateRef = useRef();

  function createNewUser(event) {
    event.preventDefault();

    // Get the values from each input field using the ref
    const name = nameRef.current.value;
    const userName = userNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    const academicDegree = academicDegreeRef.current.value;
    const age = ageRef.current.value;
    const mexicoState = mexicoStateRef.current.value;

    // Do something with the user data, such as send it to a server
    let newUser = {
      nombre: name,
      userID: userName,
      email: email,
      password: password,
      grado: academicDegree,
      edad: age,
      estado: mexicoState,
    };
    props.createNewUser(newUser);
  }

  const handleGoToLogin = async (event) => {
    event.preventDefault();
    navigate('/');
  };

  return (
    <div className='register-form'>
      <form onSubmit={createNewUser}>
        <label>
          <i
            className='material-icons'
            style={{ color: '#0053B1', paddingRight: '10px' }}>
            person
          </i>
          Nombre:
          <input
            type='text'
            ref={nameRef}
            required
          />
        </label>
        <br />
        <label>
          <i
            className='material-icons'
            style={{ color: '#0053B1', paddingRight: '10px' }}>
            account_circle
          </i>
          Nombre de usuario:
          <input
            type='text'
            ref={userNameRef}
            required
          />
        </label>
        <br />
        <label>
          <i
            className='material-icons'
            style={{ color: '#0053B1', paddingRight: '10px' }}>
            mail
          </i>
          Correo electrónico:
          <input
            type='email'
            ref={emailRef}
            required
          />
        </label>
        <br />
        <label>
          <i
            className='material-icons'
            style={{ color: '#0053B1', paddingRight: '10px' }}>
            lock
          </i>
          Contraseña:
          <input
            type='password'
            ref={passwordRef}
            required
          />
        </label>
        <br />
        <label>
          <i
            className='material-icons'
            style={{ color: '#0053B1', paddingRight: '10px' }}>
            lock_open
          </i>
          Confirmar contraseña:
          <input
            type='password'
            ref={confirmPasswordRef}
            required
          />
        </label>
        <br />
        <label>
          <i
            className='material-icons'
            style={{ color: '#0053B1', paddingRight: '10px' }}>
            school
          </i>
          Grado académico:
          <select
            ref={academicDegreeRef}
            required>
            <option value='Primaria'>Primaria</option>
            <option value='Secundaria'>Secundaria</option>
          </select>
        </label>
        <br />
        <label>
          <i
            className='material-icons'
            style={{ color: '#0053B1', paddingRight: '10px' }}>
            group
          </i>
          Edad:
          <input
            type='number'
            min='0'
            ref={ageRef}
            required
          />
        </label>
        <br />
        <label>
          <i
            className='material-icons'
            style={{ color: '#0053B1', paddingRight: '10px' }}>
            location_on
          </i>
          Estado de la república:
          <select
            ref={mexicoStateRef}
            required>
            <option value='Aguascalientes'>Aguascalientes</option>
            <option value='Baja California'>Baja California</option>
            <option value='Baja California Sur'>Baja California Sur</option>
            <option value='Campeche'>Campeche</option>
            <option value='Chiapas'>Chiapas</option>
            <option value='Chihuahua'>Chihuahua</option>
            <option value='Coahuila'>Coahuila</option>
            <option value='Colima'>Colima</option>
            <option value='Distrito Federal'>Distrito Federal</option>
            <option value='Durango'>Durango</option>
            <option value='Estado de México'>Estado de México</option>
            <option value='Guanajuato'>Guanajuato</option>
            <option value='Guerrero'>Guerrero</option>
            <option value='Hidalgo'>Hidalgo</option>
            <option value='Jalisco'>Jalisco</option>
            <option value='Michoacán'>Michoacán</option>
            <option value='Morelos'>Morelos</option>
            <option value='Nayarit'>Nayarit</option>
            <option value='Nuevo León'>Nuevo León</option>
            <option value='Oaxaca'>Oaxaca</option>
            <option value='Puebla'>Puebla</option>
            <option value='Querétaro'>Querétaro</option>
            <option value='Quintana Roo'>Quintana Roo</option>
            <option value='San Luis Potosí'>San Luis Potosí</option>
            <option value='Sinaloa'>Sinaloa</option>
            <option value='Sonora'>Sonora</option>
            <option value='Tabasco'>Tabasco</option>
            <option value='Tamaulipas'>Tamaulipas</option>
            <option value='Tlaxcala'>Tlaxcala</option>
            <option value='Veracruz'>Veracruz</option>
            <option value='Yucatán'>Yucatán</option>
            <option value='Zacatecas'>Zacatecas</option>
          </select>
        </label>
        <div>
          <button type='submit'>
            <i
              className='material-icons'
              style={{
                color: 'white',
                paddingRight: '10px',
                fontSize: '18px',
                paddingLeft: '5px',
              }}>
              person_add
            </i>{' '}
            Registrarme
          </button>
          <button
            onClick={handleGoToLogin}
            type='submit'
            style={{ backgroundColor: '#1670ba' }}>
            <i
              className='material-icons'
              style={{
                color: 'white',
                paddingRight: '10px',
                fontSize: '18px',
                paddingLeft: '5px',
              }}>
              login
            </i>{' '}
            Iniciar Sesión
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
