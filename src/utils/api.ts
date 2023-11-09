import axios from "axios";

export const getAllPokemonApi = async () => {
  try {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20");
    return data;
  } catch (error: any) {
    console.log(error.message);
  }
};
