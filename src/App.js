import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <main className="container">
        <Dictionary defaultKeyword="dictionary"/>
      </main>
      <footer className="App-footer">Coded by Louise Gray and open-sourced on <a href='https://github.com/PL-coding/dictionary-project' target="_blank" rel="noreferrer">GitHub</a></footer>
    </div>
  );
}
