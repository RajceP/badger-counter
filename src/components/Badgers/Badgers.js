import React from 'react';
import Badger from './Badger/Badger';

const Badgers = props => {
  let badgers = [];

  for (let i = 0; i < props.count; i++) {
    badgers.push(<Badger key={i} />);
  }

  return (
    <div>
      <p>Tvůj majetek činí {props.count} jezevečků! </p>
      <button onClick={props.click}>Přidat jezevečka</button>
      <div>{badgers}</div>
    </div>
  );
};

export default Badgers;
