
import { createPortal } from "react-dom";
import { StyledBackdrop } from "./StyledModal.styled";
import { useEffect } from "react";

const modalRoot = document.querySelector("#root-modal") as HTMLDivElement;

interface ModalType {
    toggleModal: (value: boolean) => void,
}

const Modal = ({toggleModal}: ModalType) => {

    useEffect(()=>{
        const handleKeyDown = (e: KeyboardEvent) => {
          if (e.code === 'Escape') {
            toggleModal(false);
          }
        };
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        }
      }, [toggleModal]);
    
    
      const backdropClick = (e: any) => {
        if (e.currentTarget === e.target) {
          toggleModal(false);
        }
      };

  return createPortal(
    <StyledBackdrop onClick={backdropClick}>
 
    </StyledBackdrop>,
    modalRoot
  );
};

export default Modal