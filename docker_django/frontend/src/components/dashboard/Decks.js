import React, { Component, Fragment, Link } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getDecks, deleteDeck }  from '../../actions/decks';
import { Redirect } from 'react-router-dom';

export class Decks extends Component {  
  
  state = {
    navigateToDeck: false, 
    playDeck: false,
    deckId: 0
  }

  static propTypes = {
    decks: PropTypes.array.isRequired,
    getDecks: PropTypes.func.isRequired,
    deleteDeck: PropTypes.func.isRequired,
  }


  componentDidMount(){
    this.props.getDecks();
  }

  playDeckRedirect = (event, deckId) => {
    event.stopPropagation();
    this.setState({ playDeck: true, navigateToDeck: false, deckId: deckId })
  }

  render() {
    const { navigateToDeck, playDeck, deckId } = this.state;
    const playDeckRedirect = this.playDeckRedirect;

    if (navigateToDeck) {
      return <Redirect to={{
            pathname: `/deck/${deckId}`
        }} push={true} />
    }else if(playDeck){
      return <Redirect to={{
        pathname: `/player/${deckId}`
      }} push={true} />
    }

    return (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th/>
              <th/>
            </tr>
          </thead>
          <tbody>
            {this.props.decks.map(deck => (
              <tr key={deck.id} onClick={() => this.setState({ navigateToDeck: true, deckId: deck.id })}>   
                  <td>{deck.title}</td>
                  <td><button onClick={(event) => playDeckRedirect(event, deck.id)} className="btn btn-success btn-sm"><i className="fa fa-play"/></button></td>
                  <td><button onClick={() => this.setState({ navigateToDeck: true, deckId: deck.id })} className="btn btn-warning btn-sm"><i className="fa fa-pen"/></button></td>
                  <td><button onClick={this.props.deleteDeck.bind(this, deck.id)} className="btn btn-danger btn-sm"><i className="fa fa-trash"/></button></td>
              </tr>
              )
            )}
          </tbody>
        </table>
    )
  }
}

const mapStateToProps = state => ({
  decks: state.decks.decks
})

export default connect(mapStateToProps, {getDecks, deleteDeck})(Decks);
