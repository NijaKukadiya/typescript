import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export interface RegisterPageProps {
    name?: any;
    value?: any;
    register?: any;
    registering: any;
    submitting: any;
    user: string
}
export interface Fields {
    firstName?: string,
    lastName?: string,
    userName?: string,
    password?: string
}
export interface RegisterPageState {
    submitted?: Boolean;
    user?: Fields;
}
export class RegisterPage extends Component<RegisterPageProps, RegisterPageState>{
    constructor(props: RegisterPageProps) {
        super(props);
        this.state = {
            user: {
                firstName: '',
                lastName: '',
                userName: '',
                password: '',
            },
            submitted: false
        }
    }
    handleChange = (event: any) => {
        this.setState({
            user: {
                ...this.state.user,
                [event?.target.name]: event?.target.value
            }
        });
    }
    // handleSubmit = (event: any) => {
    //     event.preventDefault();
    //     this.setState({ submitted: true });
    //     const { user } = this.state;
    //     if (user?.firstName && user?.lastName && user?.userName && user?.password) {
    //         this.props.register(user);
    //     }
    // }
    render() {
        const { registering } = this.props;
        const { user, submitted } = this.state;
        return (
            <div>
                <div>
                    <h1>Registartion</h1>
                    <div>
                        <form className="ui-form">
                            <div className='firstname'>
                                <label htmlFor="firstname">First Name</label>
                                <input type='text' name='firstName' placeholder="First Name" value={user?.firstName} onChange={this.handleChange} />
                            </div>
                            <div className='lastname'>
                                <label htmlFor="lastname">Last Name</label>
                                <input type='text' name='lastName' placeholder="Last Name" value={user?.lastName} onChange={this.handleChange} />
                            </div>
                            <div className='username'>
                                <label htmlFor="username">Username</label>
                                <input type='username' name='userName' placeholder="Username" value={user?.userName} onChange={this.handleChange} />
                            </div>
                            <div className='password'>
                                <label htmlFor="password">Password</label>
                                <input type='password' name='password' placeholder="Password" value={user?.password} onChange={this.handleChange} />
                            </div>
                            {/* <div className="field">
                                    <label htmlFor="gender">Gender</label><br/>
                                    <input type="radio" name="button" value="Male" />Male <br/>
                                    <input type="radio" name="button" value="Female" />Female <br/>
                                    </div>
                                <div>
                                    <label> select your hobby :</label>
                                    <select>
                                        <option value="adventure"> Adventure</option>
                                        <option value="riding"> Riding</option>
                                        <option value="travelling"> Travelling</option>
                                    </select>
                                </div> */}
                            <div className='ui button'>
                                <button>Register</button>
                                <Link to="/login">Login</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default RegisterPage;
