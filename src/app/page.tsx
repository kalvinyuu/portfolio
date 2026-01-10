"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faExternalLinkAlt,
  faSun,
  faMoon
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <main className="min-h-screen bg-background text-foreground" />;
  }

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6 py-24 sm:py-32">
        {/* Header/Hero */}
        <section className="mb-16 relative">
          <div className="absolute right-0 top-0">
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              aria-label="Toggle theme"
            >
              <FontAwesomeIcon icon={resolvedTheme === "dark" ? faSun : faMoon} className="w-5" />
            </button>
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-8">k. yu</h1>

          <div className="flex gap-4 mb-12">
            <a href="https://github.com/kalvinyuu" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors text-2xl">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://linkedin.com/in/kalvin-yu-629963195/" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors text-2xl">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="leading-relaxed opacity-90">
              A self-taught full-stack developer transitioning into tech after 5 years of building applications.
              What started as wanting to create the apps I envisioned grew into fulfilling work—especially my
              multi-tenant e-commerce platform with its own CMS, originally built for family and now evolved
              into a production-ready system. I'm comfortable breaking down complex problems, prototyping quickly,
              and keeping database schemas and state management simple.
            </p>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6 border-b border-zinc-200 dark:border-zinc-800 pb-2">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-medium mb-3 opacity-70">Core Stack</h3>
              <p>TypeScript, Next.js, React, Bun, Tailwind CSS</p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-3 opacity-70">Data & Auth</h3>
              <p>SQLite3, Drizzle ORM, PostgreSQL, DragonflyDB, Clerk, Supabase</p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-3 opacity-70">Tooling</h3>
              <p>Emacs, macOS, Debian Linux, Git, Unix CLI workflow</p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-3 opacity-70">Integrations</h3>
              <p>Stripe, AWS S3, Vercel, Railway</p>
            </div>
          </div>
        </section>

        {/* Technical Projects */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6 border-b border-zinc-200 dark:border-zinc-800 pb-2">Projects</h2>
          <div className="space-y-12">

            <div className="group">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold group-hover:opacity-100 transition-opacity">Multi-tenant E-commerce SaaS Platform</h3>
                <span className="text-xs font-mono opacity-60">Next.js, Supabase, Stripe, Tailwind CSS, DragonflyDB, S3</span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-2 text-sm leading-relaxed opacity-90">
                <li>Architected a transition from a personalised pyjama store to a multi-tenant e-commerce platform, migrating the auth and DB to Supabase for simpler GDPR compliance and multi-tenant authentication.</li>
                <li>Built a robust CMS for non-technical users to create stores, manage inventory and products, update store layouts, and track real-time orders.</li>
                <li> Using Next.js and AWS S3 I implented performant and cached dynamic storefronts with a focus on SEO and customisability.</li>
                <li>Integrated DragonflyDB as local-storage wasn't a secure method for storing shopping carts which persists for multiple sessions.</li>
              </ul>
            </div>

            <div className="group">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold group-hover:opacity-100 transition-opacity">Web-based Image Manipulation Program</h3>
                <span className="text-xs font-mono opacity-60">Canvas API, React, Tailwind CSS, FontAwesome</span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-2 text-sm leading-relaxed opacity-90">
                <li>Engineered a lightweight, mobile-optimised image editing npm package allowing for real-time cropping, image optimising, bluring and more directly in the client's browser.</li>
                <li>Focused on minimising external dependencies and optimising client-side performance.</li>
              </ul>
            </div>

            <div className="group">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold group-hover:opacity-100 transition-opacity">Agentic AI CLI tool with functionality to build RAGs and LoRAs</h3>
                <span className="text-xs font-mono opacity-60">Ollama, Solana, React Ink, Lang Graph, SQLite, Bun, Next.js </span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-2 text-sm leading-relaxed opacity-90">
                <li>Orchestrated the development of an AI ecosystem for a solana hackathon with the purpose of building a community geared towards creating and selling RAGs and LoRAs from your data </li>
                <li>Created a systematic method of checking data is safe. (currently in alpha limited code via an automated method and not yet checked by humans.)</li>
              </ul>
            </div>

			
			{/*
			<div className="group border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-lg p-8 text-center">
            <h3 className="font-medium mb-2 opacity-70">Upcoming Project</h3>
            <p className="text-sm italic opacity-50">New project details coming soon...</p>
			</div>
			  */}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-xl font-bold mb-6 border-b border-zinc-200 dark:border-zinc-800 pb-2">Education</h2>
          <div className="space-y-8">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">Bachelor's in Mathematics</h3>
                <p className="text-sm opacity-70">The Open University</p>
                <p className="text-xs mt-1 italic opacity-50">Currently on pause</p>
              </div>
              <span className="text-xs font-mono opacity-60">2021 — Present</span>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">HND and HNC in Business</h3>
                <p className="text-sm opacity-70">City of Glasgow College</p>
                <p className="text-xs mt-1 opacity-50">Grade: A and C</p>
              </div>
              <span className="text-xs font-mono opacity-60">2018 — 2020</span>
            </div>
          </div>
        </section>

        <footer className="mt-24 pt-8 border-t border-zinc-100 dark:border-zinc-900 text-center opacity-50 text-xs">

        </footer>
      </div>
    </main>
  );
}
