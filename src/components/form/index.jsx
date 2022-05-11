import PropTypes from 'prop-types';

import { Button } from '../button';
import styles from './form.module.css';

export const Form = (props) => {
  const {
    submitButtonText,
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
          id="prompt"
          name="prompt"
          placeholder="Start typing here"
          required
          onChange={onChange}
          value={values['prompt']}
        />
        <span className={styles.error}>
          {errors['prompt'] && errors['prompt']}
        </span>
        <div className={styles.submitGroup}>
          <Button
            type="submit"
            text={submitButtonText}
            disabled={!isValid}
          />
        </div>
      </fieldset>
    </form>
  );
};

Form.propTypes = {
  submitButtonText: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  values: PropTypes.object,
  errors: PropTypes.object,
  isValid: PropTypes.bool
};
