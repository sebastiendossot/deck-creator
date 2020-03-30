import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadFile }  from '../../actions/fileLoader';


export class Tutorial extends Component {

  static propTypes = {
    json: PropTypes.string,
    loadFile: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="card mt-4">
        <div className="card-header">
          Welcome to Remember <i className="fa fa-brain"/>
        </div>
        <div className="card-body">
          <h5 className="card-title">Remember <i className="fa fa-brain"/> helps you learning anything by creating your own decks of cards</h5>
          <p className="card-text">You are in your own here, except your decks will rearange themselves depending on your answers - you will see more often the cards that are the most difficult for you.</p>
          <p className="card-text">You can create you own decks of cards or download/buy existing ones. We have prepared a deck about some capitals to introduce the app to you.</p>
          <button className="btn btn-primary" onClick={() => this.props.loadFile(null, true)}>Download example Deck</button>
        </div>
        <div className="card-footer">
          {this.props.json}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  json: state.fileLoader.json
})

export default connect(mapStateToProps, {loadFile})(Tutorial);
