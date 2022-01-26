// import logo from './logo.svg';
import './App.css';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import Main from './Main/Main.js';
import { animals } from './data.js';

function App() {
  return (
    <div className="App">
      <Header greeting='Welcome to the Animal Farm!'/>
      <Main animals={animals}/>
      <Footer email='sambenatovich@gmail.com'/>
    </div>
  );
}

export default App;
