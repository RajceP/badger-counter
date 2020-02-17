import React, { useState, useEffect } from 'react';
import Badgers from '../components/Badgers/Badgers';
import './App.css';
import Weather from '../components/Badgers/Weather/Weather';

function App() {
  const [count, setCount] = useState(0);

  const addBadger = () => {
    setCount(count + 1);
    localStorage.setItem('badgerCount', count + 1);
  };

  useEffect(() => {
    const getCount = localStorage.getItem('badgerCount');
    if (getCount) {
      setCount(parseFloat(getCount));
    }
  }, []);

  return (
    <div className="App">
      <h1>Vlastnictví jezevečků</h1>
      <Weather />
      <Badgers count={count} click={addBadger} />
    </div>
  );
}

export default App;
