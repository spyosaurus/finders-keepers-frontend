import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Landing from '../landing/landing';
import WaitingRoom from '../waiting-room/waiting-room';

import reducers from '../../reducer/index';
import thunk from '../../lib/redux-thunk';

import Header from '../header/header';
import Game from '../game/game';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { socket: this.props.socket };
  }

  componentDidMount() {
    if (this.props.socket) {
      store.dispatch({ type: 'SOCKET_SET', payload: this.props.socket });
    }
  }

  render() {
    console.log('SOCKET IN APP', this.props.socket);
    return (
      <Fragment>
        <Provider store={store}>
          <BrowserRouter>
            <div>
                <Header/>
                <Route exact path='/' component={Landing}/>
                <Route exact path='/WaitingRoom' component={WaitingRoom}/>
                <Route exact path='/game' component={Game}/>
            </div>
          </BrowserRouter>
        </Provider>
      </Fragment>
    );
  }
}

App.propTypes = {
  socket: PropTypes.object,
};

export default App;
