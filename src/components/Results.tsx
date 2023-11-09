import { resultArray } from "../utils/type";
import { Link } from "react-router-dom";

const Results = ({ items }: { items: resultArray[] }) => {
  return (
    <>
      {items.length === 0 ? (
        <div className="w-full mt-5 text-center text-lg font-semibold text-white">
          Not found results :
        </div>
      ) : (
        <div className="flex items-center justify-centercenter w-ful gap-3 mt-5 flex-wrap">
          {items.map((item) => (
            <Link
              to={`/pokemon/${item.name}`}
              key={item.name + "-item"}
              className="bg-slate-950 h-[55px] border-none text-lg flex items-center justify-center gap-x-2 rounded-lg shadow border lg:w-[24%] md:w-[45%] w-[95%] mx-auto text-white"
            >
                <img src="" className="w-8 h-8" alt="" />
              <h4>{item.name}</h4>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Results;
