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
    this.updateUserInfo = this.updateUserInfo.bind(this);
    this.checkAppliedJob = this.checkAppliedJob.bind(this);
    this.applyToJob = this.applyToJob.bind(this);
  }

  async componentDidMount() {
    if (localStorage.getItem('token')) {
      let userInfo = await JoblyApi.checkToken(localStorage.token)
      this.setState({ currentUser: userInfo, infoLoaded: true });
    } else {
      this.setState({ currentUser: null, infoLoaded: true })
    }

  }

  updateUserInfo(user) {
    this.setState({currentUser: {user: {...this.state.currentUser.user, ...user} } })
  }

  checkAppliedJob(jobId) {
    // check if job is in this.state.currentUser.jobs
    if (this.state.currentUser.user.jobs.filter(job => job.id === jobId).length === 1) {
      return true;
    } else {
      return false;
    }
  }

  async applyToJob(job) {
    await JoblyApi.applyToJob(job.id)
    this.setState({currentUser: {user: {...this.state.currentUser.user, jobs: [...this.state.currentUser.user.jobs, job]}} })
  }

  render() {
    if (!this.state.infoLoaded) {
      return "Loading..."
    } else {
      return (
        <BrowserRouter>
          <div className="main">
            <Routes user={this.state.currentUser} checkApplied={this.checkAppliedJob} applyToJob={this.applyToJob} updateUser={this.updateUserInfo}/>
          </div>
        </BrowserRouter>
      )
    }
  }
}

export default App;
