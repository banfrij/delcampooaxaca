import React, { useContext, useState,useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import ModalMessage from '../Login/ModalMessage'; // Asegúrate de importar el componente Modal


const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 24px;
  margin-bottom: 16px;
  text-align: center; /* Añadido para centrar el texto */
  text-transform: uppercase; /* Añadido para convertir el texto en mayúsculas */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 8px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
`;

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(true);

 
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login(username, password)
      .then((user) => {
        // Check if the user is an admin
        if (user.email === 'xuegadeveloper@gmail.com') {
          navigate('/admin');
        } else {
          navigate('/app');
        }
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(false);
    }, 3000); // Cierra el modal después de 5 segundos

    return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta
  }, []);


  return (
    <Container>
        <div>
      {/* Resto de tu aplicación */}
      
      <ModalMessage isOpen={isModalOpen}>
        <p>Puedes iniciar sesión con 123@hotmail.com y 123456</p>
        <p>Esta aplicación web aún está en desarrollo</p>
      </ModalMessage>
    </div>
      <LeftSection>
        <Title>Bienvenido a la app web Del Campo</Title>
        <h2 style={{ color: '#333', fontSize: '18px' }}>TRABAJANDO PARA MEJORAR TU EXPERIENCIA DE COMPRA :D</h2>
      </LeftSection>
      <RightSection>
        <Title>Login</Title>
        <Form onSubmit={handleLogin}>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Login</Button>
        </Form>
        <Button>Sign in with Google</Button>
      </RightSection>
    </Container>
  );
}

export default Login;
