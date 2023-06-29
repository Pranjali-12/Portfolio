import './App.css';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import About from './Components/About';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
