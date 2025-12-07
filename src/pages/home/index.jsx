import React, { useEffect, useRef } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta, worktimeline, services } from "../../content_option";
import { Link } from "react-router-dom";

const orbitPills = [
  "Ops-first leadership",
  "Front-end craft",
  "Automation geek",
  "Team catalyst",
];

export const Home = () => {
  const scrollElementsRef = useRef({});

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements in the ref object
    Object.values(scrollElementsRef.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      Object.values(scrollElementsRef.current).forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <HelmetProvider>
      <section id="home" className="relative min-h-screen overflow-hidden px-5 pb-16 pt-8 sm:pt-14">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <div className="pointer-events-none absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(ellipse_at_center,rgba(0,0,0,0.7),transparent_65%)] bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_12px),repeating-linear-gradient(90deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_12px)]" />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16">
          <div className="grid items-stretch gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-grid bg-white/5 p-6 backdrop-blur-md shadow-card">
              <div className="inline-flex items-center gap-2 rounded-full bg-text px-4 py-2 text-sm font-bold uppercase tracking-[0.08em] text-text2 shadow-[8px_8px_0_var(--text-color-3)]">
                Logistics → Code → People
              </div>
              <h1 className="mt-5 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
                I build functional 
                <span className="mx-2 inline-block border-2 border-text bg-bg px-2 shadow-[8px_8px_0_var(--primary-color),-8px_-8px_0_var(--secondary-color)]">
                    web apps
                </span>
                that feel alive.
              </h1>
              <div className="mt-4 text-secondary">
                <Typewriter
                  options={{
                    strings: [
                      introdata.animated.first,
                      introdata.animated.second,
                      introdata.animated.third,
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 12,
                  }}
                />
              </div>
              <p className="mt-4 max-w-3xl text-lg leading-7 text-text/90">
                {introdata.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-text2 bg-gradient-to-r from-primary to-secondary px-4 py-3 text-sm font-bold uppercase tracking-[0.05em] text-text2 shadow-[10px_10px_0_var(--secondary-color),-10px_-10px_0_var(--text-color-3)] transition hover:-translate-y-0.5"
                >
                  View the builds
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-text px-4 py-3 text-sm font-bold uppercase tracking-[0.05em] text-text transition hover:-translate-y-0.5 hover:shadow-[10px_10px_0_var(--text-color-3)]"
                >
                  Read the journey
                </Link>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {orbitPills.map((pill) => (
                  <span
                    key={pill}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-2 text-xs font-bold uppercase tracking-[0.08em] text-text2 shadow-[6px_6px_0_var(--secondary-color)]"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid min-h-[420px] grid-rows-[1fr_auto] gap-4">
              <div
                className="relative min-h-[360px] overflow-hidden rounded-2xl border-2 border-text shadow-[10px_10px_0_var(--secondary-color),-10px_-10px_0_var(--text-color-3)] animate-floaty"
                style={{ backgroundImage: `url(${introdata.your_img_url})`, backgroundSize: "cover", backgroundPosition: "center" }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg" />
                <div className="absolute left-4 top-4 max-w-[240px] rounded-xl border border-grid bg-card/80 px-4 py-3 shadow-card">
                  <p className="text-xs uppercase tracking-[0.08em] text-secondary">Years leading ops</p>
                  <h3 className="text-3xl font-bold text-text">9+</h3>
                  <p className="text-sm text-text/80">Systems, people, logistics, scalable automations</p>
                </div>
                <div className="absolute bottom-5 right-4 max-w-[200px] rounded-xl border border-grid bg-card/80 px-4 py-3 shadow-card">
                  <p className="text-xs uppercase tracking-[0.08em] text-secondary">Favorite tools</p>
                  <p className="text-sm text-text/80">JS · HTML · CSS · React · Node.js · MongoDB · App Script · Tailwind CSS · Firebase · Vite · </p>
                </div>
              </div>
              <div className="grid gap-3">
                {services.slice(0, 3).map((item, i) => (
                  <div
                    key={item.title}
                    ref={(el) => (scrollElementsRef.current[`service-${i}`] = el)}
                    className="rounded-xl border border-dashed border-grid bg-white/5 px-4 py-3 backdrop-blur-sm opacity-0 translate-y-[30px] transition-all duration-700 ease-out"
                    style={{ 
                      animationDelay: `${i * 80}ms`,
                      transitionDelay: `${i * 80}ms`
                    }}
                  >
                    <p className="text-xs uppercase tracking-[0.08em] text-secondary">{item.title}</p>
                    <p className="text-sm text-text/80">
                      {item.description.split(".")[0]}.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div 
            ref={(el) => (scrollElementsRef.current['chapters-section'] = el)}
            className="rounded-2xl border border-grid bg-gradient-to-br from-text3/10 via-secondary/5 to-transparent p-6 backdrop-blur-md shadow-card opacity-0 translate-y-[30px] transition-all duration-700 ease-out"
          >
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.08em] text-secondary">Chapters</p>
              <h2 className="text-3xl sm:text-4xl">Ops grit, design instinct, dev obsession</h2>
              <p className="text-sm text-text/80">
                A timeline built on logistics intensity, people-centered leadership, and a late-night love for building the things I wish
                existed.
              </p>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {worktimeline.map((item, index) => (
                <div
                  key={`${item.jobtitle}-${index}`}
                  ref={(el) => (scrollElementsRef.current[`timeline-${index}`] = el)}
                  className="transform rounded-xl border border-grid bg-card px-4 py-4 shadow-[8px_8px_0_var(--secondary-color)] opacity-0 translate-y-[30px] transition-all duration-700 ease-out"
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.08em] text-secondary">
                    <span className="rounded-full bg-primary px-3 py-1 text-text2 shadow-[6px_6px_0_var(--text-color-3)]">
                      {item.date}
                    </span>
                    <span className="text-sm text-secondary">{item.where}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{item.jobtitle}</h3>
                  
                </div>
              ))}
            </div>
          </div>

          <div 
            ref={(el) => (scrollElementsRef.current['marquee-section'] = el)}
            className="relative overflow-hidden rounded-xl border border-grid bg-card opacity-0 translate-y-[30px] transition-all duration-700 ease-out"
          >
            <div className="flex w-max animate-marquee items-center gap-4 px-4 py-3 text-sm font-bold uppercase tracking-[0.08em]">
              {[...services, ...services].map((item, i) => (
                <div
                  key={`${item.title}-${i}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-grid bg-gradient-to-r from-primary/30 to-secondary/20 px-4 py-2"
                >
                  <span className="h-2 w-2 rounded-full bg-text3 shadow-[0_0_0_6px_rgba(255,94,246,0.18)]" />
                  {item.title}
                </div>
              ))}
            </div>
          </div>

          <div 
            ref={(el) => (scrollElementsRef.current['cta-section'] = el)}
            className="grid gap-6 rounded-2xl border border-grid bg-gradient-to-br from-bg/90 to-bg/70 p-6 backdrop-blur-md shadow-card md:grid-cols-[2fr,1fr] md:items-center opacity-0 translate-y-[30px] transition-all duration-700 ease-out"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.08em] text-secondary">Let’s build something vivid</p>
              <h2 className="mt-2 text-3xl sm:text-4xl">
                From dashboards to workflows, I turn ambiguity into bold, shippable stories.
              </h2>
              <p className="mt-2 text-sm text-text/80">
                About + Portfolio keep all the details. Here’s the shortcut to talk.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-text2 bg-gradient-to-r from-primary to-secondary px-4 py-3 text-sm font-bold uppercase tracking-[0.05em] text-text2 shadow-[10px_10px_0_var(--secondary-color),-10px_-10px_0_var(--text-color-3)] transition hover:-translate-y-0.5"
              >
                Start a conversation
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-secondary px-4 py-3 text-sm font-bold uppercase tracking-[0.05em] text-secondary transition hover:-translate-y-0.5 hover:shadow-[10px_10px_0_var(--text-color-3)]"
              >
                Browse recent work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
