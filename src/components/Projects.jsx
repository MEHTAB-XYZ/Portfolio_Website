import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "AI Mock Interview App",
      description: "Built an interview practice app that generates and ranks technical questions tailored to user input. Implemented video response recording with instant AI feedback.",
      tech: ["React.js", "Firebase", "Gemini API"],
      links: { github: "https://github.com/MEHTAB-XYZ/AI-Mock-Interview", demo: "#" }
    },
    {
      title: "SnapNotes",
      description: "AI-powered tool converting images and screenshots into structured notes with math rendering. Enabled PDF export and multi-image support.",
      tech: ["React.js", "FastAPI", "Gemini API"],
      links: { github: "https://github.com/MEHTAB-XYZ/SnapNotes", demo: "#" }
    },
    {
      title: "EV Charging Demand Forecast",
      description: "Interactive dashboard to forecast EV charging demand using Prophet ML model. Features overload analysis and solar integration suitability.",
      tech: ["React", "Flask", "Prophet ML"],
      links: { github: "https://github.com/MEHTAB-XYZ/Infosys-Hackathon-Final", demo: "#" }
    },
    {
      title: "British Airways Virtual Training",
      description: "Conducted sentiment analysis on 10,000+ airline reviews. Built a booking behavior prediction model analyzing customer attributes.",
      tech: ["Python", "Scikit-learn", "NLP"],
      links: { github: "https://github.com/MEHTAB-XYZ/BritishAirways-VirtualInternship", demo: "#" }
    },
    {
      title: "Legal Judgment Digitizer",
      description: "A legal judgment digitizer and seach assistant that indexes 1000+ court cases documents using semantic search, metadata filters, and a chatbot interface for natural language queries.",
      tech: ["Python", "FAISS", "Streamlit", "NLP"],
      links: { github: "https://github.com/MEHTAB-XYZ/LegalDocumentDigitization-InnovateXHackathon", demo: "#" }
    },
    {
      title: "Face Emotion Detector",
      description: "A project to detect the Face Emotion using deep learning libraries tensorflow, keras and Open CV for realtime image processing",
      tech: ["Python", "Tensorflow", "Keras", "OpenCV"],
      links: { github: "https://github.com/MEHTAB-XYZ/FaceEmotionDetector", demo: "#" }
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="card-header">
                <div className="folder-icon">
                  <FaFolder />
                </div>
                <div className="project-links">
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></a>
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <div className="project-description">
                <p>{project.description}</p>
              </div>

              <ul className="project-tech-list">
                {project.tech.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
