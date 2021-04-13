import React from 'react';

//Styles
import styles from '../ImageGalleryItem/ImageGalleryItem.module.css';

//PropTypes
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ tags, src, largeImageURL, handleClickImage }) => {
    return (
        <li className={styles.ImageGalleryItem}>
            <img
                src={src}
                alt={tags}
                className={styles.ImageGalleryItem__image}
                onClick={() => handleClickImage(largeImageURL)}
            />
        </li>
    );
};

ImageGalleryItem.propTypes = {
    tags: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    handleClickImage: PropTypes.func,
};

export default ImageGalleryItem;
