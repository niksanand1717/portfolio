import { ProjectsContainer } from "../styles/ProjectsStyles";

function Projects() {
  return (
    <ProjectsContainer>
      <h2>Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <h3>The Soul Sync</h3>
          <p>
            India&apos;s innovative matchmaking platform for urban
            professionals.
          </p>
        </div>
        <div className="project-card">
          <h3>Competition Tracking Web App</h3>
          <p>
            To track competition of DS group products in market with automatic
            report generation
          </p>
        </div>
        <div className="project-card">
          <h3>Hook Cards</h3>
          <p>The Smart NFC-enabled Digital Business Card</p>
        </div>

        <div className="project-card">
          <h3>Coding Ninjas Stop Watch</h3>
          <p>
            Made a Stopwatch using HTML, CSS and vanilla JavaScript as per CN
            requirements.
          </p>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </ProjectsContainer>
  );
}

export default Projects;
