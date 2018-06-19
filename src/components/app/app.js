// Need to check on AuthLanding, BrowserRouter, AuthRedirect

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import AuthRedirect from '../auth-redirect/auth-redirect';
import AuthLanding from '../auth-landing/auth-landing';
import Dashboard from '../dashboard/dashboard';
import Header from '../header/header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { socket: this.props.socket };
  }

  componentDidMount() {
    if (this.props.socket) {
      this.setSocket();
    }
  }
  render() {
    return (
      <div className='app'>
      <BrowserRouter>
        <div>
          <Header/>
              <Route path='*' component={AuthRedirect}/>
              <Route exact path='/' component={AuthLanding}/>
              <Route exact path='/signup' component={AuthLanding}/>
              <Route exact path='/login' component={AuthLanding}/>
              <Route exact path='/dashboard' component={Dashboard}/>
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  socket: state.socket,
});

const mapDispatchToProps = dispatch => ({
  setSocket: () => dispatch({ type: 'SOCKET_SET', payload: this.props.socket }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
