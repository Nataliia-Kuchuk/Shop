import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { ModalContext } from '../../context/ModalContext'
import { deleteProduct } from '../../slices/getPoducts'

const DeleteProduct = ({ id }) => {
  const dispatch = useDispatch()
  const { handleModal } = React.useContext(ModalContext)
  const handleDelete = () => {
    dispatch(deleteProduct({ id }))
    handleModal()
  }
  return (
    <div>
      <h1>Do you want delete this product?</h1>
      <button type="submit" className="btn btn-primary" onClick={handleDelete}>
        Save changes
      </button>
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
        Close
      </button>
    </div>
  )
}
DeleteProduct.propTypes = {
  id: PropTypes.number
}


export default DeleteProduct
