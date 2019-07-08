import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Accounts} from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';

export default class Login extends Component {
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
        Meteor.loginWithPassword(email, password, (err) => {
            if(!err) {
                this.props.history.push('/links');
            }
            if (err) {
                console.log(err);
            }
        } )
        // Accounts.createUser({ email, password }, (err) => {
        //     if (err) {
        //         console.log(err);
        //     }
        // })
    }
    render() {
        return (
            <div>
                <h1>Log In</h1>
                <form onSubmit={this.onSubmit}>
                    <input type="email" ref="email" name="email" placeholder="Email" />
                    <input type="password" ref="password" name="password" placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
                <p>D'ont have an account?</p>
                <Link to="/signup">Sign Up !</Link>
            </div>
        );
    }
}