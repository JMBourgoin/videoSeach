import axios from 'axios';
const KEY = 'AIzaSyAaUD9bXIb85 - 6Z-YFDZDXMQQcLZUXbVBQ';

export default axios.create({
    baseURL: 'https://googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});