import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addCard, deck  } from '../../actions/cards';


export class Form extends Component {
  static propTypes = { 
    deck: PropTypes.number,
    addCard: PropTypes.func.isRequired
  }

  state = {
    question: '', 
    answer: '',
    deck: 0
  }

  componentWillReceiveProps(nextProps) {
    console.log("WHATSRONG",nextProps.deck)
    console.log("WHATSRONG2", this.state.deck)
    if(nextProps.deck != this.state.deck){
      console.log("oui")
      
      this.setState({deck: nextProps.deck})
    }
  }

  onChange = e => this.setState({[e.target.name]: e.target.value})

  onSubmit = e => {
    e.preventDefault();
    const { question, answer, deck } = this.state;
    const card = { question, answer, deck };
    this.props.addCard(card); 
    this.setState({
      question: '', 
      answer: ''
    })
  }

  render() {
    const {question, answer, deck} = this.state;
    return (
      <div className="card" key={0}>
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
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  deck: state.cards.deck
});

export default connect(mapStateToProps, { addCard })(Form);