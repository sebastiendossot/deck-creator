import React, { Component, Fragment, Link } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCards, deleteCard }  from '../../actions/cards';

import Form from './Form';

export class Cards extends Component {
  static propTypes = {
    cards: PropTypes.array.isRequired,
    getCards: PropTypes.func.isRequired,
    deleteCard: PropTypes.func.isRequired,
  }

  componentDidMount(){
    console.log("I am the state id", this.props.location.state.id);
    this.props.getCards(this.props.location.state.id);
  }

  render() {
    return (
      <Fragment>
        <h2>
          Deck's List of Cards
        </h2>
        <div className="card-deck card-deck-style">
          <div className="card" key={0}>
            <div className="card-body">
              <h5 className="card-title">card</h5>
            </div>
          </div>
           {this.props.cards.map(card => (
            <div className="card" key={card.id}>
              <div className="card-body">
                <h5 className="card-title">{card.question}</h5>
              </div>
            </div>
          )
        )}

        <Form />
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  cards: state.cards.cards
});

export default connect(mapStateToProps, {getCards, deleteCard})(Cards);
