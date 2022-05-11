import PropTypes from 'prop-types';

import { SectionTitle } from '../section-title';
import { Form } from '../form';
import styles from './prompt-form.module.css';

import useFormWithValidation from '../../hooks/useFormWithValidation';

export const PromptForm = ({ onPrompt }) => {
  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
  } = useFormWithValidation({});

  const handleSubmit = (e) => {
    e.preventDefault();
    onPrompt();

    /* TODO: reset form on 200 response only */
    resetForm();
  };

  return (
    <section className={styles.root}>
      <SectionTitle
        text="Enter your prompt"
      />
      <Form
        onSubmit={handleSubmit}
        onChange={handleChange}
        values={values}
        errors={errors}
        isValid={isValid}
      />
    </section>
  );
};

PromptForm.propTypes = {
  onPrompt: PropTypes.func
};
