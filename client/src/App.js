import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import './App.css'
import Locations from './Location.js'
import Home from './pages/Home/Home'

function App() {

  
  return (

    <Router>
      <div className='nav-bar'>
        <h1 className='page-title'>Calgary Swimming Pools</h1>
        <div className="links">
          <Link to="/"> Home </Link> <br/>
          <Link to="/swimmingpool"> All Swimming pool </Link> <br/>
          <Link to="/placeholder"> Placeholder </Link> <br/>
        </div>
      </div>
    
      <Switch>
        <div className='page-content'>
          <Route path='/home'> 
            <Home />
          </Route>
          <Route path="/">
            <Locations /> 
          </Route>
        </div>
      </Switch>
    </Router>

  );
}

export default App;
