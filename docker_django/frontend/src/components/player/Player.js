import React, { Component, Fragment, Link } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCards, deleteCard }  from '../../actions/cards';
import { withRouter } from "react-router";
import { Redirect } from 'react-router-dom';

import Timer from './Timer';


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
    endDeck: false,
    score: 0
  }

  componentDidMount(){
    this.props.getCards(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({currentCard: nextProps.cards[0]})
  }

  cardRemembered(){
    //things if card remembered
    this.nextCard(true);
  }

  cardForgotten(){
    // things if card forgotten
    this.nextCard(false);
  }

  nextCard(cardRemembered){
    const nextIndex = this.state.indexCurrentCard + 1;
    const cards = this.props.cards;
    let score = cardRemembered ? this.state.score + 1 : this.state.score;
    if(nextIndex<cards.length){
      this.setState({currentCard: cards[nextIndex], indexCurrentCard: nextIndex , score: score})
    }else{
      this.setState({endDeck: true})
    }
  }

  render() {
    const {questionShown, currentCard, endDeck, score} = this.state;

    if (endDeck) {
      return <Redirect to={{
            pathname: `/`
        }} push={true} />
    }

    return (
      <Fragment>
        <div className="d-flex justify-content-center board">
        <Timer />
        <div className="player-counter">
          Score: {`${score}`}
        </div>
        {currentCard ? 
          <div className="card align-self-center">
              <div className="card-body d-flex justify-content-center">
                <h5 className={`card-title align-self-center ${questionShown ? '' : 'hidden'}`}>{currentCard.question}</h5>
                <h5 className={`card-title align-self-center ${questionShown ? 'hidden' : ''}`}>{currentCard.answer}</h5>
              </div>
              <div className="card-footer d-flex justify-content-center card-footer-player"> 
                <button className="btn btn-primary"  onClick={() => this.cardRemembered()} >
                  <i className="fa fa-thumbs-up"></i>
                </button>
                <button className="btn btn-warning" onClick={() => this.cardForgotten()}>
                  <i className="fa fa-thumbs-down"></i>
                </button>
                <button className="btn btn-info" onClick={() => this.setState({questionShown: !this.state.questionShown})}>
                  <div className={`${questionShown ? '' : 'hidden'}`}><i className="fa fa-eye"></i></div>
                  <div className={`${questionShown ? 'hidden' : ''}`}><i className="fa fa-eye-slash"></i></div>
                </button>
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
