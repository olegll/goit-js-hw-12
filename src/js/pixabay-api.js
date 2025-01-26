import axios from 'axios';



export const fetchPhotoByQuery = (searchQuery, currentPage) => {
  
  const axiosOptions = {
    params: {
    key: '48275736-0f4ea71af3074d68213ba754e',
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: currentPage,
    },
  };
  return axios.get(`https://pixabay.com/api/`, axiosOptions);
  
};
