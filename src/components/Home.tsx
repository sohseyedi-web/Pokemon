import { FC, useState } from "react";
import { getAllPokemon } from "../utils/http";
import Results from "./Results";
import Loading from "./common/Loading";
import { useQuery } from "@tanstack/react-query";

const Home: FC = () => {
 
  const [search, setSearch] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["get-pokemon"],
    queryFn: getAllPokemon,
  });

  const filterResult = data?.results?.filter((item: any) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

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
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex items-center justify-center w-ful gap-3 mt-5 flex-wrap">
          {filterResult?.length === 0 ? (
            <div className="w-full mt-5 text-center text-lg font-semibold text-white">
              Not found Pokemon
            </div>
          ) : (
            filterResult?.map((item : any) => <Results item={item} />)
          )}
        </div>
      )}
    </section>
  );
};

export default Home;
