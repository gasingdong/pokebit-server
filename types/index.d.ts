declare module 'pokedex-promise-v2' {
  class Pokedex {
    constructor();

    getPokemonsList(): Promise<PokemonList>;
  }
  namespace Pokedex {}
  export = Pokedex;
}

type PokemonList = {
  count: number;
  next: string;
  previous: string;
  results: Array<{ name: string; url: string }>[];
};
