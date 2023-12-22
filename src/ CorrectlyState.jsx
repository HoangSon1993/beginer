import React, { Component } from 'react'

const fetComment = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(['A', 'B', 'C']), 1000)
  })
class CorrectlyState extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      comments: []
    }
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))

    //Mình truyền nguyên 1 cái object với các thuộc tính giống
    //như cái state ban đầu.
    fetComment().then((res) => {
      this.setState((prevState) => ({
        // Không cần truyền prevState.
        //Chỉ cần cập nhật lại comments
        //Đây là tính năng merge State chỉ có trong class component
        comments: res
      }))
    })
  }

  render() {
    console.log(this.state)
    return <div>CorrectlyState. Count: {this.state.count}</div>
  }
}

export default CorrectlyState
