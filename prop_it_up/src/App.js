import React from 'react';
import './App.css';

import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
        <PersonCard lastName={"Doe"} firstName={"Jane"} age={45} hairColor={"Black"}/>
        <PersonCard lastName={"Dwight"} firstName={"Jason"} age={54} hairColor={"Black"}/>
        <PersonCard lastName={"Dave"} firstName={"James"} age={25} hairColor={"Brown"}/>
        <PersonCard lastName={"Smith"} firstName={"John"} age={95} hairColor={"Blonde"}/>
    </div>
    
  );
}

export default App;
