import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getImagePokemon } from "../utils/http";

export type resultItem = {
  name: string;
  url: string;
};

const Results = ({ item }: { item: resultItem }) => {
  const { data } = useQuery({
    queryKey: ["get-pokemon-image", item.name],
    queryFn: () => getImagePokemon(item.name),
  });

  return (
    <>
      <Link
        to={`/${item.name}`}
        key={item.name + "-item"}
        className="bg-slate-950 h-[55px] border-none text-lg flex items-center justify-center gap-x-2 rounded-lg shadow border lg:w-[24%] md:w-[45%] w-[95%] mx-auto text-white"
      >
        <img loading="lazy" src={data} alt={item.name} className="w-10 h-10" />
        <h4 className="capitalize">{item.name}</h4>
      </Link>
    </>
  );
};

export default Results;
