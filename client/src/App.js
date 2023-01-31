import React, {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import LoginPage from './Pages/LoginPage';
import Navigation from './Components/Navigation';
import SignupPage from './Pages/SignupPage';
import UserPage from './Pages/UserPage';
import RestaurantReviewPage from './Pages/RestaurantReviewPage';
import UserReviewsPage from './Pages/UserReviewsPage';


//Things to do:
// create state for user log in information to pass to sessions
// pass props down to respective components


function App() {

  // create state for user
  const [user, setUser] = useState(null)

  // create state to house all restaurant information
  const [allRestaurants, setAllRestaurants] = useState([])

  useEffect(() => {
    fetch('/me')
    .then( resp => {
      if (resp.ok){
        resp.json().then( userInfo => setUser(userInfo));
      }
    })
  }, [])

  //write useEffect to do get fetch requests for all restaurants 
  useEffect(() =>{
    fetch('/restaurants')
    .then(resp => resp.json())
    .then(data => setAllRestaurants(data))
  }, [])

  return (
    <div className="App">
        <Navigation user={user} setUser={setUser}/>
        <Switch>
          <Route exact path='/'>
            <RestaurantReviewPage allRestaurants={allRestaurants}/>
          </Route>
          <Route path='/signup'>
            <SignupPage onLogin={setUser}/>
          </Route>
          <Route path='/login' >
            <LoginPage onLogin={setUser}/>
          </Route>
          <Route exact path='/profile'>
            <UserPage user={user} onLogin={setUser}/>
          </Route>
          <Route path='/profile/reviews'>
            <UserReviewsPage />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
