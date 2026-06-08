import "./Projects.css";
import torek_img from "./../../assets/torek.jpeg"
import fastchow from "./../../assets/fastchow.jpeg"
import evolvax from "./../../assets/evolvax.jpeg"

const projects = [
  {
    title: "Torek Engineering",
    description: "this website is property of evolvax hub",
    image: torek_img,
  },
  {
    title: "Fastchow",
    description:
      "A modern food ordering platform with intuitive navigation and mobile-first design.",
    image: fastchow,
    source: "https://fastchow.vercel.app/",
  },
  {
    title: "Evolvax Website",
    description:
      "this website is property of evolvax",
    image: evolvax,
    source: "https://evolvax-kdgk.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <h2>My Projects</h2>
        <p>
          A selection of websites and applications I've designed and
          developed.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <a href={project.source}>View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;