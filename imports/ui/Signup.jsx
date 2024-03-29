import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Accounts} from 'meteor/accounts-base';


export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        const email = this.refs.email.value;
        const password = this.refs.password.value;
        Accounts.createUser({email, password}, (err) => {
            console.log(err);
        })
    }
    render() {
        return (
            <div>
                <h1>Join us</h1>
                <form onSubmit={this.onSubmit}>
                    <input type="email" ref="email" name="email" placeholder="Email" />
                    <input type="password" ref="password" name="password" placeholder="Password" />
                    <button type="submit">Create Account</button>
                </form>
                <Link to="/">You have already an account?</Link>
            </div>
        );
    }
}