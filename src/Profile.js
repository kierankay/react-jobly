import React from 'react';
import ProfileForm from './ProfileForm';

class Profile extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>Profile</h1>
        <ProfileForm />
      </div>
    );
  }
}

export default Profile;