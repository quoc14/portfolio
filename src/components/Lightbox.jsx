import { useState, useEffect, useCallback } from "react";
import {
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiDownload,
  FiExternalLink,
  FiZoomIn,
  FiZoomOut,
} from "react-icons/fi";

export default function Lightbox({ images, currentIndex, onClose }) {
  const [index, setIndex] = useState(currentIndex);
  const [zoomed, setZoomed] = useState(false);
  const [scale, setScale] = useState(1);

  const goNext = useCallback(() => {
    setIndex((prev) => (prev + 1) % images.length);
    setZoomed(false);
    setScale(1);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
    setZoomed(false);
    setScale(1);
  }, [images.length]);

  const handleZoom = useCallback(() => {
    if (zoomed) {
      setZoomed(false);
      setScale(1);
    } else {
      setZoomed(true);
      setScale(2);
    }
  }, [zoomed]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "+" || e.key === "=") {
        setScale((s) => Math.min(s + 0.5, 4));
      }
      if (e.key === "-") {
        setScale((s) => Math.max(s - 0.5, 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, goNext, goPrev]);

  const currentImage = images[index];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      typeof currentImage === "string"
        ? currentImage
        : currentImage.src || currentImage;
    link.download = "image";
    link.target = "_blank";
    link.click();
  };

  const handleOpenOriginal = () => {
    const src =
      typeof currentImage === "string"
        ? currentImage
        : currentImage.src || currentImage;
    window.open(src, "_blank");
  };

  const imageSrc =
    typeof currentImage === "string"
      ? currentImage
      : currentImage.src || currentImage;
  const imageTitle =
    typeof currentImage === "object" ? currentImage.title || "" : "";

  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="lightbox__header">
          <span className="lightbox__title">{imageTitle}</span>
          <span className="lightbox__counter">
            {index + 1} / {images.length}
          </span>
          <div className="lightbox__actions">
            <button
              onClick={handleZoom}
              className="lightbox__btn"
              title={zoomed ? "Zoom out" : "Zoom in"}
            >
              {zoomed ? <FiZoomOut size={18} /> : <FiZoomIn size={18} />}
            </button>
            <button
              onClick={handleDownload}
              className="lightbox__btn"
              title="Download"
            >
              <FiDownload size={18} />
            </button>
            <button
              onClick={handleOpenOriginal}
              className="lightbox__btn"
              title="Open original"
            >
              <FiExternalLink size={18} />
            </button>
            <button
              onClick={onClose}
              className="lightbox__btn lightbox__btn--close"
              title="Close"
            >
              <FiX size={20} />
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="lightbox__image-wrapper">
          <img
            src={imageSrc}
            alt={imageTitle || "Gallery image"}
            className="lightbox__image"
            style={{
              transform: `scale(${scale})`,
              cursor: zoomed ? "zoom-out" : "zoom-in",
            }}
            onClick={handleZoom}
            loading="lazy"
          />
        </div>

        {/* Navigation */}
        {images.length > 1 && (
          <>
            <button
              className="lightbox__nav lightbox__nav--prev"
              onClick={goPrev}
              aria-label="Previous image"
            >
              <FiChevronLeft size={28} />
            </button>
            <button
              className="lightbox__nav lightbox__nav--next"
              onClick={goNext}
              aria-label="Next image"
            >
              <FiChevronRight size={28} />
            </button>
          </>
        )}
      </div>

      <style>{`
        .lightbox {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.92);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .lightbox__content {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .lightbox__header {
          display: flex;
          align-items: center;
          padding: 12px 20px;
          background: rgba(0, 0, 0, 0.5);
          gap: 16px;
          flex-shrink: 0;
        }

        .lightbox__title {
          color: #fff;
          font-size: 0.9rem;
          font-weight: 500;
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .lightbox__counter {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.82rem;
          flex-shrink: 0;
        }

        .lightbox__actions {
          display: flex;
          gap: 4px;
          flex-shrink: 0;
        }

        .lightbox__btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          color: rgba(255, 255, 255, 0.8);
          transition: all var(--transition-fast);
        }

        .lightbox__btn:hover {
          background: rgba(255, 255, 255, 0.15);
          color: #fff;
        }

        .lightbox__btn--close:hover {
          background: rgba(239, 68, 68, 0.6);
        }

        .lightbox__image-wrapper {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 20px;
        }

        .lightbox__image {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          transition: transform 0.3s ease;
          border-radius: 4px;
        }

        .lightbox__nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-base);
          backdrop-filter: blur(4px);
        }

        .lightbox__nav:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-50%) scale(1.05);
        }

        .lightbox__nav--prev {
          left: 16px;
        }

        .lightbox__nav--next {
          right: 16px;
        }

        @media (max-width: 768px) {
          .lightbox__header {
            padding: 10px 12px;
          }

          .lightbox__title {
            font-size: 0.82rem;
          }

          .lightbox__nav {
            width: 40px;
            height: 40px;
          }

          .lightbox__nav--prev {
            left: 8px;
          }

          .lightbox__nav--next {
            right: 8px;
          }

          .lightbox__image-wrapper {
            padding: 8px;
          }
        }
      `}</style>
    </div>
  );
}
