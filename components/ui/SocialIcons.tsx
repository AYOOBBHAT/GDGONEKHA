export function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M14 9h3V6h-3c-1.7 0-3 1.4-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden
    >
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YoutubeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M22 12.2c0-2.4-.3-4-.8-4.8-.5-.8-1.4-1.2-3.2-1.4C16.2 5.8 12 5.8 12 5.8s-4.2 0-6 .2c-1.8.2-2.7.6-3.2 1.4C2.3 8.2 2 9.8 2 12.2s.3 4 .8 4.8c.5.8 1.4 1.2 3.2 1.4 1.8.2 6 .2 6 .2s4.2 0 6-.2c1.8-.2 2.7-.6 3.2-1.4.5-.8.8-2.4.8-4.8ZM10 15.1V9.3l5.2 2.9L10 15.1Z" />
    </svg>
  );
}

export function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M6.5 8.5h3v11h-3v-11ZM8 4.5a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5ZM11 8.5h2.9v1.5h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v6.46h-3v-5.73c0-1.37-.03-3.13-1.9-3.13-1.92 0-2.21 1.5-2.21 3.05v5.81H11V8.5Z" />
    </svg>
  );
}

export function XIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M13.5 10.2 20.7 2h-1.7l-6.3 7.3L7.8 2H2l7.6 11.1L2 22h1.7l6.7-7.7L16.2 22H22l-8.5-11.8Z" />
    </svg>
  );
}
