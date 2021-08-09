import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export interface LoginPageProps {
    name?: any;
    value?: any;
    register?: any;
    registering: any;
    submitting: any;
    user: string
}

export interface LoginPageState {
    userName?: string;
    password?: string|number;
    submitted: boolean;
}
export class LoginPage extends Component <LoginPageProps,LoginPageState>{
    constructor(props: LoginPageProps) {
        super(props);

        // reset login status
        // this.props.logout();

        this.state = {
            userName: '',
            password: '',
            submitted: false
        };
    }
    handleChange(e: any) => {
        
        // const { name, value } = e.target;
        this.setState({[e?.target.name]: e?.target.value})
        // this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }
    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit} noValidate >
                    <div className='email'>
                        <label htmlFor="email">Email</label>
                        <input type='email' name='email' onChange={this.handleChange}/>
                    </div>
                    <div className='password'>
                        <label htmlFor="password">Password</label>
                        <input type='password' name='password' onChange={this.handleChange}/>
                    </div>      
                    <div className='submit'>
                        <button>Login</button>
                        <Link to="/register" > Register</Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginPage;
