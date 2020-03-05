import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addDeck  } from '../../actions/decks';


export class Form extends Component {
  state = {
    title: ''
  }

  static propTypes = { 
    addDeck: PropTypes.func.isRequired 
  }

  onChange = e => this.setState({[e.target.name]: e.target.value})

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
    const {title, abstract} = this.state;
    return (
      <div className="card card-body m-4 mb-4">
        <h2> Add Deck </h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Enter title"
              name="title"
              onChange={this.onChange}
              value={title}
              />
            </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { addDeck  })(Form)
