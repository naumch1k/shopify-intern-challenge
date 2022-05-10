import PropTypes from 'prop-types';

import { SectionTitle } from '../section-title';
import { Card } from '../card/card';
import styles from './prompt-result.module.css';

export const PromptResult = ({ data }) => {
  return (
    <section className={styles.root}>
      <SectionTitle
        text="responses"
      />
      {data
        ? <ul className={styles.list}>
          {data.map((item) => (
            <Card
              key={item.id}
              data={item}
            />
          ))}
        </ul>
        : <p className={styles.message}>No prior searches yet</p>
      }
    </section>
  );
};

PromptResult.propTypes = {
  data: PropTypes.array
};

