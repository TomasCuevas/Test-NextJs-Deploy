export interface IPokemons {
  count: number;
  next: string;
  previous: null;
  results: IPokemon[];
}

export interface IPokemon {
  name: string;
  url: string;
}