import "./Projects.css";
import Project from "./Project";

// capstone project images
import CapstoneData1 from "../assets/projects/capstone/CapstoneData1.webp";
import CapstoneData2 from "../assets/projects/capstone/CapstoneData2.webp";
import CapstoneData3 from "../assets/projects/capstone/CapstoneData3.webp";
import CapstoneImg1 from "../assets/projects/capstone/CapstoneImg1.webp";
import CapstoneImg2 from "../assets/projects/capstone/CapstoneImg2.webp";
import CapstoneImg3 from "../assets/projects/capstone/CapstoneImg3.webp";

// clash tracker images
import ClashFrontendDashboard from "../assets/projects/clashtracker/ClashFrontendDashboard.webp";
import ClashFrontendDashboardCode from "../assets/projects/clashtracker/ClashFrontendDashboardCode.webp";
import ClashFrontendHomepageCode from "../assets/projects/clashtracker/ClashFrontendHomepageCode.webp";



function Projects() {
  return (
    <section className="projects" id="projects">

      <h1 className="projects-title">Projects</h1>

      <div className="projects-list">

        <Project
          title="Clash Tracker"

          description="
            A full-stack application for retrieving, storing, and
            analyzing Clash Royale player and battle data.
          "

          technologies={[
            "TypeScript",
            "Node.js",
            "Express",
            "MySQL",
            "REST APIs"
          ]}

          images={[
            {
              image: ClashFrontendDashboard,
              label: "Dashboard"
            },
            {
              image: ClashFrontendDashboardCode,
              label: "Dashboard Code"
            },
            {
              image: ClashFrontendHomepageCode,
              label: "Homepage Code"
            }
          ]}

          githubUrl="https://github.com/xStiFFy/CLASH-ROYALE-TRACKER"
        />


        <Project
          title="Earthquake Magnitude Prediction"

          description="
            A machine learning project exploring historical seismic
            data and building models to predict earthquake magnitude.
          "

          technologies={[
            "Python",
            "Jupyter",
            "Machine Learning",
            "Data Analysis"
          ]}

          images={[
            {
              image: CapstoneImg1,
              label: "Introduction"
            },
            {
              image: CapstoneImg2,
              label: "Magnitude Prediction"
            },
            {
              image: CapstoneImg3,
              label: "3D Visualization"
            },
            {
              image: CapstoneData1,
              label: "Linear Regression Results"
            },
            {
              image: CapstoneData2,
              label: "Random Forest Results"
            },
            {
              image: CapstoneData3,
              label: "K-Nearest Neighbors Results"
            }
          ]}

          githubUrl="https://github.com/xStiFFy/CAPSTONE_2026"
        />

      </div>

      <div className="projects-more">
        <span className="projects-more-line" />

        <h1>
          And more coming soon!
        </h1>

        <span className="projects-more-line" />
      </div>

    </section>
  );
}

export default Projects;