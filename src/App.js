import React from 'react';
import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import SearchPage from './pages/SearchPage';
import HitCounter from './HitCounter';
import Login from './pages/Login'

function App() {
  return (
    <div className="App">

      <Router> 
            <Switch>
      
              <Route path='/search'>

                <SearchPage />
                 </Route>

              <Route  path='/' >  
                <Home />
              </Route>

              <Route path='/login'>

                    Welcome
                </Route>
              
            </Switch>
            </Router>
       
        <HitCounter />
      

    </div>
  );
}

export default App;


