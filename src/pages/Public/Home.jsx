import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Users2 } from "lucide-react";
import { FiCpu, FiLayers, FiShield, FiZap } from "react-icons/fi";
import Button from "../../components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import { mockJobs } from "../../utils/mockData";

const STATS = [
  { value: "15+", label: "Years of Industry Expertise" },
  { value: "10k+", label: "Successful Placements" },
  { value: "24/7", label: "Recruitment Automation" },
];

/* Swap this for your own photo once you've found one — a wide, high-res
   office / team shot works best since it sits behind a dark navy wash. */
const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2000&auto=format&fit=crop";

/**
 * Reveals children with a slide-up/fade transition the first time they
 * scroll into view. No extra dependencies — just IntersectionObserver.
 */
function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`artms-reveal ${visible ? "artms-reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    // trigger the hero entrance animation right after mount
    const t = requestAnimationFrame(() => setHeroLoaded(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <div className="bg-white">
      {/* ---------------- Hero ---------------- */}
      <section className="relative isolate flex min-h-[560px] items-center overflow-hidden sm:min-h-[620px]">
        {/* Background photo */}
        <div
          className="absolute inset-0 -z-20 scale-105 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE_URL})` }}
          aria-hidden="true"
        />
        {/* Brand-navy wash over the photo */}
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-br from-[#060F5A]/95 via-[#0B1B78]/88 to-[#060F5A]/80"
          aria-hidden="true"
        />
        {/* subtle vignette so the top nav / bottom edge stay readable */}
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-t from-[#060F5A] via-transparent to-transparent opacity-70"
          aria-hidden="true"
        />

        <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h1
              className={`text-3xl font-extrabold leading-tight tracking-tight text-white transition-all duration-700 sm:text-5xl ${
                heroLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              AI Recruitment and Talent{" "}
              <span className="text-[var(--artms-accent)]">Management System</span>{" "}
              (ARTMS)
            </h1>

            <p
              className={`mt-5 max-w-xl text-base leading-relaxed text-indigo-100/85 transition-all duration-700 ${
                heroLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: "150ms" }}
            >
              A modern AI Recruitment & Talent Management System UI inspired by enterprise HR
              platforms—built for candidates and hiring teams with clean, responsive design.
            </p>

            <div
              className={`mt-8 flex flex-wrap items-center justify-center gap-4 transition-all duration-700 ${
                heroLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <Button as={Link} to="/jobs" variant="accent" size="lg">
                View jobs <ArrowRight size={16} />
              </Button>
              <Button
                as={Link}
                to="/login"
                variant="secondary"
                size="lg"
                className="!border-white/30 !bg-white/10 !text-white hover:!bg-white/20"
              >
                HR Login
              </Button>
            </div>

            <div
              className={`mt-8 flex items-center justify-center gap-3 transition-all duration-700 ${
                heroLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: "450ms" }}
            >
              <div className="flex -space-x-3">
                {["bg-[var(--artms-accent)]", "bg-white/25", "bg-white/15"].map((bg, i) => (
                  <span
                    key={i}
                    className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#060F5A] text-white ${bg}`}
                  >
                    <Users2 size={15} />
                  </span>
                ))}
              </div>
              <p className="text-sm text-indigo-100/85">
                <span className="font-semibold text-white">500+</span>{" "}
                professionals already joined this month
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- About / stats card ---------------- */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-[#060F5A] px-8 py-12 sm:px-12 lg:px-16">
            {/* decorative rocket-ish ring, echoes brand mark */}
            <svg
              className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 opacity-10"
              viewBox="0 0 200 200"
              fill="none"
            >
              <circle cx="100" cy="100" r="99" stroke="var(--artms-accent)" strokeWidth="2" />
              <circle cx="100" cy="100" r="70" stroke="var(--artms-accent)" strokeWidth="2" />
            </svg>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--artms-accent)]">
              Why ARTMS
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-extrabold leading-snug text-white sm:text-4xl">
              Enterprise-ready recruitment UX—frontend only
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-indigo-100/80 sm:text-base">
              Build polished hiring flows without backend coupling. Applicants can browse jobs,
              view details, and apply online without creating accounts. Admin consoles are designed
              for Department Heads, HR Admins, and Super Admins.
            </p>

            <dl className="relative mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 sm:gap-10">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-2xl font-extrabold text-[var(--artms-accent)] sm:text-3xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-[11px] leading-tight text-indigo-100/70 sm:text-xs">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </section>

      {/* ---------------- Features ---------------- */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--artms-accent)]">
                AI-powered recruitment
              </p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#060F5A] sm:text-3xl">
                Designed for speed, clarity, and governance
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
                Reusable components, consistent spacing, and enterprise patterns ready for API integration.
              </p>
            </div>
            <Badge tone="accent" className="hidden sm:inline-flex">
              UI-only • placeholder data
            </Badge>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <FiCpu aria-hidden="true" />,
              title: "Resume screening UI",
              desc: "Scoring cards and ranking tables ready for AI integration.",
            },
            {
              icon: <FiZap aria-hidden="true" />,
              title: "Fast candidate flow",
              desc: "Applicants apply without registration; smooth multi-section forms.",
            },
            {
              icon: <FiLayers aria-hidden="true" />,
              title: "Pipeline-ready views",
              desc: "Interview scheduling and recruitment pipeline pages with placeholders.",
            },
            {
              icon: <FiShield aria-hidden="true" />,
              title: "Role-based consoles",
              desc: "Department Head, HR Admin, and Super Admin modules with layouts.",
            },
          ].map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <Card className="group h-full border border-[var(--artms-border)] transition hover:-translate-y-0.5 hover:border-[var(--artms-accent)]/40 hover:shadow-lg">
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#060F5A]/8 text-[#060F5A] transition group-hover:bg-[var(--artms-accent)] group-hover:text-white">
                    {f.icon}
                  </div>
                  <CardTitle className="mt-3 text-[#060F5A]">{f.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">{f.desc}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- Process timeline ---------------- */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <Reveal>
            <h2 className="text-2xl font-extrabold tracking-tight text-[#060F5A] sm:text-3xl">
              Recruitment process (sample)
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
              A clear, predictable journey for applicants and hiring teams.
            </p>
          </Reveal>

          <ol className="relative mt-10 grid gap-6 md:grid-cols-4">
            {/* connecting line, desktop only */}
            <div className="pointer-events-none absolute left-0 right-0 top-5 hidden h-px bg-[var(--artms-border)] md:block" />

            {[
              { step: "01", title: "Apply online", desc: "Submit details and upload documents." },
              { step: "02", title: "AI screening", desc: "Placeholder scoring and ranking UI." },
              { step: "03", title: "Interview", desc: "Scheduling and calendar UI for teams." },
              { step: "04", title: "Offer & onboarding", desc: "Status tracking and reporting views." },
            ].map((s, i) => (
              <Reveal key={s.step} delay={i * 100} className="relative">
                <li className="relative list-none">
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--artms-accent)] bg-white text-xs font-black text-[var(--artms-accent)]">
                    {s.step}
                  </div>
                  <div className="mt-4 rounded-2xl border border-[var(--artms-border)] bg-white p-5">
                    <p className="text-sm font-extrabold text-[#060F5A]">{s.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------- Featured jobs ---------------- */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-[#060F5A] sm:text-3xl">
                Featured openings
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
                Explore a few roles, or browse the full job list.
              </p>
            </div>
            <Button as={Link} to="/jobs" variant="outline" className="hidden sm:inline-flex">
              Browse all jobs <ArrowRight size={16} />
            </Button>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {mockJobs.slice(0, 3).map((job, i) => (
            <Reveal key={job.id} delay={i * 100}>
              <Card className="h-full border border-[var(--artms-border)] transition hover:-translate-y-0.5 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-base text-[#060F5A]">{job.title}</CardTitle>
                  <p className="mt-1 text-sm text-slate-600">
                    {job.department} • {job.location}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">{job.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge tone="accent">{job.employmentType}</Badge>
                    <Badge tone="accent">{job.level}</Badge>
                  </div>
                  <div className="mt-5 flex gap-2">
                    <Button as={Link} to={`/jobs/${job.id}`} variant="primary">
                      View
                    </Button>
                    <Button as={Link} to={`/apply/${job.id}`} variant="outline">
                      Apply
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <Button as={Link} to="/jobs" variant="outline" className="w-full">
            Browse all jobs <ArrowRight size={16} />
          </Button>
        </div>
      </section>

      {/* Scroll-reveal transition classes + reduced-motion fallback */}
      <style>{`
        .artms-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 600ms ease, transform 600ms ease;
        }
        .artms-reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .artms-reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}