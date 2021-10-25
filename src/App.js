import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/pages/Hero/Hero";
import Projects from "./components/pages/Projects/Projects";
import Experience from "./components/pages/Experience/Experience";
import Skills from "./components/pages/Skills/Skills";
import Writing from "./components/pages/Writing/Writing";
import Contact from "./components/pages/Contact/Contact";
import { CSSTransition, TransitionGroup } from "react-transition-group"; // ES6
import Shell from './components/hoc/Shell';

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" exact component={Shell(Hero)} />
        <Route path="/projects" component={Shell(Projects)} />
        <Route path="/experience" component={Shell(Experience)} />
        <Route path="/skills" component={Shell(Skills)} />
        <Route path="/writing" component={Shell(Writing)} />
        <Route path="/contact" component={Shell(Contact)} />
      </Switch>
    </Router>
  );
}

export default App;
