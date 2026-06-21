import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiAward,
  FiStar,
  FiCode,
  FiBook,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const iconMap = {
  trophy: FiStar,
  code: FiCode,
  scholarship: FiBook,
  award: FiAward,
};

export default function Achievements({ data, openLightbox }) {
  const { achievements } = data;
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
    <section id="achievements" className="section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Achievements</span>
          <h2 className="section-title">Awards & Recognition</h2>
          <p className="section-subtitle">
            Milestones that mark my journey in tech and academics
          </p>
        </div>

        <div className="ach__grid">
          {achievements.map((item, i) => {
            const Icon = iconMap[item.icon] || FiAward;
            return (
              <motion.div
                key={i}
                className="ach__card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="ach__card-icon">
                  <Icon size={24} />
                </div>

                <div className="ach__card-content">
                  <h3 className="ach__card-title">{item.title}</h3>
                  <p className="ach__card-org">{item.organization}</p>
                  <span className="ach__card-year">{item.year}</span>
                  <p className="ach__card-desc">{item.description}</p>
                </div>

                {item.images && item.images.length > 0 && (
                  <div className="ach__card-gallery">
                    <div className="ach__slider">
                      <img
                        src={item.images[activeSlide[i] || 0]}
                        alt={item.title}
                        className="ach__slider-img"
                        loading="lazy"
                        onClick={() =>
                          openLightbox(item.images, activeSlide[i] || 0)
                        }
                      />
                      {item.images.length > 1 && (
                        <>
                          <button
                            className="ach__slider-btn ach__slider-btn--prev"
                            onClick={() => prevSlide(i, item.images.length)}
                          >
                            <FiChevronLeft size={16} />
                          </button>
                          <button
                            className="ach__slider-btn ach__slider-btn--next"
                            onClick={() => nextSlide(i, item.images.length)}
                          >
                            <FiChevronRight size={16} />
                          </button>
                          <div className="ach__slider-dots">
                            {item.images.map((_, j) => (
                              <span
                                key={j}
                                className={`ach__slider-dot ${
                                  j === (activeSlide[i] || 0)
                                    ? "ach__slider-dot--active"
                                    : ""
                                }`}
                                onClick={() =>
                                  setActiveSlide((prev) => ({
                                    ...prev,
                                    [i]: j,
                                  }))
                                }
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .ach__grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .ach__card {
          padding: 28px;
          display: flex;
          flex-direction: column;
        }

        .ach__card-icon {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background: rgba(10, 25, 47, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--navy);
          margin-bottom: 20px;
        }

        .ach__card-content {
          flex: 1;
        }

        .ach__card-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 6px;
        }

        .ach__card-org {
          font-size: 0.88rem;
          color: var(--text-secondary);
          margin-bottom: 4px;
        }

        .ach__card-year {
          display: inline-block;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--accent-blue);
          margin-bottom: 12px;
        }

        .ach__card-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .ach__card-gallery {
          margin-top: 16px;
        }

        .ach__slider {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
        }

        .ach__slider-img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .ach__slider-img:hover {
          transform: scale(1.02);
        }

        .ach__slider-btn {
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

        .ach__slider-btn:hover {
          background: var(--white);
          transform: translateY(-50%) scale(1.1);
        }

        .ach__slider-btn--prev {
          left: 8px;
        }

        .ach__slider-btn--next {
          right: 8px;
        }

        .ach__slider-dots {
          position: absolute;
          bottom: 8px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 6px;
        }

        .ach__slider-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .ach__slider-dot--active {
          background: var(--white);
          transform: scale(1.2);
        }

        @media (max-width: 768px) {
          .ach__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
