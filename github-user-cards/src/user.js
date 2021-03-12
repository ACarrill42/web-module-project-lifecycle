import React from 'react';

class User extends React.Component {
  render() {
    return(
      <div className ="container">
        <img key = {this.props.users.avatar_url} src = {"https://avatars.githubusercontent.com/u/69913507?v=4"} alt ="avatar"/>
        <p>Username: {this.props.users.login}</p>
        <p>Name: {this.props.users.name}</p>
        <p>Bio: {this.props.users.bio}</p>
        <p>Followers: {this.props.users.followers}</p>
        <p>Twitter: {this.props.users.twitter_username}</p>
      </div>
    )
  }
}

export default User