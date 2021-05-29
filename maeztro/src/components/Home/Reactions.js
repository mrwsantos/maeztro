import React from 'react';
import styles from './Reactions.module.css';

const Reactions = () => {
  const [heart, setHeart] = React.useState(0);
  const [thumbsUp, setThumbsup] = React.useState(0);
  const [thumbsDown, setThumbsDown] = React.useState(0);
  const [brain, setBrain] = React.useState(0);
  const [pray, setPray] = React.useState(0);

  function handleClick({ target }) {
    target.parentNode.parentNode.classList.add('active');
    var alvo = target.parentNode.getAttribute('value');

    switch (alvo) {
      case 'heart':
        setHeart(heart + 1);
        break;
      case 'thumbsUp':
        setThumbsup(thumbsUp + 1);
        break;
      case 'thumbsDown':
        setThumbsDown(thumbsDown + 1);
        break;
      case 'brain':
        setBrain(brain + 1);
        break;
      case 'pray':
        setPray(pray + 1);
        break;
      default:
        break;
    }
  }

  return (
    <div className={`${styles.reactions} reactions`}>
      <div value="heart">
        <i onClick={handleClick}>❤️</i>
        <span className="number">{heart > 0 && heart}</span>
      </div>
      <div value="thumbsUp">
        <i onClick={handleClick}>👍</i>
        <span className="number">{thumbsUp > 0 && thumbsUp}</span>
      </div>
      <div value="thumbsDown">
        <i onClick={handleClick}>👎</i>
        <span className="number">{thumbsDown > 0 && thumbsDown}</span>
      </div>
      <div value="brain">
        <i onClick={handleClick}>🧠</i>
        <span className="number">{brain > 0 && brain}</span>
      </div>
      <div value="pray">
        <i onClick={handleClick}>🙏</i>
        <span className="number">{pray > 0 && pray}</span>
      </div>
    </div>
  );
};

export default Reactions;
