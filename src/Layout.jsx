// function Layout({ children }) {
//   return <div className='layout'>{children}</div>
// }

import React from 'react'
class Layout extends React.Component {
  render() {
    return <div className='layout'>{this.props.children}</div>
  }
}
export default Layout
