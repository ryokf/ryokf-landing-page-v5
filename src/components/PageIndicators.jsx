/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import page from "../route";

const Arrow = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="white">
      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>  
    )
}

const PageIndicators = ({addClass, screen}) => {
  const pages = page();
  const navigate = useNavigate();

  pages[0].splice(0, 0, '/')

  return (
    <div className={`flex flex-col items-center absolute right-7 gap-4 transition-all duration-1000 ${addClass}`}>
      {pages[0].map((page) => (
        <button key={page} onClick={() => navigate(page == "/" ? page : "/" + page)}>
          <div
            className={`${
              window.location.pathname ==  page || window.location.pathname ==  "/" + page ? "bg-cyan-300 w-4" : "bg-white w-2"
            } aspect-square  rounded-full`}
          ></div>
        </button>
      ))
    }
    {/* {screen ? <></> : <Arrow></Arrow>} */}
    </div>
  );
};

export default PageIndicators;
