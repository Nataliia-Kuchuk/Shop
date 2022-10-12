import React, {useState} from 'react'
import { ModalContext } from '../../context/ModalContext'
import AddProductForm from '../AddProductForm/AddProductForm'
import {useDispatch} from "react-redux";
import {sortProduct} from "../../slices/getPoducts";

const Header = () => {
    const { handleModal } = React.useContext(ModalContext);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    const handleSort = (type) => {
      dispatch(sortProduct(type))
    }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Inforce-Shop
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav me-auto">
                      <li className="nav-item">
              <button
                type="button"
                className="btn btn-outline-info"
                onClick={() => handleModal(<AddProductForm/>)}>
                Add New Product
              </button>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={() => setOpen(prevState => !prevState)}>
                Sort Product
              </a>
              <div className={open? "dropdown-menu d-block" : "dropdown-menu "}>
                <a className="dropdown-item" href="#" onClick={() => handleSort('A-Z')}>
                  A-Z
                </a>
                <a className="dropdown-item" href="#">
                  Z-A
                </a>
                <a className="dropdown-item" href="#">
                  Min Count
                </a>
                <a className="dropdown-item" href="#">
                  Max Count
                </a>
              </div>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Header
