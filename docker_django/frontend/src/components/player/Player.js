import React, { Component, Fragment, Link } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCards, deleteCard }  from '../../actions/cards';
import { withRouter } from "react-router";

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
    indexCurrentCard: 0
  }

  componentDidMount(){
    this.props.getCards(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({currentCard: nextProps.cards[0]})
  }


  render() {
    const {questionShown, currentCard} = this.state;
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
                <button className="btn btn-primary">I got it</button>
                <button className="btn btn-warning">I can't remember</button>
                <button className="btn btn-info">Show answer</button>
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
