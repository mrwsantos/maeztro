import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Curso.module.css';

const Curso = () => {
  const { nomeCurso } = useParams();
  const [curso, setCurso] = React.useState([]);

  React.useEffect(() => {
    setCurso(nomeCurso);
  }, [nomeCurso]);

  return (
    <section className={styles.curso}>
      <h2 className={styles.nomeCurso}>{nomeCurso}</h2>

      <div className={styles.conteudoCurso}>
        <h1>
          <img
            alt="course"
            src="https://miro.medium.com/max/13218/1*2nxUJqo-yYiubOxS1oUw2A.png"
          />{' '}
          Curso VTEXIO
        </h1>

        <p>
          <strong>Curso VTEXIO</strong> was the spaceflight that landed the
          first humans, Americans{' '}
          <a href="http://en.wikipedia.org/wiki/Neil_Armstrong">
            Neil Armstrong
          </a>{' '}
          and <a href="http://en.wikipedia.org/wiki/Buzz_Aldrin">Buzz Aldrin</a>
          , on the Moon on July 20, 1969, at 20:18 UTC. Armstrong became the
          first to step onto the lunar surface 6 hours later on July 21 at 02:56
          UTC.
        </p>

        <p>
          Armstrong spent about <s>three and a half</s> two and a half hours
          outside the spacecraft, Aldrin slightly less; and together they
          collected 47.5 pounds (21.5&nbsp;kg) of lunar material for return to
          Earth. A third member of the mission,{' '}
          <a href="http://en.wikipedia.org/wiki/Michael_Collins_(astronaut)">
            Michael Collins
          </a>
          , piloted the{' '}
          <a href="http://en.wikipedia.org/wiki/Apollo_Command/Service_Module">
            command
          </a>{' '}
          spacecraft alone in lunar orbit until Armstrong and Aldrin returned to
          it for the trip back to Earth.
        </p>

        <h2>
          Broadcasting and <em>quotes</em> <a id="quotes" name="quotes"></a>
        </h2>

        <p>
          Broadcast on live TV to a world-wide audience, Armstrong stepped onto
          the lunar surface and described the event as:
        </p>

        <blockquote>
          <p>One small step for [a] man, one giant leap for mankind.</p>
        </blockquote>

        <p>
          Apollo 11 effectively ended the{' '}
          <a href="http://en.wikipedia.org/wiki/Space_Race">Space Race</a> and
          fulfilled a national goal proposed in 1961 by the late U.S. President{' '}
          <a href="http://en.wikipedia.org/wiki/John_F._Kennedy">
            John F. Kennedy
          </a>{' '}
          in a speech before the United States Congress:
        </p>

        <blockquote>
          <p>
            [...] before this decade is out, of landing a man on the Moon and
            returning him safely to the Earth.
          </p>
        </blockquote>

        <h2>
          Technical details <a id="tech-details" name="tech-details"></a>
        </h2>

        <table>
          <caption>
            <strong>Mission crew</strong>
          </caption>
          <thead>
            <tr>
              <th>Position</th>
              <th>Astronaut</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Commander</td>
              <td>Neil A. Armstrong</td>
            </tr>
            <tr>
              <td>Command Module Pilot</td>
              <td>Michael Collins</td>
            </tr>
            <tr>
              <td>Lunar Module Pilot</td>
              <td>Edwin &quot;Buzz&quot; E. Aldrin, Jr.</td>
            </tr>
          </tbody>
        </table>

        <p>
          Launched by a <strong>Saturn V</strong> rocket from{' '}
          <a href="http://en.wikipedia.org/wiki/Kennedy_Space_Center">
            Kennedy Space Center
          </a>{' '}
          in Merritt Island, Florida on July 16, Apollo 11 was the fifth manned
          mission of <a href="http://en.wikipedia.org/wiki/NASA">NASA</a>&#39;s
          Apollo program. The Apollo spacecraft had three parts:
        </p>

        <ol>
          <li>
            <strong>Command Module</strong> with a cabin for the three
            astronauts which was the only part which landed back on Earth
          </li>
          <li>
            <strong>Service Module</strong> which supported the Command Module
            with propulsion, electrical power, oxygen and water
          </li>
          <li>
            <strong>Lunar Module</strong> for landing on the Moon.
          </li>
        </ol>

        <p>
          After being sent to the Moon by the Saturn V&#39;s upper stage, the
          astronauts separated the spacecraft from it and travelled for three
          days until they entered into lunar orbit. Armstrong and Aldrin then
          moved into the Lunar Module and landed in the{' '}
          <a href="http://en.wikipedia.org/wiki/Mare_Tranquillitatis">
            Sea of Tranquility
          </a>
          . They stayed a total of about 21 and a half hours on the lunar
          surface. After lifting off in the upper part of the Lunar Module and
          rejoining Collins in the Command Module, they returned to Earth and
          landed in the{' '}
          <a href="http://en.wikipedia.org/wiki/Pacific_Ocean">Pacific Ocean</a>{' '}
          on July 24.
        </p>

        <hr />
        <p>
          <small>
            Source:{' '}
            <a href="http://en.wikipedia.org/wiki/Apollo_11">Wikipedia.org</a>
          </small>
        </p>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/8ns92UZkyZ8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
};

export default Curso;
