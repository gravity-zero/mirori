import React, { ReactNode, useState } from 'react';

interface IModalProp {
  children?: ReactNode
  onClick?: any;
  isOpen: boolean
}

export const Modal: React.FC<IModalProp> = ({
  onClick,
  children,
  isOpen
}) => {

  return (
    <div onClick={onClick}>
      <div></div>
      {isOpen}
      {children}
    </div>
  );
}

export default Modal;