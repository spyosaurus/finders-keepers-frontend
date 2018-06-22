import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import autoBind from '../../utils/index';

class Scores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: '',
    };

    autoBind.call(this, Scores);
  }
  

  componentDidMount() {
    this.props.socket.emit('UPDATE_SCORES', this.props.room.code);
    this.props.socket.on('SCORES_UPDATED', (data) => {
      const playerScoresObject = data;
      const scoresArray = [];
      let scoreString = '';

      Object.keys(playerScoresObject).forEach((key) => {
        scoresArray.push([key, playerScoresObject[key]]);   
      });

      scoresArray.sort((a, b) => {
        return (b[1] - a[1]);
      });

      for (let i = 0; i < scoresArray.length; i++) {
        scoreString += scoresArray[i][0]; 
        scoreString += ': ';
        scoreString += scoresArray[i][1];
        scoreString += '\n';
      }

      const finalScoreString = scoreString.split('\n').map((element, i) => <p key={i}>{element}</p>);


      this.setState({ scores: finalScoreString });

      console.log(scoreString);
      console.log('scorestring', this.state.scores);
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
