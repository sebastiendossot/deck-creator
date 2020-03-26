import React, { Component, Fragment, Link } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCards, deleteCard }  from '../../actions/cards';
import { withRouter } from "react-router";
import { Redirect } from 'react-router-dom';


export class Player extends Component {
  static propTypes = {
    deck: PropTypes.number,
    cards: PropTypes.array.isRequired,
    getCards: PropTypes.func.isRequired,
    // update card ratio
  }

  state = {
    questionShown: true,
    currentCard: null,
    indexCurrentCard: 0, 
    endDeck: false
  }

  componentDidMount(){
    this.props.getCards(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({currentCard: nextProps.cards[0]})
  }

  cardRemembered(){
    //things if card remembered
    this.nextCard();
  }

  cardForgotten(){
    // things if card forgotten
    this.nextCard();
  }

  nextCard(){
    const nextIndex = this.state.indexCurrentCard + 1;
    const cards = this.props.cards;
    if(nextIndex<cards.length){
      this.setState({currentCard: cards[nextIndex], indexCurrentCard: nextIndex})
    }else{
      this.setState({endDeck: true})
      // come back if end of deck.
    }
  }

  render() {
    const {questionShown, currentCard, endDeck} = this.state;
    // const cardRemembered = this.props.cardRemembered;
    // const cardForgotten= this.props.cardForgotten;

    if (endDeck) {
      return <Redirect to={{
            pathname: `/`
        }} push={true} />
    }

    return (
      <Fragment>
        <h2>
          Player
        </h2>
        <div className="card-deck card-deck-style">
        {currentCard ? 
          <div className="card">
              <div className="card-body">
                <h5 className={`card-title ${questionShown ? '' : 'hidden'}`}>{currentCard.question}</h5>
                <h5 className={`card-title ${questionShown ? 'hidden' : ''}`}>{currentCard.answer}</h5>
                <button className="btn btn-primary"  onClick={() => this.cardRemembered()} >I got it</button>
                <button className="btn btn-warning" onClick={() => this.cardForgotten()}>I can't remember</button>
                <button className="btn btn-info" onClick={() => this.setState({questionShown: !this.state.questionShown})}>{`Show ${questionShown ? 'answer' : 'question'}`}</button>
              </div>
            </div>
            :
            ''}
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  cards: state.cards.cards,
  deck: state.cards.deck
});

export default withRouter(connect(mapStateToProps, {getCards})(Player));
