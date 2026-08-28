import { ButtonLink } from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <section className="container-site py-28 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
        This page has wandered off.
      </h1>
      <p className="mx-auto mt-5 max-w-md text-muted">
        The address may have changed. Return home, or speak with the helpdesk.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <ButtonLink href="/">Home</ButtonLink>
        <ButtonLink href="/contact" variant="secondary">
          Contact
        </ButtonLink>
      </div>
    </section>
  );
}
