import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';

import reducers from '../../reducer/index';
import thunk from '../../lib/redux-thunk';

import React, {Component, Fragment} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from '../dashboard/dashboard';
import Header from '../header/header';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { socket: this.props.socket };
  }

  componentDidMount() {
    if (this.props.socket)
      store.dispatch({ type: 'SOCKET_SET', payload: this.props.socket })
  }

  render() {
    console.log('SOCKET IN APP', this.props.socket)
    return (
      <Fragment>
        <Provider store={store}>
          <BrowserRouter>
            <div>
                <Header/>
                <Route exact path='/' component={Dashboard}/>
            </div>
          </BrowserRouter>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
