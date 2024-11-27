import logo from './logo.svg';
import './App.css';
import Greeting from './components/musab';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Greeting/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
