import logo from './logo.svg';
import './App.css';
import Locations from './Location.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {

  
  return (

    <Router>
      <div className = "navigation-bar">
        <Link to="/"> Home </Link> <br/>
        <Link to="/swimmingpool"> All Swimming pool </Link> <br/>
        <Link to="/placeholder"> Placeholder </Link> <br/>
      </div>
    
      <Switch>
        <Route path="/"> <Locations/> </Route>
      </Switch>
    </Router>

  );
}

export default App;
