import ReactDOM from 'react-dom';

// funcao p/inserir components na div criada no index.html
export default function PortalModal({ children }) {
  const portal = document.getElementById('modal-root');
  return ReactDOM.createPortal(children, portal);
}
