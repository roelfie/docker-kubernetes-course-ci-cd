import background from './background.jpg';
import './App.css';

function App() {
  return (
    <div>
      <header className="App-header" style={{backgroundImage: `url(${background})`, color: '#000000'}}>
        <p>
          Docker / React app created by ROELFIE
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
