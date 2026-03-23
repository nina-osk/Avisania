import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

function App() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [activePilar, setActivePilar] = useState(0);
  const [activeServicio, setActiveServicio] = useState(0);
  const pilarTimer = useRef(null);
  const serviciosRef = useRef(null);
  const benefitTimer = useRef(null);

  // Hero: video fades out on scroll, content fades in
  const heroRef = useRef(null);
  const [videoFade, setVideoFade] = useState(1);
  const [heroContentOpacity, setHeroContentOpacity] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      // Video: fully visible first 5%, fades out by 40%
      if (scrollY < vh * 0.05) {
        setVideoFade(1);
      } else if (scrollY < vh * 0.4) {
        setVideoFade(1 - (scrollY - vh * 0.05) / (vh * 0.35));
      } else {
        setVideoFade(0);
      }
      // Content: appears at 10%, fully visible by 50%, fades out between 70%-100%
      if (scrollY < vh * 0.1) {
        setHeroContentOpacity(0);
      } else if (scrollY < vh * 0.5) {
        setHeroContentOpacity((scrollY - vh * 0.1) / (vh * 0.4));
      } else if (scrollY < vh * 0.7) {
        setHeroContentOpacity(1);
      } else if (scrollY < vh * 1.0) {
        setHeroContentOpacity(1 - (scrollY - vh * 0.7) / (vh * 0.3));
      } else {
        setHeroContentOpacity(0);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const pilares = [
    {
      icon: 'local_hospital',
      img: '/Eficiencia.png',
      title: 'Eficiencia Clínica',
      subtitle: 'Medicina Preventiva',
      desc: 'Optimizamos el ciclo clínico completo con herramientas digitales, modelos predictivos validados y flujos de decisión basados en dato real. Porque la eficiencia en sanidad no se improvisa. Se diseña, se mide y se sostiene.',
      points: []
    },
    {
      icon: 'science',
      img: '/Exoeriencia.png',
      title: 'Experiencia',
      subtitle: 'El conocimiento sin aplicación no es expertise. Es archivo.',
      desc: 'Especialización clínica, data science aplicado y expertise regulatorio —MDR, AI Act, GDPR— para prescribir soluciones con rigor métrico no negociable. Know-how contrastado con referentes internacionales, aplicado a tu realidad.',
      points: []
    },
    {
      icon: 'rocket_launch',
      img: '/Liderazgo.png',
      title: 'AUGE',
      subtitle: 'Lideramos donde otros aún no han llegado.',
      desc: 'Internacionalización, alianzas estratégicas e innovación de frontera con propósito. Un modelo de desarrollo híbrido inspirado en Boston Lifescience y Cambridge Biocapital, adaptado a la realidad clínica e institucional española.',
      points: []
    },
  ];

  const servicios = [
    { icon: 'database', title: 'Decisiones blindadas por la excelencia del dato', desc: 'Sin dato de calidad no hay estrategia, hay improvisación. Construimos arquitecturas de información fiables que convierten los datos de tu organización en decisiones clínicas, operativas y financieras de alto impacto.' },
    { icon: 'rocket_launch', title: 'Innovación con triple impacto: económico, social y ambiental', desc: 'Los proyectos que lideramos generan retorno y dejan huella. Integramos desde el diseño las tres dimensiones del impacto para que tu organización crezca con propósito real.' },
    { icon: 'verified', title: 'Resultados medibles con encaje real en la práctica clínica', desc: 'Solo trabajamos en lo que puede ocurrir de verdad. Indicadores claros desde el inicio, acompañamiento hasta la implementación real. Sin pilotos eternos. Sin KPIs decorativos.' },
    { icon: 'shield', title: 'I+D+i y digitalización sin riesgos. Solo hacia resultados.', desc: 'Eliminamos la incertidumbre estructural de la innovación. Validamos antes de escalar, alineamos con tu estrategia y protegemos los recursos de tu organización.' },
  ];

  // Servicios: rotate page (0 or 1) on scroll
  useEffect(() => {
    const onScroll = () => {
      if (!serviciosRef.current) return;
      const rect = serviciosRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportCenter = window.innerHeight / 2;
      const progress = (viewportCenter - rect.top) / sectionHeight;
      setActiveServicio(progress > 0.5 ? 1 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const startPilarTimer = () => {
    clearInterval(pilarTimer.current);
    pilarTimer.current = setInterval(() => setActivePilar(p => (p + 1) % 3), 4000);
  };

  useEffect(() => { startPilarTimer(); return () => clearInterval(pilarTimer.current); }, []);

  const handlePilarClick = (idx) => { setActivePilar(idx); startPilarTimer(); };

  const benefits = [
    { icon: 'encrypted', title: 'Seguridad en el manejo de datos médicos', desc: 'Trabajas con datos médicos de forma más protegida, ordenada y confiable.', highlight: 'No es el cómo, es el quién.', sub: 'Igual que un paciente no elige la técnica, elige al cirujano.' },
    { icon: 'workspace_premium', title: 'Validación y respaldo serio', desc: 'No es una solución improvisada. Tienes una base sólida para avanzar con confianza.', highlight: 'No es solo nuestra base: es nuestra posición como expertos.' },
    { icon: 'gavel', title: 'Soluciones defendibles frente a terceros', desc: 'Puedes sostener cada decisión con argumentos sólidos, no con intuición.' },
    { icon: 'trending_up', title: 'Investigación aplicada a resultados', desc: 'No vendemos investigación teórica. Transformamos tus datos en resultados, generando ROI y evolución real.' },
    { icon: 'psychology', title: 'Mejora en la toma de decisiones', desc: 'Te llevamos a lo más difícil y valioso: decidir con datos, no con suposiciones.' },
    { icon: 'security', title: 'Eliminación de la sensación de riesgo', desc: 'Innovar deja de sentirse como un salto al vacío.' },
    { icon: 'shield_with_heart', title: 'Tranquilidad profesional', desc: 'Avanzas con control, claridad y menor exposición. Evolucionas con respaldo.' },
  ];

  const totalPages = Math.ceil(benefits.length / 2);
  const visibleBenefits = benefits.slice(carouselIndex * 2, carouselIndex * 2 + 2);

  const startBenefitTimer = () => {
    clearInterval(benefitTimer.current);
    benefitTimer.current = setInterval(() => {
      setCarouselIndex(p => (p + 1) % totalPages);
    }, 5000);
  };

  useEffect(() => { startBenefitTimer(); return () => clearInterval(benefitTimer.current); }, [carouselIndex]);

  const goToPage = (page) => { setCarouselIndex(page); startBenefitTimer(); };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════════════
          HEADER
      ═══════════════════════════════════════════════════════════════ */}
      <header className="fixed top-0 z-50 w-full bg-navy/60 backdrop-blur-2xl px-6 lg:px-20 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <img src="/Logo%20plata.png" alt="Avisania Lab" className="h-10 w-auto" />
          <nav className="hidden md:flex items-center gap-10">
            <a className="text-sm font-medium text-slate-300 hover:text-silver transition-colors" href="#servicios">Servicios</a>
            <a className="text-sm font-medium text-slate-300 hover:text-silver transition-colors" href="#beneficios">Beneficios</a>
            <a className="text-sm font-medium text-slate-300 hover:text-silver transition-colors" href="#diferencial">Diferencial</a>
            <Link className="text-sm font-medium text-slate-300 hover:text-silver transition-colors" to="/proyectos">Proyectos</Link>
          </nav>
          <a href="mailto:pablo.hernandez@avisania.tech" className="rounded-full border-2 border-silver px-8 py-2.5 text-xs font-black uppercase tracking-widest text-silver hover:bg-silver hover:text-navy transition-all duration-300">
            Contactar
          </a>
        </div>
      </header>

      <main className="flex-1">

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 1 — HERO (Split-screen wipe)
        ═══════════════════════════════════════════════════════════════ */}
        <section ref={heroRef} className="relative bg-navy" style={{ height: '150vh' }}>

          {/* Video — fixed, fades out on scroll */}
          <div
            className="fixed inset-0 z-30 overflow-hidden"
            style={{ opacity: videoFade, transition: 'opacity 0.1s linear', pointerEvents: videoFade > 0.1 ? 'auto' : 'none', display: videoFade === 0 ? 'none' : undefined }}
          >
            <video autoPlay muted loop playsInline webkit-playsinline="true" className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover">
              <source src="/Video_presentacion-1.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-navy/20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/20"></div>
          </div>

          {/* Hero content — fixed, fades IN on scroll, behind video */}
          <div
            className="fixed inset-0 z-20 flex items-center overflow-y-auto"
            style={{ opacity: heroContentOpacity, transition: 'opacity 0.1s linear', pointerEvents: heroContentOpacity > 0.1 ? 'auto' : 'none', display: heroContentOpacity === 0 ? 'none' : undefined }}
          >
            <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-20 pt-20 pb-6">
              <div className="flex flex-col gap-4 sm:gap-6 max-w-3xl bg-navy/80 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12">
                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] text-white" style={{fontStyle: 'italic'}}>
                  Tu organización genera datos cada día.
                  <br />
                  <span className="text-amber" style={{fontStyle: 'italic'}}>¿Cuántos de ellos están transformando decisiones reales?</span>
                </h1>
                <ul className="max-w-xl text-sm sm:text-base leading-relaxed text-slate-300 font-light space-y-1.5">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-amber text-base mt-0.5">check</span>
                    <span>Sin pilotos eternos. Sin KPIs decorativos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-amber text-base mt-0.5">check</span>
                    <span>Encaje real en la práctica clínica desde el primer día</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-amber text-base mt-0.5">check</span>
                    <span>Innovación sin riesgos. Solo trabajamos hacia resultados</span>
                  </li>
                </ul>
                <div className="flex items-center gap-4 mt-2">
                  <a href="#servicios" className="inline-flex items-center gap-3 rounded-full border-2 border-silver/40 px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-white hover:border-silver hover:text-silver transition-all duration-300 group">
                    Ver Servicios
                    <span className="material-symbols-outlined text-silver text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION — AGENDA CON NOSOTROS
        ═══════════════════════════════════════════════════════════════ */}
        <section className="relative py-28 px-6 lg:px-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/Equipo_m%C3%A9dico-cient%C3%ADfico.png" alt="Equipo Avisania" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-navy/70"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-navy/60"></div>
          </div>
          <div className="relative z-10 mx-auto max-w-4xl text-center flex flex-col items-center gap-8">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-silver">Tu próximo paso</p>
            <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight" style={{fontStyle: 'italic'}}>
              Agenda{' '}<span className="text-silver" style={{fontStyle: 'italic'}}>con nosotros</span>
            </h2>
            <p className="text-lg text-slate-300 font-light leading-relaxed max-w-2xl">
              Reserva una sesión estratégica con nuestro equipo. Sin compromiso, sin letra pequeña — solo decisiones basadas en datos y experiencia real.
            </p>
            <a href="mailto:pablo.hernandez@avisania.tech?subject=Agendar%20Reuni%C3%B3n%20-%20Avisania" className="inline-flex items-center gap-3 rounded-full bg-amber px-10 py-5 text-sm font-black uppercase tracking-[0.2em] text-navy shadow-[0_20px_40px_rgba(212,137,60,0.3)] hover:scale-105 transition-all duration-300">
              Agendar Reunión
              <span className="material-symbols-outlined text-navy text-lg">calendar_month</span>
            </a>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 2 — SERVICIOS
        ═══════════════════════════════════════════════════════════════ */}
        <section className="py-28 px-6 lg:px-20 relative" id="servicios" ref={serviciosRef}>
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center max-w-4xl mx-auto">
              <p className="text-xs font-black uppercase tracking-[0.4em] text-silver mb-3">Servicios</p>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">Cuatro palancas de <span className="text-amber">transformación real</span></h2>
            </div>

            {/* Imagen equipo médico */}
            <div className="flex justify-center mb-12">
              <div className="relative">
                <div className="absolute -inset-4 bg-silver/10 rounded-full blur-3xl pointer-events-none"></div>
                <img src="/Equipo_m%C3%A9dico-cient%C3%ADfico.png" alt="Equipo médico-científico" className="relative rounded-2xl md:rounded-[2rem] w-full max-w-sm sm:max-w-xl md:max-w-2xl object-cover border border-white/10 shadow-2xl" />
              </div>
            </div>

            {/* 2 tarjetas visibles con flechas laterales */}
            <div className="relative max-w-5xl mx-auto px-12 md:px-16">
              <button onClick={() => setActiveServicio(0)} disabled={activeServicio === 0} className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/20 bg-navy/80 backdrop-blur-sm flex items-center justify-center text-white hover:border-amber hover:text-amber disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-lg">
                <span className="material-symbols-outlined text-lg">arrow_back</span>
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700">
                {servicios.slice(activeServicio * 2, activeServicio * 2 + 2).map((s, i) => (
                  <div key={activeServicio * 2 + i} className="bg-gradient-to-b from-navy-light to-navy rounded-[2rem] border border-amber/30 p-8 flex flex-col items-center text-center shadow-[0_20px_60px_rgba(212,137,60,0.1)] animate-[fadeIn_0.5s_ease-in-out]">
                    <div className="w-16 h-16 rounded-2xl bg-amber/10 border border-amber/20 flex items-center justify-center mb-5">
                      <span className="material-symbols-outlined text-amber text-3xl">{s.icon}</span>
                    </div>
                    <h3 className="text-xl font-black text-white mb-3">{s.title}</h3>
                    <p className="text-slate-400 font-light text-sm leading-relaxed text-justify">{s.desc}</p>
                  </div>
                ))}
              </div>

              <button onClick={() => setActiveServicio(1)} disabled={activeServicio === 1} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/20 bg-navy/80 backdrop-blur-sm flex items-center justify-center text-white hover:border-amber hover:text-amber disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-lg">
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-10">
              {[0, 1].map(i => (
                <button key={i} onClick={() => setActiveServicio(i)} className={`h-2.5 rounded-full transition-all duration-300 ${i === activeServicio ? 'bg-amber w-8' : 'bg-white/20 hover:bg-white/40 w-2.5'}`} />
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION — 3 PILARES
        ═══════════════════════════════════════════════════════════════ */}
        <section className="py-28 px-6 lg:px-20 bg-navy-dark relative" id="pilares">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center max-w-4xl mx-auto">
              <p className="text-xs font-black uppercase tracking-[0.4em] text-silver mb-3">Pilares</p>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-8">Sobre qué está construido <span className="text-silver">todo lo que hacemos</span></h2>
            </div>

            {/* ── MOBILE: horizontal carousel with arrows ── */}
            <div className="md:hidden relative">
              <button onClick={() => handlePilarClick(Math.max(0, activePilar - 1))} disabled={activePilar === 0} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-20 w-10 h-10 rounded-full border border-white/20 bg-navy/80 backdrop-blur-sm flex items-center justify-center text-white hover:border-silver hover:text-silver disabled:opacity-20 disabled:cursor-not-allowed transition-all shadow-lg">
                <span className="material-symbols-outlined text-lg">arrow_back</span>
              </button>
              <div className="overflow-hidden">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activePilar * 100}%)` }}>
                  {pilares.map((p, i) => (
                    <div key={i} className="w-full flex-shrink-0 px-4">
                      <div className="bg-gradient-to-b from-navy-light to-navy rounded-[2rem] border border-silver/50 overflow-hidden shadow-[0_20px_60px_rgba(168,184,200,0.2)]">
                        <div className="w-full h-44 relative overflow-hidden">
                          <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent"></div>
                        </div>
                        <div className="p-6 flex flex-col items-center text-center">
                          <div className="w-14 h-14 rounded-2xl bg-silver/10 border border-silver/20 flex items-center justify-center mb-4 -mt-10 relative z-10 backdrop-blur-sm">
                            <span className="material-symbols-outlined text-silver text-2xl">{p.icon}</span>
                          </div>
                          <h3 className="text-xl font-black text-white mb-1">{p.title}</h3>
                          <p className="text-silver text-sm font-semibold italic mb-3">{p.subtitle}</p>
                          <p className="text-slate-400 font-light text-sm leading-relaxed mb-4 text-justify">{p.desc}</p>
                          <ul className="text-left text-slate-400 text-xs font-light leading-relaxed space-y-1.5 w-full">
                            {p.points.map((pt, j) => (
                              <li key={j} className="flex gap-2"><span className="text-silver mt-0.5">—</span><span>{pt}</span></li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button onClick={() => handlePilarClick(Math.min(pilares.length - 1, activePilar + 1))} disabled={activePilar >= pilares.length - 1} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-20 w-10 h-10 rounded-full border border-white/20 bg-navy/80 backdrop-blur-sm flex items-center justify-center text-white hover:border-silver hover:text-silver disabled:opacity-20 disabled:cursor-not-allowed transition-all shadow-lg">
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </div>

            {/* ── DESKTOP: 3-col grid with arrows ── */}
            <div className="hidden md:block relative">
              <button onClick={() => handlePilarClick(Math.max(0, activePilar - 1))} disabled={activePilar === 0} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 z-20 w-10 h-10 rounded-full border border-white/20 bg-navy/80 backdrop-blur-sm flex items-center justify-center text-white hover:border-silver hover:text-silver disabled:opacity-20 disabled:cursor-not-allowed transition-all shadow-lg">
                <span className="material-symbols-outlined text-lg">arrow_back</span>
              </button>

              <div className="grid md:grid-cols-3 gap-5 items-center">
              {pilares.map((p, i) => (
                <div
                  key={i}
                  onClick={() => handlePilarClick(i)}
                  className={`cursor-pointer bg-gradient-to-b from-navy-light to-navy rounded-[2rem] border p-6 flex flex-col items-center text-center transition-all duration-500 origin-center ${
                    i === activePilar
                      ? 'border-silver/50 scale-105 shadow-[0_20px_60px_rgba(168,184,200,0.2)] z-10'
                      : 'border-white/10 scale-[0.95] opacity-60 hover:opacity-80'
                  }`}
                >
                  <div className="w-full h-36 relative overflow-hidden rounded-t-[2rem] -mt-6 -mx-0">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent"></div>
                  </div>
                  <div className={`w-14 h-14 rounded-2xl bg-silver/10 border border-silver/20 flex items-center justify-center mb-4 transition-all duration-500 ${
                    i === activePilar ? 'shadow-[0_10px_30px_rgba(168,184,200,0.25)] scale-110' : ''
                  }`}>
                    <span className="material-symbols-outlined text-silver text-2xl">{p.icon}</span>
                  </div>
                  <h3 className="text-lg font-black text-white mb-1">{p.title}</h3>
                  <p className="text-silver text-xs font-semibold italic mb-2">{p.subtitle}</p>
                  <p className={`text-slate-400 font-light text-sm leading-relaxed max-w-[280px] text-justify transition-all duration-500 ${i === activePilar ? 'opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>{p.desc}</p>
                  <ul className={`text-left text-slate-400 text-xs font-light leading-relaxed space-y-1 w-full max-w-[280px] mt-3 transition-all duration-500 ${i === activePilar ? 'opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    {p.points.map((pt, j) => (
                      <li key={j} className="flex gap-2"><span className="text-silver mt-0.5">—</span><span>{pt}</span></li>
                    ))}
                  </ul>
                </div>
              ))}
              </div>

              <button onClick={() => handlePilarClick(Math.min(pilares.length - 1, activePilar + 1))} disabled={activePilar >= pilares.length - 1} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 z-20 w-10 h-10 rounded-full border border-white/20 bg-navy/80 backdrop-blur-sm flex items-center justify-center text-white hover:border-silver hover:text-silver disabled:opacity-20 disabled:cursor-not-allowed transition-all shadow-lg">
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-10">
              {pilares.map((_, i) => (
                <button key={i} onClick={() => handlePilarClick(i)} className={`h-2.5 rounded-full transition-all duration-300 ${i === activePilar ? 'bg-amber w-8' : 'bg-white/20 hover:bg-white/40 w-2.5'}`} />
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 3 — BENEFICIOS (tarjetas con rotación)
        ═══════════════════════════════════════════════════════════════ */}
        <section className="py-28 px-6 lg:px-20 bg-navy-dark relative" id="beneficios">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-silver/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <div className="mx-auto max-w-7xl relative">
            <div className="mb-20 text-center">
              <p className="text-xs font-black uppercase tracking-[0.4em] text-silver mb-3">Lo que obtienes con nosotros</p>
              <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">Beneficios concretos,<br/><span className="text-silver">no promesas abstractas</span></h2>
            </div>

            {/* Cards grid — 2 tarjetas con flechas laterales */}
            <div className="relative max-w-5xl mx-auto">
              <button onClick={() => goToPage(Math.max(0, carouselIndex - 1))} disabled={carouselIndex === 0} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 z-20 w-10 h-10 rounded-full border border-white/20 bg-navy/80 backdrop-blur-sm flex items-center justify-center text-white hover:border-silver hover:text-silver disabled:opacity-20 disabled:cursor-not-allowed transition-all shadow-lg">
                <span className="material-symbols-outlined text-lg">arrow_back</span>
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700">
                {visibleBenefits.map((b, i) => (
                  <div
                    key={carouselIndex * 2 + i}
                    className="bg-gradient-to-b from-navy-light to-navy rounded-[2rem] border border-silver/30 p-8 flex flex-col items-center text-center shadow-[0_20px_60px_rgba(168,184,200,0.1)] animate-[fadeIn_0.5s_ease-in-out]"
                  >
                    <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-silver/20 to-silver/5 border border-silver/20 flex items-center justify-center mb-5 shadow-[0_15px_40px_rgba(168,184,200,0.15)]">
                      <span className="material-symbols-outlined text-silver" style={{fontSize:'2.5rem'}}>{b.icon}</span>
                    </div>
                    <h3 className="text-xl font-black text-white mb-3">{b.title}</h3>
                    <p className="text-slate-400 font-light text-sm leading-relaxed mb-3 text-justify">{b.desc}</p>
                    {b.highlight && <p className="text-sm text-amber font-semibold mb-1">{b.highlight}</p>}
                  </div>
                ))}
              </div>

              <button onClick={() => goToPage(Math.min(totalPages - 1, carouselIndex + 1))} disabled={carouselIndex >= totalPages - 1} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 z-20 w-10 h-10 rounded-full border border-white/20 bg-navy/80 backdrop-blur-sm flex items-center justify-center text-white hover:border-silver hover:text-silver disabled:opacity-20 disabled:cursor-not-allowed transition-all shadow-lg">
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </div>

            {/* Page dots */}
            <div className="flex justify-center gap-2 mt-10">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button key={i} onClick={() => goToPage(i)} className={`h-2.5 rounded-full transition-all duration-300 ${i === carouselIndex ? 'bg-silver w-8' : 'bg-white/20 hover:bg-white/40 w-2.5'}`} />
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 4 — DIFERENCIAL (texto + imagen + stats)
        ═══════════════════════════════════════════════════════════════ */}
        <section className="relative py-28 px-6 lg:px-20 overflow-hidden" id="diferencial">
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-silver/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
          <div className="mx-auto max-w-7xl relative">
            <div className="max-w-3xl mx-auto text-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.4em] text-silver mb-4">Nuestro diferencial</p>
                <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6" style={{fontStyle: 'italic'}}>
                  No es el cómo.{' '}
                  <span className="text-silver" style={{fontStyle: 'italic'}}>Es el quién.</span>
                </h2>
                <p className="text-lg text-slate-400 font-light leading-relaxed mb-6">
                  Cuando necesitas un cirujano, no eliges el bisturí. Eliges las manos que lo sostienen. La tecnología es una herramienta. Lo que marca la diferencia es quién la aplica, con qué criterio clínico, bajo qué estándar regulatorio y con qué nivel de responsabilidad.
                </p>
                <p className="text-lg text-slate-300 font-light leading-relaxed mb-8">
                  Nosotros no vendemos herramientas: aportamos el criterio experto que las hace funcionar en la realidad clínica.
                </p>

                {/* Validation badges */}
                <div className="flex flex-wrap justify-center gap-3">
                  {['Modelos validados', 'Data science aplicado', 'MDR & AI Act & GDPR', 'Rigor métrico', 'Arquitectura de decisiones'].map(tag => (
                    <span key={tag} className="inline-flex items-center gap-2 bg-navy-dark/80 border border-white/10 rounded-full px-4 py-2 text-xs text-slate-300 font-light">
                      <span className="material-symbols-outlined text-silver text-sm">check_circle</span>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Image overlapping stats */}
            <div className="relative mt-16">
              <div className="flex justify-center -mb-10 md:-mb-20 relative z-10">
                <div className="relative">
                  <div className="absolute -inset-4 md:-inset-8 bg-silver/10 rounded-full blur-3xl pointer-events-none"></div>
                  <img src="/Background_m%C3%A9dico.png" alt="Entorno clínico" className="relative rounded-2xl md:rounded-[2rem] w-full max-w-sm sm:max-w-xl md:max-w-3xl object-cover border border-white/10 shadow-2xl" />
                </div>
              </div>

              {/* Stats bar */}
              <div className="relative z-0 grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 rounded-[1.5rem] overflow-hidden bg-navy-dark/80 backdrop-blur-md pt-16 md:pt-24">
              <div className="p-6 md:p-8 text-center border-b md:border-b-0 md:border-r border-white/10">
                <p className="text-xs text-slate-500 font-light mb-2">Años de experiencia</p>
                <p className="text-3xl lg:text-4xl font-black text-silver">+12</p>
              </div>
              <div className="p-6 md:p-8 text-center border-b md:border-b-0 md:border-r border-white/10">
                <p className="text-xs text-slate-500 font-light mb-2">Cumplimiento regulatorio</p>
                <p className="text-3xl lg:text-4xl font-black text-silver">100%</p>
              </div>
              <div className="p-6 md:p-8 text-center">
                <p className="text-xs text-slate-500 font-light mb-2">Triple impacto</p>
                <p className="text-2xl lg:text-3xl font-black text-silver leading-tight">Empresa con propósito</p>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 5 — CTA
        ═══════════════════════════════════════════════════════════════ */}
        <section className="relative py-32 px-6 lg:px-20 overflow-hidden" id="contacto">
          {/* Fondo cabeza holográfica */}
          <div className="absolute inset-0 z-0">
            <img src="/Cabeza_humana_hologr%C3%A1fica.png" alt="" className="w-full h-full object-cover opacity-15" />
            <div className="absolute inset-0 bg-navy-dark/80"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/60 to-navy-dark/80"></div>
          </div>
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-8" style={{fontStyle: 'italic'}}>
              Innovar deja de ser incierto cuando lo haces con quien ya sabe cómo hacerlo.
            </h2>
            <p className="text-xl text-slate-400 font-light leading-relaxed mb-12">
              Esto no es consultoría. Esto es experiencia validada trabajando por tus resultados.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="mailto:pablo.hernandez@avisania.tech" className="rounded-full bg-amber px-12 py-5 text-sm font-black uppercase tracking-[0.2em] text-navy shadow-[0_20px_40px_rgba(212,137,60,0.3)] hover:scale-105 transition-all duration-300 text-center">
                Deja que los expertos trabajen por ti
              </a>
              <a href="mailto:pablo.hernandez@avisania.tech?subject=Agendar%20Reuni%C3%B3n%20-%20Avisania" className="rounded-full border-2 border-white/20 px-12 py-5 text-sm font-black uppercase tracking-[0.2em] text-white hover:border-silver hover:text-silver transition-all duration-300 text-center">
                Agendar Reunión
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* ═══════════════════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════════════════ */}
      <footer className="border-t border-white/5 py-12 px-6 lg:px-20 bg-navy-dark">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8">
          <img src="/Logo%20plata.png" alt="Avisania Lab" className="h-8 w-auto" />
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

export default App;
