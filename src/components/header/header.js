import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import routes from '../../routes';

import * as authActions from '../../actions/auth';

class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <h1> FINDERS KEEPERS - A SEARCH GAME</h1>
        <nav>
          Empty Nav Here
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
};

const mapStateToProps = state => ({
  loggedIn: !!state.token,
});

const mapDispatchToProps = dispatch => ({
  doLogout: () => dispatch(authActions.logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
