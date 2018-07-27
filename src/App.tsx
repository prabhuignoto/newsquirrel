import 'bulma/css/bulma.css';
import './App.css';

import * as React from 'react';

import Filters from './containers/filters';
import Navbar from './containers/navbar';
import NewsStand from './containers/news-stand';
import Pager from './containers/pager';

class App extends React.Component {
  public render() {
    return (
      <div className="App container">
        <div className="columns">
          <div className="column">
            <section className="">
              <Navbar />
              <Filters />
              <NewsStand />
              <Pager />
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
