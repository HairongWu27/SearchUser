/*
import React, { Component } from 'react';

export default class ProductRow extends Component {
    render() {
      const product = this.props.product;
      const name = product.stocked ?
        product.name :
        <span style={{color: 'red'}}>
          {product.name}
        </span>;
  
      return (
        <tr>
          <td>{name}</td>
          <td>{product.price}</td>
        </tr>
      );
    }
  }
*/

import React from 'react';

let ProductRow = (props) =>{
      const product = props.product;
      const name = product.stocked ?
        product.name :
        <span style={{color: 'red'}}>
          {product.name}
        </span>;
  
      return (
        <tr>
          <td>{name}</td>
          <td>{product.price}</td>
        </tr>
      );
};

export default ProductRow;
