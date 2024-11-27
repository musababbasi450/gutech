import logo from './logo.svg';
import './App.css';
import Greeting from './components/musab';
const name = "musab";
function App() {
  return (
    <div className="App">
      <h1>hello!{name}</h1>
      <Greeting/>
    </div>
  );
}

export default App;
