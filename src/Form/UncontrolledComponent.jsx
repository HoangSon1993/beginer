import React, { Component } from 'react'

class UncontrolledComponent extends Component {
  constructor(props) {
    super(props)
    this.input = React.createRef()
    this.fileInput = React.createRef()
    this.state = {
      selectedFile: null
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type='text' ref={this.input} value='abc' onChange={() => {}} />
          </label>
          <input type='file' name='avatar' onChange={this.onFileChange} />
          <input type='submit' value='submit' ref={this.fileInput} />
        </form>
      </div>
    )
  }
  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.input.current.value)

    const formData = new FormData()
  }
  onFileChange = (event) => {
    console.log(event.target.files[0])
    this.setState({
      seletedFile: event.target.files[0]
    })
  }
}

export default UncontrolledComponent
