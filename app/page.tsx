const projects = [
  {
    id: 1,
    title: "Coming Soon",
    description: "My next vibe coding project. Stay tuned.",
    tag: "In Progress",
    url: "#",
  },
  {
    id: 2,
    title: "Coming Soon",
    description: "Something fun is in the works.",
    tag: "In Progress",
    url: "#",
  },
  {
    id: 3,
    title: "Coming Soon",
    description: "More to come here.",
    tag: "In Progress",
    url: "#",
  },
];

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background-color: #f7f4ef;
          color: #1a1a1a;
          font-family: 'DM Sans', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2rem 0;
          border-bottom: 1px solid #e0dbd2;
          margin-bottom: 5rem;
        }

        .site-label {
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #888;
        }

        .header-right a {
          font-size: 0.9rem;
          color: #1a1a1a;
          text-decoration: none;
          border-bottom: 1px solid #1a1a1a;
          padding-bottom: 1px;
        }

        .hero {
          margin-bottom: 6rem;
        }

        .hero-eyebrow {
          font-family: 'Lora', serif;
          font-style: italic;
          font-size: 1.1rem;
          color: #888;
          margin-bottom: 0.5rem;
        }

        .hero-name {
          font-family: 'Lora', serif;
          font-size: clamp(3rem, 8vw, 5.5rem);
          font-weight: 600;
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin-bottom: 1.5rem;
        }

        .hero-bio {
          font-size: 1.1rem;
          font-weight: 300;
          color: #555;
          max-width: 480px;
          line-height: 1.7;
        }

        .section-label {
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #888;
          margin-bottom: 1.5rem;
        }

        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 1.25rem;
        }

        .project-card {
          display: block;
          text-decoration: none;
          color: inherit;
          background: #fff;
          border: 1px solid #e0dbd2;
          border-radius: 8px;
          padding: 1.75rem;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .project-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.07);
        }

        .project-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }

        .project-tag {
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #aaa;
          background: #f7f4ef;
          padding: 3px 8px;
          border-radius: 20px;
        }

        .project-arrow {
          font-size: 1rem;
          color: #ccc;
        }

        .project-title {
          font-family: 'Lora', serif;
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 0.6rem;
          line-height: 1.3;
        }

        .project-desc {
          font-size: 0.9rem;
          color: #777;
          line-height: 1.6;
          font-weight: 300;
        }

        .footer {
          margin-top: 6rem;
          padding: 2rem 0;
          border-top: 1px solid #e0dbd2;
          font-size: 0.8rem;
          color: #aaa;
        }
      `}</style>

      <main className="container">
        <header className="header">
          <span className="site-label">Portfolio</span>
          <nav>
            <a href="mailto:hello@example.com">Contact</a>
          </nav>
        </header>

        <section className="hero">
          <p className="hero-eyebrow">Hi, I&apos;m</p>
          <h1 className="hero-name">Sarah Hynds</h1>
          <p className="hero-bio">
            MBA candidate at Wharton. Engineer, builder, and AI enthusiast.
            This is a collection of things I&apos;ve made.
          </p>
        </section>

        <section>
          <p className="section-label">Projects</p>
          <div className="project-grid">
            {projects.map((project) => (
              
                key={project.id}
                href={project.url}
                className="project-card"
                target={project.url !== "#" ? "_blank" : undefined}
                rel="noreferrer"
              >
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
          <p>Built by Sarah Hynds · {new Date().getFullYear()}</p>
        </footer>
      </main>
    </>
  );
}