import React from 'react';
// import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { signupRequest, signinRequest } from '../../action/auth-action';
import AuthForm from '../auth-form/auth-form';
// import { render } from 

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAuth: false, 
    };
    this.showAuthForm = this.showAuthForm.bind(this);
  }

  showAuthForm() {
    this.setState({ showAuth: true });

    let landingForm = document.getElementsByClassName('landing-form')[0];
  }
  render() {
    return (
      <div className='dashboard'>
        <h1> This is the super cool dashboard </h1>
        <button type='button' className='host'>Host A Game</button>
        <button type='button' className='join'>Join A Game</button>
      </div>
    );
  }
}

export default Dashboard;
