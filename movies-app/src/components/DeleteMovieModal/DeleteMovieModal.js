import { Portal } from "react-portal";
import { FocusTrap } from 'focus-trap-react';
import './DeleteMovieModal.css'

const DeleteMovieModal = ({ isModalOpen, movieInfo, onClose }) => {
    const onModalClose = () => onClose(false);
    const handleDelete = () => {
        console.log(`Movie Deleted with id ${movieInfo.id || ''}`);
        onModalClose();
    }
    return (
        isModalOpen && <Portal>
            <div className={`modal fade ${isModalOpen ? 'show' : ''}`} id="exampleDeleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: isModalOpen ? 'block' : 'none' }}>
                <div className="modal-dialog modal-dialog-centered modal-lg dark-modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Delete Movie</h1>
                            <button type="button" className="btn-close" onClick={onModalClose} data-bs-dismiss="modal" aria-label="Close">
                                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'>
                                    <path fill="#FFF" d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z' />
                                </svg>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="action-content">
                                <p>Are you sure you want to delete this movie</p>
                            </div>

                            <div className="d-flex justify-content-end">
                                <button type="button" onClick={handleDelete} className="btn btn-primary">
                                    Confirm
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    )
}

export default DeleteMovieModal;