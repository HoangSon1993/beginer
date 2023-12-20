import React from 'react'
const lists = ['BMW', 'HONDA', 'TOYOTA']
const fetchApi = () => {
  return new Promise((resole) => {
    setTimeout(() => {
      resole(lists)
    }, 1000)
  })
}
export default class Clock extends React.Component {
  constructor(props) {
    super(props)
    console.log('constructor')
    this.state = {
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconds: {
        created: new Date().getSeconds()
      },
      lists: []
    }
    this.date = '22/08/2022'
  }

  componentDidMount() {
    const second = document.getElementById('second')
    console.log('componentDidMount')
    fetchApi().then((res) => {
      this.setState((prevState) => ({
        ...prevState,
        lists: res,
        darkMode: false
      }))
    })
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  getTime = () => {
    const newState = {
      ...this.state,
      time: {
        created: new Date().toLocaleDateString()
      },
      seconds: {
        created: new Date().getSeconds()
      }
    }
    this.setState(newState)
  }

  render() {
    console.log('render')
    return (
      <div>
        <h1>Hello, world</h1>
        <h2>It is {this.state.time.created}</h2>
        <h2 id='second'>It is {this.state.seconds.created}</h2>
        <h3>{this.date}</h3>
        <button onClick={this.getTime}>Get Time</button>
        <button onClick={this.toggleDarkMode}>Togger</button>
        {this.state.darkMode && <input value={this.state.darkMode} type='text' />}
      </div>
    )
  }
  toggleDarkMode = () => {
    this.setState((prevState) => ({
      ...prevState,
      darkMode: !prevState.darkMode
    }))
  }
}
