import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function App() {
  const [activePilar, setActivePilar] = useState(0);
  const [activeServicio, setActiveServicio] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const pilarTimer = useRef(null);
  const serviciosRef = useRef(null);

  // Hero: video fades out on scroll, content fades in
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const [videoFade, setVideoFade] = useState(1);
  const [heroContentOpacity, setHeroContentOpacity] = useState(0);
  const [videoEnded, setVideoEnded] = useState(false);
  const [diferentialVideoEnded, setDiferentialVideoEnded] = useState(false);

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
      title: 'Expertice',
      subtitle: 'El conocimiento sin aplicación no es expertise. Es archivo.',
      desc: 'Especialización clínica, data science aplicado y expertise regulatorio —MDR, AI Act, GDPR— para prescribir soluciones con rigor métrico no negociable. Know-how contrastado con referentes internacionales, aplicado a tu realidad.',
      points: []
    },
    {
      icon: 'rocket_launch',
      img: '/Liderazgo.png',
      title: 'Evolución',
      subtitle: 'Lideramos donde otros aún no han llegado.',
      desc: 'Internacionalización, alianzas estratégicas e innovación de frontera con propósito. Un modelo de desarrollo híbrido inspirado en Boston Lifescience y Cambridge Biocapital, adaptado a la realidad clínica e institucional española.',
      points: []
    },
  ];

  const servicios = [
    {
      icon: 'genetics',
      gradient: 'from-teal/20 to-sky/10',
      border: 'border-teal/40',
      glow: 'rgba(0,188,212,0.2)',
      color: 'text-teal',
      title: 'Promoción y Coordinación de proyectos I+D+i',
      items: [
        { icon: 'query_stats', text: 'Ciencia de datos en medicina predictiva oncológica, hemodinámica y perioperatoria.' },
        { icon: 'ecg', text: 'Aprendizaje & diagnóstico por imagen: autosegmentación y detección de cáncer.' },
        { icon: 'experiment', text: 'Desarrollo de ensayos clínicos y prototipos funcionales: medicina predictiva de precisión y software médico.' },
      ],
    },
    {
      icon: 'ecg',
      gradient: 'from-sky/20 to-teal/10',
      border: 'border-sky/40',
      glow: 'rgba(56,189,248,0.2)',
      color: 'text-sky',
      title: 'Transformación útil del dato crítico',
      items: [
        { icon: 'clinical_notes', text: 'Soluciones administrativas.' },
        { icon: 'account_tree', text: 'Herramientas de investigación y gestión de dato (SMART-mol).' },
        { icon: 'encrypted', text: 'Ciberseguridad e interoperabilidad.' },
        { icon: 'vital_signs', text: 'MEDINT.' },
      ],
    },
    {
      icon: 'neurology',
      gradient: 'from-orange/15 to-orange/5',
      border: 'border-orange/40',
      glow: 'rgba(249,115,22,0.15)',
      color: 'text-orange',
      title: 'Talento: consultoría y asesoría',
      items: [
        { icon: 'stethoscope', text: 'Digitalización e innovación en anestesiología, oncología y perioperatorios.' },
        { icon: 'lab_research', text: 'Transferencia tecnológica en tecnología sanitaria de precisión.' },
        { icon: 'verified_user', text: 'Fondos públicos para desarrollo de estudios y desarrollo multicéntricos.' },
      ],
    },
  ];

  // Servicios: highlight card based on scroll position
  useEffect(() => {
    const onScroll = () => {
      if (!serviciosRef.current) return;
      const rect = serviciosRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportCenter = window.innerHeight / 2;
      const progress = (viewportCenter - rect.top) / sectionHeight;
      if (progress < 0.33) setActiveServicio(0);
      else if (progress < 0.66) setActiveServicio(1);
      else setActiveServicio(2);
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

  const [activeValueCard, setActiveValueCard] = useState(0);

  const valueCards = [
    {
      icon: 'trending_up',
      color: 'text-orange',
      borderColor: 'border-orange/40',
      glow: 'rgba(249,115,22,0.18)',
      bg: 'bg-orange/10',
      iconGlow: 'rgba(249,115,22,0.3)',
      accent: '#F97316',
      label: 'Genera rentabilidad con tus datos',
      statement: 'Toma de decisiones basadas en dato.',
      desc: 'Cada acción sostenida por evidencia real, métricas validadas y criterio clínico experto. Sin suposiciones. Sin improvvisación.',
    },
    {
      icon: 'ecg',
      color: 'text-sky',
      borderColor: 'border-sky/40',
      glow: 'rgba(56,189,248,0.18)',
      bg: 'bg-sky/10',
      iconGlow: 'rgba(56,189,248,0.3)',
      accent: '#38BDF8',
      label: 'Acierta en tus diagnósticos de prevención',
      statement: 'Resultados medibles y encaje real en la práctica clínica.',
      desc: 'Sin pilotos eternos. Sin KPIs decorativos. Solo impacto directo en tu realidad clínica desde el primer día.',
    },
    {
      icon: 'rocket_launch',
      color: 'text-teal',
      borderColor: 'border-teal/40',
      glow: 'rgba(0,188,212,0.18)',
      bg: 'bg-teal/10',
      iconGlow: 'rgba(0,188,212,0.3)',
      accent: '#00BCD4',
      label: 'Con impacto real',
      statement: 'Causa impacto con tus proyectos.',
      desc: 'Innovación con propósito, alineada con los estándares internacionales más exigentes y la realidad clínica española.',
    },
    {
      icon: 'auto_graph',
      color: 'text-silver',
      borderColor: 'border-silver/40',
      glow: 'rgba(168,184,200,0.14)',
      bg: 'bg-silver/10',
      iconGlow: 'rgba(168,184,200,0.25)',
      accent: '#A8B8C8',
      label: 'Crecimiento sostenible',
      statement: 'Evolución guiada por resultados, decisiones basadas en datos.',
      desc: 'Un modelo de crecimiento diseñado para durar, con base sólida, criterio clínico y rigor métrico no negociable.',
    },
  ];

  const benefits = [
    {
      icon: 'query_stats',
      color: 'text-sky',
      border: 'border-sky/30',
      bg: 'bg-sky/10',
      glow: 'rgba(56,189,248,0.15)',
      title: 'Data driven decisions',
      subtitle: 'Decisiones basadas en datos',
      desc: 'Te llevamos a lo más difícil y valioso: decidir con datos, no con suposiciones. Cada acción sostenida por evidencia real, métricas validadas y criterio clínico experto.',
    },
    {
      icon: 'encrypted',
      color: 'text-teal',
      border: 'border-teal/30',
      bg: 'bg-teal/10',
      glow: 'rgba(0,188,212,0.15)',
      title: 'Seguridad en el manejo de datos',
      subtitle: 'Protección sin compromisos',
      desc: 'Trabajas con datos médicos de forma más protegida, ordenada y confiable. MDR, AI Act y GDPR no son obstáculos — son el estándar desde el que operamos.',
    },
    {
      icon: 'verified',
      color: 'text-orange',
      border: 'border-orange/30',
      bg: 'bg-orange/10',
      glow: 'rgba(249,115,22,0.15)',
      title: 'Validación y respaldo',
      subtitle: 'Base sólida, sin improvisación',
      desc: 'No es una solución improvisada. Tienes una base sólida para avanzar con confianza. Cada decisión sostenible frente a cualquier tercero — regulador, inversor o comité clínico.',
    },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════════════
          HEADER
      ═══════════════════════════════════════════════════════════════ */}
      <header className="fixed top-0 z-50 w-full bg-navy/60 backdrop-blur-2xl px-4 sm:px-6 lg:px-20 py-4 sm:py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <img src="/Avisania%20Logo.png" alt="Avisania Lab" className="h-12 sm:h-16 w-auto" />
          <nav className="hidden md:flex items-center gap-10">
            <a className="text-sm font-medium text-slate-300 hover:text-silver transition-colors" href="#servicios">Servicios</a>
            <a className="text-sm font-medium text-slate-300 hover:text-silver transition-colors" href="#beneficios">Beneficios</a>
            <a className="text-sm font-medium text-slate-300 hover:text-silver transition-colors" href="#diferencial">Diferencial</a>
            <Link className="text-sm font-medium text-slate-300 hover:text-silver transition-colors" to="/quienes-somos">Quiénes somos</Link>
            <Link className="text-sm font-medium text-slate-300 hover:text-silver transition-colors" to="/proyectos">Proyectos</Link>
          </nav>
          <div className="flex items-center gap-3">
            <a href="https://wa.me/34630251862" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp" className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
            <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden w-10 h-10 flex items-center justify-center text-silver">
              <span className="material-symbols-outlined text-2xl">{mobileMenu ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenu && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4 flex flex-col gap-4 animate-[fadeIn_0.3s_ease-in-out]">
            <a className="text-sm font-medium text-slate-300 hover:text-silver transition-colors" href="#servicios" onClick={() => setMobileMenu(false)}>Servicios</a>
            <a className="text-sm font-medium text-slate-300 hover:text-silver transition-colors" href="#beneficios" onClick={() => setMobileMenu(false)}>Beneficios</a>
            <a className="text-sm font-medium text-slate-300 hover:text-silver transition-colors" href="#diferencial" onClick={() => setMobileMenu(false)}>Diferencial</a>
            <Link className="text-sm font-medium text-slate-300 hover:text-silver transition-colors" to="/quienes-somos" onClick={() => setMobileMenu(false)}>Quiénes somos</Link>
            <Link className="text-sm font-medium text-slate-300 hover:text-silver transition-colors" to="/proyectos" onClick={() => setMobileMenu(false)}>Proyectos</Link>
            <a href="https://wa.me/34630251862" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#25D366] px-6 py-2.5 text-sm font-bold text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
          </div>
        )}
      </header>

      <main className="flex-1">

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 1 — HERO (Split-screen wipe)
        ═══════════════════════════════════════════════════════════════ */}
        <section ref={heroRef} className="relative bg-navy" style={{ height: '150vh' }}>

          {/* Video / Logo background — fixed, fades out on scroll */}
          <div
            className="fixed inset-0 z-30 overflow-hidden"
            style={{ opacity: videoFade, transition: 'opacity 0.1s linear', pointerEvents: videoFade > 0.1 ? 'auto' : 'none', display: videoFade === 0 ? 'none' : undefined }}
          >
            {/* Video: plays once, fades out when finished */}
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              onEnded={() => setVideoEnded(true)}
              onError={() => setVideoEnded(true)}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
              style={{ opacity: videoEnded ? 0 : 1, pointerEvents: 'none' }}
            >
              <source src="/Video%20presentacion.mp4" type="video/mp4" />
            </video>

            {/* Logo background: aparece cuando el video termina */}
            <div
              className="absolute inset-0 bg-navy flex items-center justify-center transition-opacity duration-1000"
              style={{ opacity: videoEnded ? 1 : 0 }}
            >
              {/* Glow radial detrás del logo */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,188,212,0.08)_0%,transparent_70%)]" />
              <img
                src="/Avisania%20Logo.png"
                alt="Avisania Lab"
                className="relative w-40 sm:w-56 lg:w-72 xl:w-80 opacity-20 select-none pointer-events-none"
              />
            </div>

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
                  <span className="text-sky" style={{fontStyle: 'italic'}}>¿Cuántos de ellos están transformando decisiones reales?</span>
                </h1>
                <ul className="max-w-xl text-sm sm:text-base leading-relaxed text-slate-300 font-light space-y-1.5">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-orange text-base mt-0.5">check</span>
                    <span>Sin pilotos eternos. Sin KPIs decorativos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-orange text-base mt-0.5">check</span>
                    <span>Encaje real en la práctica clínica desde el primer día</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-orange text-base mt-0.5">check</span>
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
            SECTION — DECLARACIÓN IDENTIDAD
        ═══════════════════════════════════════════════════════════════ */}
        <section className="relative py-24 px-6 lg:px-20 overflow-hidden bg-navy-dark">
          {/* Línea diagonal decorativa */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -left-20 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-teal/30 to-transparent rotate-[8deg] origin-top" />
            <div className="absolute right-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-silver/10 to-transparent" />
            <div className="absolute top-1/2 -translate-y-1/2 -left-40 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-6xl">
            {/* Label */}
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-sky mb-8">Avisania Lab</p>

            {/* Texto principal partido en dos pesos visuales */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-20 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.05] text-white" style={{ fontStyle: 'italic' }}>
                  Un estudio especializado de{' '}
                  <span className="text-sky" style={{ fontStyle: 'italic' }}>I+D+i</span>{' '}
                  en la integración entre la{' '}
                  <span className="relative inline-block">
                    <span className="text-silver" style={{ fontStyle: 'italic' }}>medicina predictiva</span>
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-sky/60 to-transparent" />
                  </span>{' '}
                  y la tecnología.
                </h2>
                <p className="mt-8 text-lg lg:text-xl text-slate-400 font-light leading-relaxed max-w-2xl">
                  Que optimiza y facilita la toma de decisiones seguras en entornos complejos.
                </p>
              </div>

              {/* Bloque lateral con acento visual */}
              <div className="hidden lg:flex flex-col items-center gap-4">
                <div className="w-px h-24 bg-gradient-to-b from-transparent via-sky/40 to-transparent" />
                <div className="w-14 h-14 rounded-2xl border border-sky/30 bg-sky/5 flex items-center justify-center">
                  <span className="material-symbols-outlined text-sky text-2xl">biotech</span>
                </div>
                <div className="w-px h-24 bg-gradient-to-b from-sky/40 via-teal/20 to-transparent" />
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
              <span className="text-orange" style={{fontStyle: 'italic'}}>Agenda</span>{' '}<span className="text-silver" style={{fontStyle: 'italic'}}>con nosotros</span>
            </h2>
            <p className="text-lg text-slate-300 font-light leading-relaxed max-w-2xl">
              Reserva una sesión estratégica con nuestro equipo. Sin compromiso, sin letra pequeña — solo decisiones basadas en datos y experiencia real.
            </p>
            <a href="mailto:pablo.hernandez@avisania.tech?subject=Agendar%20Reuni%C3%B3n%20-%20Avisania" className="inline-flex items-center gap-3 rounded-full bg-orange px-10 py-5 text-sm font-black uppercase tracking-[0.2em] text-white shadow-[0_20px_40px_rgba(249,115,22,0.35)] hover:scale-105 hover:shadow-[0_24px_50px_rgba(249,115,22,0.45)] transition-all duration-300">
              Agendar Reunión
              <span className="material-symbols-outlined text-white text-lg">calendar_month</span>
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
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">Tres ejes de <span className="text-sky">transformación real</span></h2>
            </div>

            {/* Imagen equipo médico */}
            <div className="flex justify-center mb-14">
              <div className="relative">
                <div className="absolute -inset-4 bg-silver/10 rounded-full blur-3xl pointer-events-none"></div>
                <img src="/Equipo_m%C3%A9dico-cient%C3%ADfico.png" alt="Equipo médico-científico" className="relative rounded-2xl md:rounded-[2rem] w-full max-w-sm sm:max-w-xl md:max-w-2xl object-cover border border-white/10 shadow-2xl" />
              </div>
            </div>

            {/* 3 tarjetas expandibles */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {servicios.map((s, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveServicio(idx)}
                  className={`cursor-pointer bg-gradient-to-b from-navy-light to-navy rounded-[2rem] border p-8 flex flex-col transition-all duration-500 ${
                    idx === activeServicio
                      ? `${s.border} scale-[1.02]`
                      : 'border-white/10 hover:border-white/20'
                  }`}
                  style={idx === activeServicio ? { boxShadow: `0 20px 60px ${s.glow}` } : {}}
                >
                  {/* Icono grande — protagonista de la tarjeta */}
                  <div className="mb-6">
                    <div className={`relative w-20 h-20 rounded-3xl flex items-center justify-center transition-all duration-500 bg-gradient-to-br ${
                      idx === activeServicio
                        ? `${s.gradient} border-2 ${s.border}`
                        : 'bg-white/5 border border-white/10'
                    }`}
                    style={idx === activeServicio ? { boxShadow: `0 0 40px ${s.glow}` } : {}}>
                      {/* Resplandor interior */}
                      {idx === activeServicio && (
                        <div className="absolute inset-0 rounded-3xl opacity-30 bg-gradient-to-br from-white/20 to-transparent" />
                      )}
                      <span
                        className={`material-symbols-outlined relative transition-all duration-500 ${
                          idx === activeServicio ? `${s.color} text-5xl` : 'text-slate-500 text-4xl'
                        }`}
                        style={{ fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 48" }}
                      >
                        {s.icon}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-black text-white leading-snug mb-5">{s.title}</h3>

                  <div className={`overflow-hidden transition-all duration-500 ${idx === activeServicio ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 lg:max-h-[500px] lg:opacity-60'}`}>
                    <ul className="space-y-3">
                      {s.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span
                            className={`material-symbols-outlined text-xl mt-0.5 flex-shrink-0 transition-colors duration-300 ${idx === activeServicio ? s.color : 'text-slate-600'}`}
                            style={{ fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}
                          >{item.icon}</span>
                          <span className="text-sm text-slate-300 font-light leading-relaxed">{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mobile expand indicator */}
                  <div className={`lg:hidden flex justify-center mt-4 transition-transform duration-300 ${idx === activeServicio ? 'rotate-180' : ''}`}>
                    <span className="material-symbols-outlined text-slate-500 text-sm">expand_more</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-10 lg:hidden">
              {servicios.map((_, i) => (
                <button key={i} onClick={() => setActiveServicio(i)} className={`h-2.5 rounded-full transition-all duration-300 ${i === activeServicio ? 'bg-teal w-8' : 'bg-white/20 hover:bg-white/40 w-2.5'}`} />
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
                <button key={i} onClick={() => handlePilarClick(i)} className={`h-2.5 rounded-full transition-all duration-300 ${i === activePilar ? 'bg-teal w-8' : 'bg-white/20 hover:bg-white/40 w-2.5'}`} />
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 3 — BENEFICIOS
        ═══════════════════════════════════════════════════════════════ */}
        <section className="py-28 px-6 lg:px-20 bg-navy-dark relative" id="beneficios">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-silver/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <div className="mx-auto max-w-7xl relative">
            <div className="mb-16 text-center">
              <p className="text-xs font-black uppercase tracking-[0.4em] text-silver mb-3">Lo que obtienes con nosotros</p>
              <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                Beneficios concretos,<br/>
                <span className="text-orange">no promesas abstractas</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="group bg-gradient-to-b from-navy-light to-navy rounded-[2rem] border p-8 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2"
                  style={{ borderColor: 'rgba(255,255,255,0.08)', boxShadow: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 20px 60px ${b.glow}`; e.currentTarget.style.borderColor = b.border.replace('border-','').replace('/30',''); }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                >
                  <div className={`w-20 h-20 rounded-3xl ${b.bg} border ${b.border} flex items-center justify-center mb-6`}
                    style={{ boxShadow: `0 0 30px ${b.glow}` }}>
                    <span
                      className={`material-symbols-outlined ${b.color}`}
                      style={{ fontSize: '2.5rem', fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 48" }}
                    >{b.icon}</span>
                  </div>
                  <h3 className={`text-xl font-black mb-1 ${b.color}`}>{b.title}</h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">{b.subtitle}</p>
                  <p className="text-slate-400 font-light text-sm leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION — TARJETAS VALOR (interactivas)
        ═══════════════════════════════════════════════════════════════ */}
        <section className="py-28 px-6 lg:px-20 bg-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.06)_0%,transparent_60%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(249,115,22,0.05)_0%,transparent_60%)] pointer-events-none" />

          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
              {valueCards.map((card, idx) => {
                const isActive = activeValueCard === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveValueCard(idx)}
                    onMouseEnter={() => setActiveValueCard(idx)}
                    className="relative bg-gradient-to-br from-navy-light to-navy rounded-[2rem] border cursor-pointer overflow-hidden transition-all duration-500"
                    style={{
                      borderColor: isActive ? card.accent + '66' : 'rgba(255,255,255,0.07)',
                      boxShadow: isActive ? `0 28px 70px ${card.glow}, 0 0 0 1px ${card.accent}22` : 'none',
                      transform: isActive ? 'translateY(-4px)' : 'translateY(0)',
                    }}
                  >
                    {/* Ambient glow blob */}
                    <div
                      className="absolute top-0 right-0 w-56 h-56 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4 transition-opacity duration-500 pointer-events-none"
                      style={{ background: card.accent, opacity: isActive ? 0.08 : 0.03 }}
                    />

                    <div className="relative p-8 lg:p-10 flex flex-col h-full">
                      {/* Header row: icon + number */}
                      <div className="flex items-start justify-between mb-6">
                        <div
                          className="flex items-center justify-center rounded-2xl transition-all duration-500"
                          style={{
                            width: isActive ? '4rem' : '2.75rem',
                            height: isActive ? '4rem' : '2.75rem',
                            background: isActive ? card.accent + '22' : 'rgba(255,255,255,0.05)',
                            border: `1px solid ${isActive ? card.accent + '55' : 'rgba(255,255,255,0.1)'}`,
                            boxShadow: isActive ? `0 0 30px ${card.iconGlow}` : 'none',
                          }}
                        >
                          <span
                            className="material-symbols-outlined transition-all duration-500"
                            style={{
                              color: isActive ? card.accent : '#64748b',
                              fontSize: isActive ? '2rem' : '1.375rem',
                              fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 48",
                            }}
                          >
                            {card.icon}
                          </span>
                        </div>
                        <span
                          className="text-5xl font-black leading-none transition-all duration-500 select-none"
                          style={{ color: isActive ? card.accent + '33' : 'rgba(255,255,255,0.06)' }}
                        >
                          0{idx + 1}
                        </span>
                      </div>

                      {/* Label */}
                      <p
                        className="text-[10px] font-black uppercase tracking-[0.3em] mb-3 transition-colors duration-300"
                        style={{ color: isActive ? card.accent : '#64748b' }}
                      >
                        {card.label}
                      </p>

                      {/* Statement */}
                      <h3
                        className="text-2xl lg:text-3xl font-black leading-tight transition-colors duration-300"
                        style={{ fontStyle: 'italic', color: isActive ? '#ffffff' : '#94a3b8' }}
                      >
                        {card.statement}
                      </h3>

                      {/* Description — expands when active */}
                      <div
                        className="overflow-hidden transition-all duration-500"
                        style={{ maxHeight: isActive ? '120px' : '0px', opacity: isActive ? 1 : 0, marginTop: isActive ? '1rem' : '0' }}
                      >
                        <p className="text-sm text-slate-400 font-light leading-relaxed">
                          {card.desc}
                        </p>
                      </div>

                      {/* Animated bottom line */}
                      <div className="mt-6 h-px transition-all duration-500" style={{
                        width: isActive ? '4rem' : '2rem',
                        background: isActive ? card.accent : 'rgba(255,255,255,0.1)',
                        opacity: isActive ? 0.7 : 0.4,
                      }} />
                    </div>

                    {/* Active indicator dot */}
                    <div
                      className="absolute bottom-4 right-5 w-2 h-2 rounded-full transition-all duration-300"
                      style={{ background: card.accent, opacity: isActive ? 0.8 : 0, transform: isActive ? 'scale(1)' : 'scale(0)' }}
                    />
                  </div>
                );
              })}
            </div>

            {/* Indicator pills */}
            <div className="flex justify-center gap-2 mt-8">
              {valueCards.map((card, i) => (
                <button
                  key={i}
                  onClick={() => setActiveValueCard(i)}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: activeValueCard === i ? '2rem' : '0.5rem',
                    background: activeValueCard === i ? card.accent : 'rgba(255,255,255,0.2)',
                  }}
                />
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
                <p className="text-xs font-black uppercase tracking-[0.4em] text-sky mb-4">Nuestro diferencial</p>
                <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6" style={{fontStyle: 'italic'}}>
                  No es el cómo.{' '}
                  <span className="text-sky" style={{fontStyle: 'italic'}}>Es el quién.</span>
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
                      <span className="material-symbols-outlined text-orange text-sm">check_circle</span>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Image + stats */}
            <div className="relative mt-16">
              <div className="flex justify-center mb-10 relative z-10">
                <div className="relative w-full max-w-sm sm:max-w-xl md:max-w-3xl">
                  <div className="absolute -inset-4 md:-inset-8 bg-silver/10 rounded-full blur-3xl pointer-events-none"></div>

                  {/* Contenedor apilado: video encima, imagen debajo */}
                  <div className="relative rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                    {/* Video — se reproduce una vez */}
                    <video
                      autoPlay
                      muted
                      playsInline
                      onEnded={() => setDiferentialVideoEnded(true)}
                      onError={() => setDiferentialVideoEnded(true)}
                      className="block w-full transition-opacity duration-1000"
                      style={{ opacity: diferentialVideoEnded ? 0 : 1 }}
                    >
                      <source src="/Video%20final.mp4" type="video/mp4" />
                    </video>

                    {/* Imagen de manos — superpuesta, aparece al terminar */}
                    <img
                      src="/medico%20-paciente.png"
                      alt="Médico con paciente"
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                      style={{ opacity: diferentialVideoEnded ? 1 : 0 }}
                    />
                  </div>
                </div>
              </div>

              {/* Stats bar */}
              <div className="relative z-0 grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 rounded-[1.5rem] overflow-hidden bg-navy-dark/80 backdrop-blur-md">
              <div className="p-6 md:p-8 text-center border-b md:border-b-0 md:border-r border-white/10">
                <p className="text-xs text-slate-500 font-light mb-2">Años de experiencia</p>
                <p className="text-3xl lg:text-4xl font-black text-sky">+12</p>
              </div>
              <div className="p-6 md:p-8 text-center border-b md:border-b-0 md:border-r border-white/10">
                <p className="text-xs text-slate-500 font-light mb-2">Cumplimiento regulatorio</p>
                <p className="text-3xl lg:text-4xl font-black text-sky">100%</p>
              </div>
              <div className="p-6 md:p-8 text-center">
                <p className="text-xs text-slate-500 font-light mb-2">Triple impacto</p>
                <p className="text-2xl lg:text-3xl font-black text-sky leading-tight">Empresa con propósito</p>
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
              <a href="mailto:pablo.hernandez@avisania.tech" className="rounded-full bg-orange px-12 py-5 text-sm font-black uppercase tracking-[0.2em] text-white shadow-[0_20px_40px_rgba(249,115,22,0.35)] hover:scale-105 hover:shadow-[0_24px_50px_rgba(249,115,22,0.45)] transition-all duration-300 text-center">
                Deja que los expertos trabajen por ti
              </a>
              <a href="mailto:pablo.hernandez@avisania.tech?subject=Agendar%20Reuni%C3%B3n%20-%20Avisania" className="rounded-full border-2 border-white/20 px-12 py-5 text-sm font-black uppercase tracking-[0.2em] text-white hover:border-silver hover:text-silver transition-all duration-300 text-center">
                Agendar Reunión
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default App;
