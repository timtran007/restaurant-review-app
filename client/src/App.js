import React, {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import LoginPage from './Pages/LoginPage';
import Navigation from './Components/Navigation';
import SignupPage from './Pages/SignupPage';
import UserPage from './Pages/UserPage';
import RestaurantReviewPage from './Pages/RestaurantReviewPage';
import UserReviewsPage from './Pages/UserReviewsPage';

function App() {

  // state for user
  const [user, setUser] = useState(null)

  // state to house all restaurant information
  const [allRestaurants, setAllRestaurants] = useState([])

  // useEffect for auto-login
  useEffect(() => {
    fetch('/me')
    .then( resp => {
      if (resp.ok){
        resp.json().then( userInfo => setUser(userInfo));
      }
    })
  }, [])

  // useEffect to do get fetch requests for all restaurants 
  useEffect(() =>{
    fetch('/restaurants')
    .then(resp => resp.json())
    .then(data => setAllRestaurants(data))
  }, [])

  function onCreateReview(newReview){
    const restaurant = allRestaurants
    .find( restaurant => restaurant.id === newReview.restaurant_id)

    const newRestaurantReviewsArray = restaurant.reviews ? [...restaurant.reviews, newReview] : [newReview]

    const updatedRestaurant = {
      ...restaurant,
      reviews: newRestaurantReviewsArray
    }
    const updatedRestaurants = allRestaurants
    .map( r => {
      if (r.id === updatedRestaurant.id){
        return updatedRestaurant
      } else{
        return r
      }
    })
    setAllRestaurants(updatedRestaurants)

  }
  
  return (
    <div className="App">
        <Navigation user={user} setUser={setUser}/>
        <Switch>
          <Route exact path='/'>
            <RestaurantReviewPage allRestaurants={allRestaurants} user={user} onCreateReview={onCreateReview}/>
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
