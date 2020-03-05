import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addCard  } from '../../actions/cards';


export class Form extends Component {
  state = {
    question: '', 
    answer: '',
    deck: 1
  }

  static propTypes = { 
    addCard: PropTypes.func.isRequired 
  }

  onChange = e => this.setState({[e.target.name]: e.target.value})

  onSubmit = e => {
    e.preventDefault();
    const { question, answer, deck } = this.state;
    const card = { question, answer, deck };
    this.props.addCard(card); 
    this.setState({
      question: '', 
      answer: '',
      deck: 1
    })
  }

  render() {
    const {question, answer, deck} = this.state;
    return (
      <div className="card">
        <div className="card-header">
          Add New Card
        </div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Enter question"
                  name="question"
                  onChange={this.onChange}
                  value={question}
                  />
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Enter answer"
                  name="answer"
                  onChange={this.onChange}
                  value={answer}
                  />
                <input 
                  type="hidden" 
                  className="form-control" 
                  name="form"
                  value={deck}
                  />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        
      </div>
    )
  }
}

export default connect(null, { addCard  })(Form);