import React from 'react';

import Badger from './Badger/Badger';

const Badgers = ({ count, click }) => {
  const badgers = [];

  [...Array(count)].map((_badger, i) => {
    // eslint-disable-next-line react/no-array-index-key
    return badgers.push(<Badger key={i} />);
  });

  return (
    <div>
      <p>Tvůj majetek činí {count} jezevečků! </p>
      <button type="button" onClick={click}>
        Přidat jezevečka
      </button>
      <div className="Badger">{badgers}</div>
    </div>
  );
};

export default Badgers;
