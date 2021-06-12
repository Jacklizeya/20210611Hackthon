import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import './App.css';
import Locations from './Location.js';
import Table from './components/Table/Table'
import Map from './components/Map/Map'
import Homepage from './pages/homepage/Homepage';

function App() {

  
  return (

    <Router>
      <div className = "navigation bar">
        <Link to="/"> Home </Link> <br/>
        <Link to="/swimmingpool"> All Swimming pool </Link> <br/>
        <Link to="/placeholder"> Placeholder </Link> <br/>
      </div>
    
      <Switch>
        <Route path='/home'> 
          <Homepage />
        </Route>
        <Route path='/map'>
          <Map />
        </Route>
        <Route path="/"> <Locations/> </Route>
      </Switch>
    </Router>

  );
}

export default App;
