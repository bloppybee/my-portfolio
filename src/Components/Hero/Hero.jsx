import "./Hero.css";
import heroImage from "../../assets/hero.png";
import {
    FaLinkedinIn,
    FaWhatsapp,
    FaInstagram,
    FaXTwitter,
} from "react-icons/fa6";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <p className="hero-greeting">Hello, I'm</p>

                <h1 className="hero-name">
                    David
                </h1>

                <h2 className="hero-role">
                    Web Developer
                </h2>

                <div className="hero-socials">
                    <a
                        href="https://www.linkedin.com/in/david-okorowanta-591952414/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaLinkedinIn />
                    </a>

                    <a
                        href="https://Whatsapp.com/09033203136"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaWhatsapp />
                    </a>

                    <a
                        href="https://x.com/potentialman__"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaXTwitter />
                    </a>

                </div>

            </div>

            {/* <div className="hero-image">
                <img src={heroImage} alt="Developer" />
            </div> */}
        </section>
    );
};

export default Hero;