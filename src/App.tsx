import 'bulma/css/bulma.css';
import './App.css';

import * as React from 'react';

import Home from './containers/home';
import Navbar from './containers/navbar';

class App extends React.Component {
  public render() {
    return (
      <div className="App container">
        <div className="columns">
          <div className="column">
            <section className="">
              <Navbar />
              <Home />
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
