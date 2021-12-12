import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bookmarks</h1>
        <button className="add-link-button" data-testid="addLinkButton">
          +
        </button>
      </header>
    </div>
  );
}

export default App;
