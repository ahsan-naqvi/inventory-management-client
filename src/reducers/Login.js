export default (userObj = [], action) => {
    switch (action.type) {      
      case 'PROCESS_LOGIN':
        let data = action.payload;
        console.log("PROCESS_LOGIN", data.token);
        return data.token;
      default:
        return userObj;
    }
  };
  
  