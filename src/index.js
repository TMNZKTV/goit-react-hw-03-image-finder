import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Styles
import styles from './App.module.css';

ReactDOM.render(
    <React.StrictMode>
        <App className={styles.App} />
    </React.StrictMode>,
    document.getElementById('root'),
);
