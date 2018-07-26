import 'bulma/css/bulma.css';
import 'bulma/css/bulma.css';
import * as React from 'react';
import './App.css';
import CountryDropdown from './containers/country-dropdown';
import Filters from './containers/filters';
import NewsStand from "./containers/news-stand";
import Pager from './containers/pager';
import SearchBar from './containers/search-bar';

class App extends React.Component {
  public render() {
    return (
      <section className="section">
        <div className="App container">
          <div className="columns">
            <div className="column">
              <nav className="navbar" role="navigation">
                <div className="nav-brand">
                  <span style={{fontSize: '2rem', marginLeft: '15px', color: '#EF233C'}}>News Squirrel</span>
                </div>
                <div className="navbar-item">
                  <SearchBar />
                </div>
                <div className="navbar-item" style={{marginLeft: 'auto'}}>
                  <CountryDropdown />
                </div>
              </nav>
              <Filters />
              <NewsStand />
              <Pager />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
