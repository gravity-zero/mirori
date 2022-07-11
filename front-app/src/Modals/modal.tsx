import React from 'react';
import QRCode from "react-qr-code";
import { ModalContainer } from './styledModal';


export interface IModalProps {
  setOpenModal: (value: boolean) => void;
}

const Modal: React.FC<IModalProps> = ({
  setOpenModal,


}) => {

  const value = 'http://mirori-app.gravity-zero.fr:3000/exhibitors';

  return (
    <ModalContainer>
      <div>
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={value}
        />
        <button
          onClick={() => {
            setOpenModal(false);
          }}
        >
          <img src="../../assets/icons/cross.svg" alt="" />
        </button>
      </div>
    </ModalContainer>
  );
}

export default Modal;