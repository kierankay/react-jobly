import React from 'react';
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter } from "react-router-dom";
import Routes from './Routes';
import JoblyApi from './JoblyApi'


class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: ''
    }
  }

  async componentDidMount() {
    if (localStorage.token) {
      let userInfo = await JoblyApi.checkToken(localStorage.token)
      this.setState({ currentUser: userInfo });
    } 
  }

  render() {
    return (
      <BrowserRouter>
        <div className="main">
          <Routes user={this.state.currentUser} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
