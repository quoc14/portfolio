import { motion } from "framer-motion";
import { FiBriefcase, FiMapPin } from "react-icons/fi";

export default function Experience({ data, openLightbox }) {
  const { experience } = data;

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Experience</span>
          <h2 className="section-title">Where I've Worked</h2>
          <p className="section-subtitle">
            My professional journey and contributions
          </p>
        </div>

        <div className="exp__timeline">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              className="exp__item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="exp__dot-wrapper">
                <div
                  className={`exp__dot ${
                    exp.current ? "exp__dot--active" : ""
                  }`}
                />
                {i < experience.length - 1 && <div className="exp__line" />}
              </div>

              <div className="exp__card card">
                <div className="exp__card-header">
                  <div className="exp__card-title-row">
                    <FiBriefcase className="exp__card-icon" />
                    <h3 className="exp__card-title">{exp.title}</h3>
                    {exp.current && <span className="exp__badge">Current</span>}
                  </div>
                  <h4 className="exp__card-company">{exp.company}</h4>
                  <div className="exp__card-meta">
                    <span className="exp__card-date">
                      {exp.startDate} — {exp.endDate}
                    </span>
                    {exp.location && (
                      <span className="exp__card-location">
                        <FiMapPin size={13} />
                        {exp.location}
                      </span>
                    )}
                  </div>
                </div>

                <p className="exp__card-desc">{exp.description}</p>

                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="exp__card-tech">
                    {exp.technologies.map((tech, j) => (
                      <span key={j} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {exp.images && exp.images.length > 0 && (
                  <div className="exp__card-images">
                    {exp.images.map((img, j) => (
                      <img
                        key={j}
                        src={img}
                        alt={`${exp.title} ${j + 1}`}
                        className="exp__card-img"
                        loading="lazy"
                        onClick={() => openLightbox(exp.images, j)}
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .exp__timeline {
          max-width: 720px;
          margin: 0 auto;
        }

        .exp__item {
          display: flex;
          gap: 24px;
        }

        .exp__dot-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
        }

        .exp__dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--card-border);
          border: 3px solid var(--white);
          box-shadow: 0 0 0 2px var(--card-border);
          flex-shrink: 0;
          margin-top: 28px;
        }

        .exp__dot--active {
          background: var(--navy);
          box-shadow: 0 0 0 2px var(--navy), 0 0 0 6px rgba(10, 25, 47, 0.15);
        }

        .exp__line {
          width: 2px;
          flex: 1;
          background: var(--card-border);
          margin: 4px 0;
        }

        .exp__card {
          flex: 1;
          margin-bottom: 24px;
        }

        .exp__card-header {
          margin-bottom: 16px;
        }

        .exp__card-title-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 4px;
        }

        .exp__card-icon {
          color: var(--accent-blue);
          flex-shrink: 0;
        }

        .exp__card-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--navy);
        }

        .exp__badge {
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--white);
          background: var(--navy);
          padding: 2px 10px;
          border-radius: var(--radius-full);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .exp__card-company {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 8px;
        }

        .exp__card-meta {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .exp__card-date {
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--accent-blue);
        }

        .exp__card-location {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .exp__card-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 16px;
        }

        .exp__card-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 16px;
        }

        .exp__card-images {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          padding-bottom: 4px;
        }

        .exp__card-img {
          width: 200px;
          height: 140px;
          object-fit: cover;
          border-radius: var(--radius-md);
          flex-shrink: 0;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .exp__card-img:hover {
          transform: scale(1.02);
        }

        @media (max-width: 768px) {
          .exp__dot-wrapper {
            display: none;
          }

          .exp__item {
            gap: 0;
          }
        }
      `}</style>
    </section>
  );
}
