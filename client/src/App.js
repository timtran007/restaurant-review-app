import React, {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import LoginPage from './Pages/LoginPage';
import Nav from './Components/Nav';
import SignupPage from './Pages/SignupPage';
import UserPage from './Pages/UserPage';
import RestaurantReviewPage from './Pages/RestaurantReviewPage';

//Things to do:

//localhost:3000/restaurants
// create state for user log in information to pass to sessions
// pass props down to respective components


function App() {
  // create state to house all restaurant information
  const [allRestaurants, setAllRestaurants] = useState([])

  //write useEffect to do get fetch requests for all restaurants 
  useEffect(() =>{
    fetch('/restaurants')
    .then(resp => resp.json())
    .then(data => setAllRestaurants(data))
  }, [])
  debugger

  return (
    <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/'>
            <RestaurantReviewPage allRestaurants={allRestaurants}/>
          </Route>
          <Route path='/signup'>
            <SignupPage />
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <Route path='/profile'>
            <UserPage />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
