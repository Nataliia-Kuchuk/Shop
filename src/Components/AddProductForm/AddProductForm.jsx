import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { addNewProduct, editProduct } from '../../slices/getPoducts'

const AddProductForm = ({ product, id }) => {
    const [inputValue, setInputValue] = useState({
        name: product?.name || '',
        count: product?.count || '',
        width: product?.size.width || '',
        height: product?.size.height || '',
        weight: product?.weight || '',
  })
  const dispatch = useDispatch()

  const onHandleChange = (e) => {
    setInputValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  const onHandleSubmit = (e) => {
    e.preventDefault()
      if (product) {
        dispatch(editProduct({id}))
      } else {
          dispatch(addNewProduct(inputValue))
    }
  }
  return (
    <form onSubmit={onHandleSubmit}>
      <div className="form-group column">
        <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
          Product Name
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Book"
            required
            value={inputValue['name']}
            onChange={onHandleChange}
          />
        </div>
      </div>
      <div className="form-group column">
        <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
          Product Photo
        </label>
        <div className="col-sm-10">
          <input type="file" className="form-control" name="photo" placeholder="Book" />
        </div>
      </div>
      <div className="form-group column">
        <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
          Product Count
        </label>
        <div className="col-sm-10">
          <input
            type="number"
            className="form-control"
            name="count"
            placeholder="Book"
            required
            value={inputValue['count']}
            onChange={onHandleChange}
          />
        </div>
      </div>
      <div className="form-group column">
        <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
          Product Width
        </label>
        <div className="col-sm-10">
          <input
            type="number"
            className="form-control"
            name="width"
            placeholder="Book"
            required
            value={inputValue['width']}
            onChange={onHandleChange}
          />
        </div>
      </div>
      <div className="form-group column">
        <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
          Product Height
        </label>
        <div className="col-sm-10">
          <input
            type="number"
            className="form-control"
            name="height"
            placeholder="Book"
            required
            value={inputValue['height']}
            onChange={onHandleChange}
          />
        </div>
      </div>
      <div className="form-group column">
        <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
          Product Weight
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            name="weight"
            placeholder="Book"
            required
            value={inputValue['weight']}
            onChange={onHandleChange}
          />
        </div>
      </div>
      <div className="modal-footer">
        <button type="submit" className="btn btn-primary">
          Save changes
        </button>
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
          Close
        </button>
      </div>
    </form>
  )
}
AddProductForm.propTypes = {
  id: PropTypes.number,
  product: PropTypes.object
}

export default AddProductForm
