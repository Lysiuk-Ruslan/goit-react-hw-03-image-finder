import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '36300452-4590dd474cc03ced678ba158f';

export const fetchPhotos = async (query, page) => {
    const response = await axios.get(`?`, {
        params: {
            q: query,
            page: page,
            key: KEY,
            image_type: 'photo',
            orientation: 'horizontal',
            per_page: 12,
        }
    })
    return response.data;
}
