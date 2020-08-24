import React from 'react';
import List from './List';
import './css/App.css';

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {props.store.lists.map(list =>
          <List key={list.id} header={list.header} cards={list.cardIds.map(id => props.store.allCards[id])} />
        )}
      </div>
      
      
     
    </div>
  );
}

export default App;
