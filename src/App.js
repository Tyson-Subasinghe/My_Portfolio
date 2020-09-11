import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './Home';
import {About} from './About';
import {Projects} from './Projects';
import {Contact} from './Contact';
import {NoMatch} from './NoMatch';
import {NavBar} from './NavBar.tsx';


function App() {
  return (
    <React.Fragment>
      <NavBar/>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/projects" component={Projects}/>
            <Route component={NoMatch}/>
          </Switch>
        </Router>
      
    </React.Fragment>
  );
}

export default App;
