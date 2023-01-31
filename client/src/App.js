import React, {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import LoginPage from './Pages/LoginPage';
import Navigation from './Components/Navigation';
import SignupPage from './Pages/SignupPage';
import UserPage from './Pages/UserPage';
import RestaurantReviewPage from './Pages/RestaurantReviewPage';

//Things to do:
// create state for user log in information to pass to sessions
// pass props down to respective components


function App() {
  // create state to house all restaurant information
  const [allRestaurants, setAllRestaurants] = useState([])

  // create state for user
  const [user, setUser] = useState(null)

  //write useEffect to do get fetch requests for all restaurants 
  useEffect(() =>{
    fetch('/restaurants')
    .then(resp => resp.json())
    .then(data => setAllRestaurants(data))
  }, [])

  useEffect(() => {
    fetch('/me').then( resp => {
      if (resp.ok){
        resp.json().then( user => setUser(user));
      }
    })
  }, [])

  return (
    <div className="App">
        <Navigation user={user}/>
        <Switch>
          <Route exact path='/'>
            <RestaurantReviewPage allRestaurants={allRestaurants}/>
          </Route>
          <Route path='/signup' onLogin={setUser}>
            <SignupPage />
          </Route>
          <Route path='/login' onLogin={setUser}>
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
