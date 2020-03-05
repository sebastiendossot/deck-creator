import React, { Component, Fragment, Link } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getDecks, deleteDeck }  from '../../actions/decks';
import { Redirect } from 'react-router-dom';

export class Decks extends Component {  
  
  state = {
    navigateToDeck: false
  }

  static propTypes = {
    decks: PropTypes.array.isRequired,
    getDecks: PropTypes.func.isRequired,
    deleteDeck: PropTypes.func.isRequired,
  }


  componentDidMount(){
    this.props.getDecks();
  }

  render() {
    const { navigateToDeck } = this.state;

    if (navigateToDeck) {
      return <Redirect to="/deck" push={true} />
    }

    return (
      <Fragment>
        <h2>
          Decks List
        </h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th/>
            </tr>
          </thead>
          <tbody>
            {this.props.decks.map(deck => (
              <tr key={deck.id} onClick={() => this.setState({ navigateToDeck: true })}>   
                  <td>{deck.id}</td>
                  <td>{deck.title}</td>
                  <td><button onClick={this.props.deleteDeck.bind(this, deck.id)} className="btn btn-danger btn-sm">Delete</button></td>
              </tr>
              )
            )}
          </tbody>
        </table>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  decks: state.decks.decks
})

export default connect(mapStateToProps, {getDecks, deleteDeck})(Decks);
