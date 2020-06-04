declare module 'pokedex-promise-v2' {
  class Pokedex {
    constructor();

    getPokemonsList(): Promise<PokemonList>;

    getPokemonSpeciesByName(name: string): Promise<PokemonSpecies>;

    getPokemonByName(name: string): Promise<Pokemon>;
  }
  namespace Pokedex {}
  export = Pokedex;
}

type Pokemon = {
  name: string;
  species: NamedLink;
  sprites: {
    front_default: string;
  };
  type: Array<{ slot: number; type: NamedLink }>;
};

type PokemonSpecies = {
  names: Array<{ name: string; language: NamedLink }>;
};

type PokemonList = {
  count: number;
  next: string;
  previous: string;
  results: Array<NamedLink>[];
};

type NamedLink = {
  name: string;
  url: string;
};
