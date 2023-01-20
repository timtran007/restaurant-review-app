import {Route, Switch} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/'>
            <RestaurantContainer />
          </Route>
          <Route path='/signup'>
            <SignupForm />
          </Route>
          <Route path='/login'>
            <LoginForm />
          </Route>
          <Route path='/profile'>
            <ProfileContainer />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
