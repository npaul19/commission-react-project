import logo from './logo.svg';
import './App.css';
import Card from "./components/UI/Card/Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" data-testid="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Card>This is a basic card component.</Card>
        <a
          className="App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React From Google.com
        </a>
      </header>
    </div>
  );
}

export default App;
