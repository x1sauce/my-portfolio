
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe"
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// import Particles from "react-particles";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Skills />
      <AboutMe />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
