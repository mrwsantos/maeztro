import React from 'react';
import styles from './Filters.module.css';
import Input from '../Form/Input';
import Button from '../Form/Button';

import { ReactComponent as SearchBtn } from '../../Assets/icons/icon-search.svg';

const Filters = () => {
  function handlePesquisa() {
    let input = document.querySelector('#filterAll');
    let pergunta = document.querySelectorAll('.nota');

    input.addEventListener('keyup', function () {
      let val = this.value.toLowerCase();

      pergunta.forEach(function (res, i, a) {
        var text = res.textContent.toLowerCase();
        var word = text.indexOf('' + val);
        // console.log(word);

        if (word < 0) {
          res.classList.add('hide');
        } else {
          res.classList.remove('hide');
        }
      });
    });
  }

  return (
    <div className={styles.filterWrapper}>
      <Input
        className={styles.filter}
        name="filterAll"
        placeholder="Pesquise por nomes, termos, status, prioridades..."
        onChange={handlePesquisa}
      />
      <Button>
        <SearchBtn />
      </Button>
    </div>
  );
};

export default Filters;
