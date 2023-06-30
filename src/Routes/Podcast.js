import './Podcast.css';
import Navbar from '../Components/Navbar';
// import { Component } from 'react';
// import logo from "../Assets/22441494-1656609146557-f0dcb618e2d31.jpg";
import audio from "../Assets/The Power of Smile.mp3";
// import AudioPlayer from "../PodcastEpisode/src/components/AudioPlayer";
// import Musicplayer from "../Components/Musicplayer";
// import MusicPlayerComponent from '../Components/Musicplayer';
// import AudioPlayer from '../PodcastPlayer/AudioPlayer';
import EpisodePic from '../PodcastPlayer/EpisodePic';
import Suggest from '../Components/Suggest';
import Footer from "../Components/Footer";

function Podcast() {
    return (
        <>
        <Navbar/>
        <div className='podcast'>
            
            <div className='pod-profile'>
                {/* <div className='logo'>
                    <img src={logo} alt="" />
                </div> */}
                <div className='name-detail'>
                    <h1>Experiences & Perspectives</h1>
                    <h4>By Siddsiwan</h4>
                </div>
            </div>
            <div className='desc'>
                <p>"Experience & Perspectives" is a podcast hosted by Siddharth, where he shares his journey of overcoming self-doubt and learning to trust in his own capabilities. Through deep research and personal reflection, Siddharth explores the intersection of spirituality, philosophy, and psychology. Each episode serves as a reminder to listeners to believe in themselves and their own potential, as we all journey towards personal growth and self-improvement. Join us on a journey towards a more fulfilling and meaningful life, as Siddharth shares his insights and experiences with honesty and vulnerability.</p>
            </div>
            <audio src={audio}></audio>
        </div>
        {/* <AudioPlayer/> */}
        <EpisodePic/>
        <Suggest/>
        <Footer/>
        </>
        
    )
}

export default Podcast;