import React from 'react';

import Badger from './Badger/Badger';

const Badgers = props => {
  let badgers = [];

  [...Array(props.count)].map((_badger, i) => {
    return badgers.push(<Badger key={i} />);
  })

  return (
    <div>
      <p>Tvůj majetek činí {props.count} jezevečků! </p>
      <button onClick={props.click}>Přidat jezevečka</button>
      <div className="Badger">{badgers}</div>
    </div>
  );
};

export default Badgers;
