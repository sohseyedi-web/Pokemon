import { useLocation } from "react-router-dom";
import { getPokemonName } from "../../utils/http";
import { useQuery } from "@tanstack/react-query";
import Loading from "../common/Loading";

interface PokemonData {
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  weight: number;
  stats: string | any;
}

const Info = () => {
  const { pathname } = useLocation();

  const { data: result, isLoading } = useQuery({
    queryKey: ["get-pokemon-image", pathname.slice(1)],
    queryFn: () => getPokemonName(pathname.slice(1)),
  });

  if (isLoading) return <Loading />;

  return (
    <div className="max-w-4xl mx-auto my-5 space-y-4 text-center text-white">
      <img
        className="w-44 h-44 mx-auto"
        src={result?.sprites?.other["official-artwork"].front_default}
        alt=""
      />
      <div className="flex items-center  mx-auto justify-between lg:w-[60%] w-[95%] py-2 border-gray-400 border-b-2">
        <h3 className="font-semibold text-xl capitalize">
          name : {pathname.slice(1)}
        </h3>
        <h5 className="font-semibold text-xl capitalize">
          Weight : {result?.weight}
        </h5>
      </div>
      <div className="flex-col">
        {result?.stats?.map((statObject: string | any) => {
          const statName = statObject.stat.name;
          const statValue = statObject.base_stat;

          return (
            <div
              className="flex items-center  mx-auto justify-between lg:w-[60%] w-[95%] my-2"
              key={statName}
            >
              <h3 className="capitalize font-semibold">
                {statName} : {statValue}%
              </h3>
              <div className="relative w-2/4 h-5 bg-gray-200 rounded-2xl shadow overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-blue-900 transition-all duration-500 ease-in-out"
                  style={{ width: statValue + "%" }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Info;
