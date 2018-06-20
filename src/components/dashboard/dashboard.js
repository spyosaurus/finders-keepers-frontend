import React from 'react';
import autoBind from '../../utils';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input:'',
      socket: this.props.socket,
      joinRoom: false,
      roomCode:'',
    };

  autoBind.call(this, Dashboard);
  }

  static contextTypes = {
    router: PropTypes.object
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.props.socket.emit('SEND_MESSAGE',  this.state.input )

    this.props.socket.on('RECEIVE_MESSAGE', (data) => {
      console.log('RECEIVE MESSAGE', data);
    });
  }

  redirectToWaitingRoom = () => {
    this.context.router.history.push('/WaitingRoom')
  }

  createRoom(event) {
    event.preventDefault();
    this.props.setRoom({
      isHost: true,
    });
    this.redirectToWaitingRoom();
  }

  joinRoom(event) {
    this.setState( { joinRoom: true } );
    this.props.setRoom({
      isHost: false,
    })
  }

  render() {

    const joinRoomJSX = <div>
          <form id="roomcode-form" onSubmit={this.joinRoom}>
          <input name="roomCode" id="roomcode-input" onChange={this.handleChange}/>
          <button type="submit">Join Room</button>
        </form>
  </div>;

    return (
      <div className='dashboard'>
        <h1> This is the super cool dashboard </h1>
        <button type='button' className='join' onClick={this.joinRoom}>Join A Game</button>
        <button type='button' className='host' onClick= {this.createRoom}>Host A Game</button>

        <form id="send-message-form" onSubmit={this.handleSubmit}>
          <input name="input" id="message-input" onChange={this.handleChange}/>
          <button type="submit">Send Message</button>
        </form>

        {this.state.joinRoom ? joinRoomJSX : undefined }
      </div>
    );
  }
}

let mapStateToProps = state => ({
  socket: state.socket,
  room: state.room,
});

let mapDispatchToProps = dispatch => ({
  setRoom: room => dispatch(roomActions.roomSet(room)),
})

export default connect(mapStateToProps, null)(Dashboard);
