import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery({ data, openLightbox }) {
  const { gallery } = data;
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredPhotos =
    activeFilter === "All"
      ? gallery.photos
      : gallery.photos.filter((p) => p.category === activeFilter);

  return (
    <section id="gallery" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Gallery</span>
          <h2 className="section-title">Photo Gallery</h2>
          <p className="section-subtitle">
            Moments from competitions, work, and achievements
          </p>
        </div>

        <div className="filter-group">
          {gallery.categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="gallery__masonry">
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo, i) => (
              <motion.div
                key={photo.src}
                className={`gallery__item gallery__item--${(i % 3) + 1}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                layout
                onClick={() => {
                  const images = filteredPhotos.map((p) => p.src);
                  openLightbox(images, i);
                }}
              >
                <img src={photo.src} alt={photo.title} loading="lazy" />
                <div className="gallery__item-overlay">
                  <span className="gallery__item-title">{photo.title}</span>
                  <span className="gallery__item-category">
                    {photo.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        .gallery__masonry {
          columns: 3;
          column-gap: 16px;
        }

        .gallery__item {
          break-inside: avoid;
          margin-bottom: 16px;
          border-radius: var(--radius-md);
          overflow: hidden;
          position: relative;
          cursor: pointer;
        }

        .gallery__item img {
          width: 100%;
          display: block;
          transition: transform 0.4s ease;
        }

        .gallery__item--1 img {
          aspect-ratio: 4 / 3;
          object-fit: cover;
        }

        .gallery__item--2 img {
          aspect-ratio: 3 / 4;
          object-fit: cover;
        }

        .gallery__item--3 img {
          aspect-ratio: 1 / 1;
          object-fit: cover;
        }

        .gallery__item:hover img {
          transform: scale(1.05);
        }

        .gallery__item-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(10, 25, 47, 0.8) 0%,
            transparent 60%
          );
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 16px;
          opacity: 0;
          transition: opacity var(--transition-base);
        }

        .gallery__item:hover .gallery__item-overlay {
          opacity: 1;
        }

        .gallery__item-title {
          color: var(--white);
          font-size: 0.9rem;
          font-weight: 600;
        }

        .gallery__item-category {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.78rem;
        }

        @media (max-width: 1024px) {
          .gallery__masonry {
            columns: 2;
          }
        }

        @media (max-width: 640px) {
          .gallery__masonry {
            columns: 2;
            column-gap: 8px;
          }

          .gallery__item {
            margin-bottom: 8px;
          }

          .gallery__item-overlay {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
