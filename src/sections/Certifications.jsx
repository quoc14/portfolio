import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiEye, FiDownload, FiExternalLink, FiCalendar } from "react-icons/fi";

export default function Certifications({ data, openLightbox }) {
  const { certifications, certificationCategories } = data;
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCerts =
    activeFilter === "All"
      ? certifications
      : activeFilter === "Others"
      ? certifications.filter(
          (c) =>
            !["HackerRank", "Coursera", "Udemy", "Code.org", "TOEIC"].includes(
              c.category
            )
        )
      : certifications.filter((c) => c.category === activeFilter);

  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Certifications</span>
          <h2 className="section-title">Professional Credentials</h2>
          <p className="section-subtitle">
            Verified skills and professional certifications
          </p>
        </div>

        <div className="filter-group">
          {certificationCategories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div className="cert__grid" layout>
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert, i) => (
              <motion.div
                key={cert.title}
                className="cert__card card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                layout
              >
                <div
                  className="cert__card-image"
                  onClick={() => openLightbox([cert.image])}
                >
                  <img src={cert.image} alt={cert.title} loading="lazy" />
                  <div className="cert__card-overlay">
                    <FiEye size={20} />
                    <span>View</span>
                  </div>
                </div>

                <div className="cert__card-body">
                  <span className="cert__card-category">{cert.category}</span>
                  <h3 className="cert__card-title">{cert.title}</h3>
                  <p className="cert__card-issuer">{cert.issuer}</p>
                  <div className="cert__card-date">
                    <FiCalendar size={13} />
                    <span>{cert.issueDate}</span>
                  </div>

                  <div className="cert__card-actions">
                    <button
                      className="btn btn-sm btn-ghost"
                      onClick={() => openLightbox([cert.image])}
                    >
                      <FiEye size={14} />
                      View
                    </button>
                    <a
                      href={cert.image}
                      download
                      className="btn btn-sm btn-ghost"
                    >
                      <FiDownload size={14} />
                      Download
                    </a>
                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-primary"
                      >
                        <FiExternalLink size={14} />
                        Verify
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        .cert__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .cert__card {
          display: flex;
          flex-direction: column;
        }

        .cert__card-image {
          position: relative;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          cursor: pointer;
        }

        .cert__card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .cert__card-image:hover img {
          transform: scale(1.05);
        }

        .cert__card-overlay {
          position: absolute;
          inset: 0;
          background: rgba(10, 25, 47, 0.5);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          color: white;
          font-size: 0.85rem;
          font-weight: 500;
          opacity: 0;
          transition: opacity var(--transition-base);
        }

        .cert__card-image:hover .cert__card-overlay {
          opacity: 1;
        }

        .cert__card-body {
          padding: 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .cert__card-category {
          font-size: 0.72rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--accent-blue);
          margin-bottom: 8px;
        }

        .cert__card-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 4px;
          line-height: 1.3;
        }

        .cert__card-issuer {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 8px;
        }

        .cert__card-date {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 16px;
        }

        .cert__card-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: auto;
        }

        @media (max-width: 1024px) {
          .cert__grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .cert__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
