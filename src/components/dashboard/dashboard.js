import React from 'react';
import autoBind from '../../utils';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input:'',
      socket: this.props.socket,
    };
  autoBind.call(this, Dashboard);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.props.socket.emit('SEND_MESSAGE', this.state.input)

    this.props.socket.on('RECEIVE_MESSAGE', (data) => {
      console.log('RECEIVE MESSAGE', data);
    });
  }

  render() {
    return (
      <div className='dashboard'>
        <h1> This is the super cool dashboard </h1>
        <button type='button' className='join' onClick={this.handleSubmit}>Join A Game</button>
        <button type='button' className='host'>Host A Game</button>

        <form id="send-message-form" onSubmit={this.handleSubmit}>
          <input name="input" id="message-input" onChange={this.handleChange}/>
          <button type="submit">Send Message</button>
        </form>

      </div>
    );
  }
}

let mapStateToProps = state => ({
  socket: state.socket,
});

export default connect(mapStateToProps, null)(Dashboard);
