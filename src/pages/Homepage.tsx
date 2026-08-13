import About from '../components/About'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import WebThreads from '../components/effects/WebThreads'

function Homepage() {

    return (
        <>
            <div className="website-background">
                <WebThreads
                    color1="#5227FF"
                    color2="#ef3cff"
                    color3="#FFFFFF"
                    speed={0.02}
                    threadCount={6}
                    frequency={5}
                    spread={0.6}
                    taper={.35}
                    position={0.5}
                    fanMode="center"
                    glow={0.014}
                    falloff={0.5}
                    thickness={.8}
                    brightness={0.6}
                    opacity={1}
                    mirror
                    shimmer={false}
                    grain={false}
                    grainIntensity={0.05}
                    mouseInteraction={false}
                    mouseStrength={0.3}
                />
            </div>

            <div className="website-foreground">
                <Navbar />

                <Hero />

                <Projects />

                <About />

                <Contact />
            </div>

            
        </>
    )
}

export default Homepage