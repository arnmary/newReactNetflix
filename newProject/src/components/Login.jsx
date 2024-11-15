import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Login(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const btnStyle = {
    width: '11.87rem',
    padding: '0.93rem',
    backgroundColor: 'rgba(255, 255, 255, 0.50)',
    color: 'white',
    textAlign: 'center',
    position: 'absolute',
    top: '5.75rem',
    right: '9.5rem',
    display: username === 'Username' && password === '0000' ? 'none' : 'block',
  };
  const userStyle = {
    display: btnStyle.display === 'none' ? 'flex' : 'none',
  };
  const modalStyle = {
    display: isModalOpen ? 'block' : 'none',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '1.25rem',
    boxShadow: '0 0.25rem 0.5rem rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
  };
  const overlayStyle = {
    display: isModalOpen ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <button id='logBtn' style={btnStyle} onClick={handleOpenModal}>
        login
      </button>
      <div style={userStyle} className="userBlock">
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        <div className="userImg">
          <img src="./user.png" alt="User icon" />
        </div>
      </div>
      {isModalOpen && (
        <div>
          <div style={overlayStyle} onClick={handleCloseModal}></div>
          <div style={modalStyle}>
            <h2>Login</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Login;



