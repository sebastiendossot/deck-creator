import React, { Component } from 'react'

export class Timer extends Component {
  state = {
    minutes: 0,
    seconds: 0
  }

  componentDidMount(){
    this.myInterval = setInterval(() => {
      this.setState(({ seconds }) => ({
        seconds: seconds + 1
      }))
    }, 1000)
  }
  

  render() {
    const { minutes, seconds } = this.state;

    return (
      <div className="player-timer"> Timer: {`${seconds}`} </div>
    )
  }
}

export default Timer;
