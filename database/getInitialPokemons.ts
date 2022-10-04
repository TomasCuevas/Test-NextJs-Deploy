import { pokeApi } from "../axios";

export const getInitialPokemons = async (limit = 5) => {
  const { data } = await pokeApi.get(`?limit=${limit}`);
  return data;
};
