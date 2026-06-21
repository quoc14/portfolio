import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiPhone,
  FiMapPin,
  FiCopy,
  FiCheck,
} from "react-icons/fi";

export default function Contact({ data }) {
  const { contact } = data;
  const [copied, setCopied] = useState("");

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(label);
      setTimeout(() => setCopied(""), 2000);
    });
  };

  const contactItems = [
    {
      icon: FiMail,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      copyable: true,
    },
    {
      icon: FiGithub,
      label: "GitHub",
      value: contact.github ? contact.github.replace("https://", "") : "",
      href: contact.github,
      copyable: true,
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      value: contact.linkedin ? contact.linkedin.replace("https://", "") : "",
      href: contact.linkedin,
      copyable: false,
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: contact.phone,
      href: contact.phone ? `tel:${contact.phone}` : "",
      copyable: true,
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: contact.location,
      href: null,
      copyable: false,
    },
  ].filter((item) => item.value);

  return (
    <section id="contact" className="section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div className="contact__grid">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="contact__availability">
              <span className="contact__availability-dot" />
              <span>{contact.availability}</span>
            </div>

            <div className="contact__items">
              {contactItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    className="contact__item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <div className="contact__item-icon">
                      <Icon size={20} />
                    </div>
                    <div className="contact__item-content">
                      <span className="contact__item-label">{item.label}</span>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="contact__item-value"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="contact__item-value">
                          {item.value}
                        </span>
                      )}
                    </div>
                    {item.copyable && (
                      <button
                        className="contact__copy-btn"
                        onClick={() => copyToClipboard(item.value, item.label)}
                        title="Copy to clipboard"
                      >
                        {copied === item.label ? (
                          <FiCheck size={16} />
                        ) : (
                          <FiCopy size={16} />
                        )}
                      </button>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="contact__cta"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="contact__cta-card">
              <h3 className="contact__cta-title">Let's Work Together</h3>
              <p className="contact__cta-desc">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="btn btn-primary"
                style={{ width: "fit-content" }}
              >
                <FiMail size={16} />
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact__grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 48px;
          align-items: start;
        }

        .contact__availability {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--navy);
          margin-bottom: 32px;
        }

        .contact__availability-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #22c55e;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
          70% { box-shadow: 0 0 0 8px rgba(34, 197, 94, 0); }
          100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
        }

        .contact__items {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact__item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 20px;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: var(--radius-lg);
          transition: all var(--transition-base);
        }

        .contact__item:hover {
          border-color: var(--navy);
          box-shadow: var(--shadow-md);
        }

        .contact__item-icon {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: rgba(10, 25, 47, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--navy);
          flex-shrink: 0;
        }

        .contact__item-content {
          flex: 1;
          min-width: 0;
        }

        .contact__item-label {
          display: block;
          font-size: 0.78rem;
          font-weight: 500;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 2px;
        }

        .contact__item-value {
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--navy);
          word-break: break-all;
        }

        a.contact__item-value:hover {
          color: var(--accent-blue);
        }

        .contact__copy-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          color: var(--text-muted);
          transition: all var(--transition-fast);
          flex-shrink: 0;
        }

        .contact__copy-btn:hover {
          background: rgba(10, 25, 47, 0.06);
          color: var(--navy);
        }

        .contact__cta-card {
          background: var(--navy);
          border-radius: var(--radius-xl);
          padding: 48px 36px;
          text-align: center;
          color: var(--white);
        }

        .contact__cta-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .contact__cta-desc {
          font-size: 0.95rem;
          color: var(--slate);
          line-height: 1.7;
          margin-bottom: 28px;
        }

        @media (max-width: 768px) {
          .contact__grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .contact__cta-card {
            padding: 32px 24px;
          }
        }
      `}</style>
    </section>
  );
}
