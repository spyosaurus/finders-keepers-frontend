import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as authActions from '../../actions/auth';

import autoBind from '../../utils';
import AuthForm from '../auth-form/auth-form';

import * as routes from '../../routes';

class AuthLanding extends React.Component {
  constructor(props) {
    super(props);
    autoBind.call(this, AuthLanding);
  }
  
  handleLogin(user) {
    return this.props.pDoLogin(user)
      .then(() => {
        this.props.history.push(routes.DASHBOARD_ROUTE);
      })
      .catch(console.eror); // eslint-disable-line
  }

  handleSignup(user) {
    return this.props.pDoSignup(user)
      .then(() => {
        this.props.history.push(routes.DASHBOARD_ROUTE);
      })
      .catch(console.error); // eslint-disable-line
  }

  render() {
    const rootJSX = <div>
    <h2> Finders Keepers </h2>
    <button><Link to='/signup'> Host </Link></button>
    <button><Link to='/login'> Join </Link></button>
  </div>;

    const signupJSX = <div>
      <h2>SignUp!</h2>
      <AuthForm onComplete={this.handleSignup}/>
      <p>Already have an account?</p>
      <Link to='/login'>Log in to spot the thing</Link>
      </div>;

    const loginJSX = <div>
      <h2> Login </h2>
      <AuthForm type='login' onComplete={this.handleLogin}/>
    </div>;

    const { location } = this.props;

    return (
        <div className='landing'>
          {location.pathname === routes.ROOT_ROUTE ? rootJSX : undefined }
          {location.pathname === routes.SIGNUP_ROUTE ? signupJSX : undefined }
          {location.pathname === routes.LOGIN_ROUTE ? loginJSX : undefined }
        </div>
    );
  }
}

AuthLanding.propTypes = {
  pDoLogin: PropTypes.func,
  pDoSignup: PropTypes.func,
  location: PropTypes.object,
  history: PropTypes.object,
};

const mapStateToProps = state => ({
  token: state.token,
});

const mapDispatchToProps = dispatch => ({
  pDoSignup: user => dispatch(authActions.signupRequest(user)),
  pDoLogin: user => dispatch(authActions.loginRequest(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthLanding);
