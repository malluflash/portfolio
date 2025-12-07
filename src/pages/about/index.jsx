import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { dataabout, meta, worktimeline, skills, services } from "../../content_option";

const softSkills = [
  "People Management",
  "Operations Management",
  "Technology Implementation",
  "Employee Relations",
  "Performance Management",
  "New Hire Training",
  "Logistics Management",
];

export const About = () => {
  return (
    <HelmetProvider>
      <main className="mx-auto max-w-6xl px-5 py-12">
        <Helmet>
          <meta charSet="utf-8" />
          <title>About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <header className="mb-10 space-y-2">
          <p className="text-xs uppercase tracking-[0.08em] text-secondary">About</p>
          <h1 className="text-4xl sm:text-5xl">ABOUT ME</h1>
          <div className="h-1 w-24 bg-text" />
        </header>

        {/* Top Section: THE JOURNEY SO FAR - Full Width */}
        <section className="mb-12">
          <div className="rounded-2xl border border-grid bg-card/70 p-6 shadow-card">
            <h3 className="text-xl font-semibold text-secondary">{dataabout.title}</h3>
            <p className="mt-3 whitespace-pre-line text-text/80 leading-7">{dataabout.aboutme}</p>
          </div>
        </section>

        {/* Middle Section: SOFT SKILLS and CODING SKILLS - Side by Side */}
        <section className="mb-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-grid bg-card/70 p-6 shadow-card">
            <h3 className="text-xl font-semibold text-secondary">PROFESSIONAL SKILLS</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {softSkills.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-2 text-xs font-bold uppercase tracking-[0.08em] text-text2 shadow-[6px_6px_0_var(--secondary-color)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-grid bg-card/70 p-6 shadow-card">
            <h3 className="text-xl font-semibold text-secondary">CODING SKILLS</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={`${skill.name}-${i}`}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-2 text-xs font-bold uppercase tracking-[0.08em] text-text2 shadow-[6px_6px_0_var(--secondary-color)]"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Work Timeline Section: Title at top, items in two columns */}
        <section className="mb-12">
          <h3 className="mb-6 text-center text-xl font-semibold text-secondary">WORK TIMELINE</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-4">
              {worktimeline.slice(0, 3).map((item, i) => (
                <div key={`${item.jobtitle}-${i}`} className="rounded-xl border border-grid bg-card px-4 py-4 shadow-[8px_8px_0_var(--secondary-color)]">
                  <div className="mb-2 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.08em] text-secondary">
                    <span className="rounded-full bg-primary px-3 py-1 text-text2 shadow-[6px_6px_0_var(--text-color-3)]">
                      {item.date}
                    </span>
                    <span className="text-sm text-secondary">{item.where}</span>
                  </div>
                  <h4 className="text-xl font-semibold">{item.jobtitle}</h4>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {worktimeline.slice(3, 6).map((item, i) => (
                <div key={`${item.jobtitle}-${i + 3}`} className="rounded-xl border border-grid bg-card px-4 py-4 shadow-[8px_8px_0_var(--secondary-color)]">
                  <div className="mb-2 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.08em] text-secondary">
                    <span className="rounded-full bg-primary px-3 py-1 text-text2 shadow-[6px_6px_0_var(--text-color-3)]">
                      {item.date}
                    </span>
                    <span className="text-sm text-secondary">{item.where}</span>
                  </div>
                  <h4 className="text-xl font-semibold">{item.jobtitle}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <div
              key={`${service.title}-${i}`}
              className="rounded-2xl border border-grid bg-gradient-to-br from-text3/10 via-secondary/5 to-transparent p-6 backdrop-blur-md shadow-card"
            >
              <h5 className="mb-4 inline-block rounded-lg border-2 border-text bg-primary px-4 py-2 text-sm font-bold uppercase tracking-[0.08em] text-text2 shadow-[6px_6px_0_var(--secondary-color)]">
                {service.title}
              </h5>
              <p className="text-sm leading-relaxed text-text/80">
                <span className="text-primary font-bold">"</span>
                {service.description}
                <span className="text-primary font-bold">"</span>
              </p>
            </div>
          ))}
        </section>
      </main>
    </HelmetProvider>
  );
};
