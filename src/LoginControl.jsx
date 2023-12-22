import React from 'react'
class LoginButton extends React.Component {
  render() {
    return <button onClick={this.props.onClick}>Login</button>
  }
}
class LogoutButton extends React.Component {
  render() {
    return <button onClick={this.props.onClick}>Logout</button>
  }
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
  }
  handleLogout = () => {
    this.setState({ isLoggedIn: false })
  }
  handleLogin = () => {
    this.setState({ isLoggedIn: true })
  }
  render() {
    const { isLoggedIn } = this.state
    console.log(this.state.isLoggedIn)

    return (
      <div className='login-control'>
        {/*{isLoggedIn && <LoginButton />}*/}
        {/*{!isLoggedIn && <LogoutButton />}*/}
        {isLoggedIn ? <LogoutButton onClick={this.handleLogout} /> : <LoginButton onClick={this.handleLogin} />}
      </div>
    )
  }
}
export default LoginControl
