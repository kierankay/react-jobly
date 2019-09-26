import React from 'react';
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter } from "react-router-dom";
import Routes from './Routes';


class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div className="main">
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
