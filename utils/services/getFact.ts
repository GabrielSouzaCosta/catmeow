import axios from "axios";

export function getFact() {
    return axios.get('https://catfact.ninja/fact')
}