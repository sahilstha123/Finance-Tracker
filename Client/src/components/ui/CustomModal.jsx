
import Modal from 'react-bootstrap/Modal';
import { useUserContext } from '../../context/userContext';

export const CustomModal = ({ children, size = "md", centered = true }) => {
  const { show, toggleModal } = useUserContext()
  return (
    <>
      <Modal
        show={show}
        onHide={() => toggleModal(false)}
        backdrop="static"
        keyboard={false}
        centered={centered}
        size={size}
        className="custom-modal"
      >
        <Modal.Header closeButton className="border-0 pb-0">
        </Modal.Header>
        <Modal.Body className="pt-0">
          {children}
        </Modal.Body>
      </Modal>
    </>
  );
}
