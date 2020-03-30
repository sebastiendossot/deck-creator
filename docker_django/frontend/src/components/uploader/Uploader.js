import React, { Component } from 'react';

// TODO take a file and create the decks and cards from that.
export class Uploader extends Component {
  onSubmit = e => {
    e.preventDefault();
    const { title, abstract } = this.state;
    const deck = { title, abstract };
    this.props.addDeck(deck); 
    this.setState({
      title: ""
    })
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default Uploader;
