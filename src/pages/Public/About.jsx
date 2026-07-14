import { FiCpu, FiShield, FiTrendingUp, FiUsers } from "react-icons/fi";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/Card";

const VALUES = [
  {
    icon: <FiUsers aria-hidden="true" />,
    title: "Human-first hiring",
    desc: "Accessible, transparent candidate journeys—no forced registration for applicants.",
  },
  {
    icon: <FiCpu aria-hidden="true" />,
    title: "AI-assisted workflow",
    desc: "UI patterns ready for resume scoring, screening, and ranking integrations.",
  },
  {
    icon: <FiShield aria-hidden="true" />,
    title: "Governance-ready",
    desc: "Role-based consoles for Department Head, HR Admin, and Super Admin operations.",
  },
  {
    icon: <FiTrendingUp aria-hidden="true" />,
    title: "Enterprise analytics",
    desc: "Dashboards and pipeline views designed for hiring velocity and quality metrics.",
  },
];

export default function About() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--artms-accent)]">
          About ARTMS
        </p>
        <h1 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          AI Recruitment & Talent Management System (Frontend)
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
          ARTMS is a modern, responsive hiring experience inspired by enterprise HR
          platforms. This implementation focuses on a production-ready frontend
          architecture—layouts, reusable components, routing, and accessible UI
          patterns—ready for future Laravel REST API + MySQL integration.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <Card key={v.title} className="transition hover:shadow-md">
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[var(--artms-primary)]">
                  {v.icon}
                </div>
                <CardTitle className="mt-3">{v.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">{v.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-[var(--artms-border)] bg-[var(--artms-soft)] p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <h2 className="text-lg font-extrabold text-slate-900">Vision</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Enable teams to hire faster and smarter with AI-powered workflows that
                keep candidates informed and hiring managers aligned.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-slate-900">Mission</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Deliver a secure, enterprise-ready talent platform with delightful UX,
                consistent design, and scalable frontend architecture for future API
                integration.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

