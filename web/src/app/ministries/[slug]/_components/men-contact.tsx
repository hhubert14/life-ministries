"use client";

import { useState } from "react";

export function MenContact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Contact Info */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Get Connected
          </h2>
          <p className="text-text-muted">
            <span className="font-medium text-foreground">
              Men&apos;s Director:
            </span>{" "}
            Pastor Jonathan Gillette
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-foreground mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-foreground"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-foreground"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-foreground"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-foreground resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-foreground text-text-light py-3 px-6 font-medium hover:bg-foreground/90 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
