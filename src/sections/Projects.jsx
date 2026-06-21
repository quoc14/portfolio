import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiChevronLeft,
  FiChevronRight,
  FiStar,
} from "react-icons/fi";

export default function Projects({ data, openLightbox }) {
  const { projects } = data;
  const [activeSlide, setActiveSlide] = useState({});

  const nextSlide = (idx, total) => {
    setActiveSlide((prev) => ({
      ...prev,
      [idx]: ((prev[idx] || 0) + 1) % total,
    }));
  };

  const prevSlide = (idx, total) => {
    setActiveSlide((prev) => ({
      ...prev,
      [idx]: ((prev[idx] || 0) - 1 + total) % total,
    }));
  };

  return (
    <section id="projects" className="section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Projects</span>
          <h2 className="section-title">What I've Built</h2>
          <p className="section-subtitle">
            A selection of projects I've worked on
          </p>
        </div>

        <div className="proj__grid">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="proj__card card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {project.screenshots && project.screenshots.length > 0 && (
                <div className="proj__card-slider">
                  <img
                    src={project.screenshots[activeSlide[i] || 0]}
                    alt={project.title}
                    className="proj__card-img"
                    loading="lazy"
                    onClick={() =>
                      openLightbox(project.screenshots, activeSlide[i] || 0)
                    }
                  />
                  {project.screenshots.length > 1 && (
                    <>
                      <button
                        className="proj__slider-btn proj__slider-btn--prev"
                        onClick={() => prevSlide(i, project.screenshots.length)}
                      >
                        <FiChevronLeft size={16} />
                      </button>
                      <button
                        className="proj__slider-btn proj__slider-btn--next"
                        onClick={() => nextSlide(i, project.screenshots.length)}
                      >
                        <FiChevronRight size={16} />
                      </button>
                    </>
                  )}
                  {project.featured && (
                    <span className="proj__card-featured">
                      <FiStar size={12} />
                      Featured
                    </span>
                  )}
                </div>
              )}

              <div className="proj__card-body">
                <h3 className="proj__card-title">{project.title}</h3>
                <p className="proj__card-desc">{project.description}</p>

                <div className="proj__card-tech">
                  {project.technologies.map((tech, j) => (
                    <span key={j} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="proj__card-links">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-ghost"
                    >
                      <FiGithub size={14} />
                      Source Code
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-primary"
                    >
                      <FiExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .proj__grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .proj__card {
          display: flex;
          flex-direction: column;
        }

        .proj__card-slider {
          position: relative;
          overflow: hidden;
        }

        .proj__card-img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .proj__card-img:hover {
          transform: scale(1.03);
        }

        .proj__slider-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          color: var(--navy);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-md);
          transition: all var(--transition-fast);
        }

        .proj__slider-btn:hover {
          background: var(--white);
          transform: translateY(-50%) scale(1.1);
        }

        .proj__slider-btn--prev {
          left: 8px;
        }

        .proj__slider-btn--next {
          right: 8px;
        }

        .proj__card-featured {
          position: absolute;
          top: 12px;
          right: 12px;
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          background: rgba(10, 25, 47, 0.8);
          color: var(--accent);
          font-size: 0.72rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          backdrop-filter: blur(4px);
        }

        .proj__card-body {
          padding: 24px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .proj__card-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 8px;
        }

        .proj__card-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 16px;
          flex: 1;
        }

        .proj__card-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 16px;
        }

        .proj__card-links {
          display: flex;
          gap: 8px;
        }

        @media (max-width: 768px) {
          .proj__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
