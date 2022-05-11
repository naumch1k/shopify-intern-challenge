import PropTypes from 'prop-types';

import { SectionTitle } from '../section-title';
import { Card } from '../card/card';
import { isEmptyArray } from '../../shared/helpers/is-empty-array';
import styles from './prompt-result.module.css';

export const PromptResult = ({ cards }) => {
  return (
    <section className={styles.root}>
      <SectionTitle
        text="responses"
      />
      {!isEmptyArray(cards)
        ? <ul className={styles.list}>
          {cards.map((card) => (
            <Card
              key={card.id}
              data={card}
            />
          ))}
        </ul>
        : <p className={styles.message}>No prior searches yet</p>
      }
    </section>
  );
};

PromptResult.propTypes = {
  cards: PropTypes.array
};

