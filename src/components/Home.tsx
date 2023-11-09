import { FC, useEffect, useState } from "react";
import { getAllPokemonApi } from "../utils/api";
import Results from "./Results";

const Home: FC = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const getPokemon = async () => {
    setLoading(true);
    try {
      const res = await getAllPokemonApi();
      setData(res?.results);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const filterResult = data?.filter((item: any) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <section className="max-w-5xl mx-auto py-3">
      <header className="lg:w-[40%] md:w-[70%] w-[95%] mx-auto">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search Name pokemon ..."
          className="w-full h-[45px] bg-transparent text-white rounded-lg border border-slate-950 shadow outline-none transition-all duration-200 focus:border-gray-100 text-lg px-2"
        />
      </header>
      {loading ? <div>Loading</div> : <Results items={filterResult} />}
    </section>
  );
};

export default Home;
