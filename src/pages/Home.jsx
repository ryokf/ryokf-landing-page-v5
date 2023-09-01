/* eslint-disable react/prop-types */
import bg from "../assets/home-bg.webp";
import MainCircle from "../components/MainCircle";
import PhotoMyself from "../assets/myself.png";

import Menu from "../components/Menu";
import PageIndicators from "./../components/PageIndicators";
import MedsosGroup from './../components/MedsosGroup';

import { useState } from "react";
import { useEffect } from "react";

const WidthInfo = () => {
  function getWindowSize() {
      const { innerWidth, innerHeight } = window;
      return { innerWidth, innerHeight };
  }

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
      function handleWindowResize() {
          setWindowSize(getWindowSize());
      }

      window.addEventListener("resize", handleWindowResize);

      return () => {
          window.removeEventListener("resize", handleWindowResize);
      };
  }, []);

  console.log(windowSize.innerWidth);

  return windowSize.innerWidth
};

const Title = ({ isStart }) => {

  const style = {
    tile : {
      fontSize : WidthInfo() / 20
    },
    subtitle : {
      fontSize : WidthInfo() / 60
    }
  }

  const subtitle = (
    <p style={style.subtitle} className={`text-3xl text-zinc-200 transition-all duration-1000 ${isStart ? 'opacity-0' : 'opacity-100'}`}>
      {"<Web and Mobile Developer>"}
    </p>
  );

  return (
      <div className="absolute flex flex-col justify-center items-center">
      <h1 style={style.tile} className="font-bold text-white">
        RYO KHRISNA FITRIAWAN
      </h1>
      { subtitle }
    </div>
  );
};

const Home = () => {
  const [isStart, setIsStart] = useState(false);

  return (
    <div
    className="fixed h-screen w-full bg-cover flex justify-center items-center overflow-hidden transition-all"
    style={{ backgroundImage: `url(${bg})` }}
    >
      
      {isStart ? <Menu addClass={'opacity-100'} /> : <Menu addClass={'opacity-0'} />}

      {isStart ?  <PageIndicators addClass={'opacity-100'} /> : <PageIndicators addClass={'opacity-0'} />}

      {isStart ?  <MedsosGroup addClass={'opacity-100'} /> : <MedsosGroup addClass={'opacity-0'} />}

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
        } transition-all duration-[1000ms] absolute`}
      >
        <img src={PhotoMyself} alt="" width={WidthInfo() / 2.4}  />
      </div>
    </div>
  );
};

export default Home;
