import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async (numberid) => {
    try {
      const res = await axios.get(`http://localhost:9876/numbers/${numberid}`);
      setResponse(res.data);
      setError(null);
    } catch (error) {
      console.error(error);
      setError('Error fetching data. Please try again.'); 
      setResponse(null);
    }
  };

  return (
    <div>
      <h1>Number Microservice</h1>
      <button onClick={() => fetchData('p')}>Fetch Prime Numbers</button>
      <button onClick={() => fetchData('f')}>Fetch Fibonacci Numbers</button>
      <button onClick={() => fetchData('e')}>Fetch Even Numbers</button>
      <button onClick={() => fetchData('r')}>Fetch Random Numbers</button>
      {error && <div>Error: {error}</div>}
      {response && ( 
        <div>
          <h2>Previous Window State: {JSON.stringify(response.windowPrevState)}</h2>
          <h2>Current Window State: {JSON.stringify(response.windowCurrState)}</h2>
          <h2>Numbers: {JSON.stringify(response.numbers)}</h2>
          <h2>Average: {response.avg.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

export default App;
