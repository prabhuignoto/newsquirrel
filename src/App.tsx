import 'bulma/css/bulma.css';
import './App.css';

import * as React from 'react';

import Footer from './containers/footer';
import Home from './containers/home';
import Navbar from './containers/navbar';

class App extends React.Component {
  public render() {
    return (
      <div className="App container">
        <section className="">
          <Navbar />
          <Home />
          <Footer />
        </section>
      </div>
    );
  }
}

export default App;
