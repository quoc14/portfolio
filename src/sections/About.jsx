import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

export default function About({ data }) {
  const { about, education } = data;

  return (
    <section id="about" className="section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Get to Know Me</h2>
          <p className="section-subtitle">
            A brief overview of my journey and what drives me
          </p>
        </div>

        <div className="about__grid">
          <motion.div
            className="about__summary"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="about__text">{about.summary}</p>

            <div className="about__highlights">
              {about.highlights.map((item, i) => (
                <motion.div
                  key={i}
                  className="about__highlight"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <FiCheckCircle className="about__highlight-icon" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about__timeline"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="about__timeline-heading">Education</h3>
            {education.map((edu, i) => (
              <div key={i} className="about__timeline-item">
                <div className="about__timeline-dot" />
                <div className="about__timeline-content">
                  <span className="about__timeline-date">
                    {edu.startDate} — {edu.endDate}
                  </span>
                  <h4 className="about__timeline-title">{edu.degree}</h4>
                  <p className="about__timeline-org">{edu.university}</p>
                  <p className="about__timeline-desc">{edu.description}</p>
                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="about__timeline-tags">
                      {edu.achievements.map((a, j) => (
                        <span key={j} className="tag">
                          {a}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .about__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }

        .about__text {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 32px;
        }

        .about__highlights {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .about__highlight {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.95rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        .about__highlight-icon {
          color: var(--accent-blue);
          flex-shrink: 0;
          font-size: 1.1rem;
        }

        .about__timeline {
          position: relative;
          padding-left: 32px;
        }

        .about__timeline::before {
          content: '';
          position: absolute;
          left: 7px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--card-border);
        }

        .about__timeline-heading {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 24px;
        }

        .about__timeline-item {
          position: relative;
          padding-bottom: 32px;
        }

        .about__timeline-item:last-child {
          padding-bottom: 0;
        }

        .about__timeline-dot {
          position: absolute;
          left: -29px;
          top: 4px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--navy);
          border: 2px solid var(--white);
          box-shadow: 0 0 0 3px rgba(10, 25, 47, 0.15);
        }

        .about__timeline-content {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: var(--radius-lg);
          padding: 24px;
        }

        .about__timeline-date {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--accent-blue);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .about__timeline-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--navy);
          margin-top: 8px;
          margin-bottom: 4px;
        }

        .about__timeline-org {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 8px;
        }

        .about__timeline-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 12px;
        }

        .about__timeline-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        @media (max-width: 768px) {
          .about__grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  );
}
