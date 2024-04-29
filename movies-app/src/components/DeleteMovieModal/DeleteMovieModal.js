import { Portal } from "react-portal";
import { FocusTrap } from 'focus-trap-react';
import './DeleteMovieModal.css'
import close from '../../assets/svg/close.svg';

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
                                <img src={close} alt="Close Icon" />
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="action-content">
                                <p>Are you sure you want to delete this movie?</p>
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