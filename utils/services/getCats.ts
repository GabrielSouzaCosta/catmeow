import axios from 'axios'

export const getCats = () => {
    return axios.get('https://api.thecatapi.com/v1/images/search?limit=20', {
        headers: {
        'x-api-key': 'live_4hYkZYrHTAbWpEg7S9vKpeXATQU13uY8PXcOrO3xdbL9DLP3wNQ6MtnuEDc4w3tk'
        }
    })
}