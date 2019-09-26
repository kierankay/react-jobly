import React from 'react';
import JoblyApi from './JoblyApi';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.user.firstName,
      lastName: this.props.user.lastName,
      email: this.props.user.email,
      photoURL: this.props.user.src,
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
    let updatedInfo = await JoblyApi.editUser(this.props.username, this.state.password, this.state.firstName, this.state.lastName, this.state.email, this.state.photoURL);
    this.props.history.push('/profile')
  }


  render() {
    return (
      <div>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="username">Username</label>
            <p>{this.props.username}</p>
          </div>
          <div className="form-group">
            <label for="password">First Name</label>
            <input type="password" className="form-control" id="firstName" placeholder="First Name" name="firstName" value={this.state.firstName} />
          </div>
          <div className="form-group">
            <label for="lastName">last Name</label>
            <input type="text" className="form-control" id="lastName" aria-describedby="last name" placeholder="Last Name" name="lastName" value={this.state.lastName} />
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input type="text" className="form-control" id="email" aria-describedby="email" placeholder="Email" name="email" value={this.state.email} />
          </div>
          <div className="form-group">
            <label for="username">Photo URL</label>
            <input type="text" className="form-control" id="photoURL" aria-describedby="photoURL" placeholder="Photo URL" name="photoURL" value={this.state.photoURL} />
          </div>
          <div className="form-group">
            <label for="username">New Password</label>
            <input type="text" className="form-control" id="password" aria-describedby="password" placeholder="Photo URL" name="password" value={this.state.password} />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Save Changes</button>
        </form>
      </div>
    )
  }
}

export default ProfileForm;