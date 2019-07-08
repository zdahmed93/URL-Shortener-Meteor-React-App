import React, {Component} from 'react';
import {Accounts} from 'meteor/accounts-base';

export default class Link extends Component {
    onLogOut = () => {
        Accounts.logout(() => {
            this.props.history.push('/');
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.onLogOut}>Log out</button>
                <p>Link component</p>                
            </div>
        );
    }
}