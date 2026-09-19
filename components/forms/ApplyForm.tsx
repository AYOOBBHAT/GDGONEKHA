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
  "Class 7",
  "Class 8",
];

export function ApplyForm({
  variant = "admission",
  initialRole = "",
}: {
  variant?: "admission" | "career";
  initialRole?: string;
}) {
  const [sentUrl, setSentUrl] = useState<string | null>(null);

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

    const url = whatsappUrl(message);
    window.open(url, "_blank", "noopener,noreferrer");
    setSentUrl(url);
  }

  if (sentUrl) {
    return (
      <div className="mt-10 max-w-xl rounded-3xl border border-line bg-white p-8">
        <p className="text-2xl font-semibold tracking-tight">Opening WhatsApp…</p>
        <p className="mt-3 text-muted">
          Your enquiry has been prepared with the details you entered. Send the
          WhatsApp message to complete your submission. If WhatsApp did not
          open,{" "}
          <a
            href={sentUrl}
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
          onClick={() => setSentUrl(null)}
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
          <Field
            label="Position applying for"
            name="role"
            required
            defaultValue={initialRole}
          />
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
        className="min-h-12 w-full rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-cream transition hover:-translate-y-0.5 sm:w-auto"
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
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  defaultValue?: string;
}) {
  return (
    <label className="block text-sm font-medium">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        defaultValue={defaultValue}
        className="mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3 text-base font-normal"
      />
    </label>
  );
}
