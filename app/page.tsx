const projects = [
  {
    id: 1,
    title: "Coming Soon",
    description: "My next vibe coding project. Stay tuned.",
    tag: "In Progress",
    url: "#",
    emoji: "✦",
  },
  {
    id: 2,
    title: "Coming Soon",
    description: "Something fun is in the works.",
    tag: "In Progress",
    url: "#",
    emoji: "✦",
  },
  {
    id: 3,
    title: "Coming Soon",
    description: "More to come here.",
    tag: "In Progress",
    url: "#",
    emoji: "✦",
  },
];

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Nunito:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

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

        .nav a {
          font-size: 0.85rem;
          font-weight: 500;
          color: #8a7060;
          text-decoration: none;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          transition: color 0.2s;
        }

        .nav a:hover { color: #c17a3a; }

        .hero {
          padding: 5rem 0;
          border-bottom: 1px solid #ede5d8;
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
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #b8a898;
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
          padding: 2rem;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          position: relative;
          overflow: hidden;
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
      `}</style>

      <div className="page">
        <div className="container">
          <header className="header">
            <a href="/" className="logo">sh.</a>
            <nav className="nav">
              <a href="mailto:hello@sarahhynds.com">Contact</a>
            </nav>
          </header>

          <section className="hero">
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
          </section>

          <section className="projects-section">
            <div className="section-header">
              <span className="section-label">Projects</span>
              <div className="section-line"></div>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                
                  key={project.id}
                  href={project.url}
                  className="project-card"
                  target={project.url !== "#" ? "_blank" : undefined}
                  rel="noreferrer"
                >
                  <span className="project-emoji">{project.emoji}</span>
                  <div className="project-card-top">
                    <span className="project-tag">{project.tag}</span>
                    <span className="project-arrow">↗</span>
                  </div>
                  <h2 className="project-title">{project.title}</h2>
                  <p className="project-desc">{project.description}</p>
                </a>
              ))}
            </div>
          </section>

          <footer className="footer">
            <span className="footer-left">Sarah Hynds</span>
            <span className="footer-right">Built with love · {new Date().getFullYear()}</span>
          </footer>
        </div>
      </div>
    </>
  );
}