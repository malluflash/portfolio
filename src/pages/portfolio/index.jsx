import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <main className="mx-auto max-w-6xl px-5 py-12">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <header className="mb-8 space-y-2">
          <p className="text-xs uppercase tracking-[0.08em] text-secondary">PROJECTS I'VE WORKED ON</p>
          <h1 className="text-4xl sm:text-5xl">PORTFOLIO</h1>
          <div className="h-1 w-24 bg-text" />
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dataportfolio.map((data, i) => (
            <article
              key={i}
              className="group flex flex-col overflow-hidden rounded-2xl border-2 border-text bg-card shadow-[8px_8px_0_var(--secondary-color)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[12px_12px_0_var(--secondary-color)]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={data.img}
                  alt={data.desctiption || "Project thumbnail"}
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="flex flex-1 flex-col gap-3 border-t-2 border-text bg-card p-5">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-[0.08em] text-secondary">Project</p>
                  {data.link && data.link !== "#" && (
                    <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_0_4px_rgba(233,255,111,0.2)]" />
                  )}
                </div>
                <p className="text-base font-semibold leading-relaxed text-text">
                  {data.desctiption}
                </p>
                
                {data.features && (
                  <div className="space-y-1.5">
                    <p className="text-xs font-bold uppercase tracking-[0.08em] text-secondary">Features</p>
                    <p className="text-sm leading-relaxed text-text/90">{data.features}</p>
                  </div>
                )}
                
                {data.technologies && (
                  <div className="space-y-2">
                    <p className="text-xs font-bold uppercase tracking-[0.08em] text-secondary">Technologies</p>
                    <div className="flex flex-wrap gap-1.5">
                      {data.technologies.split(", ").map((tech, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center rounded border border-grid bg-white/5 px-2 py-1 text-xs font-medium text-text/80 backdrop-blur-sm"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <a
                  href={data.link || "#"}
                  target={data.link && data.link !== "#" ? "_blank" : undefined}
                  rel={data.link && data.link !== "#" ? "noopener noreferrer" : undefined}
                  className="mt-auto inline-flex w-fit items-center gap-2 rounded-lg border-2 border-text2 bg-gradient-to-r from-primary to-secondary px-4 py-2.5 text-xs font-bold uppercase tracking-[0.08em] text-text2 shadow-[6px_6px_0_var(--text-color-3)] transition-all hover:-translate-y-0.5 hover:shadow-[8px_8px_0_var(--text-color-3)]"
                >
                  View project
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>
    </HelmetProvider>
  );
};
