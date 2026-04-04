"use client";

import { useState, useCallback } from "react";

const projects = [
  {
    id: 1,
    title: "spotted.nyc",
    description: "A celebrity sighting tracker for NYC restaurants, powered by Reddit and AI.",
    tag: "Live",
    url: "https://spotted-nyc.vercel.app/",
    emoji: "✦",
    deepScroll: false,
    widePreview: false,
    detail: {
      screenshot: "/spotted-nyc-hero.png",
      overview: "spotted.nyc scrapes celebrity sighting posts from Reddit (r/DeuxMoi), uses Claude AI to extract the restaurant and celebrity mentioned, then surfaces a live feed of where celebs have been spotted around New York City.",
      stack: [
        { label: "Frontend", value: "React + Vite" },
        { label: "Backend", value: "Node.js + Express" },
        { label: "AI", value: "Claude (Anthropic) — sighting extraction" },
        { label: "Database", value: "Supabase (Postgres)" },
        { label: "Data", value: "Reddit via snoowrap + web scraping via Cheerio" },
        { label: "Scheduler", value: "node-cron for automated pipeline runs" },
      ],
    },
  },
  {
    id: 2,
    title: "fund.base",
    description: "A free, AI-powered alternative to Crunchbase for researching VC-backed startups.",
    tag: "Live",
    url: "https://fund-base.vercel.app/company/figma",
    emoji: "✦",
    deepScroll: true,
    widePreview: false,
    detail: {
      screenshot: null,
      overview: "fund.base is a free startup intelligence platform that lets you search and explore VC-backed companies. It uses AI to surface company profiles, funding data, founder bios, and organizational culture insights — all without a paid subscription.",
      stack: [
        { label: "Frontend", value: "Next.js + React" },
        { label: "Styling", value: "Tailwind CSS" },
        { label: "AI", value: "AI-powered company data extraction" },
        { label: "Hosting", value: "Vercel" },
      ],
    },
  },
  {
    id: 3,
    title: "Pulse",
    description: "A weekly news digest across sports, politics, entertainment, tech, and culture — powered by AI.",
    tag: "Live",
    url: "https://pulse-two-tau.vercel.app/week",
    emoji: "✦",
    deepScroll: true,
    widePreview: true,
    detail: {
      screenshot: null,
      overview: "Pulse curates everything you need to know each week across 9 categories — sports, politics, entertainment, tech, culture, and more. It uses Claude AI to summarize and surface what people are talking about, so you never miss a beat.",
      stack: [
        { label: "Frontend", value: "Next.js + React" },
        { label: "Styling", value: "Tailwind CSS" },
        { label: "AI", value: "Claude (Anthropic) — content curation" },
        { label: "Database", value: "Supabase (Postgres)" },
        { label: "Hosting", value: "Vercel" },
      ],
    },
  },
];

type Project = typeof projects[number];

export default function Home() {
  const [modal, setModal] = useState<Project | null>(null);
  const [showCopied, setShowCopied] = useState(false);

  const handleCopyEmail = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("shynds23@gmail.com");
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  }, []);
  return (
    <>
      <style>{`
        @import 
url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Nunito:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; 
padding: 0; }

        body {
          background-color: #fdf8f3;
          color: #2d2416;
          font-family: 'Nunito', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 2.5rem;
          width: 100%;
        }

        .header {
          padding: 2rem 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 1.2rem;
          color: #c17a3a;
          text-decoration: none;
        }

        .nav {
          display: flex;
          gap: 1.5rem;
        }

        .nav a {
          font-size: 1rem;
          font-weight: 600;
          color: #5a4a3a;
          text-decoration: none;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          transition: color 0.2s;
        }

        .nav a:hover { color: #c17a3a; }

        .hero {
          padding: 5rem 0 0.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 3rem;
        }

        .hero-content {
          flex: 1;
        }

        .hero-photo {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          object-fit: cover;
          object-position: center top;
          flex-shrink: 0;
          margin-right: 2rem;
          box-shadow: 0 0 0 4px #fdf8f3, 0 0 0 7px #c17a3a, 0 8px 24px rgba(193,122,58,0.15);
        }

        @media (max-width: 600px) {
          .hero { flex-direction: column-reverse; align-items: flex-start; }
          .hero-photo { width: 120px; height: 120px; }
        }

        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #c17a3a;
          background: #fdefd9;
          padding: 5px 12px;
          border-radius: 20px;
          margin-bottom: 1.5rem;
        }

        .hero-tag-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #c17a3a;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        .hero-name {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3.5rem, 7vw, 6rem);
          font-weight: 700;
          line-height: 1;
          letter-spacing: -0.02em;
          color: #2d2416;
          margin-bottom: 1.5rem;
        }

        .hero-name em {
          font-style: italic;
          color: #c17a3a;
        }

        .hero-bio {
          font-size: 1.1rem;
          font-weight: 300;
          color: #7a6a58;
          line-height: 1.8;
          max-width: 440px;
        }

        .projects-section {
          padding: 4rem 0 6rem;
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .section-label {
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: #8a7a68;
          white-space: nowrap;
        }

        .section-line {
          flex: 1;
          height: 1px;
          background: #ede5d8;
        }

        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .project-card {
          display: block;
          text-decoration: none;
          color: inherit;
          background: #fff;
          border: 1px solid #ede5d8;
          border-radius: 16px;
          padding: 0;
          transition: transform 0.25s ease, box-shadow 0.25s ease,
border-color 0.25s ease;
          position: relative;
          overflow: hidden;
        }

        .project-card-inner {
          padding: 2rem;
        }

        .project-thumbnail {
          width: 100%;
          height: 160px;
          object-fit: cover;
          object-position: center top;
          display: block;
          border-bottom: 1px solid #ede5d8;
        }

        .project-iframe-wrapper {
          width: 100%;
          height: 240px;
          overflow: hidden;
          border-top: 1px solid #ede5d8;
          position: relative;
          display: flex;
          justify-content: center;
          background: #fff;
        }

        .project-iframe-wrapper::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 40px;
          background: linear-gradient(transparent, #fff);
          pointer-events: none;
          z-index: 2;
        }

        .project-iframe-inner {
          width: 375px;
          height: 812px;
          transform: scale(0.82) translateY(-36px);
          transform-origin: top center;
          pointer-events: none;
          animation: scrollPreview 24s ease-in-out infinite;
          border-radius: 20px;
          overflow: hidden;
        }

        .project-iframe-inner.scroll-deep {
          height: 2400px;
          animation: scrollPreviewDeep 24s ease-in-out infinite;
        }

        .project-iframe-inner.wide-preview {
          width: 1100px;
          height: 1600px;
          transform: scale(0.28) translateY(0px);
          transform-origin: top center;
          animation: scrollPreviewWide 24s ease-in-out infinite;
        }

        @keyframes scrollPreview {
          0%, 10% { transform: scale(0.82) translateY(-36px); }
          42%, 58% { transform: scale(0.82) translateY(-560px); }
          90%, 100% { transform: scale(0.82) translateY(-36px); }
        }

        @keyframes scrollPreviewDeep {
          0%, 8% { transform: scale(0.82) translateY(-36px); }
          45%, 55% { transform: scale(0.82) translateY(-2100px); }
          92%, 100% { transform: scale(0.82) translateY(-36px); }
        }

        @keyframes scrollPreviewWide {
          0%, 8% { transform: scale(0.28) translateY(0px); }
          45%, 55% { transform: scale(0.28) translateY(-1000px); }
          92%, 100% { transform: scale(0.28) translateY(0px); }
        }

        .project-iframe-inner iframe {
          width: calc(100% + 40px);
          height: 100%;
          border: none;
        }

        .project-iframe-inner.wide-preview iframe {
          width: 100%;
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #c17a3a, #e8a86b);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(193,122,58,0.1);
          border-color: #e8cfa8;
        }

        .project-card:hover::before {
          transform: scaleX(1);
        }

        .project-emoji {
          font-size: 1.5rem;
          margin-bottom: 1.25rem;
          display: block;
          color: #c17a3a;
        }

        .project-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .project-tag {
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #c17a3a;
          background: #fdefd9;
          padding: 3px 10px;
          border-radius: 20px;
        }

        .project-arrow {
          font-size: 1rem;
          color: #d4bfa8;
          transition: color 0.2s, transform 0.2s;
          display: inline-block;
        }

        .project-card:hover .project-arrow {
          color: #c17a3a;
          transform: translate(2px, -2px);
        }

        .project-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.35rem;
          font-weight: 700;
          margin-bottom: 0.6rem;
          color: #2d2416;
        }

        .project-desc {
          font-size: 0.9rem;
          color: #9a8878;
          line-height: 1.7;
        }

        .footer {
          margin-top: auto;
          padding: 2rem 0;
          border-top: 1px solid #ede5d8;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-left {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 1rem;
          color: #c17a3a;
        }

        .footer-right {
          font-size: 0.8rem;
          color: #b8a898;
        }

        @media (max-width: 600px) {
          .container { padding: 0 1.5rem; }
        }

        .email-toast {
          position: fixed;
          top: 2rem;
          left: 50%;
          transform: translateX(-50%);
          background: #fff;
          color: #2d2416;
          padding: 14px 28px;
          border-radius: 16px;
          font-size: 0.95rem;
          font-weight: 500;
          z-index: 200;
          animation: toastIn 0.3s ease, toastOut 0.3s ease 1.7s forwards;
          box-shadow: 0 8px 32px rgba(193, 122, 58, 0.15), 0 2px 8px rgba(0,0,0,0.06);
          border: 1px solid #ede5d8;
        }

        .email-toast span {
          color: #c17a3a;
          font-weight: 600;
        }

        @keyframes toastIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-10px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }

        @keyframes toastOut {
          from { opacity: 1; transform: translateX(-50%) translateY(0); }
          to { opacity: 0; transform: translateX(-50%) translateY(-10px); }
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(45, 36, 22, 0.5);
          backdrop-filter: blur(4px);
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .modal {
          background: #fdf8f3;
          border-radius: 20px;
          max-width: 640px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          border: 1px solid #ede5d8;
          box-shadow: 0 24px 64px rgba(45, 36, 22, 0.2);
        }

        .modal-screenshot {
          width: 100%;
          border-radius: 16px 16px 0 0;
          display: block;
          object-fit: cover;
          max-height: 280px;
        }

        .modal-iframe-wrapper {
          width: 100%;
          height: 260px;
          overflow: hidden;
          border-radius: 0 0 20px 20px;
          border-top: 1px solid #ede5d8;
          position: relative;
          display: flex;
          justify-content: center;
          background: #fff;
        }

        .modal-iframe-wrapper::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 40px;
          background: linear-gradient(transparent, #fff);
          pointer-events: none;
          z-index: 2;
        }

        .modal-iframe-inner {
          width: 375px;
          height: 812px;
          transform: scale(0.82) translateY(-36px);
          transform-origin: top center;
          pointer-events: none;
          border-radius: 20px;
          overflow: hidden;
        }

        .modal-iframe-inner.scroll-deep {
          height: 2400px;
        }

        .modal-iframe-inner.wide-preview {
          width: 1100px;
          height: 1600px;
          transform: scale(0.58) translateY(0px);
          transform-origin: top center;
        }

        .modal-iframe-scroll {
          animation: scrollPreviewModal 28s ease-in-out infinite;
        }

        .modal-iframe-scroll.scroll-deep {
          animation: scrollPreviewModalDeep 28s ease-in-out infinite;
        }

        .modal-iframe-scroll.wide-preview {
          animation: scrollPreviewModalWide 28s ease-in-out infinite;
        }

        @keyframes scrollPreviewModal {
          0%, 10% { transform: scale(0.82) translateY(-36px); }
          42%, 58% { transform: scale(0.82) translateY(-560px); }
          90%, 100% { transform: scale(0.82) translateY(-36px); }
        }

        @keyframes scrollPreviewModalDeep {
          0%, 8% { transform: scale(0.82) translateY(-36px); }
          45%, 55% { transform: scale(0.82) translateY(-2100px); }
          92%, 100% { transform: scale(0.82) translateY(-36px); }
        }

        @keyframes scrollPreviewModalWide {
          0%, 8% { transform: scale(0.58) translateY(0px); }
          45%, 55% { transform: scale(0.58) translateY(-1000px); }
          92%, 100% { transform: scale(0.58) translateY(0px); }
        }

        .modal-iframe-inner iframe {
          width: calc(100% + 40px);
          height: 100%;
          border: none;
        }

        .modal-iframe-inner.wide-preview iframe {
          width: 100%;
        }

        .modal-body {
          padding: 2rem;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .modal-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: #2d2416;
        }

        .modal-close {
          background: none;
          border: none;
          font-size: 1.4rem;
          color: #b8a898;
          cursor: pointer;
          padding: 0;
          line-height: 1;
          transition: color 0.2s;
        }

        .modal-close:hover { color: #c17a3a; }

        .modal-overview {
          font-size: 0.95rem;
          color: #7a6a58;
          line-height: 1.75;
          margin-bottom: 1.5rem;
        }

        .modal-stack-label {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #b8a898;
          margin-bottom: 0.75rem;
        }

        .modal-stack {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.75rem;
        }

        .modal-stack-row {
          display: flex;
          gap: 0.75rem;
          font-size: 0.875rem;
        }

        .modal-stack-key {
          color: #b8a898;
          min-width: 90px;
          font-weight: 500;
        }

        .modal-stack-val {
          color: #2d2416;
        }

        .modal-visit {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #c17a3a;
          color: #fff;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          padding: 10px 20px;
          border-radius: 24px;
          text-decoration: none;
          transition: background 0.2s;
        }

        .modal-visit:hover { background: #a8662e; }
      `}</style>

      <div className="page">
        <div className="container">
          <header className="header">
            <a href="/" className="logo">sh.</a>
            <nav className="nav">
              <a href="https://github.com/shynds-projects" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/sarah-hynds/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="#" onClick={handleCopyEmail}>Contact</a>
            </nav>
          </header>

          <section className="hero">
            <div className="hero-content">
              <div className="hero-tag">
                <span className="hero-tag-dot"></span>
                Vibe Coding Projects
              </div>
              <h1 className="hero-name">
                Sarah<br /><em>Hynds</em>
              </h1>
              <p className="hero-bio">
                MBA candidate at Wharton. Here&apos;s a collection of things I&apos;ve made.
              </p>
            </div>
            <img src="/headshot.jpeg" alt="Sarah Hynds" className="hero-photo" />
          </section>

          <section className="projects-section">
            <div className="section-header">
              <span className="section-label">Projects</span>
              <div className="section-line"></div>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="project-card"
                  onClick={() => project.detail && setModal(project)}
                  style={{ cursor: project.detail ? "pointer" : "default" }}
                >
                  <div className="project-card-inner">
                    <span className="project-emoji">{project.emoji}</span>
                    <div className="project-card-top">
                      <span className="project-tag">{project.tag}</span>
                      <span className="project-arrow">{project.detail ? "↗" : ""}</span>
                    </div>
                    <h2 className="project-title">{project.title}</h2>
                    <p className="project-desc">{project.description}</p>
                  </div>
                  {project.url && project.url !== "#" && project.detail ? (
                    <div className="project-iframe-wrapper">
                      <div className={`project-iframe-inner ${project.widePreview ? "wide-preview" : project.deepScroll ? "scroll-deep" : ""}`}>
                        <iframe
                          src={project.url}
                          title={project.title}
                          loading="lazy"
                          tabIndex={-1}
                        />
                      </div>
                    </div>
                  ) : project.detail?.screenshot ? (
                    <img
                      src={project.detail.screenshot}
                      alt={project.title}
                      className="project-thumbnail"
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </section>

          <footer className="footer">
            <span className="footer-left">Sarah Hynds</span>
            <span className="footer-right">Built with love · {new
Date().getFullYear()}</span>
          </footer>
        </div>
      </div>

      {showCopied && (
        <div className="email-toast">
          🥂 <span>shynds23@gmail.com</span> — copied!
        </div>
      )}

      {modal && modal.detail && (
        <div className="modal-overlay" onClick={() => setModal(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-body">
              <div className="modal-header">
                <h2 className="modal-title">{modal.title}</h2>
                <button className="modal-close" onClick={() => setModal(null)}>✕</button>
              </div>
              <p className="modal-overview">{modal.detail.overview}</p>
              <div className="modal-stack-label">Tech Stack</div>
              <div className="modal-stack">
                {modal.detail.stack.map((row) => (
                  <div key={row.label} className="modal-stack-row">
                    <span className="modal-stack-key">{row.label}</span>
                    <span className="modal-stack-val">{row.value}</span>
                  </div>
                ))}
              </div>
              <a href={modal.url} target="_blank" rel="noreferrer" className="modal-visit">
                Visit site ↗
              </a>
            </div>
            {modal.url && modal.url !== "#" ? (
              <div className="modal-iframe-wrapper">
                <div className={`modal-iframe-inner modal-iframe-scroll ${modal.widePreview ? "wide-preview" : modal.deepScroll ? "scroll-deep" : ""}`}>
                  <iframe
                    src={modal.url}
                    title={modal.title}
                    loading="lazy"
                    tabIndex={-1}
                  />
                </div>
              </div>
            ) : modal.detail.screenshot ? (
              <img src={modal.detail.screenshot} alt={modal.title} className="modal-screenshot" />
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}
