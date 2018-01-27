import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div className="App">
        <a href="/auth/google" ><button>Login with google</button></a>
        <a href="/auth/facebook" ><button>Login with facebook</button></a>
        <a href="/api/current_user"><button>View Profile</button></a>
        <a href="/api/logout">Logout</a>
      </div>
    );
  }
}

export default App;
