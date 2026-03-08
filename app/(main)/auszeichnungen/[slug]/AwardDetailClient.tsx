'use client';

import { use } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { awards } from '@/data/awards';

export default function AwardDetailClient({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const awardIndex = awards.findIndex((a) => a.slug === slug);
  const award = awards[awardIndex];

  if (!award) {
    return (
      <section className="relative pt-40 pb-24 bg-white">
        <div className="container-custom text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Auszeichnung nicht gefunden</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            Zurück zur Startseite
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="relative pt-40 pb-24 overflow-hidden bg-white">
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 25% 25%, ${award.color}08 0%, transparent 50%), radial-gradient(circle at 75% 75%, ${award.color}06 0%, transparent 50%)`,
        }}
      />

      <div className="container-custom relative">
        {/* Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span
              className="px-4 py-1.5 rounded-full text-sm font-semibold"
              style={{
                backgroundColor: `${award.color}15`,
                color: award.color,
              }}
            >
              {award.badge}
            </span>
            <span className="text-xs font-mono text-gray-400 tracking-wider uppercase">
              {award.year}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight leading-tight">
            {award.name}
          </h1>
          <p className="text-lg text-gray-500 font-medium">
            {award.subtitle}
          </p>
        </motion.div>

        {/* Content Card */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {/* Hero Image */}
          <div className="rounded-2xl overflow-hidden mb-10">
            <img
              src={award.heroImage}
              alt={award.alt}
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>

          {/* Content */}
          <div className="group relative p-8 rounded-3xl border border-gray-100 bg-white overflow-hidden">
            {/* Top accent bar */}
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{ background: `linear-gradient(90deg, ${award.color}, transparent)` }}
            />

            <div className="relative z-10">
              {/* Paragraphs */}
              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                {award.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>

              {/* Quote */}
              <blockquote
                className="border-l-4 pl-6 py-4 my-8 rounded-r-xl"
                style={{
                  borderColor: award.color,
                  backgroundColor: `${award.color}08`,
                }}
              >
                <p className="text-gray-700 italic leading-relaxed mb-3">
                  &bdquo;{award.quote.text}&ldquo;
                </p>
                <cite className="text-sm font-semibold text-gray-500 not-italic">
                  — {award.quote.author}
                </cite>
              </blockquote>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
