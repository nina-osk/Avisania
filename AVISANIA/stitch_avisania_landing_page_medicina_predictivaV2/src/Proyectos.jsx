import React from 'react';
import { Link } from 'react-router-dom';

function Proyectos() {
  const categorias = [
    {
      titulo: 'Medicina Predictiva',
      icon: 'cardiology',
      proyectos: [
        { nombre: 'Predicción de desaturación perioperatoria', modelo: 'LSTM', auc: '0,97' },
        { nombre: 'Predicción de inestabilidad hemodinámica', modelo: 'XGBoost', auc: '0,98' },
        { nombre: 'Predicción de vía aérea difícil (ECO Air Coach CDSS)', modelo: 'XGBoost + Eco', auc: '0,95' },
      ]
    },
    {
      titulo: 'Computer Vision',
      icon: 'visibility',
      proyectos: [
        { nombre: 'Autosegmentación de tumores pancreáticos', modelo: 'CNN', auc: null },
        { nombre: 'Autosegmentación de metástasis/masas cerebrales', modelo: 'CNN', auc: null },
        { nombre: 'CNN retinografía diabética', modelo: 'CNN', auc: null },
      ]
    },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">

      {/* HEADER */}
      <header className="fixed top-0 z-50 w-full bg-navy/60 backdrop-blur-2xl px-6 lg:px-20 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link to="/"><img src="/Logo%20plata.png" alt="Avisania Lab" className="h-10 w-auto" /></Link>
          <nav className="hidden md:flex items-center gap-10">
            <Link className="text-sm font-medium text-slate-300 hover:text-silver transition-colors" to="/#servicios">Servicios</Link>
            <Link className="text-sm font-medium text-slate-300 hover:text-silver transition-colors" to="/#beneficios">Beneficios</Link>
            <Link className="text-sm font-medium text-slate-300 hover:text-silver transition-colors" to="/#diferencial">Diferencial</Link>
            <Link className="text-sm font-medium text-slate-300 hover:text-silver transition-colors" to="/nosotros">Nosotros</Link>
            <Link className="text-sm font-medium text-silver font-bold transition-colors" to="/proyectos">Proyectos</Link>
          </nav>
          <a href="mailto:pablo.hernandez@avisania.tech" className="rounded-full border-2 border-silver px-8 py-2.5 text-xs font-black uppercase tracking-widest text-silver hover:bg-silver hover:text-navy transition-all duration-300">
            Contactar
          </a>
        </div>
      </header>

      <main className="flex-1 pt-24">

        {/* HERO */}
        <section className="py-20 px-6 lg:px-20">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-silver mb-4">Nuestra lista de éxitos</p>
            <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6" style={{fontStyle: 'italic'}}>
              Proyectos{' '}<span className="text-silver" style={{fontStyle: 'italic'}}>recientes</span>
            </h1>
            <p className="text-lg text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
              Resultados reales en entornos clínicos reales. Cada proyecto refleja nuestro compromiso con la excelencia del dato y la medicina predictiva de precisión.
            </p>
          </div>
        </section>

        {/* CATEGORÍAS DE PROYECTOS */}
        {categorias.map((cat, ci) => (
          <section key={ci} className={`py-20 px-6 lg:px-20 ${ci % 2 === 0 ? '' : 'bg-navy-dark'}`}>
            <div className="mx-auto max-w-6xl">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-14 h-14 rounded-2xl bg-silver/10 border border-silver/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-silver text-2xl">{cat.icon}</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-black text-white">{cat.titulo}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cat.proyectos.map((p, pi) => (
                  <div key={pi} className="group border border-white/10 rounded-[2rem] p-8 flex flex-col gap-5 transition-all duration-500 hover:border-silver/30 hover:-translate-y-2 professional-shadow bg-navy/50">
                    <div className="flex items-center justify-between">
                      <span className="inline-block bg-silver/10 border border-silver/20 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-silver">
                        {p.modelo}
                      </span>
                      {p.auc && (
                        <span className="text-2xl font-black text-silver">{p.auc}</span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-white leading-snug">{p.nombre}</h3>
                    {p.auc && (
                      <div className="mt-auto">
                        <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1.5">AUC Score</p>
                        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-silver/60 to-silver rounded-full transition-all duration-1000"
                            style={{ width: `${parseFloat(p.auc.replace(',', '.')) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* SMART MOL */}
        <section className="py-20 px-6 lg:px-20">
          <div className="mx-auto max-w-6xl">
            <div className="border border-silver/20 rounded-[2rem] p-10 lg:p-16 flex flex-col lg:flex-row items-center gap-12 professional-shadow bg-gradient-to-br from-navy-light/30 to-navy">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-silver/10 border border-silver/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-silver text-2xl">science</span>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-silver">Utility Platform</p>
                    <h2 className="text-3xl lg:text-4xl font-black text-white">SMART MOL</h2>
                  </div>
                </div>
                <p className="text-lg text-slate-300 font-light leading-relaxed mb-8">
                  Plataforma diseñada para facilitar la investigación. Un ecosistema que combina inteligencia artificial y rigor científico para acelerar el descubrimiento y la validación en entornos clínicos.
                </p>
                <a
                  href="https://www.quantumbabylon.org/smart-mol-ai.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full border-2 border-silver/40 px-8 py-4 text-sm font-black uppercase tracking-widest text-white hover:border-silver hover:text-silver transition-all duration-300 group"
                >
                  Ver SMART MOL
                  <span className="material-symbols-outlined text-silver text-lg group-hover:translate-x-1 transition-transform">open_in_new</span>
                </a>
              </div>
              <div className="flex-shrink-0 w-48 h-48 lg:w-56 lg:h-56 rounded-[2rem] bg-silver/5 border border-silver/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-silver text-7xl lg:text-8xl">hub</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 lg:px-20 bg-navy-dark">
          <div className="mx-auto max-w-4xl text-center flex flex-col items-center gap-8">
            <h2 className="text-3xl lg:text-5xl font-black text-white leading-tight" style={{fontStyle: 'italic'}}>
              ¿Tienes un proyecto{' '}<span className="text-silver" style={{fontStyle: 'italic'}}>en mente</span>?
            </h2>
            <p className="text-lg text-slate-300 font-light max-w-2xl">
              Hablemos sobre cómo podemos ayudarte a generar impacto real con medicina predictiva.
            </p>
            <a href="mailto:pablo.hernandez@avisania.tech?subject=Nuevo%20Proyecto%20-%20Avisania" className="rounded-full bg-silver px-12 py-5 text-sm font-black uppercase tracking-[0.2em] text-navy shadow-[0_20px_40px_rgba(168,184,200,0.3)] hover:scale-105 transition-all duration-300">
              Contactar
            </a>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 px-6 lg:px-20 bg-navy-dark">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8">
          <Link to="/"><img src="/Logo%20plata.png" alt="Avisania Lab" className="h-8 w-auto" /></Link>
          <p className="text-xs text-slate-600 font-light">© 2026 Avisania Lab. Medicina Predictiva de Alto Valor.</p>
          <div className="flex gap-6">
            <a className="text-slate-500 hover:text-silver transition-colors" href="#">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
            </a>
            <a className="text-slate-500 hover:text-silver transition-colors" href="#">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Proyectos;
