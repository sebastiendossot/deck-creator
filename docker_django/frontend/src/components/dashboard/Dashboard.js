import React, { Fragment } from 'react';

import Form from './Form';
import Decks from './Decks';

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Decks />
    </Fragment>
  )
}
