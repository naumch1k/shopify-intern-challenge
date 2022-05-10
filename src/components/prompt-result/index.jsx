import PropTypes from 'prop-types';

import { SectionTitle } from '../section-title';
import styles from './prompt-result.module.css';

export const PromptResult = ({ data }) => {
  return (
    <section className={styles.root}>
      <SectionTitle
        text="responses"
      />
      {data
        ? <p>data!</p>
        : <p className={styles.message}>No prior searches yet</p>
      }
    </section>
  );
};

PromptResult.propTypes = {
  data: PropTypes.array
};

