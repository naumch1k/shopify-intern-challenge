import PropTypes from 'prop-types';

import { SectionTitle } from '../section-title';
import { Card } from '../card/card';
import { isEmptyArray } from '../../shared/helpers/is-empty-array';
import styles from './search-result-section.module.css';

export const SearchResultSection = (props) => {
  const {
    cards,
    onClearList,
  } = props;

  return (
    <section className={styles.root}>
      <SectionTitle
        text="responses"
      />
      {!isEmptyArray(cards)
        ? <>
          <ul className={styles.list}>
            {cards.map((card) => (
              <Card
                key={card.id}
                data={card}
              />
            ))}
          </ul>
          <button
            className={styles.clearButton}
            onClick={onClearList}
            type="button"
          >
            Clear list
          </button>
        </>

        : <p className={styles.message}>No prior searches yet</p>
      }
    </section>
  );
};

SearchResultSection.propTypes = {
  cards: PropTypes.array,
  onClearList: PropTypes.func
};

