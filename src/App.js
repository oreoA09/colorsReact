import React, { useState } from 'react'
import './App.css';

function App() {
  let [colors, setColors] = useState(['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'])

  return (
    <div className="App">
        Colors
    </div>
  );
}

export default App;
