import "bulma/css/bulma.css";
import * as React from "react";
import "./App.css";

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

export default App;
