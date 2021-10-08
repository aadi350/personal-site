import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/pages/Hero/Hero";
import Projects from "./components/pages/Projects/Projects";
import Experience from "./components/pages/Experience/Experience";
import Skills from "./components/pages/Skills/Skills";
import Writing from "./components/pages/Writing/Writing";
import Contact from "./components/pages/Contact/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Hero} />
        <Route path="/projects" component={Projects} />
        <Route path="/experience" component={Experience} />
        <Route path="/skills" component={Skills} />
        <Route path="/writing" component={Writing} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
