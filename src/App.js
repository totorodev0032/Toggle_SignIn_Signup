import React, { Component } from 'react';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoginOpen : true,
       isRegisterOpen : false,
    }
  }

  showRegisterBox(){
    this.setState({
      isRegisterOpen: true, isLoginOpen:false
    })
  }

  showLoginBox(){
    this.setState({
      isLoginOpen: true, isRegisterOpen: false
    })
  }
  

  render() {
    return(
      

        <div className = "root-controller">
{/* {"controller" + (this.state.isRegisterOpen ? "selected-controller":"")}  */}
          <div className = "box-controller">
            <div className = "controller"
                 onClick = {this.showLoginBox.bind(this)}>
              <p>Login</p>
            </div>
            <div className ="controller"
                 onClick = {this.showRegisterBox.bind(this)}>
              <p>Register</p>
            </div>
          </div>

          <div className = "box-container">
              {this.state.isLoginOpen && <LoginBox/>}
              {this.state.isRegisterOpen && <RegisterBox/>}
          </div>
          

        </div>
    )
  }
}

class LoginBox extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  submitLogin(e){

  }

  render() {
    return(
      <div className = "inner-container">
        <div className = "header">
          Login
        </div>
        <div className = "box">
          <div className = "input-group">
            <label htmlFor = "username"> Username </label>
            <input type = "text" name = "username" placeholder = "username"/>
          </div>

          <div className = "input-group">
            <label htmlFor = "password"> Password </label>
            <input type = "password" name = "Password" placeholder = "password"/>
          </div>

          <button type = "button" className = "btn" onClick = {this.submitLogin.bind(this)}>Login</button>
        </div>
      </div>
    )
  }


}

class RegisterBox extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  submitRegister(e){

  }

  render() {
    return(
      <div className = "inner-container">
        <div className = "header">
          Register
        </div>
        <div className = "box">
          <div className = "input-group">
            <label htmlFor = "username"> Username </label>
            <input type = "text" name = "username" placeholder = "username"/>
          </div>

          <div className = "input-group">
            <label htmlFor = "password"> Password </label>
            <input type = "password" name = "password" placeholder = "password"/>
          </div>

          <div className = "input-group">
            <label htmlFor = "confirm-password"> Confirm Password </label>
            <input type = "password" name = "Confirm-pasword" placeholder = " Confirmpassword"/>
          </div>

          <button type = "button" className = "btn" onClick = {this.submitRegister.bind(this)}>Register</button>
        </div>
      </div>
    )
  }

}

export default App
