import request from "superagent";

const baseUrl = "https://shrouded-lowlands-59978.herokuapp.com";
//"http://localhost:4000";

//login
function makeLogin(loginData) {
  return {
    type: "JWT",
    payload: loginData
  };
}

export const login = (email, password) => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send({ email: email, password: password })
    .then(response => {
      const action = makeLogin(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

//signup
function createUser(jwt) {
  return {
    type: "CREATE_USER",
    payload: jwt
  };
}

export const signup = (email, password, username) => dispatch => {
  request
    .post(`${baseUrl}/user`)
    .send({ email: email, password: password, username: username })
    .then(response => {
      console.log(`what is my response`, response.body);
      const action = createUser(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

function accesGranted(userData) {
  return {
    type: "ACCES_GRANTED",
    payload: userData
  };
}

export const accesSecretEnpoint = data => (dispatch, getState) => {
  const state = getState();

  const { user } = state;
  console.log(user);

  request
    .get(`${baseUrl}/secret-endpoint`)
    .set("Authorization", `Bearer ${user.jwt}`)
    .send({ ...data, userId: user.id })
    .then(response => {
      const action = accesGranted(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
