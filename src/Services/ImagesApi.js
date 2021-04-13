import axios from 'axios';

const fetchImages = ({ searchQuery, currentPage, perPage = 8 }) => {
    return axios
        .get(
            `https://pixabay.com/api/?key=20317342-a65a0e490607ec4c6c667e05c&q=${searchQuery}&per_page=${perPage}&page=${currentPage}`,
        )
        .then(response => response.data.hits);
};

export default { fetchImages };
