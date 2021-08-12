import axios from "axios";


const API_URL_REGISTER = "https://rails-to-do-list-narola.herokuapp.com/v1/signup";
const API_URL_LOGIN = "https://rails-to-do-list-narola.herokuapp.com/v1/login";

const register = (username: string, email: string, password:string) => {
  return axios.post(API_URL_REGISTER + "signup", {
    username,
    email,
    password,
  });
};

const login = (username:string, password:string) => {
  return axios
    .post(API_URL_LOGIN + "login", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};