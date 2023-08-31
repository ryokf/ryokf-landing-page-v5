/* eslint-disable react/prop-types */
const MainCircle = ({position, child, isStart, onClick}) => {
    const style = {
        lampEffect : {
            boxShadow: '0px 0px 100px 52px #22d3ee2b, inset 0px 0px 100px 52px #ffffff77'
        },
        LampOff : {
            boxShadow: '0px 0px 50px 10px #ffffff33, inset 0px 0px 50px 5px #ffffff77'
        }
    }
    return(
        <button 
                onClick={onClick}
                className={`${isStart ? 'bg-cyan-400' : 'bg-zinc-600'} ${position} flex justify-center items-center transition-all duration-1000 rounded-full aspect-square w-1/3`}
                style={isStart ? style.lampEffect : style.LampOff}
        >
        {child}            
        </button>
    )
}

export default MainCircle