import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      address: '100',
      fruit: 'Coconut',
      marriage: true
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type='text' name='name' value={this.state.name} onChange={this.hangleChange} />
          </label>
          <input type='checkbox' name='marriage' id='' checked={this.state.marriage} onChange={this.hangleChange} />
          <label>
            Description:
            <textarea name='address' value={this.state.address} onChange={this.hangleChange} />
          </label>
          <select value={this.state.fruit} name='fruit' onChange={this.hangleChange}>
            <option value='Grapefruit'>Grapefruit</option>
            <option value='Lime'>Lime</option>
            <option value='Coconut'>Coconut</option>
          </select>
          <input type='submit' value='submit' />
          {/*<input type='file' name='' id='' />*/}
        </form>
      </div>
    )
  }

  hangleChange = (event) => {
    const { target } = event
    const value = target.type === 'checkbox' ? target.checked : target.value
    const { name } = target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
  }
}

export default Form
