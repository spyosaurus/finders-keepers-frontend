import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Landing from '../landing/landing';
import WaitingRoom from '../waiting-room/waiting-room';

import reducers from '../../reducer/index';
import thunk from '../../lib/redux-thunk';

import About from '../about/about';
import Header from '../header/header';
import Game from '../game/game';
import Scores from '../scores/scores';

const store = createStore(reducers, applyMiddleware(thunk));

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
    return (
      <Fragment>
        <Provider store={store}>
          <BrowserRouter>
            <div className='main'>
                <Header/>
                <Route exact path='/' component={Landing}/>
                <Route exact path='/WaitingRoom' component={WaitingRoom}/>
                <Route exact path='/game' component={Game}/>
                <Route exact path='/scores' component={Scores}/>
                <Route exact path='/about' component={About}/>
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
