"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { images } from "@/lib/images";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      <div className="container-site relative overflow-hidden rounded-[2rem] py-10 lg:min-h-[86vh] lg:py-12">
        {/* School background */}
        <div className="absolute inset-0" aria-hidden>
          <Image
            src={images.hero}
            alt=""
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/95 to-cream/55 sm:from-cream sm:via-cream/90 sm:to-cream/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-cream/80 via-transparent to-cream/30 lg:from-transparent" />
        </div>

        <div className="relative z-10 flex min-h-[72vh] flex-col justify-center lg:min-h-[78vh] lg:max-w-3xl">
          <motion.p
            className="eyebrow"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            GD Goenka Public School · Kupwara
          </motion.p>
          <motion.h1
            className="mt-5 max-w-[12ch] text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.05em] sm:text-6xl lg:text-[4.6rem]"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08 }}
          >
            Education that prepares them to thrive.
          </motion.h1>
          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
          >
            A child-focused CBSE school in Kupwara. Globally acknowledged
            curriculum, technology-driven learning and a campus designed around
            dignity, safety and the love of learning — not merely the next
            examination.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
          >
            <ButtonLink href="/about">Explore Our School</ButtonLink>
            <ButtonLink href="/admissions/apply" variant="secondary">
              Apply for Admission
            </ButtonLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
