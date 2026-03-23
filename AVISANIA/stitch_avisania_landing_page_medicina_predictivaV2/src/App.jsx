import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

function App() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [activePilar, setActivePilar] = useState(0);
  const pilarTimer = useRef(null);
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
      desc: 'Relación entre recursos utilizados y resultados obtenidos.',
      points: [
        'Herramientas digitales y apoyo clínico',
        'Gestión de flujos, personas y toma de decisiones',
        'Ciclo clínico: perioperatorio, diagnóstico, gestión, optimización continua',
        'Medicina predictiva de precisión: modelos validados'
      ]
    },
    {
      icon: 'science',
      img: '/Exoeriencia.png',
      title: 'Experiencia',
      subtitle: 'Conocimiento',
      desc: 'Conocimiento + Experiencia = Experto.',
      points: [
        'Validación prospectiva',
        'Data science aplicado',
        'Prescripción de soluciones tecnológicas por parte de médicos validados',
        'Know how importado: MIT, Harvard',
        'Expertise regulatorio: MDR, AI Act, GDPR',
        'Rigor métrico no negociable',
        'Arquitectura de decisiones clínicas & tecnológicas',
      ]
    },
    {
      icon: 'rocket_launch',
      img: '/Liderazgo.png',
      title: 'Auge',
      subtitle: 'Lideramos…',
      desc: 'Atracción, internacionalización, alianzas, actitudes e iniciativas.',
      points: [
        'Intersección de tecnologías de frontera',
        'Momentum internacional activo: neurociencias, sueño, prevención de eventos adversos, epilepsia domiciliaria',
        'Red multicéntrica en curso',
        'Tecnología sin HYPE',
        'Ecosistema vivo y adaptativo',
        'Estándar metodológico propio',
        'Modelo de desarrollo mixto: Boston lifescience & lean startup / spin off / Cambridge biocapital',
      ]
    },
  ];

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

  const totalPages = Math.ceil(benefits.length / 3);
  const visibleBenefits = benefits.slice(carouselIndex * 3, carouselIndex * 3 + 3);

  const startBenefitTimer = () => {
    clearInterval(benefitTimer.current);
    benefitTimer.current = setInterval(() => {
      setActiveBenefit(prev => {
        const currentPageSize = Math.min(3, benefits.length - carouselIndex * 3);
        if (prev + 1 >= currentPageSize) {
          setCarouselIndex(p => (p + 1) % totalPages);
          return 0;
        }
        return prev + 1;
      });
    }, 4000);
  };

  useEffect(() => { startBenefitTimer(); return () => clearInterval(benefitTimer.current); }, [carouselIndex]);

  const handleBenefitClick = (localIdx) => { setActiveBenefit(localIdx); startBenefitTimer(); };
  const goToPage = (page) => { setCarouselIndex(page); setActiveBenefit(0); startBenefitTimer(); };

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
            <Link className="text-sm font-medium text-slate-300 hover:text-silver transition-colors" to="/nosotros">Nosotros</Link>
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
            <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-20 pt-20">
              <div className="flex flex-col gap-5 sm:gap-8 max-w-2xl bg-navy/80 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-14">
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-[1.08] text-white" style={{fontStyle: 'italic'}}>
                  Generamos{' '}
                  <span className="text-amber" style={{fontStyle: 'italic'}}>impacto real</span>
                  <br />en medicina predictiva
                </h1>
                <p className="max-w-xl text-sm sm:text-lg leading-relaxed text-slate-300 font-light">
                  Impulsamos proyectos de alto valor con resultados medibles y encaje real en la práctica clínica. No vendemos promesas: entregamos decisiones basadas en la excelencia del dato.
                </p>
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
            <img src="/foto-equipo.png" alt="Equipo Avisania" className="w-full h-full object-cover" />
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
        <section className="py-28 px-6 lg:px-20 relative" id="servicios">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center max-w-4xl mx-auto">
              <p className="text-xs font-black uppercase tracking-[0.4em] text-silver mb-3">Lo que nos define</p>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-8">Nuestros Servicios</h2>
              <p className="text-lg text-slate-300 font-light leading-relaxed">
                Con Avisania generamos <span className="text-amber font-semibold">impacto positivo</span> impulsando proyectos de alto valor, gracias a la experiencia de <span className="text-amber font-semibold">&gt;12 años</span> del grupo, que nos permite liderar proyectos de éxito en medicina predictiva. Con nosotros, inicias un camino hacia:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                { icon: 'database', title: 'La toma de decisiones basadas en la excelencia del dato', desc: 'En la era del dato, sin éste no hay decisiones.' },
                { icon: 'rocket_launch', title: 'Impulso proyectos de alto valor añadido que generan triple impacto con propósito', desc: 'Económico, social y Ambiental.' },
                { icon: 'verified', title: 'Resultados medibles y encaje real en la práctica clínica', desc: 'Sólo trabajamos proyectos realistas.' },
                { icon: 'shield', title: 'Investigación, digitalización e innovación sin riesgos', desc: 'Sólo trabajamos hacia resultados.' },
              ].map((item, i) => (
                <div key={i} className="group flex gap-6 border border-white/5 bg-navy-dark/50 p-8 rounded-[2rem] professional-shadow transition-all duration-500 hover:border-silver/30 hover:-translate-y-2">
                  <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber/10 text-amber group-hover:bg-amber group-hover:text-navy transition-all duration-500">
                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-sm leading-relaxed text-slate-400 font-light">{item.desc}</p>
                  </div>
                </div>
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
              <p className="text-xs font-black uppercase tracking-[0.4em] text-silver mb-3">Nuestra esencia</p>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-8">Nuestros 3 Pilares</h2>
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
                          <p className="text-slate-400 font-light text-sm leading-relaxed mb-4">{p.desc}</p>
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

            {/* ── DESKTOP: 4-col grid with active scale effect ── */}
            <div className="hidden md:grid md:grid-cols-3 gap-5 items-center">
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
                  <p className={`text-slate-400 font-light text-sm leading-relaxed max-w-[280px] transition-all duration-500 ${i === activePilar ? 'opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>{p.desc}</p>
                  <ul className={`text-left text-slate-400 text-xs font-light leading-relaxed space-y-1 w-full max-w-[280px] mt-3 transition-all duration-500 ${i === activePilar ? 'opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    {p.points.map((pt, j) => (
                      <li key={j} className="flex gap-2"><span className="text-silver mt-0.5">—</span><span>{pt}</span></li>
                    ))}
                  </ul>
                </div>
              ))}
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

            {/* Cards grid — active card enlarges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {visibleBenefits.map((b, i) => (
                <div
                  key={carouselIndex * 3 + i}
                  onClick={() => handleBenefitClick(i)}
                  className={`cursor-pointer bg-gradient-to-b from-navy-light to-navy rounded-[2rem] border p-8 flex flex-col items-center text-center transition-all duration-500 origin-center ${
                    i === activeBenefit
                      ? 'border-silver/50 md:scale-105 shadow-[0_20px_60px_rgba(168,184,200,0.2)] z-10'
                      : 'border-white/10 md:scale-[0.92] md:opacity-60 md:hover:opacity-80 hidden md:flex'
                  }`}
                >
                  {/* Icon area */}
                  <div className="w-full h-40 flex items-center justify-center mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-silver/5 to-transparent rounded-t-[2rem]"></div>
                    <div className={`relative w-24 h-24 rounded-3xl bg-gradient-to-br from-silver/20 to-silver/5 border border-silver/20 flex items-center justify-center transition-all duration-500 ${
                      i === activeBenefit ? 'shadow-[0_20px_50px_rgba(168,184,200,0.25)] scale-110' : 'shadow-[0_15px_40px_rgba(168,184,200,0.15)]'
                    }`}>
                      <span className="material-symbols-outlined text-silver" style={{fontSize:'3rem'}}>{b.icon}</span>
                    </div>
                  </div>
                  {/* Content */}
                  <h3 className="text-lg font-black text-white mb-3">{b.title}</h3>
                  <p className={`text-slate-400 font-light text-sm leading-relaxed max-w-[280px] transition-all duration-500 ${i === activeBenefit ? 'max-h-40 opacity-100 mb-4' : 'md:max-h-0 md:opacity-0 md:overflow-hidden md:mb-0 max-h-40 opacity-100 mb-4'}`}>{b.desc}</p>
                  {b.highlight && <p className={`text-sm text-amber font-semibold transition-all duration-500 ${i === activeBenefit ? 'max-h-20 opacity-100 mb-1' : 'md:max-h-0 md:opacity-0 md:overflow-hidden max-h-20 opacity-100 mb-1'}`}>{b.highlight}</p>}
                  <a href="#servicios" className={`mt-auto inline-flex items-center gap-2 border border-silver/40 rounded-full px-7 py-2.5 text-[11px] font-black uppercase tracking-widest text-silver hover:bg-silver hover:text-navy transition-all duration-300 ${i === activeBenefit ? 'opacity-100' : 'md:opacity-0 md:h-0 md:overflow-hidden md:p-0 md:border-0 opacity-100'}`}>
                    Ver más
                  </a>
                </div>
              ))}
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
                  <img src="/bg-medico.png" alt="Entorno clínico" className="relative rounded-2xl md:rounded-[2rem] w-full max-w-sm sm:max-w-xl md:max-w-3xl object-cover border border-white/10 shadow-2xl" />
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
        <section className="py-32 px-6 lg:px-20 bg-navy-dark" id="contacto">
          <div className="mx-auto max-w-4xl text-center">
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
