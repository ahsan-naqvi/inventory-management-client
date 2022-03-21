import React from 'react';
import { Container } from '../../Theme/Styled';
import LoginForm from '../../components/Form/LoginForm'


const LoginPage = (props) => {

  return (
      <Container data-layout="column" data-layout-align="center center">
          <LoginForm props={props} />
      </Container>
  );
}

export default LoginPage;