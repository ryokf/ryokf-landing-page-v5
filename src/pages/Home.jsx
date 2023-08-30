import bg from '../assets/home-bg.png'
import MainCircle from '../components/MainCircle'

const Home = () => {
    return(
        <div className="h-screen w-full bg-cover flex justify-center items-center" style={{ backgroundImage: `url(${bg})`}}>
            <MainCircle></MainCircle>
        </div>
    )
}

export default Home