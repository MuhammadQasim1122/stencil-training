import axios from 'axios';


const instance = axios.create({
  baseURL: `/`,
  responseType: 'json'
});

instance.interceptors.request.use(async config => {
  const { baseURL, url } = config;
  console.log('URL :=> ', baseURL, url);

  return config;
});

instance.interceptors.response.use(
  // response should describe like interface
  (response: any) => {
    if (response.success || (response.status && response.status === 200)) {
      if (response.results) {
        return response.results;
      } else if (response.data) {
        return response.data;
      } else if (!response.results && !response.data) {
        if (response.message) {
          throw new Error(response.data.message);
        } else {
          throw new Error(`No results or data object for ${response.config.url}`);
        }
      }
    } else if (!response.success && response.results) {
      return response.results;
    } else {
      return response.data.results;
    }
  },
  error => {
    let message = 'Something went wrong. Please try again later.';
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error(
        `Status: ${error.response.status}`,
        `\nUrl: ${error.response.config.baseURL}/${error.response.config.url}`,
        `\nMessage: ${error.message}`,
        `\nData: ${JSON.stringify(error.response.data)}`
      );
      if (error.response.data) {
        message = error.response.data.message || message;
      }
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.error(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error', error.message);
      message = error.message;
    }
    throw new Error(message);
  }
);

export default instance;