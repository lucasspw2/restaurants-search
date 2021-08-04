import React, { useEffect } from 'react';
import Portal from './Portal';
import { Overlay, Dialog } from './styles';

export default function Modal({ children, open, onClose }) {
  useEffect(() => {
    function onEsc(e) {
      if (e.keyCode === 27) onClose(); // funcao p/ fechar modal com a tecla esc
    }
    window.addEventListener('keydown', onEsc);

    return () => {
      window.removeEventListener('keydown', onEsc);
    };
  }, [onClose]);

  if (!open) return null;

  function onOverlayClick() {
    // funcao p/ fechar modal se clicar fora da div
    onClose();
  }

  function onDialogClick(e) {
    e.stopPropagation(); // funcao p/ nao fechar a modal se clicar dentro do conteudo
  }

  return (
    <Portal>
      <Overlay onClick={onOverlayClick}>
        <Dialog onClick={onDialogClick}>{children}</Dialog>
      </Overlay>
    </Portal>
  );
}
