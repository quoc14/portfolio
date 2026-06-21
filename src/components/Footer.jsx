import { FiGithub, FiMail, FiLinkedin, FiHeart } from "react-icons/fi";

export default function Footer({ data }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <a href="#hero" className="footer__logo">
              <span className="footer__logo-name">quoc</span>
              <span className="footer__logo-suffix">14</span>
            </a>
            <p className="footer__tagline">
              {data.profile.shortIntro.split(" | ").map((part, i) => (
                <span key={i}>
                  {part}
                  {i < data.profile.shortIntro.split(" | ").length - 1 && (
                    <br />
                  )}
                </span>
              ))}
            </p>
          </div>

          <div className="footer__social">
            {data.social.github && (
              <a
                href={data.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
            )}
            {data.social.email && (
              <a
                href={`mailto:${data.social.email}`}
                className="footer__social-link"
                aria-label="Email"
              >
                <FiMail size={20} />
              </a>
            )}
            {data.social.linkedin && (
              <a
                href={data.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
            )}
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {currentYear} {data.profile.name}. Built with{" "}
            <FiHeart
              size={14}
              style={{
                display: "inline",
                verticalAlign: "middle",
                color: "#ef4444",
              }}
            />{" "}
            using React
          </p>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--navy);
          color: var(--slate);
          padding: 48px 0 24px;
        }

        .footer__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 32px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer__logo {
          display: flex;
          align-items: center;
          gap: 2px;
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--white);
          letter-spacing: -0.02em;
          text-decoration: none;
        }

        .footer__logo-name {
          color: var(--white);
        }

        .footer__logo-suffix {
          color: var(--accent-blue);
          font-weight: 600;
        }

        .footer__tagline {
          font-size: 0.85rem;
          color: var(--light-gray);
          margin-top: 8px;
          line-height: 1.5;
        }

        .footer__social {
          display: flex;
          gap: 16px;
        }

        .footer__social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          color: var(--slate);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all var(--transition-base);
        }

        .footer__social-link:hover {
          color: var(--accent);
          border-color: var(--accent);
          transform: translateY(-2px);
        }

        .footer__bottom {
          padding-top: 24px;
          text-align: center;
          font-size: 0.85rem;
          color: var(--dark-slate);
        }

        @media (max-width: 768px) {
          .footer__inner {
            flex-direction: column;
            gap: 24px;
            text-align: center;
          }

          .footer__tagline {
            max-width: 100%;
            white-space: normal;
          }
        }
      `}</style>
    </footer>
  );
}
