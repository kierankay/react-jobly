import React from 'react';
import JoblyApi from './JoblyApi';
import { Redirect } from 'react-router-dom';

class LoginContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    let token = await JoblyApi.login(this.state.username, this.state.password);
    localStorage.setItem("token", token.token);
  }

  render() {
    return (
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label for="username">Username</label>
          <input type="text" className="form-control" id="username" aria-describedby="username" placeholder="Username" name="username" value={this.state.username} />
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Password" name="password" value={this.state.password} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default LoginContainer;