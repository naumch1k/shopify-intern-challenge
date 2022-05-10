import { SectionTitle } from '../section-title';
import { Form } from '../form';
import styles from './prompt-form.module.css';

export const PromptForm = () => {
  return (
    <section className={styles.root}>
      <SectionTitle
        text="Enter your prompt"
      />
      <Form/>
    </section>
  );
};

