import React from 'react';

export interface ISheetProps {
  image?: string;
  description?: string;
  phone?: string;
  email?: string
  setOpenModal: (value: boolean) => void;
}

const Sheet: React.FC<ISheetProps> = ({
  image,
  description,
  phone,
  email,
  setOpenModal,
}) => {

  return (

    <div>
      <h1>Hello</h1>
      <img src={image} alt="" />
      <p>
        {description}
      </p>
      <div>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
      <button
        onClick={() => {
          setOpenModal(false);
        }}
      >
        <img src="/assets/icons/cross.svg" alt="" />
      </button>
    </div>
  );
}

export default Sheet;