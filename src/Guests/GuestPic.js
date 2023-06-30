import GuestPicData from "../Guests/GuestPicData";
import "./GuestPic.css";
import g1 from "../Assets/yash.jpg";
import la from "../Assets/lavika.jpg";
import ad from "../Assets/aditi.png";
import is from "../Assets/isaura.jpg";
import ma from "../Assets/mahima.png";
import de from "../Assets/delia.png";

function GuestPic() {
    return (
        <div className="guestpic">
            <h1>EXPERIENCES & PERSPECTIVES GUESTS</h1>
            <div className="guestcard">
            <GuestPicData
                    image = {ma}
                    name = "Mahima Samraik"
                    detail = "Research Theist at IISER, Mohali || Host of 'Breaking The Facts Podcast'"
                />
                <GuestPicData
                    image = {de}
                    name = "Delia Eva"
                    detail = "Singer with 2 Albums (Plans, Reality & Fantasy)"
                />
                <GuestPicData
                    image = {ad}
                    name = "Aditi Chauhan"
                    detail = "4x National Flexibility Champion || Founder of HackersVilla CyberSecurity Pvt Ltd."
                />
                <GuestPicData
                    image = {is}
                    name = "Isaura V. Souza"
                    detail = "Education Researcher at Miami University, USA"
                />
                <GuestPicData
                    image = {g1}
                    name = "Yash Saraswat"
                    detail = "MBA Student at Humber College, Canada"
                />
                <GuestPicData
                    image = {la}
                    name = "Lavika"
                    detail = "Host of GenZ Ain't Shit Podcast"
                />
            </div>
        </div>
    )
}


export default GuestPic;