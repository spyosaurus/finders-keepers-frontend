import React from 'react';

class Dashboard extends React.Component {
  render() {
    return (
      <div className='dashboard'>
        <h1> This is the super cool dashboard </h1>
        <button type='button' className='join'>Join A Game</button>
        <button type='button' className='host'>Host A Game</button>
      </div>
    );
  }
}

export default Dashboard;
