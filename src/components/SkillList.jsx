/* eslint-disable react/prop-types */

import { useRef } from "react";
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

// const SkillCircle = () => {
//     const windowWidth = useRef(window.innerWidth);

//     return (
//         <div className="aspect-square w-1/6 rounded-full bg-red-400 absolute -left-[4rem] bottom-[32rem]"></div>
//     );
// };

const SkillList = ({ isStart }) => {
    WidthInfo();

    // const windowWidth = useRef(window.innerWidth);

    const tambah = 66;

    const style = {
        circleListWidth : {
            width: WidthInfo() / 1.7
        },
        smallCircle1 : {
            width: WidthInfo() / 12,
            height: WidthInfo() / 12,
            // top:( WidthInfo() - 2060) / 200
            top: 40 + 250,
            left: (-( WidthInfo()) / 40) + tambah
            // bottom:0 
        },
        smallCircle2 : {
            width: WidthInfo() / 12,
            height: WidthInfo() / 12,
            // top: 40 + ( WidthInfo() - 2060) / 200
            top: 40 + 80,
            left: -( WidthInfo()) / 15 + tambah
            // bottom:0 
        },
        smallCircle3 : {
            width: WidthInfo() / 12,
            height: WidthInfo() / 12,
            // top: 40 + ( WidthInfo() - 2060) / 200
            top: 30 + -10,
            left: -( WidthInfo()) / 15 + tambah
            // bottom:0 
        },
        smallCircle4 : {
            width: WidthInfo() / 12,
            height: WidthInfo() / 12,
            // top: 40 + ( WidthInfo() - 2060) / 200
            top: 40 + -60,
            left: -( WidthInfo()) / 20 + tambah
            // bottom:0 
        },smallCircle5 : {
            width: WidthInfo() / 12,
            height: WidthInfo() / 12,
            // top: 40 + ( WidthInfo() - 2060) / 200
            top: 30 + -10,
            left: -( WidthInfo()) / 30+ tambah
            // bottom:0 
        },
        smallCircle6 : {
            width: WidthInfo() / 12,
            height: WidthInfo() / 12,
            // top: 40 + ( WidthInfo() - 2060) / 200
            top: 40 + 80,
            left: -( WidthInfo()) / 35+ tambah
            // bottom:0 
        },
        smallCircle7 : {
            width: WidthInfo() / 12,
            height: WidthInfo() / 12,
            // top: 40 + ( WidthInfo() - 2060) / 200
            top: 40 + 250,
            left:-( WidthInfo()) / 20+ tambah
            // bottom:0 
        },
    }

    return (
        <div
            className={` ${isStart ? "rotate-0" : "-rotate-180"
                } transition-all duration-1000 aspect-square rounded-full relative border flex -bottom-1/2`}
            style={style.circleListWidth}
        >
            <div className="rounded-full bg-red-400 relative" style={style.smallCircle1}></div>
            <div className="rounded-full bg-red-400 relative" style={style.smallCircle2}></div>
            <div className="rounded-full bg-red-400 relative" style={style.smallCircle3}></div>
            <div className="rounded-full bg-red-400 relative" style={style.smallCircle4}></div>
            <div className="rounded-full bg-red-400 relative" style={style.smallCircle5}></div>
            <div className="rounded-full bg-red-400 relative" style={style.smallCircle6}></div>
            <div className="rounded-full bg-red-400 relative" style={style.smallCircle7}></div> 
            {/* <div className="rounded-full bg-red-400 relative" style={style.smallCircle}></div> */}
            {/* <div className="aspect-square w-1/6 rounded-full bg-red-400 absolute left-[0rem] bottom-[44rem]"></div>
            <div className="aspect-square w-1/6 rounded-full bg-red-400 absolute left-[10rem] bottom-[52rem]"></div>
            <div className="aspect-square w-1/6 rounded-full bg-red-400 absolute  bottom-[56rem]"></div>
            <div className="aspect-square w-1/6 rounded-full bg-red-400 absolute -right-[4rem] bottom-[32rem]"></div>
            <div className="aspect-square w-1/6 rounded-full bg-red-400 absolute right-[0rem] bottom-[44rem]"></div>
            <div className="aspect-square w-1/6 rounded-full bg-red-400 absolute right-[10rem] bottom-[52rem]"></div> */}
        </div>
    );
};

export default SkillList;

// style={{
//     '--r': `${index * (360 / items.length)}deg`,
//     '--d': '120px'
//   }}
