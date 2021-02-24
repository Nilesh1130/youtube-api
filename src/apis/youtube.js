import axios from 'axios'
export const KEY = 'AIzaSyAPskEpsLqseB3wc_vlG8vNhc8DDN15Iis'

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
