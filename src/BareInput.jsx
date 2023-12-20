import React from 'react'

class BareInput extends React.Component {
  render() {
    const { type: typeInput, ...rest } = this.props
    return <input type={typeInput} {...rest} />
  }
}
export default BareInput
