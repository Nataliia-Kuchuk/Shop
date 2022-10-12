import React, {useState} from 'react';
import PropTypes from 'prop-types'
import {useDispatch} from "react-redux";
import {addComment} from "../../slices/getPoducts";
import {ModalContext} from "../../context/ModalContext";

const AddComment = ({id}) => {
    const [commentValue, setCommentValue] = useState();
    const { handleModal } = React.useContext(ModalContext)
    const dispatch = useDispatch()
    const handleChange = (e) => {
        const value = e.target.value;
        setCommentValue(value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addComment({id, commentValue}))
        handleModal()

    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="exampleTextarea" className="form-label mt-4" >Example textarea</label>
                <textarea className="form-control"
                          id="exampleTextarea"
                          rows="3"
                          onChange={handleChange}>
                </textarea>
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
    );
};
AddComment.propTypes = {
    id: PropTypes.number,
}

export default AddComment;
