
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";


/** API Class 
 * 
 * Static class tying togehter methods used to get/send to the backend, and APIs
 * 
 */

class WeatherlyApi {

  static token;

  static async request(endpoint, data = {}, method = "get") {

    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${WeatherlyApi.token}` }
    // if sending get request, set params to data, other params is an empty obj
    // this ensures get data is sent in the url
    // and post sends data as json
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  /** search movies */

  static async searchMovies(title) {
    let res = await this.request(`movies/title/${title}`);
    return res;
  }

  /** get an existing user's token */

  static async getToken(userData) {
    let res = await this.request("auth/token", userData, "post");
    const token = res.token;
    WeatherlyApi.token = token;
    return token;
  }

  /** register an new user */

  static async register(userData) {
    let res = await this.request("auth/register", userData, "post");
    const token = res.token;
    WeatherlyApi.token = token;
    return token;
  }

  /** get all of an existing user's titles */

  static async getAllTitles(username) {
    return await this.request(`users/${username}/movies`);
  }

  /** save a movie to the db */

  static async saveMovie(movieData) {
    await this.request("movies/save", movieData, "post");
  }

  /** add a movie to an existing user's watchlist */

  static async addToWatchList(username, movieId) {
    let res = await this.request(`users/${username}/movies`, { movieId }, "post");
    return res;
  }

  /** Get an existing user's profile data */

  static async getUserData(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }
}

export default WeatherlyApi;
