import './Home.css';
import Hero from '../Components/Hero';
import HomeImg from "../Assets/pexels-dlxmediahu-11884525.jpg";
import Navbar from '../Components/Navbar';
import Suggest from '../Components/Suggest';
import ContentTypes from '../Components/ContentTypes';
import Footer from '../Components/Footer';

function Home() {
    return (
        <>
            <Navbar/>
            <Hero
                cName = "hero"
                heroImg = {HomeImg}
                title = "Experiences & Perspectives"
                text = "The Podcast where we explore & reflect on how to live a healthy, joyous & creative life."
            />
            <ContentTypes/>
            <Suggest/>
            <Footer/>
        </>
    )
}

export default Home;