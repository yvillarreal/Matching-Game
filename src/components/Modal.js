import React from 'react';

const Modal = ({ onConfirm }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Do you want to play again?</h2>
                <button onClick={onConfirm}>Yes</button>
            </div>
        </div>
    );
};

export default Modal;
