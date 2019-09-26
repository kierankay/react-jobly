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
      currentUser: '',
      infoLoaded: false
    }
  }

  async componentDidMount() {
    if (localStorage.getItem('token')) {
      let userInfo = await JoblyApi.checkToken(localStorage.token)
      this.setState({ currentUser: userInfo, infoLoaded: true });
    } else {
      this.setState({ currentUser: null, infoLoaded: true })
    }

  }

  render() {
    if (!this.state.infoLoaded) {
      console.log(this.state.infoLoaded)
      return "Loading..."
    }

    return (
      <BrowserRouter>
        <div className="main">
          <Routes user={this.state.currentUser} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
