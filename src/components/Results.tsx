import { resultItem } from "../utils/type";
import { Link } from "react-router-dom";

const Results = ({ item }: { item: resultItem }) => {
  return (
    <>
      <Link
        to={`/${item.name}`}
        key={item.name + "-item"}
        className="bg-slate-950 h-[55px] border-none text-lg flex items-center justify-center gap-x-2 rounded-lg shadow border lg:w-[24%] md:w-[45%] w-[95%] mx-auto text-white"
      >
        <h4>{item.name}</h4>
      </Link>
    </>
  );
};

export default Results;
