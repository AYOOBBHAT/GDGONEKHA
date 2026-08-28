"use client";

import { useState } from "react";

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
    setSent(true);
  }

  if (sent) {
    return (
      <div className="mt-10 max-w-xl rounded-3xl border border-line bg-white p-8">
        <p className="text-2xl font-semibold tracking-tight">Received.</p>
        <p className="mt-3 text-muted">
          This proposal form stays on your device. Please complete the official
          application with the school office or email{" "}
          <a href="mailto:info@gdgoenkabaramulla.com">
            info@gdgoenkabaramulla.com
          </a>
          , and call 18008890880.
        </p>
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
        Submit enquiry
      </button>
      <p className="text-xs text-muted">
        Official processing is completed by the school admissions or HR desk.
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
