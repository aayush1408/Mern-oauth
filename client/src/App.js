import React, { Component } from 'react';
import Login from './components/login';
import Profile from './components/profile';
import {BrowserRouter,Route} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path='/login' component={Login} />
            <Route exact path='/profile' component={Profile} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
