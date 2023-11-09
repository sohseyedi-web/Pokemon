import { FC, useEffect, useState } from "react";
import { http } from "../utils/http";
import Results from "./Results";
import Loading from "./common/Loading";

const Home: FC = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const getPokemon = async () => {
    setLoading(true);
    try {
      const { data } = await http.get("/pokemon?offset=20&limit=20");
      setData(data?.results);
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
      {loading ? (
        <Loading />
      ) : (
        <div className="flex items-center justify-center w-ful gap-3 mt-5 flex-wrap">
          {filterResult?.length === 0 ? (
            <div className="w-full mt-5 text-center text-lg font-semibold text-white">
              Not found results
            </div>
          ) : (
            filterResult?.map((item) => <Results item={item} />)
          )}
        </div>
      )}
    </section>
  );
};

export default Home;
