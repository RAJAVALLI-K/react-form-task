import React from 'react'

const ShowItem = (product) => {

  const remove = () => {
    product.remove(product.item)
  }
  const edit = () => {
    product.edit(product.item)
  }
  return (
    <div className='each-item'>
      <table border={1} width='100%'>
        <tbody>
          <tr>
            <th>ID</th>
            <th>PRODUCT</th>
            <th>PRICE</th>
            <th>PRODUCT WEIGHT</th>
            <th>PRODUCT ITEM</th>
            <th>BUTTON</th>
          </tr>
          <tr>
            <td><p>{product.item.id}</p></td>
            <td><p>{product.item.ProductName}</p></td>
            <td><p>{product.item.ProductPrice}</p></td>
            <td><p>{product.item.ProductWeight}</p></td>
            <td><p>{product.item.ProductItem}</p></td>
            <td><button onClick={() => remove()}>Delete</button>
              <button onClick={() => edit()}>Update</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ShowItem