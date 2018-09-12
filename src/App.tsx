import "bulma/css/bulma.css";
import { hot, setConfig } from "react-hot-loader";
import "./App.css";
setConfig({ logLevel: "no-errors-please" });
import * as React from "react";

// import { hot } from 'react-hot-loader';
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";
import Footer from "./containers/footer";

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

export default hot(module)(App);
