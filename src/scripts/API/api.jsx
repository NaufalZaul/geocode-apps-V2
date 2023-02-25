const API_URL = 'https://api.bigdatacloud.net/data/reverse-geocode-client';

const API_GET_LOCATION = (LATITUDE, LONGITUDE) => `${API_URL}?latitude=${LATITUDE}&longitude=${LONGITUDE}&localityLanguage=en`;

export default { API_URL, API_GET_LOCATION };