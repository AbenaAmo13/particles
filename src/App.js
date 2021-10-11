import logo from './logo.svg';
import particles from './particles.svg'
import './App.css';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';



function App() {

  return (
    <div className="App">

        <AppBar className="App-header">
            <p id="titleparagraph">
                Particle People Task
            </p>
            <img className="App-logo" src={particles}></img>

        </AppBar>
        <Button variant="contained"> Start Task!</Button>




    </div>
  );
}

export default App;
