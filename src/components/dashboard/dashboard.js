import React from 'react';
// import AuthForm from '../auth-form/auth-form';

class Dashboard extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.showAuthForm = this.showAuthForm.bind(this);
  // }
  
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
