import axios from 'axios';

export const getFirstMovies = async (filtro = 'star') => {
  try {
    const { VITE_URL_API, VITE_API_KEY } = import.meta.env;
    const filters = `s=${filtro}&page=10`
    const query = `${VITE_URL_API}${filters}&${VITE_API_KEY}`
    const response = await axios.get(query);
    return response; 
  } catch (error) {
    console.error(error);
    throw error; 
  }
};