import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import ProductItem from '../../Components/ProductItem/ProductItem';
import { getProductThunk } from '../../slices/getPoducts';

const ProductsList = () => {
  const dispatch = useDispatch()
  const { products } = useSelector((state) => state.getPoducts)

  useEffect(() => {
    dispatch(getProductThunk())
  }, [])
    return (
      <div className="list-group">
        {products.map((product) => (
          <li key={product.id} className="list-group-item d-flex  justify-content-center">
            <ProductItem product={product} />
          </li>
        ))}
      </div>
    )
};

export default ProductsList;