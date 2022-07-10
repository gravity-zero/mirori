import React, { useState } from 'react';
import Modal from '../../Modals/modal'

export interface ISubscriptionProps { }

const Subscription: React.FC<ISubscriptionProps> = ({

}) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open
      </button>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
}

export default Subscription;
