import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { ModalContext } from '../../context/ModalContext'
import { deleteProduct } from '../../slices/getPoducts'

const DeleteProduct = ({ id, product }) => {
  const dispatch = useDispatch()
  const { handleModal } = React.useContext(ModalContext)
  const handleDelete = () => {
    dispatch(deleteProduct({ id }))
    handleModal()
  }
  return (
    <div>
      <h4>Do you want delete: <b>{product.name}</b>?</h4>
      <button type="submit" className="btn btn-primary" onClick={handleDelete}>
        Delete
      </button>
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
        Close
      </button>
    </div>
  )
}
DeleteProduct.propTypes = {
  id: PropTypes.number,
    product:PropTypes.object
}


export default DeleteProduct
