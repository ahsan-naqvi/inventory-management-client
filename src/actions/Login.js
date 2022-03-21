// import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const ProcessLogin = (UserObj, navigate) => async (dispatch) => {
  try {
    const { data } = await api.ProcessLogin(UserObj);
    
    dispatch({ type: 'PROCESS_LOGIN', payload: data });
    if(data.isLoginSuccess){
      await localStorage.setItem('token', data.token);
      navigate('/home');
    }
  } catch (error) {
    console.log(error.message);
  }
};
