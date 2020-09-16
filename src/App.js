import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './pages/Home';
import {Experience} from './pages/Experience';
import {Projects} from './pages/Projects';
import {Passions} from './pages/Passions';
import {Contact} from './pages/Contact';
import {NoMatch} from './pages/404';
import {NavBar} from './components/navigation/NavBubble.tsx';



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
