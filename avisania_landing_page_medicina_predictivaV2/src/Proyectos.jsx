import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

/* Metric bar component */
function MetricBar({ label, value, max = 1, suffix = '' }) {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setWidth((value / max) * 100); obs.disconnect(); }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value, max]);
  return (
    <div ref={ref}>
      <div className="flex justify-between items-baseline mb-1.5">
        <p className="text-[10px] uppercase tracking-widest text-slate-500">{label}</p>
        <p className="text-sm font-black text-silver">{typeof value === 'number' ? value.toFixed(value < 1 ? 3 : 0) : value}{suffix}</p>
      </div>
      <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-silver/60 to-silver rounded-full transition-all duration-1000 ease-out" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}

/* Tag pill */
function Tag({ children, color = 'silver' }) {
  const cls = color === 'teal'
    ? 'text-teal/90 bg-teal/10 border-teal/20'
    : 'text-silver/80 bg-silver/10 border-silver/20';
  return <span className={`text-[10px] font-bold uppercase tracking-wider border rounded-full px-3 py-1 ${cls}`}>{children}</span>;
}

function Proyectos() {
  const [expandedCard, setExpandedCard] = useState(null);
  const toggle = (id) => setExpandedCard(prev => prev === id ? null : id);

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
            <Link className="text-sm font-medium text-silver font-bold transition-colors" to="/proyectos">Proyectos</Link>
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
        <section className="py-20 px-6 lg:px-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-silver/5 rounded-full blur-[140px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-silver mb-4">I+D+i</p>
            <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6" style={{fontStyle: 'italic'}}>
              Proyectos de I+D en{' '}<span className="text-silver" style={{fontStyle: 'italic'}}>Medicina Predictiva Aplicada</span>
            </h1>
            <p className="text-xl text-slate-300 font-semibold mb-4">
              Modelos validados. Métricas publicadas. Tecnología que opera en el mundo real.
            </p>
            <p className="text-base text-slate-400 font-light leading-relaxed max-w-4xl mx-auto mb-8">
              Desarrollamos modelos de inteligencia artificial para la predicción de eventos críticos en el entorno perioperatorio: desaturación intraoperatoria, inestabilidad hemodinámica y predicción de vía aérea difícil. Nuestros modelos se entrenan sobre datos clínicos reales de contexto hospitalario español bajo estándares de calidad de dato y seguridad GDPR-compliant. El objetivo es reducir la incertidumbre clínica en momentos de alta complejidad y dotar al anestesiólogo de soporte predictivo basado en evidencia.
            </p>
            <div className="inline-flex items-center gap-3 bg-navy-dark/80 border border-teal/20 rounded-full px-6 py-3">
              <span className="material-symbols-outlined text-teal text-xl">verified</span>
              <p className="text-sm font-semibold text-teal">No hacemos promesas de IA. Publicamos métricas.</p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            I. MEDICINA PREDICTIVA · DATA SCIENCE
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-24 px-6 lg:px-20 bg-navy-dark" id="medicina-predictiva">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-teal/10 border border-teal/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-teal text-2xl">cardiology</span>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.3em] text-teal">Sección I</p>
                <h2 className="text-3xl lg:text-4xl font-black text-white">Medicina Predictiva · Data Science</h2>
              </div>
            </div>
            <p className="text-lg text-slate-300 font-light leading-relaxed max-w-4xl mb-6">
              Enseñamos a la máquina a anticipar eventos clínicos críticos.
            </p>
            <p className="text-sm text-slate-400 font-light leading-relaxed max-w-4xl mb-14">
              Los modelos predictivos de Avisania Lab operan sobre datos fisiológicos recogidos en quirófano, UCI y unidades cardiovasculares. Los tres modelos publicados superan AUC 0.95 — el umbral de relevancia clínica para sistemas de alerta temprana.
            </p>

            <div className="space-y-8">

              {/* Desaturación */}
              <div className="group bg-gradient-to-b from-navy-light to-navy rounded-[2rem] border border-white/10 hover:border-teal/30 p-8 lg:p-10 transition-all duration-500 professional-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <Tag color="teal">LSTM</Tag>
                      <Tag color="teal">Deep Learning</Tag>
                      <span className="text-3xl font-black text-teal">AUC 0.97</span>
                    </div>
                    <h3 className="text-2xl font-black text-white mb-3">Predicción de Desaturación Perioperatoria</h3>
                    <p className="text-slate-300 font-light text-sm leading-relaxed mb-5">
                      Los episodios de hipoxia tisular intraoperatoria son predictor independiente de complicaciones postoperatorias graves, desde lesión renal aguda hasta deterioro neurológico. Nuestro modelo de red neuronal recurrente (LSTM) predice la desaturación perioperatoria con AUC 0.97, adelantando la ventana de intervención del anestesiólogo antes de que el evento sea clínicamente evidente.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Tag>Anestesia</Tag>
                      <Tag>Perioperatorio</Tag>
                    </div>
                  </div>
                  <div className="lg:w-56 flex-shrink-0">
                    <MetricBar label="AUC Score" value={0.97} />
                  </div>
                </div>
              </div>

              {/* Hemodinámica */}
              <div className="group bg-gradient-to-b from-navy-light to-navy rounded-[2rem] border border-white/10 hover:border-teal/30 p-8 lg:p-10 transition-all duration-500 professional-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <Tag color="teal">XGBoost</Tag>
                      <Tag color="teal">SHAP</Tag>
                      <span className="text-3xl font-black text-teal">AUC 0.98</span>
                    </div>
                    <h3 className="text-2xl font-black text-white mb-3">Predicción de Inestabilidad Hemodinámica</h3>
                    <p className="text-slate-300 font-light text-sm leading-relaxed mb-5">
                      La hipotensión arterial intraoperatoria sostenida causa lesión miocárdica en 1 de cada 5 pacientes quirúrgicos de alto riesgo. Nuestro modelo XGBoost alcanza AUC 0.98 en predicción de eventos hemodinámicos adversos, con interpretabilidad clínica garantizada mediante análisis SHAP — el clínico sabe qué variables disparan la alerta y por qué.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Tag>Hemodinámica cardiovascular</Tag>
                      <Tag>Interpretabilidad</Tag>
                    </div>
                  </div>
                  <div className="lg:w-56 flex-shrink-0">
                    <MetricBar label="AUC Score" value={0.98} />
                  </div>
                </div>
              </div>

              {/* ECO Air Coach */}
              <div className="group bg-gradient-to-b from-navy-light to-navy rounded-[2rem] border border-teal/20 hover:border-teal/40 p-8 lg:p-10 transition-all duration-500 professional-shadow relative overflow-hidden">
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-teal/10 border border-teal/20 rounded-full px-4 py-1.5">
                  <span className="material-symbols-outlined text-teal text-sm">emoji_events</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal">Florencia 2025</span>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10 mt-6 lg:mt-0">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <Tag color="teal">XGBoost + Ecografía</Tag>
                      <Tag color="teal">CDSS</Tag>
                      <span className="text-3xl font-black text-teal">AUC 0.95</span>
                    </div>
                    <h3 className="text-2xl font-black text-white mb-3">ECO Air Coach CDSS — Predicción de Vía Aérea Difícil</h3>
                    <p className="text-slate-300 font-light text-sm leading-relaxed mb-5">
                      El manejo de la vía aérea difícil no anticipada es la principal causa de mortalidad evitable en anestesia. ECO Air Coach es un sistema CDSS que integra variables ecográficas estructuradas con aprendizaje automático para predecir la intubación difícil antes de la inducción. Primer sistema de este tipo con validación ecográfica prospectiva en población española. Presentado en congreso internacional de referencia en Florencia (octubre 2025).
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Tag>Vía aérea</Tag>
                      <Tag>Ultrasonido estructurado</Tag>
                      <Tag color="teal">Reconocimiento internacional</Tag>
                    </div>
                  </div>
                  <div className="lg:w-56 flex-shrink-0">
                    <MetricBar label="AUC Score" value={0.95} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            II. COMPUTER VISION · AUTOSEGMENTACIÓN ONCOLÓGICA
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-24 px-6 lg:px-20" id="computer-vision">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-silver/10 border border-silver/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-silver text-2xl">visibility</span>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.3em] text-silver">Sección II</p>
                <h2 className="text-3xl lg:text-4xl font-black text-white">Computer Vision · Autosegmentación Oncológica</h2>
              </div>
            </div>
            <p className="text-lg text-slate-300 font-light leading-relaxed max-w-4xl mb-4">
              Entrenamos a la máquina para que identifique y delimite patología como un radiólogo experto.
            </p>
            <p className="text-sm text-slate-400 font-light leading-relaxed max-w-4xl mb-6">
              Aplicamos técnicas de aprendizaje profundo para el desarrollo de modelos de autosegmentación tumoral y detección de estructuras anatómicas en estudios de imagen médica. Los modelos se orientan a la asistencia al diagnóstico oncológico, con especial foco en la reducción del tiempo de segmentación manual y la mejora de la reproducibilidad inter-observador.
            </p>
            <div className="flex flex-wrap gap-2 mb-14">
              {['Oncología', 'Radiología', 'Computer Vision', 'MLOps sanitario'].map(d => (
                <Tag key={d}>{d}</Tag>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              {/* NeuroContour AI */}
              <div
                onClick={() => toggle('neuro')}
                className={`cursor-pointer bg-gradient-to-b from-navy-light to-navy rounded-[2rem] border p-8 transition-all duration-500 professional-shadow ${expandedCard === 'neuro' ? 'border-silver/40 shadow-[0_20px_60px_rgba(168,184,200,0.12)]' : 'border-white/10 hover:border-silver/30'}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-green-400 text-lg">check_circle</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-green-400">En uso clínico activo</span>
                  </div>
                  <span className={`material-symbols-outlined text-slate-500 text-sm transition-transform duration-300 ${expandedCard === 'neuro' ? 'rotate-180' : ''}`}>expand_more</span>
                </div>
                <h3 className="text-xl font-black text-white mb-2">NeuroContour AI — Metástasis Cerebrales (RM T1+Gd)</h3>
                <div className="flex flex-wrap gap-4 mb-4">
                  <span className="text-lg font-black text-silver">DSC 0.785 ± 0.065</span>
                  <span className="text-lg font-black text-silver">HD95: 3.19 mm</span>
                </div>
                <div className={`overflow-hidden transition-all duration-500 ${expandedCard === 'neuro' ? 'max-h-[400px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <p className="text-slate-300 font-light text-sm leading-relaxed mb-4">
                    Sistema de autosegmentación de metástasis cerebrales sobre RM T1 con gadolinio. Genera contornos DICOM-RT exportables directamente al sistema de planificación de tratamiento (TPS), eliminando la etapa de contorneación manual. Validado prospectivamente en 12 pacientes en entorno clínico real. Entrenado sobre 461 casos del dataset UCSF BrainMets.
                  </p>
                  <div className="space-y-2">
                    <MetricBar label="DSC" value={0.785} />
                    <MetricBar label="ASSD" value={0.86} max={3} suffix=" mm" />
                  </div>
                </div>
              </div>

              {/* HECKTOR25 */}
              <div
                onClick={() => toggle('hecktor')}
                className={`cursor-pointer bg-gradient-to-b from-navy-light to-navy rounded-[2rem] border p-8 transition-all duration-500 professional-shadow ${expandedCard === 'hecktor' ? 'border-silver/40 shadow-[0_20px_60px_rgba(168,184,200,0.12)]' : 'border-white/10 hover:border-silver/30'}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <Tag color="teal">MICCAI 2025</Tag>
                  <span className={`material-symbols-outlined text-slate-500 text-sm transition-transform duration-300 ${expandedCard === 'hecktor' ? 'rotate-180' : ''}`}>expand_more</span>
                </div>
                <h3 className="text-xl font-black text-white mb-2">HECKTOR25 — Cáncer de Cabeza y Cuello (PET/CT)</h3>
                <div className="flex flex-wrap gap-4 mb-4">
                  <span className="text-lg font-black text-silver">DSC GTVp 0.796</span>
                  <span className="text-lg font-black text-silver">DSC GTVn 0.741</span>
                </div>
                <div className={`overflow-hidden transition-all duration-500 ${expandedCard === 'hecktor' ? 'max-h-[400px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <p className="text-slate-300 font-light text-sm leading-relaxed mb-4">
                    Segmentación automática del tumor primario (GTVp) y afectación ganglionar (GTVn) en cáncer de cabeza y cuello sobre imagen híbrida PET/CT. Resultado obtenido en la competición HECKTOR 2025 — MICCAI, sobre 680 casos de 8 centros internacionales. Uno de los datasets más exigentes en segmentación oncológica de cabeza y cuello a nivel mundial.
                  </p>
                  <div className="space-y-2">
                    <MetricBar label="DSC GTVp" value={0.796} />
                    <MetricBar label="DSC GTVn" value={0.741} />
                    <MetricBar label="sDSC@2mm" value={0.856} />
                  </div>
                </div>
              </div>

              {/* BrainMets CT */}
              <div
                onClick={() => toggle('brainmets')}
                className={`cursor-pointer bg-gradient-to-b from-navy-light to-navy rounded-[2rem] border p-8 transition-all duration-500 professional-shadow ${expandedCard === 'brainmets' ? 'border-silver/40 shadow-[0_20px_60px_rgba(168,184,200,0.12)]' : 'border-white/10 hover:border-silver/30'}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <Tag>nnU-Net v2</Tag>
                  <span className={`material-symbols-outlined text-slate-500 text-sm transition-transform duration-300 ${expandedCard === 'brainmets' ? 'rotate-180' : ''}`}>expand_more</span>
                </div>
                <h3 className="text-xl font-black text-white mb-2">BrainMets CT — Metástasis Cerebrales en TC de Planificación</h3>
                <div className="flex flex-wrap gap-4 mb-4">
                  <span className="text-lg font-black text-silver">Detección: 92%</span>
                  <span className="text-lg font-black text-silver">DSC ≥4cm: 0.77</span>
                </div>
                <div className={`overflow-hidden transition-all duration-500 ${expandedCard === 'brainmets' ? 'max-h-[400px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <p className="text-slate-300 font-light text-sm leading-relaxed mb-4">
                    Detección y segmentación de metástasis cerebrales sobre TC de planificación radioterápica, sin necesidad de contraste intravenoso. Arquitectura nnU-Net v2 entrenada sobre bases de datos multicéntricas (RFUds + PROTEAS). Especialmente relevante para centros sin acceso inmediato a RM de planificación.
                  </p>
                  <div className="space-y-2">
                    <MetricBar label="Tasa de detección" value={0.92} />
                    <MetricBar label="DSC ≥4cm" value={0.77} />
                  </div>
                </div>
              </div>

              {/* TrackRAD */}
              <div
                onClick={() => toggle('trackrad')}
                className={`cursor-pointer bg-gradient-to-b from-navy-light to-navy rounded-[2rem] border p-8 transition-all duration-500 professional-shadow ${expandedCard === 'trackrad' ? 'border-silver/40 shadow-[0_20px_60px_rgba(168,184,200,0.12)]' : 'border-white/10 hover:border-silver/30'}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <Tag color="teal">MICCAI 2025</Tag>
                  <span className={`material-symbols-outlined text-slate-500 text-sm transition-transform duration-300 ${expandedCard === 'trackrad' ? 'rotate-180' : ''}`}>expand_more</span>
                </div>
                <h3 className="text-xl font-black text-white mb-2">TrackRAD 2025 — Seguimiento Tumoral en Tiempo Real (Cine-RM)</h3>
                <div className="flex flex-wrap gap-4 mb-4">
                  <span className="text-lg font-black text-silver">Dice 0.614</span>
                  <span className="text-lg font-black text-silver">CE mediana: 18.4 mm</span>
                </div>
                <div className={`overflow-hidden transition-all duration-500 ${expandedCard === 'trackrad' ? 'max-h-[400px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <p className="text-slate-300 font-light text-sm leading-relaxed mb-4">
                    Seguimiento automático del volumen tumoral en tiempo real durante sesiones de radioterapia guiada por imagen (MR-Linac), sobre cine-RM. Competición internacional TrackRAD 2025 — MICCAI. Dataset: 108 pacientes, 2.8 millones de frames de imagen. Aplicación directa en adaptive radiotherapy y tratamiento en tiempo real.
                  </p>
                  <MetricBar label="Dice Score" value={0.614} />
                </div>
              </div>

              {/* PANTHER */}
              <div
                onClick={() => toggle('panther')}
                className={`cursor-pointer bg-gradient-to-b from-navy-light to-navy rounded-[2rem] border p-8 transition-all duration-500 professional-shadow lg:col-span-2 ${expandedCard === 'panther' ? 'border-silver/40 shadow-[0_20px_60px_rgba(168,184,200,0.12)]' : 'border-white/10 hover:border-silver/30'}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Tag color="teal">MICCAI 2025</Tag>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-teal/80 bg-teal/10 border border-teal/20 rounded-full px-3 py-1">
                      <span className="material-symbols-outlined text-teal text-xs">schedule</span>
                      En curso
                    </span>
                  </div>
                  <span className={`material-symbols-outlined text-slate-500 text-sm transition-transform duration-300 ${expandedCard === 'panther' ? 'rotate-180' : ''}`}>expand_more</span>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-white mb-2">PANTHER — Páncreas en RM T1 (Planificación RT Abdominal)</h3>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <span className="text-lg font-black text-silver">Dice 0.686</span>
                      <span className="text-lg font-black text-silver">92 casos</span>
                      <span className="text-lg font-black text-silver">Semi-supervisado</span>
                    </div>
                  </div>
                  <div className="lg:w-48 flex-shrink-0">
                    <MetricBar label="Dice Score" value={0.686} />
                  </div>
                </div>
                <div className={`overflow-hidden transition-all duration-500 ${expandedCard === 'panther' ? 'max-h-[400px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <p className="text-slate-300 font-light text-sm leading-relaxed">
                    Segmentación automática de páncreas sobre RM T1 para planificación de radioterapia abdominal, con entrenamiento semi-supervisado mediante pseudo-etiquetas. Competición PANTHER 2025 — MICCAI. El páncreas es uno de los órganos de mayor dificultad en segmentación automática por su variabilidad anatómica y contraste tisular reducido.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            III. ENSAYOS CLÍNICOS Y PROTOTIPOS — PROYECTOS ACTIVOS
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-24 px-6 lg:px-20 bg-navy-dark" id="ensayos-clinicos">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-teal/10 border border-teal/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-teal text-2xl">biotech</span>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.3em] text-teal">Sección III</p>
                <h2 className="text-3xl lg:text-4xl font-black text-white">Ensayos Clínicos y Prototipos Funcionales</h2>
              </div>
            </div>
            <p className="text-lg text-slate-300 font-light leading-relaxed max-w-4xl mb-4">
              Investigación en marcha. Colaboraciones institucionales activas. Resultados en proceso de publicación.
            </p>
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-14">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-green-400">Proyectos activos</span>
            </div>

            <div className="space-y-6">

              {/* SMART-MOL */}
              <div className="bg-gradient-to-b from-navy-light to-navy rounded-[2rem] border border-silver/20 hover:border-silver/40 p-8 lg:p-10 transition-all duration-500 professional-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-silver/10 border border-silver/20 flex items-center justify-center">
                        <span className="material-symbols-outlined text-silver text-xl">hub</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-white">SMART-MOL — Espacio Federado de Investigación Biomédica con IA</h3>
                        <p className="text-xs text-slate-400 font-light">En colaboración con Quantum Babylon / ACUDESIC</p>
                      </div>
                    </div>
                    <p className="text-slate-300 font-light text-sm leading-relaxed mb-5">
                      SMART-MOL es una plataforma de IA para investigación biomédica con datos federados y compartidos, desarrollada por el consorcio Quantum Babylon bajo la entidad ACUDESIC. Diseñada para hacer la inteligencia artificial prácticamente accesible a clínicos e investigadores sin requerir expertise técnico avanzado por parte del equipo médico. Avisania Lab participa como partner clínico, de modelado y validación.
                    </p>
                    <a
                      href="https://www.quantumbabylon.org/smart-mol-ai.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-silver hover:text-white transition-colors"
                    >
                      Ver SMART-MOL
                      <span className="material-symbols-outlined text-silver text-base">open_in_new</span>
                    </a>
                  </div>
                  <div className="flex-shrink-0 w-32 h-32 rounded-2xl bg-silver/5 border border-silver/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-silver text-5xl">hub</span>
                  </div>
                </div>
              </div>

              {/* GT Hemodinámica */}
              <div className="bg-gradient-to-b from-navy-light to-navy rounded-[2rem] border border-white/10 hover:border-teal/30 p-8 lg:p-10 transition-all duration-500 professional-shadow">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal/10 border border-teal/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-teal text-xl">monitor_heart</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-white">GT Hemodinámica — Validación Multicéntrica Internacional</h3>
                    <p className="text-xs text-teal font-semibold">Activo · Colaboración con Harvard Medical School y Sociedades científicas españolas</p>
                  </div>
                </div>
                <p className="text-slate-300 font-light text-sm leading-relaxed">
                  Grupo de trabajo para la validación prospectiva multicéntrica e internacional de los modelos predictivos de inestabilidad hemodinámica en cirugía cardiovascular de alto riesgo. Colaboración activa con Harvard Medical School en el marco de la red SANAI. Impulsado desde SEDAR (Sociedad Española de Anestesiología, Reanimación y Terapéutica del Dolor).
                </p>
              </div>

              {/* GT VAD-IA */}
              <div className="bg-gradient-to-b from-navy-light to-navy rounded-[2rem] border border-white/10 hover:border-teal/30 p-8 lg:p-10 transition-all duration-500 professional-shadow">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal/10 border border-teal/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-teal text-xl">face</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-white">GT VAD-IA — Dataset Nacional de Vía Aérea Difícil por Imagen</h3>
                    <p className="text-xs text-teal font-semibold">Activo · Sociedades científicas españolas</p>
                  </div>
                </div>
                <p className="text-slate-300 font-light text-sm leading-relaxed">
                  Proyecto de construcción de la primera base de datos nacional de imágenes morfofuncionales faciales correlacionadas con parámetros de intubación difícil. El dataset resultante entrenará modelos de visión artificial de nueva generación para predicción no invasiva de vía aérea difícil. Iniciativa auspiciada por SEDAR.
                </p>
              </div>

              {/* VÍA RICA Digital */}
              <div className="bg-gradient-to-b from-navy-light to-navy rounded-[2rem] border border-white/10 hover:border-teal/30 p-8 lg:p-10 transition-all duration-500 professional-shadow">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal/10 border border-teal/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-teal text-xl">local_hospital</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-white">VÍA RICA Digital — Plataforma ERAS Perioperatoria</h3>
                    <p className="text-xs text-teal font-semibold">Activo · H.U. Puerta del Mar · Interés declarado de Fresenius</p>
                  </div>
                </div>
                <p className="text-slate-300 font-light text-sm leading-relaxed">
                  Plataforma digital de gestión integral del protocolo perioperatorio ERAS (Enhanced Recovery After Surgery) en colaboración con el H.U. Puerta del Mar (Cádiz). Digitalización del ciclo completo de cuidados perioperatorios: protocolización, seguimiento de adherencia, alertas clínicas y analítica de outcomes. Interés comercial declarado por Fresenius para integración en su cartera de soluciones hospitalarias.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            HERRAMIENTAS Y PLATAFORMAS EN CODESARROLLO
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-24 px-6 lg:px-20" id="herramientas">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-14">
              <p className="text-xs font-black uppercase tracking-[0.4em] text-silver mb-3">Herramientas y plataformas</p>
              <h2 className="text-3xl lg:text-5xl font-black text-white leading-tight" style={{fontStyle: 'italic'}}>
                Plataformas en{' '}<span className="text-silver" style={{fontStyle: 'italic'}}>codesarrollo</span>
              </h2>
            </div>

            <div className="border border-silver/20 rounded-[2rem] p-10 lg:p-14 professional-shadow bg-gradient-to-br from-navy-light/30 to-navy">
              <div className="flex flex-col lg:flex-row items-start gap-10">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-silver/10 border border-silver/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-silver text-2xl">database</span>
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.3em] text-silver">Gestión de Dato Clínico</p>
                      <h3 className="text-2xl lg:text-3xl font-black text-white">SMART-mol</h3>
                    </div>
                  </div>
                  <p className="text-slate-300 font-light text-base leading-relaxed mb-6">
                    SMART-mol es una herramienta de investigación y gestión de dato clínico desarrollada por Avisania Lab, orientada a la transformación útil del dato crítico en entornos hospitalarios. Permite la estructuración, anonimización y análisis de datos clínicos bajo estándares de interoperabilidad (HL7/FHIR) y ciberseguridad. Diseñada para equipos de investigación clínica, gestores de innovación y unidades de datos de hospitales universitarios.
                  </p>
                  <div className="mb-6">
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-3">Perfil de usuario</p>
                    <div className="flex flex-wrap gap-2">
                      {['Investigadores clínicos', 'Unidades de Innovación Hospitalaria', 'Industria Farmacéutica'].map(p => (
                        <Tag key={p}>{p}</Tag>
                      ))}
                    </div>
                  </div>
                  <a
                    href="https://www.quantumbabylon.org/smart-mol-ai.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-full border-2 border-silver/40 px-8 py-4 text-sm font-black uppercase tracking-widest text-white hover:border-silver hover:text-silver transition-all duration-300 group"
                  >
                    Ver SMART-mol
                    <span className="material-symbols-outlined text-silver text-lg group-hover:translate-x-1 transition-transform">open_in_new</span>
                  </a>
                </div>
                <div className="flex-shrink-0 w-48 h-48 lg:w-56 lg:h-56 rounded-[2rem] bg-silver/5 border border-silver/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-silver text-7xl lg:text-8xl">hub</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            CTA
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-24 px-6 lg:px-20 bg-navy-dark">
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

      <Footer />
    </div>
  );
}

export default Proyectos;
