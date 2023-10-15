import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar';
import Intro from './Components/Intro';
import Project from './Components/project';
import Skill from './Components/skill';
import Contact from './Components/contact';
import Footer from './Components/footer';

function App() {
  return (
    <div class="wrapper">
       <div class="container">
       <Navbar/>
      <Intro/>
      
       </div>
       <Project/>
       <Skill/>
       <Contact/>
       <Footer/>
    </div>
  );
}

export default App;
