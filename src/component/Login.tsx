import { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../action/auth";
import { useDispatch, useSelector} from "react-redux";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const { message } = useSelector((state:any) => state.message);

    const dispatch = useDispatch();

  const onChangeEmail = (e: any) => {
      const email = e.target.value;
      setEmail(email);
  };
  
  const onChangePassword = (e: any) => {
      const password = e.target.value;
      setPassword(password);
  };
  
  const handlesubmit = (e: any) => {
      e.preventDefault();
    
      dispatch(login(email, password ))
  };     
    return (
      <div className="col-md-12"><h2>Login</h2>
      <div className="card card-container">
          <form onSubmit={handlesubmit} >
          {!successful && (
                  <div>
                      <div className="form-group">
                          <label>Email</label>
                          <input
                              type="text"
                              name="email"
                              value={email}
                              onChange={onChangeEmail}
                          />
                      </div>
                      <div className="form-group">
                          <label>Password</label>
                          <input
                              type="password"
                              name="password"
                              value={password}
                              onChange={onChangePassword}
                          />
                      </div>
                      {message && (
                            <div className="form-group">
                            <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                                {message}
                            </div>
                            </div>
                        )}
                      <div className="form-group">
                          <button>Login</button>
                          <Link to="/register"> Register</Link>
                      </div>
                  </div>
                )}
          </form>
      </div>
  </div>
);
};
export default Login;