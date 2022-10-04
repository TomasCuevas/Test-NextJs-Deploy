//* axios *//
import { pokeApi } from "../axios";

//* interface *//
import { IPokemon } from "../interfaces";

export const getPokemonByName = async (name: string): Promise<IPokemon> => {
  const { data } = await pokeApi.get(`/${name}`);
  return data;
};
