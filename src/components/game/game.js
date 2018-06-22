import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import autoBind from '../../utils/index';
// import crowdImage from '../../../assets/backgrounds/curran-unsplash.jpg';
// import streetImage from '../../../assets/backgrounds/flobrant-unsplash.jpg';
// import puzzleImage from '../../../assets/backgrounds/gauster-unsplash.jpg';
// import greenHillsImage from '../../../assets/backgrounds/testa-unsplash.jpg';


const CANVAS_WIDTH = 560;
const CANVAS_HEIGHT = 560;
const NUMBER_OF_STARS = 30;
const STAR_OUTER_RADIUS = 30;
const STAR_INNER_RADIUS = 15;
const STAR_STROKE_COLOR = '#bbb';
const STAR_STROKE_WIDTH = 3;
const STAR_POINTS = 7;
const starPositions = [];

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clock: null,
      socket: this.props.socket,
      timeInterval: 1000,
      timeDisplay: 20,
      score: 0,
    };

    
    autoBind.call(this, Game);
  }

  static contextTypes = {
    router: PropTypes.object,
  };

  
  handleTimerDec() {
    console.log('timer working', this.state.timeDisplay);
    if (this.state.timeDisplay > 0) {
      this.setState({ timeDisplay: this.state.timeDisplay - 1 });
    } else {
      console.log('clock', this.state.clock);
      clearInterval(this.state.clock);
      console.log('TIME OUT REACHED');
      this.props.socket.emit('TIME_OVER', this.props.room.code, this.state.score, this.props.room.username); 
      this.context.router.history.push('/scores');
    }
  }


  populateStars() {
    let xCoord;
    let yCoord;
    for (let i = 0; i < NUMBER_OF_STARS; i++) {
      xCoord = Math.round(Math.random() * (CANVAS_WIDTH - (3 * STAR_OUTER_RADIUS)));
      yCoord = Math.round(Math.random() * (CANVAS_HEIGHT - (3 * STAR_OUTER_RADIUS)));
      starPositions.push([xCoord, yCoord]);
    }
  }

  renderCanvas() {
    const { canvas } = this.refs; // eslint-disable-line
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    const drawStar = (
      xPos,
      yPos,
      starPoints,
    ) => {
      let rotation = (Math.PI / 2) * 3;
      let x = xPos;
      let y = yPos;
      const interval = Math.PI / starPoints;

      ctx.beginPath();
      ctx.moveTo(xPos, yPos - STAR_OUTER_RADIUS);
      for (let i = 0; i < starPoints; i++) {
        x = xPos + (Math.cos(rotation) * STAR_OUTER_RADIUS);
        y = yPos + (Math.sin(rotation) * STAR_OUTER_RADIUS);
        ctx.lineTo(x, y);
        rotation += interval;

        x = xPos + (Math.cos(rotation) * STAR_INNER_RADIUS);
        y = yPos + (Math.sin(rotation) * STAR_INNER_RADIUS);
        ctx.lineTo(x, y);
        rotation += interval;
      }
      ctx.lineTo(xPos, yPos - STAR_OUTER_RADIUS);
      ctx.closePath();
      ctx.lineWidth = STAR_STROKE_WIDTH;
      ctx.strokeStyle = STAR_STROKE_COLOR;
      ctx.globalAlpha = 0.4;
      ctx.stroke();
    };

    for (let i = 0; i < starPositions.length; i++) {
      drawStar(starPositions[i][0], starPositions[i][1], STAR_POINTS);
    }
  }

  componentDidMount() {
    setInterval(this.handleTimerDec, 1000);
    const myClock = setInterval(this.handleTimerDec, 1000);
    this.setState({ clock: myClock });
    this.populateStars();
    this.renderCanvas();
  }

  handleClick(event) {
    event.preventDefault();
    const {canvas} = this.refs; // eslint-disable-line
    const rect = canvas.getBoundingClientRect();
    const x = Math.round(event.clientX - rect.left);
    const y = Math.round(event.clientY - rect.top);
    const coordinates = `X coords: ${x}, Y coords: ${y}`;
    if (this.targetCheck(x, y)) {
      if (this.props.socket) {
        this.props.socket.emit('SEND_MESSAGE', `PLAYER ${this.props.socket.id} CLICKED A TARGET AT ${coordinates}`);
      }
    }
  }

  targetCheck(xCoord, yCoord) {
    for (let i = 0; i < starPositions.length; i++) {
      if (
        (Math.abs(xCoord - starPositions[i][0]) < 30) &&
        (Math.abs(yCoord - starPositions[i][1]) < 30)
      ) {
        this.setState({ score: this.state.score + 1 });
        starPositions.splice(i, 1);
        this.renderCanvas();
        return true;
      }
    }
    return false;
  }

  render() {
    console.log('GAME PROPS', this.props);
    if (this.props.socket) {
      this.props.socket.on('RECEIVE_MESSAGE', (data) => {
        console.log(data);
      });
    }

    const starsToFind = starPositions.length;
    return (
      <div className='game'>
      <h1> TIMER(SECONDS): {this.state.timeDisplay} </h1>
        <h3>Stars to Find: {starsToFind}</h3>
        <h3>Stars Found: {this.state.score}</h3>
        <canvas
         className='gameCanvas'
          ref='canvas' // eslint-disable-line
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

Game.propTypes = {
  socket: PropTypes.object,
  room: PropTypes.object,
};

const mapStateToProps = state => ({
  room: state.room,
  socket: state.socket,
});


export default connect(mapStateToProps, null)(Game);
