import bg from "../assets/home-bg.webp";
import MainCircle from "../components/MainCircle";
import Menu from "../components/Menu";
import PageIndicators from "./../components/PageIndicators";
import MedsosGroup from "./../components/MedsosGroup";
import { useState } from "react";
import skillCircle from '../assets/skill-circle.png'
// import skillCircle from '../assets/Group 34.png'

const About = () => {
    const [isStart, setIsStart] = useState(false);

    const style = {
        skillCircleBg : {
            backgroundImage: `url(${skillCircle})`
        }
    }

    const AboutBox = () => {
        const style = {
            solidShadow : {
                boxShadow : '5px 5px 0px 1px #67e8f9'
            }
        }

        return(
            <div style={style.solidShadow} className="w-1/2 h-60 bg-zinc-700 relative -top-1/4 p-4">
                <h1 className="text-2xl font-medium text-white">About Me</h1>
                <p className="text-white mt-2"> <span className="ml-8"></span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, nemo. Error odio similique iusto alias, aliquam, culpa doloremque debitis sit consectetur qui consequuntur aspernatur suscipit id dolor at minima. Iste omnis sapiente fuga laboriosam iure provident veniam odio expedita. Sequi ut tempora aliquid natus, quo eos. Deserunt nam delectus consectetur architecto laboriosam sapiente ipsa quis ab maiores. Eligendi architecto incidunt suscipit delectus! Dolorum optio ratione aperiam amet beatae maxime placeat porro quia, odit quae facilis, fuga veniam magni officia soluta. Eligendi quasi perspiciatis non provident quis aperiam cum doloremque, blanditiis, nihil quod a facere. Possimus consequuntur voluptas enim dolorem quo!</p>
            </div>
        )
    }

    return (
        <div
            className="fixed h-screen w-full bg-cover flex justify-center items-center overflow-hidden"
            style={{ backgroundImage: `url(${bg})` }}
        >
            {<AboutBox/>}

            {<Menu addClass={""} />}

            {<PageIndicators addClass={""} />}

            {<MedsosGroup addClass={""} />}

            {<MainCircle position={'absolute -bottom-1/3 z-10'} onClick={() => {
                setIsStart((prev) => !prev);
            }}
                isStart={isStart}
                child={(<h1 className={` ${isStart ? 'opacity-0' : 'opacity-100'} transition-all duration-500 absolute top-[180px] text-5xl font-medium text-zinc-500`}>My Skill</h1>)}
            />}

            {/* <SkillList isStart={isStart}/> */}
            <div className={` ${isStart ? 'rotate-0 -bottom-1/2' : 'rotate-180 -bottom-2/3'} m-12  bg-no-repeat bg-center transition-all duration-1000 absolute `}>
                <img src={skillCircle} alt="" width={1020} />
            </div>
        </div>
    );
};

export default About;
