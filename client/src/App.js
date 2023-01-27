import {Route, Switch} from 'react-router-dom'
import './App.css';
import RestaurantsContainer from './Components/RestaurantsContainer';
import LoginPage from './Pages/LoginPage';
import UserContainer from './Components/UserContainer';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/'>
            <RestaurantsContainer />
          </Route>
          <Route path='/signup'>
            <LoginPage />
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <Route path='/profile'>
            <UserContainer />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
