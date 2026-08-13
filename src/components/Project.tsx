import AccordionGallery from "./effects/AccordionGallery";
import BorderGlow from "./effects/BorderGlow";
import './Project.css';

type ProjectImage = {
  image: string;
  label: string;
  link?: string;
};

type ProjectProps = {
  title: string;
  description: string;
  technologies: string[];
  images: ProjectImage[];
  githubUrl?: string;
  liveUrl?: string;
};

function Project({
  title,
  description,
  technologies,
  images,
  githubUrl,
  liveUrl,
}: ProjectProps) {
  return (
    <article className="project">

  <div className="project-info">
    <h3 className="project-title">{title}</h3>

    <p className="project-description">
      {description}
    </p>

    <div className="project-technologies">
      {technologies.map((technology) => (
        <BorderGlow 
        edgeSensitivity={0}
        glowColor="40 80 80"
        backgroundColor="#120F17"
        borderRadius={8}
        glowRadius={40}
        glowIntensity={1}
        coneSpread={25}
        animated={true}
        colors={['#c084fc', '#f472b6', '#38bdf8']}>

        <span
          key={technology}
          className="project-technology"
        >
          {technology}
        </span>

        </BorderGlow>
      ))}
    </div>
  </div>

  {images && images.length > 0 && (
    <div className="project-gallery">
      <AccordionGallery
        items={images}
        defaultIndex={2}
        expandRatio={0.52}
        trigger="hover"
        accentColor="#ffffff"
        overlayColor="#060010"
        textColor="#ffffff"
        grayscale
        showLabels
        duration={0.6}
        ease="power3.out"
        parallax={0.5}
        tilt={8}
        stagger={0.06}
        height={460}
        gap={10}
        radius={16}
        orientation="horizontal"
      />
    </div>
  )}

  <div className="project-links">
    {githubUrl && (
      <a
        className="project-link"
        href={githubUrl}
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
    )}

    {liveUrl && (
      <a
        className="project-link"
        href={liveUrl}
        target="_blank"
        rel="noreferrer"
      >
        View Project
      </a>
    )}
  </div>

</article>
  );
}

export default Project;