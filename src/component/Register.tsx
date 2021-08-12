import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../action/auth";
import { Link } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const dispatch = useDispatch();
    
    const onChangeConfirmpassword = (e: any) => {
        const confirmpassword = e.target.value;
        setConfirmpassword(confirmpassword);
    };
    
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

        dispatch(register(email, password, confirmpassword))
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
                                />
                            </div>
                            <div className="form-group">
                                <label>confirm password</label>
                                <input
                                    type="password"
                                    name="confirmpassword"
                                    value={confirmpassword}
                                    onChange={onChangeConfirmpassword}
                                />
                            </div>
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













