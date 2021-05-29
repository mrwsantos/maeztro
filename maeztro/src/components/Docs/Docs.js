import React from 'react';
import styles from './Docs.module.css';
import Filters from '../Filter/Filters';
import Note from '../Note';

import { ReactComponent as Edit } from '../../Assets/icons/icon-editor.svg';
import { ReactComponent as IconExplorer } from '../../Assets/icons/icon-amazing.svg';
import Button from '../Form/Button';
import Input from '../Form/Input';
import { ASIDEDOCS_GET } from '../../Api';

document.querySelectorAll('h3').forEach(function (item) {
  item.nextElementSibling.classList.add('closed');
  item.classList.add('active');
  item.addEventListener('mousedown', function () {
    item.classList.toggle('active');
    item.nextElementSibling.classList.toggle('closed');
  });
});

const Docs = () => {
  const [admin, setAdmin] = React.useState(false);
  const [newNote, setNewNote] = React.useState(false);
  const [asideDocs, setAsideDocs] = React.useState(null);
  const [categoryDoc, setCategoryDoc] = React.useState([]);
  const timeoutRef = React.useRef;
  let doce = ['Smart Cart', 'Smart Quantity', 'Smart Stock', 'CountDown'];

  function addDoc(e) {
    e.preventDefault();
    var categoria =
      e.target.previousSibling.previousSibling.previousSibling.textContent;

    document.querySelector('.doc-content').innerHTML = '';
    setNewNote(true);

    timeoutRef.current = setTimeout(
      () =>
        document
          .querySelector('#newNoteCategory')
          .setAttribute('value', categoria),
      1000
    );
  }

  function smartCart(e) {
    //NAO ESTÁ REATIVO AINDA - CONTEUDO FIXO PARA TESTES
    e.preventDefault();

    let title =
      "<h2 style='padding: 1rem 1rem 0'>Como aplicar o Smart Cart</h2></br>";
    let text =
      "<p style='padding: 1rem'>O Smart Quantity é a funcionalidade que aplica os botões de mais (+) e menos (-) para definir a quantidade a ser adicionada ao carrinho de um produto, tanto na vitrine, quanto na página de produto. \n Maeztra - Documentação para Desenvolvedores - O plugin encontra-se no seguinte repositório: https://bitbucket.org/quatrodigital-lab/qd-quatro-lib-plugins. Para importá-lo na loja utilize o método de importação padrão. Veja mais na página: [Trabalhando com o Gulp](/Processos/trabalhando-gulp)</p></br><p style='padding: 0 3rem'>Existem pelo menos tres tipos de Smart Cart: Tom, Classical, Minimal</p></br><p style='display:flex;flex-direction: column;align-items:center;padding: 3rem'><b style='margin: 10px 0'>Tom</b><img style='max-width: 50%' src='https://mrwsantos.github.io/botomniac.github.io/img/cart-1.png'/><b style='margin: 10px 0'>Classical</b><img style='max-width: 50%' src='https://mrwsantos.github.io/botomniac.github.io/img/cart-2.png'/><b style='margin: 10px 0'>Minimal</b><img style='max-width: 50%' src='https://mrwsantos.github.io/botomniac.github.io/img/cart-3.png'/></p>";

    let conteudo = document.createElement('div');
    conteudo.classList.add('animeScale');
    conteudo.innerHTML = `${title} ${text}`;

    setNewNote(false);
    document.querySelector('.doc-content').appendChild(conteudo);
  }

  function handleSubmit() {
    var a = `${document.querySelector('.ck-content').innerHTML}`;
    console.log(a);
  }

  function handleClear() {
    document.querySelector('.ck-content').innerHTML = '';
  }

  function abreExplorador() {
    document.querySelector('aside').classList.toggle('active');
  }

  async function getAsideDocs() {
    try {
      const { url, options } = ASIDEDOCS_GET();
      const response = await fetch(url, options);
      const json = await response.json();
      setAsideDocs(json);
      for (let i = 0; i < json.length; i++) {
        Object.keys(json[i]).forEach(function eachKey(key) {
          // let splitKey = key.replaceAll(' ', '-');
          setCategoryDoc((categoryDoc) => [...categoryDoc, key]);
        });
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  React.useEffect(() => {
    // Checa se o cara é admir
    let admin = window.localStorage.getItem('userLoggedIn');
    const split = admin.split(',');
    // console.log(split);
    if (split[4] === 'admin') setAdmin(true);
    // Checa se o cara é admir

    //Traz a lista dos documentos
    getAsideDocs();
  }, []);

  return (
    <section className={styles.docs}>
      <div className={styles.fixed}>
        <h2 style={{ paddingTop: '1rem', paddingLeft: '1rem' }}>
          Documentação
        </h2>

        <div
          className={styles.homeActions}
          style={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          <Filters />
          <div className={styles.btnExplorer}>
            <Button onClick={abreExplorador}>
              <IconExplorer />
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.wrapper}>
        <aside className={styles.aside}>
          <h4>Explorador de arquivos</h4>
          {asideDocs && (
            <ul className={styles.grupo}>
              {asideDocs.map((item, index, a) => (
                <li key={item + index}>
                  {categoryDoc && (
                    <>
                      <h3>
                        <div>{categoryDoc[index]}</div>
                        <span className="drop">ᐃ</span>{' '}
                        <a href="#" onClick={addDoc}>
                          +
                        </a>
                      </h3>
                    </>
                  )}
                  <ul>
                    {item.plugins &&
                      item.plugins.map((sub, idx) => (
                        <li key={sub + idx}>
                          <a
                            href="#"
                            className={`item-doc ${styles.itemDoc}`}
                            onClick={smartCart}
                          >
                            {sub}
                            {admin && (
                              <div className={styles.docActions}>
                                <span className="doc-edit" title="editar doc">
                                  <Edit />
                                </span>
                                <span className="doc-remove">❌</span>
                              </div>
                            )}
                          </a>
                        </li>
                      ))}
                    {item.padrões_de_projetos &&
                      item.padrões_de_projetos.map((sub, idx) => (
                        <li key={sub + idx}>
                          <a
                            href="#"
                            className={`item-doc ${styles.itemDoc}`}
                            onClick={smartCart}
                          >
                            {sub}
                            {admin && (
                              <div className={styles.docActions}>
                                <span className="doc-edit" title="editar doc">
                                  <Edit />
                                </span>
                                <span className="doc-remove">❌</span>
                              </div>
                            )}
                          </a>
                        </li>
                      ))}
                    {item.tipos_de_projetos &&
                      item.tipos_de_projetos.map((sub, idx) => (
                        <li key={sub + idx}>
                          <a
                            href="#"
                            className={`item-doc ${styles.itemDoc}`}
                            onClick={smartCart}
                          >
                            {sub}
                            {admin && (
                              <div className={styles.docActions}>
                                <span className="doc-edit" title="editar doc">
                                  <Edit />
                                </span>
                                <span className="doc-remove">❌</span>
                              </div>
                            )}
                          </a>
                        </li>
                      ))}
                    {item.master_data_VTEX &&
                      item.master_data_VTEX.map((sub, idx) => (
                        <li key={sub + idx}>
                          <a
                            href="#"
                            className={`item-doc ${styles.itemDoc}`}
                            onClick={smartCart}
                          >
                            {sub}
                            {admin && (
                              <div className={styles.docActions}>
                                <span className="doc-edit" title="editar doc">
                                  <Edit />
                                </span>
                                <span className="doc-remove">❌</span>
                              </div>
                            )}
                          </a>
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </aside>
        <div className={`${styles.content} doc-content`}>
          {newNote && (
            <>
              <div className={styles.newNoteActions}>
                <Input label="Categoria:" name="newNoteCategory" />
                <Input label="Nome do DOC:" />
              </div>
              <Note />
              <div className={styles.newNoteSave}>
                <Button onClick={handleSubmit}>Salvar</Button>
                <Button onClick={handleClear}>Limpar</Button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Docs;
