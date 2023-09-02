/* eslint-disable react/prop-types */
import bg from "../assets/home-bg.webp";
import bgPotrait from "../assets/home-bg-potrait.png";
import MainCircle from "../components/MainCircle";
import Menu from "../components/Menu";
import PageIndicators from "./../components/PageIndicators";
import MedsosGroup from "./../components/MedsosGroup";
import { useState } from "react";
import skillCircle from '../assets/skill-circle.png'
import skillCirclePotrait from '../assets/Group 46.png'
import { useEffect } from "react";
// import skillCircle from '../assets/Group 34.png'

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

const About = () => {
    const [isStart, setIsStart] = useState(false);
    let width = ScreenInfo()[0]
    let height = ScreenInfo()[1]

    const style = {
        lampEffect: {
            boxShadow: '0px 0px 100px 52px #22d3ee2b, inset 0px 0px 100px 52px #ffffff77',
            bottom : width / -6
        },
        LampOff: {
            boxShadow: '0px 0px 50px 10px #ffffff33, inset 0px 0px 50px 5px #ffffff77',
            bottom : width / -6
        },
        circleListPosition: {
            bottom: isStart ? (width) / -3.6 : width / -2.5
        },
        circleButtonPosition: {
            bottom: width / 2
        }, mySkillText: {
            fontSize: width / 40,
            top: width / 12
        }, skillPosition: {
            bottom: width / height * 1000 / 2
        }
    }

    const AboutBox = ({ addClass }) => {
        const style = {
            solidShadow: {
                boxShadow: '5px 5px 0px 1px #67e8f9'
            },

        }

        return (
            <div style={style.solidShadow} className={`w-1/2 min-h-max bg-zinc-700 relative -top-1/4 p-4 ${addClass}`}>
                <h1 className="text-2xl font-medium text-white">About Me</h1>
                <p className="text-white mt-2"> <span className="ml-8"></span>Hai, nama saya adalah Ryo Khrisna Fitriawan. ketertarikan saya pada website bermula pada tahun 2021 ketika saya memutuskan untuk mendaftar kuliah di jurusan teknik informatika. pada tahun 2021 saya lulus dari jenjang SMA dan memutuskan untuk gap year, pada waktu satu tahun itulah saya belajar otodidak mengenai website.</p>
            </div>
        )
    }

    if (width > height) {

        return (
            <div
                className="fixed h-screen w-full bg-cover flex justify-center items-center overflow-hidden"
                style={{ backgroundImage: `url(${bg})` }}
            >
                {<AboutBox />}

                {<Menu addClass={""} />}

                {<PageIndicators addClass={""} />}

                {<MedsosGroup addClass={""} />}



                {<MainCircle
                    style={style}
                    position={'absolute z-10'} onClick={() => {
                        setIsStart((prev) => !prev);
                    }}
                    isStart={isStart}
                    child={(<h1 style={style.mySkillText} className={` ${isStart ? 'opacity-0' : 'opacity-100'} transition-all duration-500 absolute font-medium text-zinc-500`}>My Skill</h1>)}
                />}

                {/* <SkillList isStart={isStart}/> */}
                <div style={style.circleListPosition} className={` ${isStart ? 'rotate-0' : 'rotate-180 '} m-12  bg-no-repeat bg-center transition-all duration-1000 absolute `}>
                    <img src={skillCircle} alt="" width={width / 1.8} />
                </div>
            </div>
        );
    } else {
        return (
            <div
                className="fixed h-screen w-full bg-cover flex justify-center items-center overflow-hidden transition-all"
                style={{ backgroundImage: `url(${bgPotrait})` }}
            >
                {<AboutBox addClass={'w-10/12'} />}

                <div style={style.skillPosition} className="absolute w-full min-h-max flex justify-center items-center bg-red-100">
                    {<MainCircle 
                        style={style}
                    position={'absolute z-10'} onClick={() => {
                        setIsStart((prev) => !prev);
                    }}
                        isStart={isStart}
                        child={(<h1 className={` ${isStart ? 'opacity-0' : 'opacity-100'} transition-all duration-700 text-xl font-medium text-zinc-500`}>My Skill</h1>)}
                    />}
                    <img src={skillCirclePotrait} width={width / 1.8} className={`${isStart ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'} absolute  transition-all duration-700 `} alt="" />
                </div>
                <PageIndicators addClass={'-rotate-90 bottom-0 right-1/2'} screen={width > height}/>

{/* <button className="-rotate-90 absolute bottom-12 right-1/4 text-white" onClick={() => navigate('/about')}>
  <Arrow/>
</button> */}
            </div>

        )
    }
};

export default About;
