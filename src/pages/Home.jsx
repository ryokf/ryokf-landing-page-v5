/* eslint-disable react/prop-types */
import bg from "../assets/home-bg.webp";
import bgPotrait from "../assets/home-bg-potrait.png";
import MainCircle from "../components/MainCircle";
import PhotoMyself from "../assets/myself.png";

import Menu from "../components/Menu";
import PageIndicators from "./../components/PageIndicators";
import MedsosGroup from './../components/MedsosGroup';

import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ScreenInfo = () => {
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

  return [windowSize.innerWidth, windowSize.innerHeight]
};

const Title = ({ isStart }) => {

  const style = {
    tile: {
      fontSize: ScreenInfo()[0] / 20
    },
    subtitle: {
      fontSize: ScreenInfo()[0] / 60
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
      {subtitle}
    </div>
  );
};

const Arrow = ({navigate}) => {

  return(

    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="white">
      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>  
    )
}

const Home = () => {
  const [isStart, setIsStart] = useState(false);
  const navigate = useNavigate()
  let width = ScreenInfo()[0]
  let height = ScreenInfo()[1]

  if (width > height) {
    return (
      <div
        className="fixed h-screen w-full bg-cover flex justify-center items-center overflow-hidden transition-all"
        style={{ backgroundImage: `url(${bg})` }}
      >

        {isStart ? <Menu addClass={width < 640 ? 'opacity-0' : 'opacity-100'} /> : <Menu addClass={'opacity-0'} />}

        {isStart ? <PageIndicators addClass={width < 640 ? 'opacity-0' : 'opacity-100'} /> : <PageIndicators addClass={'opacity-0'} />}

        {isStart ? <MedsosGroup addClass={'opacity-100'} /> : <MedsosGroup addClass={'opacity-0'} />}

        <MainCircle
          onClick={() => {
            setIsStart((prev) => !prev);
          }}
          isStart={isStart}
          child={<Title isStart={isStart} />}
        />

        <div
          className={`${isStart ? "bottom-0" : "-bottom-[800px]"
            } transition-all duration-[1000ms] absolute`}
        >
          <img src={PhotoMyself} alt="" width={ScreenInfo()[0] / 2.4} />
        </div>
      </div>
    );
  } else {
    return(
      <div
        className="fixed h-screen w-full bg-cover flex justify-center items-center overflow-hidden transition-all"
        style={{ backgroundImage: `url(${bgPotrait})` }}
      >
        <div className="text-start max-w-lg mx-8 mb-32">
          <img className="rounded-full bg-zinc-900 mx-auto mb-5" width={ScreenInfo()[0] / 2.5} src={PhotoMyself} alt="" />
          <h4 className="text-lg font-medium text-cyan-300">Halo 👋, nama saya</h4>
          <h1 className="text-4xl font-bold text-white mb-2">Ryo Khrisna Fitriawan</h1>
          <h3 className="text-md font-medium text-zinc-300 mb-2">Web and Mobile <span className="text-cyan-300">Developer</span> </h3>
          <p className="text-zinc-300">saya adalah seorang programmer yang juga menekuni bidang desain, sehingga saya mampu menciptakan aplikasi dengan fungsionalitas tinggi dan juga indah.</p>
        </div>

        <PageIndicators addClass={'-rotate-90 bottom-0 right-1/2'} screen={width > height}/>

        <button className="-rotate-90 absolute bottom-12 right-1/4 text-white" onClick={() => navigate('/about')}>
          <Arrow/>
        </button>

      </div>
    )
  }
};

export default Home;
