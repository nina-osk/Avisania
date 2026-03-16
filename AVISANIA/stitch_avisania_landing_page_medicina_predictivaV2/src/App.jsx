import React from 'react';
import Spline from '@splinetool/react-spline';

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <header className="sticky top-0 z-50 w-full border-b border-gold/10 bg-navy/80 backdrop-blur-xl px-6 lg:px-20 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 border border-gold/30 rounded-2xl shadow-[0_0_20px_rgba(212,175,55,0.15)] bg-navy-darker">
              <span className="material-symbols-outlined text-gold text-2xl">shield</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-black tracking-widest text-white leading-none">AVISANIA</h1>
              <span className="text-[10px] font-bold tracking-[0.3em] text-gold uppercase">LAB</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-12">
            <a className="text-sm font-semibold uppercase tracking-widest text-slate-300 hover:text-gold transition-colors" href="#metodologia">Metodología</a>
            <a className="text-sm font-semibold uppercase tracking-widest text-slate-300 hover:text-gold transition-colors" href="#nosotros">Nosotros</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="rounded-full border-2 border-gold bg-transparent px-8 py-2.5 text-xs font-black uppercase tracking-widest text-gold hover:bg-gold hover:text-navy transition-all duration-300 gold-shadow">
              Contactar
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative overflow-hidden px-6 lg:px-20 py-20 lg:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(212,175,55,0.08)_0%,_transparent_60%)]"></div>
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="z-10 flex flex-col gap-8">
              <div className="inline-flex items-center gap-3 bg-gold/10 px-4 py-2 rounded-full w-fit border border-gold/20">
                <span className="material-symbols-outlined text-gold text-sm">science</span>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-gold">Ciencia & Precisión de Alto Valor</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-white">
                Medicina Predictiva con <span className="text-gold">Rigor Científico</span>
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-slate-400 font-light">
                Diseñado para el perfil científico ejecutivo: integramos análisis de datos avanzados y excelencia operativa para instituciones que demandan resultados medibles y prestigio.
              </p>
              <div className="flex flex-wrap gap-6 mt-4">
                <button className="rounded-full bg-gold px-10 py-5 text-sm font-black uppercase tracking-[0.2em] text-navy shadow-[0_15px_30px_rgba(212,175,55,0.3)] hover:scale-105 transition-all duration-300">
                  Iniciar Proyecto
                </button>
                <button className="rounded-full border-2 border-slate-700 px-10 py-5 text-sm font-black uppercase tracking-[0.2em] text-white hover:border-gold hover:text-gold transition-all duration-300 backdrop-blur-sm">
                  Ver Metodología
                </button>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 to-transparent rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              
              {/* Spline Animation Container */}
              <div className="relative aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden bg-navy-darker flex items-center justify-center border border-white/5 professional-shadow">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold via-transparent to-transparent pointer-events-none"></div>
                
                {/* Spline Component */}
                <div className="absolute inset-0 w-full h-full z-10">
                  <Spline scene="https://prod.spline.design/ad84f82f-16e5-436d-ab9e-0353371f6b4c/scene.splinecode" />
                </div>

                <div className="absolute bottom-10 left-10 text-left z-20 pointer-events-none bg-navy-darker/50 p-4 rounded-xl backdrop-blur-md border border-white/10">
                  <div className="flex gap-1 mb-2">
                    <div className="w-1 h-4 bg-gold/40 animate-pulse"></div>
                    <div className="w-1 h-6 bg-gold animate-pulse delay-75"></div>
                    <div className="w-1 h-3 bg-gold/20 animate-pulse delay-150"></div>
                  </div>
                  <p className="text-[10px] text-slate-300 font-mono">ENCRYPTED_DATA_STREAM: 99.8% ACCURACY</p>
                </div>
              </div>

            </div>
          </div>
        </section>
        
        <section className="bg-navy-darker py-32 px-6 lg:px-20 relative" id="metodologia">
          <div className="mx-auto max-w-7xl">
            <div className="mb-20 text-center max-w-3xl mx-auto">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-gold mb-4">Estructura Estratégica</h2>
              <h3 className="text-4xl lg:text-5xl font-black text-white">Metodología de Alto Impacto</h3>
              <p className="mt-6 text-slate-400">Un enfoque estructurado y basado en datos para la toma de decisiones clínicas y operativas.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group flex flex-col gap-8 border border-white/5 bg-navy p-10 rounded-[2rem] professional-shadow transition-all duration-500 hover:border-gold/30 hover:-translate-y-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-500">
                  <span className="material-symbols-outlined text-3xl">database</span>
                </div>
                <div>
                  <h4 className="text-lg font-black uppercase tracking-widest text-white">Excelencia del dato</h4>
                  <p className="mt-4 text-sm leading-relaxed text-slate-400 font-light">
                    Integridad total y análisis avanzado de datos clínicos para decisiones estratégicas sin margen de error.
                  </p>
                </div>
              </div>
              <div className="group flex flex-col gap-8 border border-white/5 bg-navy p-10 rounded-[2rem] professional-shadow transition-all duration-500 hover:border-gold/30 hover:-translate-y-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-500">
                  <span className="material-symbols-outlined text-3xl">monitoring</span>
                </div>
                <div>
                  <h4 className="text-lg font-black uppercase tracking-widest text-white">Análisis Predictivo</h4>
                  <p className="mt-4 text-sm leading-relaxed text-slate-400 font-light">
                    Modelos estadísticos avanzados que anticipan escenarios y optimizan la gestión de recursos sanitarios.
                  </p>
                </div>
              </div>
              <div className="group flex flex-col gap-8 border border-white/5 bg-navy p-10 rounded-[2rem] professional-shadow transition-all duration-500 hover:border-gold/30 hover:-translate-y-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-500">
                  <span className="material-symbols-outlined text-3xl">insights</span>
                </div>
                <div>
                  <h4 className="text-lg font-black uppercase tracking-widest text-white">KPIs de Precisión</h4>
                  <p className="mt-4 text-sm leading-relaxed text-slate-400 font-light">
                    Resultados cuantificables con beneficios directos en la práctica clínica y la rentabilidad operativa.
                  </p>
                </div>
              </div>
              <div className="group flex flex-col gap-8 border border-white/5 bg-navy p-10 rounded-[2rem] professional-shadow transition-all duration-500 hover:border-gold/30 hover:-translate-y-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-500">
                  <span className="material-symbols-outlined text-3xl">verified_user</span>
                </div>
                <div>
                  <h4 className="text-lg font-black uppercase tracking-widest text-white">Riesgo Controlado</h4>
                  <p className="mt-4 text-sm leading-relaxed text-slate-400 font-light">
                    Protocolos de seguridad de nivel científico que garantizan la viabilidad y cumplimiento de cada proyecto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="relative bg-navy py-32 px-6 lg:px-20 overflow-hidden border-y border-gold/10" id="nosotros">
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2"></div>
          <div className="relative mx-auto max-w-5xl text-center">
            <h2 className="text-gold font-black tracking-[0.5em] uppercase text-xs mb-8">Nuestra Filosofía</h2>
            <h3 className="text-white text-5xl lg:text-7xl font-black leading-tight mb-10 tracking-tight">
              Liderazgo Científico <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white">Evolucionado</span>
            </h3>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-300 font-light mb-16">
              Avisania Lab trasciende el consultor tradicional. Somos socios estratégicos de instituciones que buscan el nexo perfecto entre la innovación tecnológica y la estética funcional.
            </p>
            <div className="flex justify-center">
              <button className="group flex items-center gap-4 border-2 border-gold px-12 py-5 rounded-full text-sm font-black uppercase tracking-[0.3em] text-gold transition-all duration-500 hover:bg-gold hover:text-navy gold-shadow">
                Conoce al Equipo
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>
        
        <section className="py-32 px-6 lg:px-20 bg-navy-darker">
          <div className="mx-auto max-w-7xl border border-white/5 bg-navy p-12 lg:p-24 rounded-[3rem] flex flex-col lg:flex-row items-center justify-between gap-16 relative overflow-hidden professional-shadow">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.08),_transparent)] pointer-events-none"></div>
            <div className="relative z-10 max-w-2xl text-center lg:text-left">
              <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight">¿Damos el siguiente paso científico?</h2>
              <p className="mt-8 text-xl text-slate-400 font-light">Inicie una conversación sobre cómo podemos aplicar nuestra medicina predictiva en su institución.</p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row lg:flex-col gap-6 w-full lg:w-auto min-w-[300px]">
              <button className="rounded-full bg-gold px-12 py-6 text-sm font-black uppercase tracking-[0.2em] text-navy shadow-[0_20px_40px_rgba(212,175,55,0.3)] hover:scale-105 transition-all duration-300 text-center">
                Contactar Ahora
              </button>
              <button className="rounded-full border-2 border-white/20 px-12 py-6 text-sm font-black uppercase tracking-[0.2em] text-white hover:border-gold hover:text-gold transition-all duration-300 text-center backdrop-blur-sm">
                Agendar Cita
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t border-white/5 py-20 px-6 lg:px-20 bg-navy-darker">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-10 h-10 border border-gold/30 rounded-xl bg-navy shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
                  <span className="material-symbols-outlined text-gold text-xl">shield</span>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-lg font-black tracking-widest text-white leading-none">AVISANIA</h2>
                  <span className="text-[8px] font-bold tracking-[0.3em] text-gold uppercase">LAB</span>
                </div>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                Excelencia técnica y estética en medicina predictiva para proyectos de alta complejidad.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-xs font-black uppercase tracking-widest text-gold">Soluciones</h3>
              <div className="flex flex-col gap-4">
                <a className="text-sm text-slate-400 hover:text-gold transition-colors font-light" href="#">Predicción Avanzada</a>
                <a className="text-sm text-slate-400 hover:text-gold transition-colors font-light" href="#">Big Data Clínico</a>
                <a className="text-sm text-slate-400 hover:text-gold transition-colors font-light" href="#">Consultoría Executive</a>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-xs font-black uppercase tracking-widest text-gold">Explorar</h3>
              <div className="flex flex-col gap-4">
                <a className="text-sm text-slate-400 hover:text-gold transition-colors font-light" href="#metodologia">Metodología</a>
                <a className="text-sm text-slate-400 hover:text-gold transition-colors font-light" href="#nosotros">Sobre Nosotros</a>
                <a className="text-sm text-slate-400 hover:text-gold transition-colors font-light" href="#">Casos Clínicos</a>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-xs font-black uppercase tracking-widest text-gold">Legal</h3>
              <div className="flex flex-col gap-4">
                <a className="text-sm text-slate-400 hover:text-gold transition-colors font-light" href="#">Privacidad de Datos</a>
                <a className="text-sm text-slate-400 hover:text-gold transition-colors font-light" href="#">Ética Científica</a>
                <a className="text-sm text-slate-400 hover:text-gold transition-colors font-light" href="#">Aviso Legal</a>
              </div>
            </div>
          </div>
          <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-600">© 2024 Avisania Lab. Ciencia de Vanguardia.</p>
            <div className="flex gap-8">
              <a className="text-slate-500 hover:text-gold transition-colors" href="#">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
              </a>
              <a className="text-slate-500 hover:text-gold transition-colors" href="#">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
