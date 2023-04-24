import React, { useEffect } from "react";
import styled from "@emotion/styled";


const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
position: relative;
background-color: white;
border-radius: 10px;
padding: 20px;
width: 90%;
height: 90%;
max-width: 1000px;
max-height: 600px;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 20px;
overflow-y: auto;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

type ModalProps = {
    onClose: () => void;
    children: React.ReactNode;
    selectedWork?:[];
  };


const Modal = ({ onClose, children, selectedWork }: ModalProps) => {
  useEffect(() => {
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", onEscape);

    return () => {
      document.removeEventListener("keydown", onEscape);
    };
  }, [onClose]);

  return (
    <ModalContainer>
      <ModalContent>
        <ModalCloseButton onClick={onClose}>X</ModalCloseButton>
        {children}
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
