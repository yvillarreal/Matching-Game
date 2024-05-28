import React from 'react';

const Modal = ({ onConfirm }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>¿Quieres continuar en el juego?</h2>
                <button onClick={() => onConfirm(true)}>Sí</button>
                <button onClick={() => onConfirm(false)}>No</button>
            </div>
        </div>
    );
};

export default Modal;
