import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './Home';
import {Experience} from './Experience';
import {Projects} from './Projects';
import {Passions} from './Passions';
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
            <Route path="/experience" component={Experience}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/passions" component={Passions}/>
            <Route component={NoMatch}/>
          </Switch>
        </Router>
      
    </React.Fragment>
  );
}

export default App;
