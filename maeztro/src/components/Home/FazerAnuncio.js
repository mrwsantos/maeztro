import React from 'react';
import Button from '../Form/Button';
import InputAnuncio from './InputAnuncio';
import Modal from 'react-modal';
import stylesModal from './HomeModal.module.css';

Modal.setAppElement('#root');
const FazerAnuncio = ({ getAnnouncements }) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  return (
    <>
      <Button
        onClick={function () {
          setModalIsOpen(true);
          document
            .querySelector('body')
            .setAttribute('style', 'overflow: hidden');
        }}
        style={{ marginRight: '1rem' }}
      >
        Escrever
      </Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className={stylesModal.modal}
        style={{
          overlay: {
            backdropFilter: 'blur(5px)',
            backgroundColor: 'rgba(0,0,0, 0.3)'
          },
          content: {
            padding: '1rem'
          }
        }}
      >
        <h2>Qualé, solta a voz pacero!</h2>
        <form className={stylesModal.formPergunta} id="formPergunta">
          <InputAnuncio placeholder="" getAnnouncements={getAnnouncements} />

          <div className={stylesModal.category}>
            <p>Categoria</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <select className="category">
                <option selected="selected">geral</option>
                <option>novidades</option>
                <option>urgente</option>
              </select>
              <Button>+</Button>
            </div>
          </div>
          <div className={stylesModal.selection}>
            <p>Prioridade</p>
            <select className="prior">
              <option selected="selected">normal</option>
              <option>alta</option>
            </select>
          </div>
        </form>
        <Button
          onClick={function () {
            setModalIsOpen(false);
            document.querySelector('body').setAttribute('style', '');
          }}
          classAdded={stylesModal.close}
          id="modal-close"
        >
          ✕
        </Button>
      </Modal>
    </>
  );
};
export default FazerAnuncio;
