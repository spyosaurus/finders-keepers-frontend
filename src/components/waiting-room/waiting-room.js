import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as roomActions from '../../actions/room-actions';
import * as socketActions from '../../actions/socket-actions';
import autoBind from '../../utils';

class WaitingRoom extends Component {
  constructor(props) {
    super(props);
    this.socket = this.props.socket;
    this.isHost = this.props.room.isHost;

    this.state = {
      playerCount: 0,
      roomCode: null,
      playerNames: [],
      numPlayers: 0,
    };
    autoBind.call(this, WaitingRoom);
  }

  static contextTypes = {
    router: PropTypes.object,
  };

  handleGameRedirect() {
    this.props.socket.emit('HOST_REDIRECT', this.props.room.code);
  }

  componentDidMount() {
    if (this.isHost) {
      this.socket.emit('CREATE_ROOM');

      this.socket.on('SEND_ROOM', (data) => {
        const parsedData = JSON.parse(data);
        const { roomCode, roomHost } = parsedData;

        this.props.setRoom({
          code: roomCode,
          isHost: this.isHost,
          roomHost,
        });

        this.setState({ roomCode });

        this.socket.room = roomCode;

        this.props.setSocket(this.socket);

        console.log('ROOM CODE', this.props.room.code);
      });
    }

    this.socket.on('TRACK_PLAYERS', (num, names) => {
      this.setState({
        numPlayers: num,
        playerNames: names,
      });
    });
    this.props.socket.on('REDIRECT', () => {
      this.context.router.history.push('/game');
    });
  }

  render() {
    console.log('WAITING PROPS', this.props.room.isHost);
    const startButtonJSX = <div>
      <button type='button' className='start' onClick= {this.handleGameRedirect}>START GAME</button>
    </div>;
    return (
            <div>

            <h1> Room Code </h1>
            <h2>{this.props.room.code}</h2>

            <h1> Number of Players </h1>
            <h2> {this.state.numPlayers} </h2>
              {this.isHost ? startButtonJSX : undefined }
            </div>
    );
  }
}

WaitingRoom.propTypes = {
  socket: PropTypes.object,
  setRoom: PropTypes.func,
  setSocket: PropTypes.func,
  room: PropTypes.object,
};

const mapStateToProps = state => ({
  room: state.room,
  socket: state.socket,
});

const mapDispatchToProps = dispatch => ({
  setRoom: room => dispatch(roomActions.roomSet(room)),
  setSocket: socket => dispatch(socketActions.socketSet(socket)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WaitingRoom);
