import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { CloseButton } from '../close-button';
import styles from './popup.module.css';

const cn = classNames.bind(styles);

export const Popup = (props) => {
  const {
    isOpen,
    message,
    onClose,
  } = props;

  return (
    <div className={cn('root', isOpen && 'opened')}>
      <div className={styles.container}>
        <p className={styles.message}>
          {message}
        </p>
        <CloseButton
          ariaLabel="Close popup"
          onClose={onClose}
        />
      </div>
    </div>
  );
};

Popup.propTypes = {
  isOpen: PropTypes.bool,
  message: PropTypes.string,
  onClose: PropTypes.func
};
