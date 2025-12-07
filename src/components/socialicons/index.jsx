import React from "react";
import {
  GitHub,
  LinkedIn,
  Facebook,
  Instagram,
} from "@mui/icons-material";
import { socialprofils } from "../../content_option";

// Custom X (Twitter) Icon Component
const XIcon = ({ sx }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ width: sx?.width || 22, height: sx?.height || 22 }}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const links = [
  { key: "github", Icon: GitHub, href: socialprofils.github },
  { key: "facebook", Icon: Facebook, href: socialprofils.facebook },
  { key: "linkedin", Icon: LinkedIn, href: socialprofils.linkedin },
  { key: "x", Icon: XIcon, href: socialprofils.x },
  { key: "instagram", Icon: Instagram, href: socialprofils.instagram },
];

export const Socialicons = () => {
  const activeLinks = links.filter((item) => Boolean(item.href));

  if (!activeLinks.length) return null;

  return (
    <>
      <div className="fixed left-0 top-1/2 z-30 hidden -translate-y-1/2 lg:flex">
        {/* Yellow-green vertical strip on the far left */}
        <div className="absolute left-0 top-1/2 h-[calc(100vh-120px)] w-1 -translate-y-1/2 bg-primary" />
        
        {/* Content container positioned to the right of the strip */}
        <div className="relative ml-6 flex flex-col items-center gap-4">
          {/* Pink dot */}
          <div className="h-2 w-2 rounded-full bg-text3 shadow-[0_0_0_4px_rgba(255,94,246,0.2)]" />
          
          {/* Social icons */}
          <ul className="flex flex-col items-center gap-3">
            {activeLinks.map(({ key, Icon, href }) => (
              <li
                key={key}
                className="rounded-full border border-grid bg-card/80 p-2 shadow-sm transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--secondary-color)]"
              >
                <a href={href} target="_blank" rel="noreferrer" className="flex items-center justify-center">
                  {key === "x" ? (
                    <XIcon sx={{ width: 22, height: 22 }} />
                  ) : (
                    <Icon sx={{ width: 22, height: 22, fill: "var(--text-color)" }} />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 py-8 lg:hidden">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-text">
          Follow
        </span>
        <ul className="flex items-center gap-3">
          {activeLinks.map(({ key, Icon, href }) => (
            <li
              key={key}
              className="rounded-full border border-grid bg-card/80 p-2 shadow-sm transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--secondary-color)]"
            >
              <a href={href} target="_blank" rel="noreferrer" className="flex items-center justify-center">
                {key === "x" ? (
                  <XIcon sx={{ width: 22, height: 22 }} />
                ) : (
                  <Icon sx={{ width: 22, height: 22, fill: "var(--text-color)" }} />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
