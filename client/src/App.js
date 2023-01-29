//will house the get fetch request for all restaurants
import {Route, Switch} from 'react-router-dom'
import './App.css';
import RestaurantsContainer from './Components/RestaurantsContainer';
import LoginPage from './Pages/LoginPage';
import Nav from './Components/Nav';
import SignupPage from './Pages/SignupPage'
import UserPage from './Pages/UserPage';

function App() {
  return (
    <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/'>
            <RestaurantsContainer />
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
