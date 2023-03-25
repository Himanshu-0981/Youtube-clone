import axios from 'axios'

const BASE_URL = "https://youtube138.p.rapidapi.com"
const options = {
    params: { hl: 'en', gl: 'US' },
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_APP_YOUTUBE_API_KEY,
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

export const fetchAPIData = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
}

export const randomUserAPI = async () => {
    // const req = await fetch('https://randomuser.me/api/')
    // return req.json();
    // setRandomUser(res.results[0].picture.thumbnail);
    const { data } = await axios.get('https://randomuser.me/api/')
    return data
}