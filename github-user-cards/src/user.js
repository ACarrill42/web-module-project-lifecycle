import React from 'react';

class User extends React.Component {
  render() {
    return(
      <div className ="container">
        Username: {this.props.users.login}
        Name: {this.props.users.name}
        Bio: {this.props.users.bio}
        Followers: {this.props.users.followers}
        Twitter: {this.props.users.twitter_username}
      </div>
    )
  }
}

export default User