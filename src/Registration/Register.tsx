import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../action/auth";
import { Link } from "react-router-dom";
// import { Button, Input, Form } from 'antd'
import { Form, Input, Button,Layout} from 'antd';
import "../Login/login.css";

const { Content} = Layout;
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
    const { message } = useSelector((state: any) => state.message);
    const [form] = Form.useForm();


    const onChangeEmail = (e: any) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e: any) => {
        const password = e.target.value;
        setPassword(password);
    };

    const onFinish = (values: any) => {
        console.log('Success:', values);
        dispatch(register(values.email,values.password))
      };

    // const handleRegister = (e: any) => {
    //     e.preventDefault();

    //     setSuccessful(false);

    //     dispatch(register(email, password))
    // };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
    

    return (
        <Layout>
        <Content>
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
                <h1>Register</h1>
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
                    Register
                </Button>
                &nbsp;&nbsp;
                Or  <Link to ="/login"> Login </Link>
            </Form.Item>
    </Form> 
    </Content>
    </Layout>  
    );
};

export default Register













