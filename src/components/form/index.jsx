import { Button } from '../button';
import styles from './form.module.css';
import useFormWithValidation from '../../hooks/useFormWithValidation';

export const Form = () => {
  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
  } = useFormWithValidation({});

  const handleSubmit = (e) => {
    e.preventDefault();
    resetForm();
    // eslint-disable-next-line no-console
    console.log('handleSubmit');
  };

  return (
    <form
      name="prompt-form"
      values={values}
      onSubmit={handleSubmit}
    >
      <fieldset className={styles.fieldset}>
        <textarea
          className={styles.input}
          id="prompt-input"
          name="prompt-input"
          placeholder="Start typing here"
          required
          onChange={handleChange}
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
