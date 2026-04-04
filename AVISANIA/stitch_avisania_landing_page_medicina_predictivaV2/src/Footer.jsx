import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="relative bg-navy-dark overflow-hidden">

      {/* Teal glow accent top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/50 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Main footer content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-20 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 mb-12">

          {/* ── Col 1: Logo + tagline ── */}
          <div className="flex flex-col gap-5">
            <Link to="/">
              <img
                src="/Avisania%20Logo.png"
                alt="Avisania Lab"
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-sm text-slate-400 font-light leading-relaxed max-w-[220px]">
              I+D+i en medicina predictiva desde la práctica clínica.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 mt-1">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-slate-500 hover:border-teal/40 hover:text-teal transition-all duration-300"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-slate-500 hover:border-teal/40 hover:text-teal transition-all duration-300"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── Col 2: Navegación ── */}
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-teal mb-5">Navegación</p>
            <ul className="space-y-3">
              {[
                { label: 'Servicios', to: '/#servicios' },
                { label: 'Beneficios', to: '/#beneficios' },
                { label: 'Diferencial', to: '/#diferencial' },
                { label: 'Quiénes somos', to: '/quienes-somos' },
                { label: 'Proyectos', to: '/proyectos' },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-sm text-slate-400 hover:text-silver transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-teal/0 group-hover:bg-teal/60 transition-all duration-300 group-hover:w-4" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Contacto ── */}
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-teal mb-5">Contacto</p>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:pablo.hernandez@avisania.tech"
                  className="group flex items-start gap-3 text-slate-400 hover:text-silver transition-colors duration-200"
                >
                  <span className="material-symbols-outlined text-teal text-base mt-0.5 flex-shrink-0">mail</span>
                  <span className="text-sm font-light break-all">pablo.hernandez@avisania.tech</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/34630251862"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 rounded-full border border-[#25D366]/40 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#25D366] hover:bg-[#25D366]/10 transition-all duration-300"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ── Bottom strip ── */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600 font-light">
            © 2026 Avisania Lab S.L. Medicina Predictiva de Alto Valor.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
            <p className="text-xs text-slate-600 font-light">MDR · AI Act · GDPR Compliant</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
