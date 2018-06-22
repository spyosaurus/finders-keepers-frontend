import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import autoBind from './../../utils';
import * as roomActions from '../../actions/room-actions';

const emptyState = {
  username: '',
  usernameDirty: false,
  usernameError: 'Username is Required!',

  password: '',
  passwordDirty: false,
  passwordError: 'Password is Required!',
};

const MIN_NAME_LENGTH = 3;
const MIN_PASSWORD_LENGTH = 3;
const MAX_PASSWORD_LENGTH = 20;

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = emptyState;
    autoBind.call(this, AuthForm);
  }

  handleValidation(name, value) {
    if (this.props.type === 'login') {
      return null;
    }
    switch (name) {
      case 'username':
        if (value.length < 3) {
          return `Your name must be at least ${MIN_NAME_LENGTH}`;
        }
        return null;
      case 'password':
        if (value.length < MIN_NAME_LENGTH || value.length > MAX_PASSWORD_LENGTH) {
          return `Your password must be at least ${MIN_PASSWORD_LENGTH} characters long and less than ${MAX_PASSWORD_LENGTH} characters long.`;
        }
        return null;
      default:
        return null;
    }
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      [`${name}Dirty`]: true,
      [`${name}Error`]: this.handleValidation(name, value),
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { 
      usernameError,
      passwordError,
    } = this.state;

    if (this.props.type === 'login' || (!usernameError && !passwordError)) {
      console.log('AUTH FORM USERNAME', this.state.username);
      this.props.setRoom({ username: this.state.username });

      this.props.onComplete(this.state);
      this.setState(emptyState);
    } else {
      this.setState({
        usernameDirty: true,
        passwordDirty: true,
      });
    }
  }

  render() {
    let { type } = this.props;

    type = type === 'login' ? type : 'signup';

    const signupRenderedJSX = (type !== 'login');
    
    return (
      <form className='auth-form' noValidate onSubmit={this.handleSubmit} > 
      { this.state.usernameDirty ? <p> { this.state.usernameError} </p> : undefined }
      <input 
        name='username'
        placeholder='username'
        text='text'
        value={this.state.username}
        onChange={this.handleChange}
        />
        <br/>

      { signupRenderedJSX }

      { this.state.passwordDirty ? <p> {this.state.passwordError} </p> : undefined }
      <input 
        className = { this.state.passwordDirty ? 'input-error' : ''}
        name='password'
        placeholder='password'
        type='password'
        value={this.state.password}
        onChange={this.handleChange}
        />
        <br/>
      <button type='submit'> {type} </button>
    </form>
    );
  }
}

AuthForm.propTypes = {
  type: PropTypes.string,
  onComplete: PropTypes.func,
  setRoom: PropTypes.func,
};

const mapStateToProps = state => ({
  room: state.room,
});

const mapDispatchToProps = dispatch => ({
  setRoom: room => dispatch(roomActions.roomSet(room)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
