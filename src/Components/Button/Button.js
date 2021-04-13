import React from 'react';

//Styles
import styles from '../Button/Button.module.css';

// PropTypes
import PropTypes from 'prop-types';

const Button = ({ title, onClick }) => {
    return (
        <div className={styles.Button__container}>
            <button type="button" onClick={onClick} className={styles.Button}>
                {title}
            </button>
        </div>
    );
};

Button.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

export default Button;
