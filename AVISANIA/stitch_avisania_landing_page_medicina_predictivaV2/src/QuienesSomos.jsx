import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

/* ── Intersection Observer hook ── */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ── Floating particles around the photo ── */
function Particles() {
  const items = Array.from({ length: 18 });
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {items.map((_, i) => {
        const size = 3 + Math.random() * 5;
        const left = Math.random() * 100;
        const delay = Math.random() * 8;
        const dur = 6 + Math.random() * 8;
        return (
          <span
            key={i}
            className="absolute rounded-full bg-silver/30"
            style={{
              width: size, height: size,
              left: `${left}%`, bottom: '-5%',
              animation: `floatUp ${dur}s ${delay}s ease-in infinite`,
            }}
          />
        );
      })}
    </div>
  );
}

function QuienesSomos() {
  const [heroRef, heroVis] = useReveal(0.1);
  const [p1Ref, p1Vis] = useReveal();
  const [imgRef, imgVis] = useReveal(0.2);
  const [p2Ref, p2Vis] = useReveal();
  const [p3Ref, p3Vis] = useReveal();
  const [ctaRef, ctaVis] = useReveal(0.2);

  /* parallax on photo */
  const [offset, setOffset] = useState(0);
  const photoWrap = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      if (!photoWrap.current) return;
      const rect = photoWrap.current.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const vp = window.innerHeight / 2;
      setOffset((vp - center) * 0.06);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* hover tilt on photo */
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    setTilt({ x, y });
  };
  const resetTilt = () => setTilt({ x: 0, y: 0 });

  const reveal = (vis) =>
    `transition-all duration-700 ease-out ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

  const areas = [
    { icon: 'monitor_heart', label: 'Perioperatorio' },
    { icon: 'oncology', label: 'Oncología' },
    { icon: 'radiology', label: 'Imagen médica' },
    { icon: 'security', label: 'Ciberseguridad' },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">

      {/* ── HEADER ── */}
      <header className="fixed top-0 z-50 w-full bg-navy/60 backdrop-blur-2xl px-6 lg:px-20 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link to="/"><img src="/Avisania%20Logo.png" alt="Avisania Lab" className="h-10 w-auto" /></Link>
          <nav className="hidden md:flex items-center gap-10">
            <Link className="text-sm font-medium text-slate-300 hover:text-silver transition-colors" to="/#servicios">Servicios</Link>
            <Link className="text-sm font-medium text-slate-300 hover:text-silver transition-colors" to="/#beneficios">Beneficios</Link>
            <Link className="text-sm font-medium text-slate-300 hover:text-silver transition-colors" to="/#diferencial">Diferencial</Link>
            <Link className="text-sm font-medium text-silver font-bold transition-colors" to="/quienes-somos">Quiénes somos</Link>
            <Link className="text-sm font-medium text-slate-300 hover:text-silver transition-colors" to="/proyectos">Proyectos</Link>
          </nav>
          <a href="https://wa.me/34630251862" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp" className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
        </div>
      </header>

      <main className="flex-1 pt-24">

        {/* ═══════════════════════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════════════════════ */}
        <section className="relative py-24 px-6 lg:px-20 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-silver/5 rounded-full blur-[140px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

          <div ref={heroRef} className={`mx-auto max-w-4xl text-center ${reveal(heroVis)}`}>
            <p className="text-xs font-black uppercase tracking-[0.4em] text-silver mb-4">Quiénes somos</p>
            <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-8" style={{ fontStyle: 'italic' }}>
              I+D+i en medicina predictiva{' '}
              <span className="text-silver" style={{ fontStyle: 'italic' }}>desde la práctica clínica</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
              Somos un estudio de I+D+i en medicina predictiva fundado desde la práctica clínica, con el objetivo de dotar a profesionales sanitarios y gestores de herramientas que agilicen flujos de trabajo, optimicen resultados clínicos y faciliten la toma de decisiones en entornos de alta complejidad.
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            PROPÓSITO
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-20 px-6 lg:px-20 bg-navy-dark">
          <div ref={p1Ref} className={`mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reveal(p1Vis)}`}>
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-teal/10 border border-teal/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-teal text-2xl">target</span>
                </div>
                <p className="text-xs font-black uppercase tracking-[0.3em] text-teal">Nuestro propósito</p>
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-6" style={{ fontStyle: 'italic' }}>
                Reducir la incertidumbre clínica{' '}
                <span className="text-teal" style={{ fontStyle: 'italic' }}>en momentos críticos</span>
              </h2>
              <p className="text-slate-300 font-light text-base lg:text-lg leading-relaxed">
                Nuestro propósito es transformar la práctica asistencial mediante soluciones tecnológicas que reduzcan la incertidumbre clínica en momentos críticos, llevando la medicina de precisión desde los grandes centros a cualquier hospital.
              </p>
            </div>

            {/* Animated icon grid */}
            <div className="grid grid-cols-2 gap-4">
              {areas.map((a, i) => (
                <div
                  key={a.label}
                  className="group relative bg-gradient-to-b from-navy-light to-navy rounded-2xl border border-white/10 hover:border-teal/30 p-6 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,188,212,0.12)]"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className="material-symbols-outlined text-teal text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{a.icon}</span>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">{a.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            FOTO INTERACTIVA
        ═══════════════════════════════════════════════════════════ */}
        <section className="relative py-28 px-6 lg:px-20 overflow-hidden">
          <Particles />
          <div ref={imgRef} className={`mx-auto max-w-5xl ${reveal(imgVis)}`}>
            <div
              ref={photoWrap}
              onMouseMove={handleMouseMove}
              onMouseLeave={resetTilt}
              className="relative mx-auto max-w-3xl cursor-pointer perspective-[1200px]"
            >
              {/* Glow ring */}
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-silver/20 via-transparent to-teal/20 blur-2xl opacity-60 pointer-events-none animate-pulse" />

              <div
                className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.5)] transition-transform duration-200 ease-out"
                style={{
                  transform: `translateY(${offset}px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
                }}
              >
                {/* Placeholder — reemplaza src con tu fotografía */}
                <img
                  src="/Equipo_m%C3%A9dico-cient%C3%ADfico.png"
                  alt="Equipo Avisania Lab"
                  className="w-full h-[340px] lg:h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />

                {/* Overlay text */}
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                  <p className="text-xs font-black uppercase tracking-[0.4em] text-silver/80 mb-2">Avisania Lab</p>
                  <p className="text-lg lg:text-xl font-bold text-white leading-snug max-w-lg">
                    Rigor clínico, evidencia científica y desarrollo tecnológico unidos en un solo equipo.
                  </p>
                </div>
              </div>

              {/* Corner badges */}
              <div className="absolute -top-3 -left-3 bg-navy border border-silver/30 rounded-xl px-4 py-2 flex items-center gap-2 shadow-lg animate-[fadeIn_1s_0.4s_both]">
                <span className="material-symbols-outlined text-silver text-lg">science</span>
                <span className="text-[11px] font-bold text-white uppercase tracking-wider">I+D+i</span>
              </div>
              <div className="absolute -bottom-3 -right-3 bg-navy border border-teal/30 rounded-xl px-4 py-2 flex items-center gap-2 shadow-lg animate-[fadeIn_1s_0.6s_both]">
                <span className="material-symbols-outlined text-teal text-lg">verified</span>
                <span className="text-[11px] font-bold text-white uppercase tracking-wider">Escalabilidad</span>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            QUÉ HACEMOS
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-20 px-6 lg:px-20 bg-navy-dark">
          <div ref={p2Ref} className={`mx-auto max-w-5xl ${reveal(p2Vis)}`}>
            <div className="text-center mb-14">
              <p className="text-xs font-black uppercase tracking-[0.4em] text-silver mb-3">Qué hacemos</p>
              <h2 className="text-3xl lg:text-5xl font-black text-white leading-tight" style={{ fontStyle: 'italic' }}>
                Modelos predictivos avanzados{' '}
                <span className="text-silver" style={{ fontStyle: 'italic' }}>de inteligencia artificial</span>
              </h2>
            </div>

            <p className="text-slate-300 font-light text-base lg:text-lg leading-relaxed text-center max-w-3xl mx-auto mb-14">
              Actualmente, en Avisania Lab desarrollamos modelos predictivos avanzados de inteligencia artificial aplicados a dos áreas: perioperatorio y oncología.
            </p>

            {/* Capability cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: 'vital_signs', title: 'Predicción de eventos críticos', desc: 'Desaturación perioperatoria, inestabilidad hemodinámica, vía aérea difícil — detección anticipada para salvar vidas.' },
                { icon: 'radiology', title: 'Diagnóstico por imagen', desc: 'Segmentación tumoral y estructuras anatómicas con modelos de deep learning de última generación.' },
                { icon: 'shield_lock', title: 'Datos críticos securizados', desc: 'Tratamiento de datos bajo rigurosos estándares de calidad y ciberseguridad — MDR, AI Act, GDPR.' },
              ].map((c, i) => (
                <div
                  key={c.title}
                  className="group bg-gradient-to-b from-navy-light to-navy rounded-[2rem] border border-white/10 hover:border-silver/30 p-8 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(168,184,200,0.1)]"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-silver/10 border border-silver/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-silver text-3xl">{c.icon}</span>
                  </div>
                  <h3 className="text-lg font-black text-white mb-3">{c.title}</h3>
                  <p className="text-slate-400 font-light text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            ECOSISTEMA
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-20 px-6 lg:px-20">
          <div ref={p3Ref} className={`mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-5 gap-12 items-center ${reveal(p3Vis)}`}>
            {/* Animated orbit graphic */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative w-56 h-56 lg:w-64 lg:h-64">
                {/* rings */}
                <div className="absolute inset-0 rounded-full border border-silver/10 animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-4 rounded-full border border-silver/15 animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute inset-8 rounded-full border border-teal/15 animate-[spin_12s_linear_infinite]" />
                {/* center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-silver/20 to-teal/10 border border-silver/30 flex items-center justify-center shadow-[0_10px_40px_rgba(168,184,200,0.2)]">
                    <span className="material-symbols-outlined text-silver text-4xl">hub</span>
                  </div>
                </div>
                {/* orbiting dots */}
                {['🏥', '🔬', '🏭'].map((emoji, i) => (
                  <div
                    key={i}
                    className="absolute w-10 h-10 rounded-full bg-navy border border-white/20 flex items-center justify-center text-lg shadow-lg"
                    style={{
                      top: `${50 + 44 * Math.sin((i * 2 * Math.PI) / 3)}%`,
                      left: `${50 + 44 * Math.cos((i * 2 * Math.PI) / 3)}%`,
                      transform: 'translate(-50%,-50%)',
                      animation: `orbitPulse 3s ${i * 0.6}s ease-in-out infinite`,
                    }}
                  >
                    {emoji}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-silver/10 border border-silver/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-silver text-2xl">handshake</span>
                </div>
                <p className="text-xs font-black uppercase tracking-[0.3em] text-silver">Ecosistema</p>
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-6" style={{ fontStyle: 'italic' }}>
                Colaboración con enfoque en{' '}
                <span className="text-silver" style={{ fontStyle: 'italic' }}>la escalabilidad</span>
              </h2>
              <p className="text-slate-300 font-light text-base lg:text-lg leading-relaxed mb-6">
                Colaboramos con hospitales universitarios, sociedades científicas e industria, articulando un ecosistema de I+D+i con enfoque en la escalabilidad.
              </p>
              <p className="text-slate-300 font-light text-base lg:text-lg leading-relaxed">
                El proyecto combina rigor clínico, evidencia científica y desarrollo tecnológico para transformar la práctica médica, haciendo accesibles herramientas predictivas de alto nivel como nuevo estándar asistencial.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            CTA
        ═══════════════════════════════════════════════════════════ */}
        <section className="relative py-28 px-6 lg:px-20 overflow-hidden bg-navy-dark">
          <div className="absolute inset-0 z-0">
            <img src="/Cabeza_humana_hologr%C3%A1fica.png" alt="" className="w-full h-full object-cover opacity-10" />
            <div className="absolute inset-0 bg-navy-dark/80" />
          </div>
          <div ref={ctaRef} className={`relative z-10 mx-auto max-w-4xl text-center flex flex-col items-center gap-8 ${reveal(ctaVis)}`}>
            <h2 className="text-3xl lg:text-5xl font-black text-white leading-tight" style={{ fontStyle: 'italic' }}>
              ¿Quieres saber más sobre{' '}
              <span className="text-silver" style={{ fontStyle: 'italic' }}>nuestro equipo</span>?
            </h2>
            <p className="text-lg text-slate-300 font-light max-w-2xl">
              Conoce a las personas detrás de Avisania Lab — formación de élite, experiencia clínica real y visión estratégica.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a href="mailto:pablo.hernandez@avisania.tech" className="rounded-full border-2 border-white/20 px-10 py-5 text-sm font-black uppercase tracking-[0.2em] text-white hover:border-silver hover:text-silver transition-all duration-300 text-center">
                Contactar
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default QuienesSomos;
