import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import GoogleLogout from 'react-google-login';


export default class Google extends Component{
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  }

  responseGoogle= response => {
    console.log(response);
  }

  componentClicked = () => console.log("clicked");

  render() {
    let googleContent;

    if(this.state.isLoggedIn){
      googleContent = null;
      // googleContent = ( <GoogleLogout
      // buttonText="Logout"
      // onLogoutSuccess={this.logout} />)
    } else {
      googleContent = (<GoogleLogin
        clientId="840926923902-a6mbee0n6srst13qb90eseeplf42r88a.apps.googleusercontent.com"
        buttonText="Login with Google"
        autoLoad="false"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle} />)
    }

    return (
      <div>
      {googleContent}
      </div>
    )
  }
}
