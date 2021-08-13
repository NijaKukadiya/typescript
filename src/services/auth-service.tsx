import axios from "axios";


const API_URL_REGISTER = "https://rails-to-do-list-narola.herokuapp.com/v1/";
const API_URL_LOGIN = "https://rails-to-do-list-narola.herokuapp.com/v1/";

const register = (email?: string, password?:string) => {
  return axios.post(API_URL_REGISTER + "signup", {
    email,
    password,
  });
};

const login = (email?:string, password?:string) => {
  return axios
    .post(API_URL_LOGIN + "login", {
      email,
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