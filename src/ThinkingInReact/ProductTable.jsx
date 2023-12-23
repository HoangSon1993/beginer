import React, { Component } from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

class ProductTable extends Component {
  render() {
    const { productList, searchText, inStock } = this.props
    let lastCategory = null
    /*
     * Cach 1: dung ham forEach
     * **/
    const rows = []
    productList.forEach((productItem) => {
      if (inStock && !productItem.stocked) {
        return
      }
      if (productItem.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1) {
        return
      }
      if (productItem.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={productItem.category} key={productItem.category} />)
      }
      rows.push(<ProductRow product={productItem} key={productItem.name} />)
      lastCategory = productItem.category
    })
    /*
     * Cach 2 dung ham map()
     */
    // const rows = productList.map((productItem) => {
    //   if (productItem.category !== lastCategory) {
    //     lastCategory = productItem.category
    //     return (
    //       <Fragment key={productItem.name}>
    //         <ProductCategoryRow category={productItem.category} />
    //         <ProductRow product={productItem} />
    //       </Fragment>
    //     )
    //   }
    //   return <ProductRow product={productItem} />
    // })
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

export default ProductTable
