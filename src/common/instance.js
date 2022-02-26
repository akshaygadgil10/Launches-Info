import axios from 'axios'

const apiURL = 'https://api.spacexdata.com/v3/';

const instance = axios.create({
baseURL: apiURL
});

export default instance;
export{apiURL};