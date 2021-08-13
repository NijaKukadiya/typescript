import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { register } from "../action/auth";
import { Link } from "react-router-dom";


// const required = (value:string) => {
//     if (!value) {
//       return (
//         <div className="alert alert-danger" role="alert">
//           This field is required!
//         </div>
//       );
//     }
//   };
//   const validEmail = (value:string) => {
//     if (!isEmail(value)) {
//       return (
//         <div className="alert alert-danger" role="alert">
//           This is not a valid email.
//         </div>
//       );
//     }
//   };

  const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [confirmpassword, setConfirmpassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const dispatch = useDispatch();
    const { message } = useSelector((state:any) => state.message);
    
    // const onChangeConfirmpassword = (e: any) => {
    //     const confirmpassword = e.target.value;
    //     setConfirmpassword(confirmpassword);
    // };
    
    const onChangeEmail = (e: any) => {
        const email = e.target.value;
        setEmail(email);
    };
    
    const onChangePassword = (e: any) => {
        const password = e.target.value;
        setPassword(password);
    };
    
    const handleRegister = (e: any) => {
        e.preventDefault();

        setSuccessful(false);

        dispatch(register(email, password))
    };
    
    return (
        <div className="col-md-12"><h2>Register</h2>
            <div className="card card-container">
                <form onSubmit={handleRegister} >
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
                                    // validations={[required, vpassword]}
                                />
                            </div>
                            {/* <div className="form-group">
                                <label>confirm password</label>
                                <input
                                    type="password"
                                    name="confirmpassword"
                                    value={confirmpassword}
                                    onChange={onChangeConfirmpassword}
                                />
                            </div> */}
                            {message && (
                                <div className="form-group">
                                <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                                    {message}
                                </div>
                                </div>
                            )}
                            <div className="form-group">
                                <button>Register</button>
                                <Link to="/login"> Login</Link>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};
export default Register;













