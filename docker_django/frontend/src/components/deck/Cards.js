import React, { Component, Fragment, Link } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCards, deleteCard }  from '../../actions/cards';
import { withRouter } from "react-router";

import Form from './Form';

export class Cards extends Component {
  static propTypes = {
    deck: PropTypes.number,
    cards: PropTypes.array.isRequired,
    getCards: PropTypes.func.isRequired,
    deleteCard: PropTypes.func.isRequired,
  }

  componentDidMount(){
    //   const deckId = this.props.match.params.id;
    // //console.log("I am the state id", this.props.location.state.id);
    
    // console.log("I am the state id", deckId);
    
    //this.props.getCards(this.props.deck);

    this.props.getCards(this.props.match.params.id);
  }


  render() {
    return (
      <Fragment>
        <h2>
          Deck's List of Cards
        </h2>
        <div className="card-deck card-deck-style" key="List">
           {this.props.cards.map((card, index) => (
              <div className="card" key={index}>
                <div className="card-body">
                  <h5 className="card-title">{card.question}</h5>
                </div>
              </div>
            ))}
          <Form />
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  cards: state.cards.cards,
  deck: state.cards.deck
});

export default withRouter(connect(mapStateToProps, {getCards, deleteCard})(Cards));
