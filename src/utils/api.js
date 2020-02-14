import axios from 'axios';

const URL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/'

const api = axios.create({
    baseURL: URL,
    timeout: 30000,
    headers: {
        Authorization: 'Bearer 3fOrwJMwKIC-DQvO3FRnptUV7n5FFYXrdwfv7gNkOuwa0zTQy6N2PcYsMAR_a14AuHlNWAtxU8d3QZ9HspeADA58aNbMDGa9qHK-_917hcuoJfxVNahHuSyvkT5EXnYx',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export default api;