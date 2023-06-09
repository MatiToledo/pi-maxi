export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
const API_KEY = "d959ca6b02724f0484c574f7754309c6";
import axios from "axios";

export const getVideogames = () => {
  const url = `https://api.rawg.io/api/games?key=${API_KEY}`;
  return async (dispatch) => {
    try {
      const { data } = await axios.get(url);
      return dispatch({
        type: GET_VIDEOGAMES,
        payLoad: data.results,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
