"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

const TOPIC_OPTIONS = [
  { value: "partnership", label: "Partnership application" },
  { value: "reporting", label: "Reporting & MoU management" },
  { value: "technical", label: "Technical support" },
  { value: "media", label: "Media & communications" },
  { value: "general", label: "General enquiry" },
];

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message ?? "Submission failed. Please try again.");
      }

      setState("success");
      form.reset();
    } catch (err) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (state === "success") {
    return (
      <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-emerald-900 mb-2">
          Message received
        </h3>
        <p className="text-emerald-900">
          Thanks for reaching out. The OPM PCMS team will respond within two
          business days.
        </p>
        <button
          onClick={() => setState("idle")}
          className="mt-4 text-sm underline text-emerald-800 hover:text-emerald-900"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Full name" name="name" type="text" required />
        <Field label="Organisation (optional)" name="organisation" type="text" />
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone (optional)" name="phone" type="tel" />
      </div>

      <div>
        <label
          htmlFor="topic"
          className="block text-sm font-medium text-gray-800 mb-1"
        >
          Topic <span className="text-destructive">*</span>
        </label>
        <select
          id="topic"
          name="topic"
          required
          defaultValue=""
          className="w-full px-3 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white text-gray-800"
        >
          <option value="" disabled>
            Select a topic…
          </option>
          {TOPIC_OPTIONS.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-800 mb-1"
        >
          Message <span className="text-destructive">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full px-3 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
        />
      </div>

      {state === "error" && errorMsg && (
        <div className="bg-red-50 border border-red-200 text-red-800 text-sm p-3 rounded-md">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="px-6 py-3 bg-emerald-700 text-white rounded-md font-semibold hover:bg-emerald-800 disabled:bg-emerald-700/60 disabled:cursor-not-allowed transition-colors"
      >
        {state === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: Readonly<{
  label: string;
  name: string;
  type: string;
  required?: boolean;
}>) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-800 mb-1"
      >
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full px-3 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
      />
    </div>
  );
}
