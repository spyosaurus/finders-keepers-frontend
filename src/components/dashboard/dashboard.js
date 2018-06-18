import React from 'react';

class Dashboard extends React.Component {
  render() {
    return (
      <div className='dashboard'>
        <h1> This is the super cool dashboard </h1>
        <h2> You can only see this if login is successful! </h2>
        <button className='join'>Join A Game</button>
        <button className='host'>Host A Game</button>
      </div>
    );
  }
}

export default Dashboard;
