import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bookmarks</h1>
        <button data-testid="addLinkButton">
          +
        </button>
      </header>
      <main className="App-bookmarks-list">
        Add a bookmark first.
      </main>
    </div>
  );
}

export default App;
