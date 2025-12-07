import React, { useState } from "react";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link, useLocation } from "react-router-dom";
import { logotext } from "../content_option";

const menuItems = [
  { path: "/", label: "HOME" },
  { path: "/portfolio", label: "PORTFOLIO" },
  { path: "/about", label: "ABOUT" },
  { path: "/contact", label: "CONTACT" },
];

const Headermain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setIsOpen((prev) => {
      const next = !prev;
      document.body.classList.toggle("ovhidden");
      return next;
    });
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove("ovhidden");
  };

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header className="fixed top-2 left-0 right-0 z-50 flex justify-center px-4">
        <div className="flex w-full max-w-6xl items-center justify-between rounded-xl border-2 border-grid bg-white/5 px-4 py-3 backdrop-blur-md shadow-[12px_12px_0_var(--primary-color)]">
          <Link
            className="inline-flex h-12 items-center justify-center border-2 border-text bg-primary px-4 text-lg font-display uppercase tracking-wide text-text2 shadow-[8px_8px_0_var(--text-color-3)] transition-transform hover:-translate-y-0.5"
            to="/"
          >
            {logotext}
          </Link>

          <div className="flex items-center gap-3">
            <button
              className="inline-flex h-12 w-12 items-center justify-center rounded-lg border-2 border-text bg-bg text-text transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-[6px_6px_0_var(--primary-color)]"
              onClick={handleToggle}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <VscClose size={24} className="text-text" />
              ) : (
                <VscGrabber size={24} className="text-text" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{
          background: "radial-gradient(circle at 20% 20%, rgba(255, 94, 246, 0.08), transparent 25%), radial-gradient(circle at 80% 0%, rgba(124, 247, 255, 0.14), transparent 28%), radial-gradient(circle at 50% 80%, rgba(233, 255, 111, 0.12), transparent 26%), var(--bg-color)",
        }}
      >
        {/* Close Button */}
        <div className="absolute top-4 right-4 z-50">
          <button
            onClick={closeMenu}
            className="inline-flex h-12 w-12 items-center justify-center rounded-lg border-2 border-grid bg-card/80 backdrop-blur-sm text-text transition-all hover:-translate-y-0.5 hover:border-text3 hover:shadow-[6px_6px_0_var(--text-color-3)]"
            aria-label="Close menu"
          >
            <VscClose size={24} />
          </button>
        </div>

        {/* Menu Content */}
        <div className="flex h-full flex-col items-center justify-center px-6">
          <nav className="flex flex-col items-start gap-8">
            {menuItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  onClick={closeMenu}
                  to={item.path}
                  className="group relative flex items-center gap-4 text-5xl font-display uppercase tracking-tight text-text transition-all hover:text-text3"
                >
                  {/* Active Indicator */}
                  {active && (
                    <span className="absolute -left-6 h-2 w-2 rounded-full bg-text3 shadow-[0_0_0_8px_rgba(255,94,246,0.15)]" />
                  )}
                  <span className={active ? "text-text3" : ""}>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Copyright */}
          <div className="absolute bottom-8 text-sm font-display uppercase tracking-widest text-text/60">
            © {logotext}
          </div>
        </div>
      </div>
    </>
  );
};

export default Headermain;
