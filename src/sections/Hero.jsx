import { motion } from "framer-motion";
import { FiDownload, FiGithub, FiMail, FiChevronDown } from "react-icons/fi";

export default function Hero({ data }) {
  const { profile } = data;

  const handleScrollDown = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero__inner">
          <motion.div
            className="hero__content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="hero__greeting">Hello, I'm</span>
            <h1 className="hero__name">{profile.name}</h1>
            <h2 className="hero__role">
              {profile.role} @{" "}
              <span className="hero__company">{profile.company}</span>
            </h2>
            <p className="hero__intro">{profile.introduction}</p>

            <div className="hero__actions">
              <a href={profile.cvUrl} download className="btn btn-primary">
                <FiDownload size={16} />
                Download CV
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <FiGithub size={16} />
                GitHub
              </a>
              <a href={`mailto:${profile.email}`} className="btn btn-ghost">
                <FiMail size={16} />
                Email
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero__visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="hero__avatar-wrapper">
              <div className="hero__avatar-ring">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="hero__avatar"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.button
          className="hero__scroll"
          onClick={handleScrollDown}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          aria-label="Scroll down"
        >
          <FiChevronDown size={24} />
        </motion.button>
      </div>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 80px;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(87, 203, 255, 0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero::after {
          content: '';
          position: absolute;
          bottom: -30%;
          left: -10%;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(100, 255, 218, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 64px;
          width: 100%;
        }

        .hero__content {
          flex: 1;
          max-width: 600px;
        }

        .hero__greeting {
          display: inline-block;
          font-size: 1rem;
          font-weight: 500;
          color: var(--accent-blue);
          margin-bottom: 12px;
          letter-spacing: 0.02em;
        }

        .hero__name {
          font-size: clamp(2.5rem, 5vw, 3.75rem);
          font-weight: 800;
          color: var(--navy);
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 8px;
        }

        .hero__role {
          font-size: clamp(1.1rem, 2.5vw, 1.5rem);
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 24px;
        }

        .hero__company {
          color: var(--navy);
        }

        .hero__intro {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 36px;
          max-width: 520px;
        }

        .hero__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .hero__visual {
          flex-shrink: 0;
        }

        .hero__avatar-wrapper {
          position: relative;
        }

        .hero__avatar-ring {
          width: 280px;
          height: 280px;
          border-radius: 50%;
          padding: 4px;
          background: linear-gradient(135deg, var(--navy) 0%, var(--accent-blue) 50%, var(--accent) 100%);
        }

        .hero__avatar {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid var(--white);
        }

        .hero__scroll {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          color: var(--text-muted);
          animation: bounce 2s infinite;
          background: none;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
          40% { transform: translateX(-50%) translateY(-8px); }
          60% { transform: translateX(-50%) translateY(-4px); }
        }

        @media (max-width: 768px) {
          .hero {
            padding-top: 120px;
          }

          .hero__inner {
            flex-direction: column-reverse;
            text-align: center;
            gap: 32px;
          }

          .hero__intro {
            max-width: 100%;
          }

          .hero__actions {
            justify-content: center;
          }

          .hero__avatar-ring {
            width: 180px;
            height: 180px;
          }

          .hero__scroll {
            bottom: 20px;
          }
        }
      `}</style>
    </section>
  );
}
