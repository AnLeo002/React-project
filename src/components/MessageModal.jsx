import "./css/MessageModal.css";
import ReactDOM from "react-dom";
export default function MessageModal({ isOpen, message, onClose,error }) {
  if (!isOpen) return null; 
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-card">
        <h2 className="modal-title">{error ? "Error" : "Bienvenido"}</h2>
        <p className="modal-message">{message}</p>
        <button className="modal-button" onClick={onClose}>
          Aceptar
        </button>
      </div>
    </div>,
    document.body
  );
}
