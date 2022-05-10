import PropTypes from 'prop-types';

import styles from './button.module.css';

export const Button = (props) => {
  const {
    text,
    type = 'button',
    disabled,
    ...restButtonProps
  } = props;

  return (
    <button
      className={styles.button}
      type={type}
      disabled={disabled}
      {...restButtonProps}
    >
      <span>{text}</span>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool
};
