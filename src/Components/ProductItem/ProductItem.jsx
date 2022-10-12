import React from 'react'
import PropTypes from 'prop-types'
import { ModalContext } from '../../context/ModalContext'
import DeleteProduct from '../DeleteProduct/DeleteProduct'
import './ProductItem.css'
import AddProductForm from '../AddProductForm/AddProductForm'

const ProductItem = ({ product }) => {
  const { handleModal } = React.useContext(ModalContext)
  const { width, height } = product.size

  const handleDeletItem = (id) => {
    handleModal(<DeleteProduct handleModal={handleModal} id={id} />)
    }
    const handleEditItem = (id) => {
        handleModal(<AddProductForm product={product} id={id} />)
    }
  return (
    <>
      <div className="card mb-3 w-20">
        <h3 className="card-header">{product.name}</h3>
        <div className="card-body">
          <h5 className="card-title">Count: {product.count}</h5>
          <h6 className="card-subtitle text-muted">Support card subtitle</h6>
        </div>
        <img className="img-product" src={product.imgUrl} alt="product-img" />
        <div className="card-body">
          <h5>Coments</h5>
          {product.coments.map((item) => (
            <p className="card-text" key={item.id}>
              {item.description}
            </p>
          ))}
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Weight: {product.weight}</li>
          <li className="list-group-item">Width: {width}</li>
          <li className="list-group-item">Height: {height}</li>
        </ul>
        <div className="card-body">
          <button
            type="button"
            className="btn btn-outline-info"
            onClick={() => handleEditItem(product.id)}>
            Edit
          </button>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={() => handleDeletItem(product.id)}>
            Danger
          </button>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>
    </>
  )
}
ProductItem.propTypes = {
  product: PropTypes.object
}
ProductItem.defaultProps = {
  product: {}
}

export default ProductItem
