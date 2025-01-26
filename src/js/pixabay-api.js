export const fetchPhotoByQuery = searchQuery => {
  const searchParams = new URLSearchParams({
    key: '48275736-0f4ea71af3074d68213ba754e',
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
  });

  return fetch(`https://pixabay.com/api/?${searchParams}`)
  .then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
};
