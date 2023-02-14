import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
              <h1>dictionary</h1>
              </header>
      <main className="container">
        <Dictionary defaultKeyword="search"/>
      </main>
      <footer className="App-footer">Coded by Louise Gray and open-sourced on <a href='https://github.com/PL-coding/dictionary-project' target="_blank" rel="noreferrer">GitHub</a></footer>
    </div>
  );
}
