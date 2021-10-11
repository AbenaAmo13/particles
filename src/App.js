import logo from './logo.svg';
import particles from './particles.svg'
import './App.css';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <p id="titleparagraph">
              Particle People Task
          </p>
          <img className="App-logo" src={particles}></img>
          <Button variant="contained"> Start Task!</Button>
      </header>
    </div>
  );
}

export default App;
