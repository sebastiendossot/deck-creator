import React, { Component, Fragment, Link } from 'react'
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
    this.props.getCards();
  }

  render() {
    return (
      <Fragment>
        <h2>
          Deck's List of Cards
        </h2>
        <div className="card-deck">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">card</h5>
            </div>
          </div>
          {/* {this.props.cards.map(card => (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">card</h5>
              </div>
            </div>
          )
        )} */}

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
