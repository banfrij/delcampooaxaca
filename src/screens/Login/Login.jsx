import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

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
  color: #fff; /* Cambiado a blanco para mayor contraste con fondo oscuro */
  font-size: 24px;
  margin-bottom: 16px;
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
 
  const { login } = useContext(UserContext); // Solo accede a login del UserContext
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      (username === 'user1' && password === '123') ||
      (username === 'admin' && password === '123')
    ) {
      const user = { username, role: username === 'admin' ? 'admin' : 'user' }
      login(user); // Llama a la función login del UserContext
      navigate('/app');
    } else {
      alert('Invalid username or password');
    }
  };
  return (
    <Container>
      <LeftSection>
        <Title>Bienvenido a la app web Del Campo </Title>
      <></>
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
