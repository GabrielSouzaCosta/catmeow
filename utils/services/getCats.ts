import axios from 'axios'
import blurDataImage from './blurDataImage';

export const getCats = async () => {
    return await axios.get('https://api.thecatapi.com/v1/images/search?limit=20', {
        headers: {
        'x-api-key': 'live_4hYkZYrHTAbWpEg7S9vKpeXATQU13uY8PXcOrO3xdbL9DLP3wNQ6MtnuEDc4w3tk'
        }
    }).then(res => {
        return blurDataImage(res);
    })
}