import React, { Component } from 'react'

class ProductItem extends Component {
  render() {
    const { product } = this.props
    return (
      <div className='product-item'>
        <input />
        {product.name} - {product.avatar}
      </div>
    )
  }
}

export default ProductItem
