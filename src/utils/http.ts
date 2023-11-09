import axios from "axios";

export const http = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export const getAllPokemon = async () => {
  return http.get("/pokemon?offset=20&limit=28").then(({ data }) => data);
};
export const getPokemonName = async (value: string) => {
  return http.get("/pokemon/" + value).then(({ data }) => data);
};

export const getImagePokemon = async (name: string) => {
  const { data } = await http.get("/pokemon/" + name);
  return data?.sprites?.other["official-artwork"].front_default;

};
