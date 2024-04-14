import axios from 'axios';
import endpoints from '../constants/endpoint';

const pokemonApi = axios.create({ baseURL: endpoints.baseURL });

export default pokemonApi;
