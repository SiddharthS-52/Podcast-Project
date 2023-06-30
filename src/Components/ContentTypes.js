import "./ContentTypes.css";
import ContentTypesData from "./ContentTypesData";
import m1 from "../Assets/pexels-cottonbro-studio-6686455.jpg";
import m2 from "../Assets/pexels-cottonbro-studio-6878196.jpg";

const ContentTypes = () => {
    return (
        <div className="contenttype">
            <h1>My Creations</h1>
            <p>Come Explore with me.</p>

            <ContentTypesData
                className= "first-des"
                heading= "Monologues"
                subheading1= "-Lucid Dreaming"
                subheading2= "-When all you could see is blood."
                subheading3= "-Embracing the Positive within Us."
                img1 = {m1}
                img2 = {m2}
            />

            <ContentTypesData
                className= "first-des-reverse"
                heading= "Talk-Shows"
                subheading1= "-Journaling & Turing 20"
                subheading2= "-Introversion & Creativity"
                subheading3= "-Psychology & Indian Philosophy"
                img1 = {m1}
                img2 = {m2}
            />

            <ContentTypesData
                className= "first-des"
                heading= "Blogs"
                subheading1= "-Veganism"
                subheading2= "-Nature: The Best Therapist"
                subheading3= "-Why not today ?"
                img1 = {m1}
                img2 = {m2}
            />
        </div>
    )
}

export default ContentTypes;