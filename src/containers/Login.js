import React, {Component} from 'react';
import LoginPage from '../components/LoginPage';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {signInWithGoogleAuthProvider} from '../actions/fireBaseActions';
import { browserHistory } from 'react-router';

class Login extends Component {
    constructor(props) {
        super(props);
        this.signInWithEmailAuthProvider = this.signInWithEmailAuthProvider.bind(this);
        this.signInWithGoogleAuthProvider = this.signInWithGoogleAuthProvider.bind(this);
    }
    signInWithEmailAuthProvider() {
        browserHistory.push('/LoginForm');
    }

    signInWithGoogleAuthProvider() {
        this.props.actions.signInWithGoogleAuthProvider();
    }
    render() {
        return (
            <LoginPage
                isLogged={this.props.isLogged}
                signInWithEmailAuthProvider={this.signInWithEmailAuthProvider}
                signInWithGoogleAuthProvider ={this.signInWithGoogleAuthProvider}
            />
        );
    }
}

function mapStateToProps({auth}, ownProps) {
    return {
        isLogged: auth.isLogged
    };
}

function mapDispatchToProps (dispatch) {
    return {
        actions: {
            signInWithGoogleAuthProvider: bindActionCreators(signInWithGoogleAuthProvider, dispatch)
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
