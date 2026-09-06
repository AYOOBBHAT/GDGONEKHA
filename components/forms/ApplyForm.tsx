"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { whatsappUrl } from "@/lib/whatsapp";

const classes = [
  "Nursery",
  "Jr. KG",
  "Sr. KG",
  "Class 1",
  "Class 2",
  "Class 3",
  "Class 4",
  "Class 5",
  "Class 6",
];

export function ApplyForm({
  variant = "admission",
}: {
  variant?: "admission" | "career";
}) {
  const [sent, setSent] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const message =
      variant === "admission"
        ? [
            `*Admission Enquiry — ${site.shortName}*`,
            "",
            `Student: ${String(data.get("student") || "").trim()}`,
            `Class applying for: ${String(data.get("class") || "").trim()}`,
            `Parent / guardian: ${String(data.get("parent") || "").trim()}`,
            `Phone: ${String(data.get("phone") || "").trim()}`,
            `Email: ${String(data.get("email") || "").trim()}`,
            `Message: ${String(data.get("message") || "").trim() || "—"}`,
          ].join("\n")
        : [
            `*Career Application — ${site.shortName}*`,
            "",
            `Name: ${String(data.get("name") || "").trim()}`,
            `Position: ${String(data.get("role") || "").trim()}`,
            `Phone: ${String(data.get("phone") || "").trim()}`,
            `Email: ${String(data.get("email") || "").trim()}`,
            `Message: ${String(data.get("message") || "").trim() || "—"}`,
          ].join("\n");

    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="mt-10 max-w-xl rounded-3xl border border-line bg-white p-8">
        <p className="text-2xl font-semibold tracking-tight">Opening WhatsApp…</p>
        <p className="mt-3 text-muted">
          Your enquiry has been prepared. Send the WhatsApp message to complete
          your submission. If WhatsApp did not open,{" "}
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-ink underline underline-offset-2"
          >
            tap here to chat with the school
          </a>
          .
        </p>
        <button
          type="button"
          className="mt-6 text-sm font-medium text-ink underline underline-offset-2"
          onClick={() => setSent(false)}
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-10 max-w-xl space-y-5">
      {variant === "admission" ? (
        <>
          <Field label="Student's name" name="student" required />
          <label className="block text-sm font-medium">
            Class applying for
            <select
              name="class"
              required
              className="mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3 text-base font-normal"
            >
              {classes.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <Field label="Parent / guardian" name="parent" required />
        </>
      ) : (
        <>
          <Field label="Full name" name="name" required />
          <Field label="Position applying for" name="role" required />
        </>
      )}
      <Field label="Phone" name="phone" type="tel" required />
      <Field label="Email" name="email" type="email" required />
      <label className="block text-sm font-medium">
        Message
        <textarea
          name="message"
          rows={5}
          className="mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3 text-base font-normal"
        />
      </label>
      <button
        type="submit"
        className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream transition hover:-translate-y-0.5"
      >
        {variant === "admission" ? "Submit enquiry on WhatsApp" : "Apply via WhatsApp"}
      </button>
      <p className="text-xs text-muted">
        Clicking submit opens WhatsApp with your details ready to send to the
        school.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm font-medium">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3 text-base font-normal"
      />
    </label>
  );
}
