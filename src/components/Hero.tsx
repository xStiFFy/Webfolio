import './Hero.css'
import monogram_purple from '../assets/monogram_purple.svg'
import GradientWaves from './effects/GradientWaves';

function Hero() {

    return (
        <section className="hero" id="home">   

            <div className="hero-background">
                <GradientWaves
                    horizonColor="#5227FF"
                    waveColor="#FF9FFC"
                    crestColor="#FFFFFF"
                    speed={.2}
                    amplitude={2.5}
                    waveScale={1}
                    waveRatio={0.9}
                    swell={35}
                    turbulence={20}
                    tilt={1.11}
                    zoom={1.85}
                    height={5.5}
                    fogDepth={15}
                    detail="medium"
                    brightness={1}
                    opacity={1}
                    mouseInteraction={false}
                    parallaxStrength={0.5}
                    grain
                    grainIntensity={0.05}
                />
            </div>

            <div className="hero-content">
                <h3 className="hero-intro">Hello, I'm</h3>

                <h1 className="hero-name">
                    Mitchell Gegich
                </h1>

                <h2 className="hero-title">
                    Software Developer
                </h2>

                <p className="hero-description">
                    {/* Short professional introduction */}
                </p>

                <div className="hero-actions">
                    <a href="#projects" className="hero-button hero-button-primary glow-hover">
                        View Projects
                    </a>

                    <a href="/Mitchell_Gegich_Resume.pdf" className="hero-button hero-button-secondary glow-hover" target="_blank" rel="noreferrer">
                        View Resume
                    </a>
                </div>
            </div>

            <div className="hero-visual">
                <img src={monogram_purple} className="hero-monogram"alt="MG" />
            </div>
        </section>
    )
}

export default Hero;