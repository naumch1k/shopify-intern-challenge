import { Button } from '../button';
import styles from './form.module.css';

export const Form = () => {
  return (
    <form
      name="prompt-form"
    >
      <fieldset className={styles.fieldset}>
        <textarea
          className={styles.input}
          id="prompt-input"
          name="prompt-input"
          placeholder="Start typing here"
          required
        />
        <div className={styles.submitGroup}>
          <Button
            type="submit"
            text="Submit"
            disabled
          />
        </div>
      </fieldset>
    </form>
  );
};
