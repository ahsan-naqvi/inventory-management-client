import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ProcessLogin } from '../../actions/Login';
import Loader from '../Loader';
import { Paper, Label, Input, Button, Icon } from './Styled';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({ Username: '', Password: '' });
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();    
    setLoading(true);
    setTimeout(() => {
      dispatch(ProcessLogin(loginData, navigate));
    }, 1000);
  };

  return (
    <Paper autoComplete="off" onSubmit={submitHandler} data-layout="column" data-layout-align="center center">
        <Label>LOGIN</Label>
        <Input
          name="name"
          variant="outlined"
          placeholder="Username"
          fullWidth
          value={loginData.Username}
          onChange={(e) => setLoginData({ ...loginData, Username: e.target.value })}
        />
        <Input
          name="password"
          variant="outlined"
          placeholder="Password"
          type="password"
          fullWidth
          value={loginData.Password}
          onChange={(e) => setLoginData({ ...loginData, Password: e.target.value })}
        />
        <Button type="submit" onClick={(e) => submitHandler(e)}><Icon>arrow_forward</Icon></Button>
        {loading && <Loader/>}
    </Paper>
  );
};

export default LoginForm;
