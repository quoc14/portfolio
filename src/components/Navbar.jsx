import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar({ data }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">
        <a
          href="#hero"
          className="navbar__logo"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#hero");
          }}
        >
          <span className="navbar__logo-name">quoc</span>
          <span className="navbar__logo-suffix">14</span>
        </a>

        <ul className="navbar__links">
          {data.navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="navbar__toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {data.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="navbar__mobile-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 20px 0;
          transition: all var(--transition-base);
        }

        .navbar--scrolled {
          padding: 12px 0;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--card-border);
          box-shadow: var(--shadow-sm);
        }

        .navbar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar__logo {
          display: flex;
          align-items: center;
          gap: 2px;
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--navy);
          letter-spacing: -0.02em;
          text-decoration: none;
        }

        .navbar__logo-name {
          color: var(--navy);
        }

        .navbar__logo-suffix {
          color: var(--accent-blue);
          font-weight: 600;
        }

        .navbar__links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .navbar__links a {
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: color var(--transition-fast);
          position: relative;
        }

        .navbar__links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--navy);
          transition: width var(--transition-base);
        }

        .navbar__links a:hover {
          color: var(--navy);
        }

        .navbar__links a:hover::after {
          width: 100%;
        }

        .navbar__toggle {
          display: none;
          color: var(--navy);
        }

        .navbar__mobile {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 24px;
          z-index: 999;
        }

        .navbar__mobile-link {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--navy);
          padding: 8px 24px;
          border-radius: var(--radius-md);
          transition: background var(--transition-fast);
        }

        .navbar__mobile-link:hover {
          background: rgba(10, 25, 47, 0.05);
        }

        @media (max-width: 768px) {
          .navbar__links {
            display: none;
          }

          .navbar__toggle {
            display: flex;
            z-index: 1001;
          }
        }
      `}</style>
    </nav>
  );
}
