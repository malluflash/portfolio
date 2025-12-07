import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta, contactConfig } from "../../content_option";

const initialState = {
  email: "",
  name: "",
  message: "",
  loading: false,
  show: false,
  alertmessage: "",
  variant: "",
};

export const ContactUs = () => {
  const [formData, setFormdata] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata((prev) => ({ ...prev, loading: true, show: false }));

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: formData.message,
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormdata((prev) => ({
            ...prev,
            loading: false,
            alertmessage: "SUCCESS! Thank you for your message.",
            variant: "success",
            show: true,
            name: "",
            email: "",
            message: "",
          }));
        },
        (error) => {
          console.log(error.text);
          setFormdata((prev) => ({
            ...prev,
            loading: false,
            alertmessage: `Failed to send: ${error.text}`,
            variant: "danger",
            show: true,
          }));
          document.getElementById("contact-alert")?.scrollIntoView({ behavior: "smooth" });
        }
      );
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const alertStyles =
    formData.variant === "success"
      ? "border-emerald-400 bg-emerald-600/20 text-emerald-100"
      : "border-red-400 bg-red-600/20 text-red-100";

  return (
    <HelmetProvider>
      <main className="mx-auto max-w-6xl px-5 py-12">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <header className="mb-8 space-y-2">
          <p className="text-xs uppercase tracking-[0.08em] text-secondary">CONTACT</p>
          <h1 className="text-4xl sm:text-5xl">CONTACT ME</h1>
          <div className="h-1 w-24 bg-text" />
        </header>

        {formData.show && (
          <div
            id="contact-alert"
            className={`mb-6 rounded-xl border px-4 py-3 text-sm shadow-card ${alertStyles}`}
          >
            {formData.alertmessage}
            <button
              className="ml-3 text-xs uppercase tracking-[0.1em] underline"
              onClick={() => setFormdata((prev) => ({ ...prev, show: false }))}
            >
              close
            </button>
          </div>
        )}

        <div className="grid gap-8 lg:grid-cols-[1fr,1.2fr]">
          <div className="rounded-2xl border border-grid bg-card/70 p-6 shadow-card">
            <h3 className="text-xl font-semibold text-secondary">GET IN TOUCH</h3>
            <div className="mt-4 space-y-3 text-text/80">
              <p>
                <strong>Email:</strong>{" "}
                <a className="underline" href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                  {contactConfig.YOUR_EMAIL}
                </a>
              </p>
              <p className="font-semibold">
                If you want to talk to me, please feel free to book me{" "}
                <a className="underline" href="https://app.simplymeet.me/harikrishnankavungal">
                  here
                </a>
                .
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-grid bg-card/70 p-6 shadow-card">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  className="w-full rounded-xl border border-grid bg-bg px-4 py-3 text-text placeholder:text-text/70 focus:outline-none focus:ring-2 focus:ring-secondary"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  type="text"
                  required
                  onChange={handleChange}
                />
                <input
                  className="w-full rounded-xl border border-grid bg-bg px-4 py-3 text-text placeholder:text-text/70 focus:outline-none focus:ring-2 focus:ring-secondary"
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={formData.email}
                  required
                  onChange={handleChange}
                />
              </div>
              <textarea
                className="min-h-[160px] w-full rounded-xl border border-grid bg-bg px-4 py-3 text-text placeholder:text-text/70 focus:outline-none focus:ring-2 focus:ring-secondary"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button
                className="inline-flex items-center justify-center rounded-xl border-2 border-text2 bg-gradient-to-r from-primary to-secondary px-5 py-3 text-sm font-bold uppercase tracking-[0.05em] text-text2 shadow-[10px_10px_0_var(--secondary-color),-10px_-10px_0_var(--text-color-3)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                type="submit"
                disabled={formData.loading}
              >
                {formData.loading ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </main>
      {formData.loading && <div className="loading-bar" />}
    </HelmetProvider>
  );
};
