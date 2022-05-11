import PropTypes from 'prop-types';

import { Button } from '../button';
import styles from './form.module.css';

export const Form = (props) => {
  const {
    onChange,
    onSubmit,
    values,
    errors,
    isValid
  } = props;

  return (
    <form
      name="prompt-form"
      values={values}
      onSubmit={onSubmit}
    >
      <fieldset className={styles.fieldset}>
        <textarea
          className={styles.input}
          id="prompt-input"
          name="prompt-input"
          placeholder="Start typing here"
          required
          onChange={onChange}
        />
        <span className={styles.error}>
          {errors['prompt-input'] && errors['prompt-input']}
        </span>
        <div className={styles.submitGroup}>
          <Button
            type="submit"
            text="Submit"
            disabled={!isValid}
          />
        </div>
      </fieldset>
    </form>
  );
};

Form.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  values: PropTypes.object,
  errors: PropTypes.object,
  isValid: PropTypes.bool
};
