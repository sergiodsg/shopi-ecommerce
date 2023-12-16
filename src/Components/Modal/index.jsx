import ReactDOM from 'react-dom';
import './styles.css';

export default function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className='modal-container'>
      {children}
    </div>,
    document.getElementById('modal')
  )
}