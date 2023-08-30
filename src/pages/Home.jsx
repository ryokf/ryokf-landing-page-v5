/* eslint-disable react/prop-types */
import bg from "../assets/home-bg.png";
import MainCircle from "../components/MainCircle";
import PhotoMyself from "../assets/myself.png";

import Menu from "../components/Menu";
import PageIndicators from "./../components/PageIndicators";

import { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const Title = ({ isStart }) => {

  const subtitle = (
    <p className="text-3xl font-medium text-zinc-300">
      Web and Mobile Developer
    </p>
  );

  
  return (
      <div className="absolute flex flex-col justify-center items-center">
      <h1 className=" text-[116px] font-bold text-white">
        RYO KHRISNA FITRIAWAN
      </h1>
      {isStart ? <></> : subtitle }
    </div>
  );
};

const Home = () => {
  const [isStart, setIsStart] = useState(false);

  return (
    <div
    className="h-screen w-full bg-cover flex justify-center items-center overflow-y-hidden"
    style={{ backgroundImage: `url(${bg})` }}
    >
      
      {isStart ? <Menu /> : <></>}

      {isStart ?  <PageIndicators /> : <></>}

      <MainCircle
        onClick={() => {
          setIsStart((prev) => !prev);
        }}
        isStart={isStart}
        child={<Title isStart={isStart} />}
      />

      <div
        className={`${
          isStart ? "bottom-0" : "-bottom-[800px]"
        } transition duration-[10000000000ms] absolute`}
      >
        <img src={PhotoMyself} alt="" width={800} />
      </div>
    </div>
  );
};

export default Home;
