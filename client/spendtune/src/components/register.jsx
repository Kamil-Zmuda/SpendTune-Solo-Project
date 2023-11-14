import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { register } from '../apiService';
import { useCombinedStore } from '../Store';

function Register() {

  const setLogged = useCombinedStore(state => state.fetchLoggedUser);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const user = { email, password, firstName, lastName};
    const registeredUser = await register(user);
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
    if ( !registeredUser.error ) {
        await setLogged();
        navigate('/home');
    }
  }

  function goBack() {
    navigate('/');
  }

  // HANDLERS COULD BE REFACTORED INTO SINGLE UNIVERSAL HANDLER

  function handleEmail(event) {
    setEmail(event.target.value);
  }
  function handlePassword(event) {
    setPassword(event.target.value);
  }
  function handleFirstName(event) {
    setFirstName(event.target.value);
  }
  function handleLastName(event) {
    setLastName(event.target.value);
  }

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <input type="email" name='email' value={email}
            onChange={handleEmail} placeholder='email' />
          </li>
          <li>
            <input type="password" name='password' value={password}
            onChange={handlePassword} placeholder='password'/>
          </li>
          <li>
            <input type="text" name='firstName' value={firstName}
            onChange={handleFirstName} placeholder='first name'/>
          </li>
          <li>
            <input type="text" name='lastName' value={lastName}
             onChange={handleLastName} placeholder='last name'/>
          </li>
        </ul>
      </form>
            <button type="submit">Register</button>
            <button onClick={goBack}>Back</button>
    </div>
  )
}

export default Register;