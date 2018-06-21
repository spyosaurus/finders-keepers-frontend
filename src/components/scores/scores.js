import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import autoBind from '../../utils/index';

class Scores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: {},
    };

    autoBind.call(this, Scores);
  }
  

  componentDidMount() {
    this.props.socket.emit('UPDATE_SCORES', this.props.room.code);
    this.props.socket.on('SCORES_UPDATED', (data) => {
      const playerScoresObject = data;
      this.setState({ scores: playerScoresObject });
      console.log('SCORES OBJECT', playerScoresObject);
    });
  }

  render() {
    return (<div>
        <h1>SCORES</h1>
        <h2>{this.state.scores}</h2>
        </div>
    );
  }
}

Scores.propTypes = {
  socket: PropTypes.object,
  room: PropTypes.object,
};

const mapStateToProps = state => ({
  room: state.room,
  socket: state.socket,
});


export default connect(mapStateToProps, null)(Scores);
