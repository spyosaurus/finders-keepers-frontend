// Need to check on AuthLanding, BrowserRouter, AuthRedirect

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from '../dashboard/dashboard';
import Header from '../header/header';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
      <BrowserRouter>
        <div>
          <Header/>
          <Route exact path='/dashboard' component={Dashboard}/>
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
