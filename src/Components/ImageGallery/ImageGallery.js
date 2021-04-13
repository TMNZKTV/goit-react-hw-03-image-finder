import React from 'react';

//Components
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

//Styles
import styles from '../ImageGallery/ImageGallery.module.css';

//PropTypes
import PropTypes from 'prop-types';

const ImageGallery = ({ pictures, handleClickImage }) => {
    return (
        <>
            <ul className={styles.ImageGallery}>
                {pictures.map(picture => (
                    <ImageGalleryItem
                        tags={picture.tags}
                        src={picture.webformatURL}
                        key={picture.id}
                        largeImageURL={picture.largeImageURL}
                        handleClickImage={handleClickImage}
                    />
                ))}
            </ul>
        </>
    );
};

ImageGallery.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.object),
    handleClickImage: PropTypes.func,
};
export default ImageGallery;
