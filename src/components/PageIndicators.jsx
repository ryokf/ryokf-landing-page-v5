/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import page from "../route";

const PageIndicators = ({addClass}) => {
  const pages = page();
  const navigate = useNavigate();

  pages[0].splice(0, 0, '/')

  return (
    <div className={`flex flex-col items-center absolute right-7 gap-4 transition-all duration-1000 ${addClass}`}>
      {pages[0].map((page) => (
        <button key={page} onClick={() => navigate("/" + page)}>
          <div
            className={`${
              window.location.pathname == "/" +page ? "bg-cyan-300 w-4" : "bg-white w-2"
            } aspect-square  rounded-full`}
          ></div>
        </button>
      ))}
    </div>
  );
};

export default PageIndicators;
