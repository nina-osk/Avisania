import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Nosotros() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">

      {/* HEADER */}
      <header className="fixed top-0 z-50 w-full bg-navy/60 backdrop-blur-2xl px-6 lg:px-20 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link to="/"><img src="/Avisania%20Logo.png" alt="Avisania Lab" className="h-10 w-auto" /></Link>
          <nav className="hidden md:flex items-center gap-10">
            <Link className="text-sm font-medium text-slate-300 hover:text-silver transition-colors" to="/#servicios">Servicios</Link>
            <Link className="text-sm font-medium text-slate-300 hover:text-silver transition-colors" to="/#beneficios">Beneficios</Link>
            <Link className="text-sm font-medium text-slate-300 hover:text-silver transition-colors" to="/#diferencial">Diferencial</Link>
            <Link className="text-sm font-medium text-slate-300 hover:text-silver transition-colors" to="/quienes-somos">Quiénes somos</Link>
            <Link className="text-sm font-medium text-silver font-bold transition-colors" to="/nosotros">Nosotros</Link>
            <Link className="text-sm font-medium text-slate-300 hover:text-silver transition-colors" to="/proyectos">Proyectos</Link>
          </nav>
          <a href="mailto:pablo.hernandez@avisania.tech" className="rounded-full border-2 border-silver px-8 py-2.5 text-xs font-black uppercase tracking-widest text-silver hover:bg-silver hover:text-navy transition-all duration-300">
            Contactar
          </a>
        </div>
      </header>

      <main className="flex-1 pt-24">

        {/* HERO */}
        <section className="py-20 px-6 lg:px-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-silver/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <div className="mx-auto max-w-7xl relative">
            <div className="mb-20 text-center max-w-3xl mx-auto">
              <p className="text-xs font-black uppercase tracking-[0.4em] text-silver mb-3">Quiénes somos</p>
              <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight" style={{fontStyle: 'italic'}}>
                Ciencia, criterio clínico y{' '}<span className="text-silver" style={{fontStyle: 'italic'}}>liderazgo experto</span>
              </h2>
              <p className="mt-6 text-lg text-slate-400 font-light leading-relaxed">
                Detrás de cada proyecto hay un equipo con formación de élite, experiencia clínica real y visión estratégica. Conoce a las personas que lideran Avisania.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Pablo */}
              <div className="group bg-gradient-to-b from-navy-light to-navy rounded-[2rem] border border-white/10 hover:border-silver/30 p-8 lg:p-10 transition-all duration-500">
                <div className="flex items-start gap-5 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-silver/10 border border-silver/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-silver text-3xl">neurology</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white">Dr. Pablo Hernández Hernández</h3>
                    <p className="text-sm text-silver font-semibold">Médico Anestesiólogo · Investigador en IA Médica</p>
                  </div>
                </div>
                <p className="text-slate-300 font-light text-sm leading-relaxed mb-5">
                  Facultativo Especialista en Anestesiología y Reanimación con formación avanzada en inteligencia artificial aplicada a la medicina. Combina práctica clínica de alto nivel — bloqueos locorregionales ecoguiados, manejo de paciente crítico, monitorización hemodinámica avanzada — con investigación en machine learning y deep learning para diagnóstico y predicción clínica.
                </p>
                <div className="space-y-3 mb-5">
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-silver text-sm mt-0.5">school</span>
                    <p className="text-xs text-slate-400 font-light"><span className="text-white font-semibold">AI in Health Care</span> — MIT Sloan School of Management</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-silver text-sm mt-0.5">biotech</span>
                    <p className="text-xs text-slate-400 font-light"><span className="text-white font-semibold">Co-fundador SleepOne</span> — Neuromonitorización EEG portátil con deep learning (+500 registros)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-silver text-sm mt-0.5">precision_manufacturing</span>
                    <p className="text-xs text-slate-400 font-light"><span className="text-white font-semibold">Airway Coach</span> — Modelo predictivo de vía aérea difícil (AUC 0.97)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-silver text-sm mt-0.5">groups</span>
                    <p className="text-xs text-slate-400 font-light"><span className="text-white font-semibold">AI Healthcare Leaders</span> — Harvard Medical School · SEDAR · INIBICA</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-silver text-sm mt-0.5">verified</span>
                    <p className="text-xs text-slate-400 font-light"><span className="text-white font-semibold">Revisor Experto</span> — Ministerio de Sanidad de España · Panel Europeo AI-CDSS</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'TensorFlow', 'PyTorch', 'MDR', 'EU AI Act', 'GDPR'].map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-silver/80 bg-silver/10 border border-silver/20 rounded-full px-3 py-1">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Ricardo */}
              <div className="group bg-gradient-to-b from-navy-light to-navy rounded-[2rem] border border-white/10 hover:border-silver/30 p-8 lg:p-10 transition-all duration-500">
                <div className="flex items-start gap-5 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-silver/10 border border-silver/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-silver text-3xl">radiology</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white">Dr. Ricardo Oyarzun Silva</h3>
                    <p className="text-sm text-silver font-semibold">Oncólogo Radioterapeuta · Clinical AI Scientist</p>
                  </div>
                </div>
                <p className="text-slate-300 font-light text-sm leading-relaxed mb-5">
                  Residente de Oncología Radioterápica (R4) con amplia formación clínica multidisciplinar y especialización creciente en aplicaciones de IA/ML para radioterapia — particularmente imagen médica, auto-segmentación y modelado predictivo. Investigador orientado a traducir métodos computacionales robustos en flujos de trabajo de radioterapia más seguros y precisos.
                </p>
                <div className="space-y-3 mb-5">
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-silver text-sm mt-0.5">school</span>
                    <p className="text-xs text-slate-400 font-light"><span className="text-white font-semibold">Doctorado (en curso)</span> — Universidad de Sevilla · Biología Molecular, Biomedicina e Investigación Clínica</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-silver text-sm mt-0.5">biotech</span>
                    <p className="text-xs text-slate-400 font-light"><span className="text-white font-semibold">PANTHER Challenge</span> — Auto-segmentación 3D en MRI de tumores pancreáticos con 3D U-Net / nnU-Net</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-silver text-sm mt-0.5">precision_manufacturing</span>
                    <p className="text-xs text-slate-400 font-light"><span className="text-white font-semibold">ML en Anestesiología</span> — Modelo predictivo de vía aérea difícil con Clínica Universidad de Navarra</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-silver text-sm mt-0.5">emoji_events</span>
                    <p className="text-xs text-slate-400 font-light"><span className="text-white font-semibold">ESTRO 2025 & 2026</span> — Publicaciones en congresos internacionales de oncología radioterápica</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-silver text-sm mt-0.5">psychology</span>
                    <p className="text-xs text-slate-400 font-light"><span className="text-white font-semibold">Máster en Bioética</span> — Universidad Francisco de Vitoria · Compromiso ético en innovación clínica</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['PyTorch', 'MONAI', 'nnU-Net', 'SVM', 'Random Forest', '3D Segmentation'].map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-silver/80 bg-silver/10 border border-silver/20 rounded-full px-3 py-1">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default Nosotros;
