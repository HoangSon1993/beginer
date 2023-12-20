import React from 'react'

class BareButton extends React.Component {
  constructor(props) {
    super(props)
  }
  handleClick(event, value) {
    console.log(event)
    console.log(value)
  }
  // handleClick = (value) => {
  //   console.log(value)
  // }

  //Curying
  // handleClick = (value) => () => {
  //   console.log(value)
  // }
  //Viết đầy đủ ra như sau
  // handleClick = (value) => {
  //   console.log('value ====>', value)
  //   return () => {
  //     console.log(value)
  //   }
  // }
  render() {
    return (
      <div>
        <button onClick={(event) => this.handleClick(event, 'Add')}>Add</button>
        <button onClick={(event) => this.handleClick(event, 'Delete')}>Delete</button>
        <button onClick={(event) => this.handleClick(event, 'Edit')}>Edit</button>
      </div>
    )
  }
}
export default BareButton
