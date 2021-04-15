// Libraries
import React, { Component } from 'react';

// Components
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Button from './Components/Button/Button';
import ImagesApi from './Services/ImagesApi';
import Spinner from './Components/Loader/Spinner';
import Modal from './Components/Modal/Modal';

// Styles
import '../src/styles.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class App extends Component {
    state = {
        pictures: [],
        currentPage: 1,
        searchQuery: '',
        isLoading: false,
        showModal: false,
        largeImg: '',
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchQuery !== this.state.searchQuery) {
            this.fetchImages();
        }
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    }
    onChangeQuery = query => {
        this.setState({ searchQuery: query, currentPage: 1, pictures: [] });
    };

    fetchImages = () => {
        const { currentPage, searchQuery } = this.state;

        this.setState({ isLoading: true });

        const options = {
            searchQuery,
            currentPage,
        };

        ImagesApi.fetchImages(options)
            .then(images => {
                this.setState(prevState => ({
                    pictures: [...prevState.pictures, ...images],
                    currentPage: prevState.currentPage + 1,
                }));
            })
            .catch(error => this.setState({ error }))
            .finally(() => this.setState({ isLoading: false }));
    };

    toggleModal = event => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }));
    };

    handleImageClick = url => {
        this.setState({ largeImg: url });
        this.toggleModal();
    };

    render() {
        const { pictures, isLoading, showModal, largeImg } = this.state;

        return (
            <>
                <Searchbar onSubmit={this.onChangeQuery} />

                {showModal && (
                    <Modal onClose={this.toggleModal} largeImg={largeImg} />
                )}

                <ImageGallery
                    pictures={pictures}
                    handleClickImage={this.handleImageClick}
                />

                {isLoading && <Spinner />}

                {pictures.length > 0 && (
                    <Button title="Load more" onClick={this.fetchImages} />
                )}
            </>
        );
    }
}

export default App;
