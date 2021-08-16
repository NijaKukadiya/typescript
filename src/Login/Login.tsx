import { useState } from "react";
import { login } from "../action/auth";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.css'
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const { message } = useSelector((state: any) => state.message);

    const dispatch = useDispatch();

    const onChangeEmail = (e: any) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e: any) => {
        const password = e.target.value;
        setPassword(password);
    };

    // const handlesubmit = (e: any) => {
    //     e.preventDefault();

    //     dispatch(login(email, password))
    // };
    const onFinish = (values: any) => {
        console.log('Success:', values);
        dispatch(login(values.email,values.password))
      };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
    
    return (
        <Form
            name="login"
            labelCol={{ span: 9 }}
            wrapperCol={{ span: 6 }}
            initialValues={{ remember: true }}
            className="login"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
           <Form.Item wrapperCol={{ offset: 8, span: 6 }}>
            <h1>Login</h1>
            </Form.Item>
            <Form.Item
                label="Email"
                name="email"
            >
                <Input onChange={onChangeEmail} value={email} />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
            >
                <Input.Password value={password} onChange={onChangePassword} />
            </Form.Item>
            {message && (
                <div className="form-group">
                    <div className={successful ? "alert alert-success" : "alert alert-danger"} role="alert">
                        {message}
                    </div>
                </div>
            )}

            <Form.Item wrapperCol={{ offset: 8, span: 6 }}>
                <Button type="primary" htmlType="submit">
                    Login
                </Button>
                &nbsp;&nbsp;
                Or  <Link to ="/register"> Register</Link>
            </Form.Item>
        </Form>
    );
};
export default Login;