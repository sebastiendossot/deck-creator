import React, { Component, Fragment } from 'react';

import Form from './Form';
import Decks from './Decks';
import Tutorial from './Tutorial';

export class Dashboard extends Component {  

  state ={
    formVisible: false
  }

  render(){
    const {formVisible} = this.state;
    return (
      <Fragment>
        <Tutorial />
        <div className={formVisible ? '':'hidden'}>
          <Form/>
        </div>
        <h3  className="mt-4" >
            Your Decks - <button className="btn btn-info btn-sm" onClick={() => this.setState({ formVisible: true})}>Create One</button>
        </h3>
        <Decks />
      </Fragment>
    )
  }
  
}

export default Dashboard;
