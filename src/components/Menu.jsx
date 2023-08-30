import { useNavigate } from "react-router-dom";
import page from "../route";

const Menu = () => {
  const pages = page();
  const navigate = useNavigate();

  return (
    <div className="-rotate-90 text-xl  absolute -left-40">
      <ul className="flex">
        {pages[0].map((page) => (
          <button key={page} onClick={() => navigate("/" + page)}>
            <li className={` ${window.location.pathname == page ? 'text-cyan-300' : 'text-white'} mx-5`}>{page}</li>
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
