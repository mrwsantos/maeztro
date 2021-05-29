import React from 'react';
import Button from '../Form/Button';
import Modal from 'react-modal';

import stylesModal from './modal.module.css';
import InputPergunta from './InputPergunta';

Modal.setAppElement('#root');
const FazerPergunta = ({ getFaqs }) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setModalIsOpen(true)}>Perguntar</Button>
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
          <InputPergunta
            placeholder="Escreva todas suas mágoas! Mas por gentileza, seja direto. Se vc perceber que preencheu até tocar a borda inferior do quadro, saiba que está indo longe de mais :c"
            getFaqs={getFaqs}
          />

          <div className={stylesModal.selection}>
            <p>Selecione a prioridade</p>
            <select>
              <option selected="selected">normal</option>
              <option>alta</option>
            </select>
          </div>
        </form>
        <Button
          onClick={() => setModalIsOpen(false)}
          classAdded={stylesModal.close}
          id="modal-close"
        >
          ✕
        </Button>
      </Modal>
    </>
  );
};

export default FazerPergunta;
