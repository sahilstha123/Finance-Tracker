
import Modal from 'react-bootstrap/Modal';
import { useUserContext } from '../../context/userContext';

export const CustomModal = ({ children }) => {
  const { show, toggleModal } = useUserContext()
  return (
    <>
     

      <Modal
        show={show}
        onHide={() => toggleModal(false)}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          {children}
        </Modal.Body>

      </Modal>
    </>
  );
}
