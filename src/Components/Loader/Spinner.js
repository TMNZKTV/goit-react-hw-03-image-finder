import React from 'react';
import Loader from 'react-loader-spinner';
import styles from '../Loader/Loader.module.css';

const Spinner = () => {
    return (
        <div className={styles.Loader__container}>
            <Loader type="Puff" color="#00BFFF" height={400} width={200} />
        </div>
    );
};

export default Spinner;
