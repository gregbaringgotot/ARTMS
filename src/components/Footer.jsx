import { Link } from "react-router-dom";
import { FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--artms-border)] bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-4 lg:px-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--artms-primary-2)] text-sm font-black text-white">
              A
            </span>
            <div className="leading-tight">
              <p className="text-sm font-extrabold text-slate-900">ARTMS</p>
              <p className="text-xs text-slate-500">AI Recruitment & Talent</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            Enterprise-grade recruitment experiences inspired by modern HR
            platforms. Frontend-only UI ready for future Laravel + MySQL
            integration.
          </p>
        </div>

        <div>
          <p className="text-sm font-extrabold text-slate-900">Explore</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <Link className="hover:text-slate-900" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-slate-900" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-slate-900" to="/jobs">
                Jobs
              </Link>
            </li>
            <li>
              <Link className="hover:text-slate-900" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-extrabold text-slate-900">For Teams</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <Link className="hover:text-slate-900" to="/login">
                HR Login
              </Link>
            </li>
            <li className="text-xs text-slate-500">
              Department Heads, HR Admins, and Super Admins only.
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-extrabold text-slate-900">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li className="flex items-center gap-2">
              <FiMapPin aria-hidden="true" />
              <span>PH • Enterprise Hiring Operations</span>
            </li>
            <li className="flex items-center gap-2">
              <FiMail aria-hidden="true" />
              <span>talent@artms.example</span>
            </li>
            <li className="flex items-center gap-2">
              <FiPhone aria-hidden="true" />
              <span>+63 000 000 0000</span>
            </li>
            <li className="flex items-center gap-2">
              <FiLinkedin aria-hidden="true" />
              <span>LinkedIn Careers</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--artms-border)] bg-[var(--artms-soft)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} ARTMS. All rights reserved.</p>
          <p className="text-slate-500">
            Built with React + Vite + Tailwind v4 (frontend only).
          </p>
        </div>
      </div>
    </footer>
  );
}

