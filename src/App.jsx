import React, { useState } from 'react';
import { 
  GraduationCap, Calendar, Star, Trophy, Zap, Activity, Waves, 
  ClipboardCheck, ArrowRight, Rocket, Target, Brain, Lightbulb, 
  Menu, X, PlayCircle, Video, Check, MapPin, 
  Landmark, Smartphone, Calculator, Sigma, TrendingUp,
  Sprout, Hammer, Presentation, UserCheck, ChevronDown, CheckCircle,
  FileText, MessageCircle, Clock, Wallet, Users
} from 'lucide-react';

// =========================================================================
//  INSTRUCCIONES PARA TU FOTO DE PERFIL
// =========================================================================
// 1. Guarda tu foto en la carpeta: src/assets/
// 2. Descomenta la siguiente línea (borra las dos barras //) y cambia el nombre del archivo:
// import myPhoto from './assets/mi-foto.jpg';

/* =========================================================================
   1. CONFIGURACIÓN Y DATOS
   ========================================================================= */

const WHATSAPP_NUMBER = "51920257909";

const getWhatsAppLink = (message) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

// Componente Icono WhatsApp
const WhatsAppIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={className} fill="currentColor">
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
  </svg>
);


const COURSES_DATA = [
  {
    id: 'fisica-pre',
    title: "Física Pre-IB",
    grade: "4to Secundaria",
    description: "Crea una base sólida en mecánica para que el Diploma no te golpee.",
    color: "blue",
    icon: <Rocket className="w-8 h-8" />,
    features: ["Vectores", "Cinemática", "Gráficas"],
    finalMessage: "¡Listo para el Diploma IB!",
    roadmap: [
      { id: 1, weekTitle: "Semana 1", mainTopic: "Herramientas y Análisis de Datos", icon: <Calculator />, session1: "Incertidumbres y Vectores", session2: "Linealización de Gráficos (IA)" },
      { id: 2, weekTitle: "Semana 2", mainTopic: "Cinemática Fundamental", icon: <Activity />, session1: "Gráficas x-t, v-t, a-t", session2: "Ecuaciones SUVAT y Caída Libre", assessment: "Evaluación Corta 1" },
      { id: 3, weekTitle: "Semana 3", mainTopic: "Proyectiles y 2D", icon: <Target />, session1: "Independencia de Movimientos", session2: "Proyectiles con Ángulo" },
      { id: 4, weekTitle: "Semana 4", mainTopic: "Dinámica y Fuerzas", icon: <Zap />, session1: "Leyes de Newton y DCL", session2: "Planos Inclinados y Fricción", assessment: "Evaluación Corta 2" },
      { id: 5, weekTitle: "Semana 5", mainTopic: "Sistemas y Circular", icon: <ArrowRight className="rotate-90" />, session1: "Sistemas Conectados (Trenes)", session2: "Dinámica Circular Básica" },
      { id: 6, weekTitle: "Semana 6", mainTopic: "Trabajo y Energía", icon: <Lightbulb />, session1: "Teorema Trabajo-Energía", session2: "Potencia y Conservación", assessment: "Simulacro Final" },
    ]
  },
  {
    id: 'fisica-ib',
    title: "Física IB",
    grade: "5to Secundaria (SL)",
    highlightText: "Incluye Nivelación 4to",
    description: "Reforzamos tu base de Mecánica (4to) y adelantamos Campos (5to).",
    color: "indigo",
    tag: "Más Solicitado",
    icon: <Zap className="w-8 h-8" />,
    features: ["Repaso Mecánica", "Ondas y Electricidad", "Simulacro Paper 2"],
    finalMessage: "¡Listo para el Diploma IB!",
    roadmap: [
      { id: 1, weekTitle: "Semana 1", mainTopic: "Repaso Mecánica: Energía", icon: <Activity />, session1: "Trabajo-Energía vs Dinámica", session2: "Sistemas con Fricción" },
      { id: 2, weekTitle: "Semana 2", mainTopic: "Repaso Mecánica: Momento", icon: <Brain />, session1: "Impulso y Gráficas F-t", session2: "Movimiento Circular (Peraltes)", assessment: "Evaluación Diagnóstica" },
      { id: 3, weekTitle: "Semana 3", mainTopic: "Ondas I: El Concepto", icon: <Waves />, session1: "MAS y Gráficas de Ondas", session2: "Ecuación de Onda (c=fλ)" },
      { id: 4, weekTitle: "Semana 4", mainTopic: "Ondas II: Fenómenos", icon: <Lightbulb />, session1: "Snell y Ángulo Crítico", session2: "Superposición e Interferencia", assessment: "Evaluación de Progreso" },
      { id: 5, weekTitle: "Semana 5", mainTopic: "Electricidad I: Circuitos", icon: <Zap />, session1: "FEM vs Voltaje Terminal", session2: "Reducción de Resistencias" },
      { id: 6, weekTitle: "Semana 6", mainTopic: "Electricidad II y Simulacro", icon: <ClipboardCheck />, session1: "Divisores y Sensores", session2: "Simulacro Integrado (Paper 2)", assessment: "Simulacro Paper 2" },
    ]
  },
  {
    id: 'math-aa',
    title: "Math AA (SL)",
    grade: "Analysis & Approaches",
    description: "Domina la Trigonometría y el Cálculo (Derivadas e Integrales) del nivel medio.",
    color: "orange",
    icon: <Sigma className="w-8 h-8" />,
    features: ["Trigonometría", "Derivadas", "Integrales"],
    finalMessage: "¡Listo para el Diploma IB!",
    roadmap: [
      { id: 1, weekTitle: "Semana 1", mainTopic: "Trigonometría Circular", icon: <Sigma />, session1: "Círculo Unitario y Radianes", session2: "Ecuaciones Trigonométricas" },
      { id: 2, weekTitle: "Semana 2", mainTopic: "Identidades y Pruebas", icon: <Activity />, session1: "Identidades (Pitagórica/Doble)", session2: "Simplificación y 'Show that...'", assessment: "Quiz Trigonometría" },
      { id: 3, weekTitle: "Semana 3", mainTopic: "Fundamentos de Cálculo", icon: <TrendingUp />, session1: "Límites y Primeros Principios", session2: "Regla de la Cadena" },
      { id: 4, weekTitle: "Semana 4", mainTopic: "Técnicas de Derivación", icon: <Trophy />, session1: "Producto y Cociente", session2: "Tangentes y Normales", assessment: "Evaluación Derivadas" },
      { id: 5, weekTitle: "Semana 5", mainTopic: "Aplicaciones de la Derivada", icon: <Waves />, session1: "Crecimiento, Máx y Mín", session2: "Optimización (Contexto)" },
      { id: 6, weekTitle: "Semana 6", mainTopic: "Introducción a Integrales", icon: <ClipboardCheck />, session1: "Antiderivada y Constante C", session2: "Integrales Definidas (Áreas)", assessment: "Simulacro Tipo Examen" },
    ]
  },
  {
    id: 'math-ai',
    title: "Math AI (SL)",
    grade: "Applications & Interp.",
    description: "Domina la estadística y tu calculadora GDC. Clave para el Nivel Medio.",
    color: "yellow",
    icon: <TrendingUp className="w-8 h-8" />,
    features: ["Uso Experto GDC", "Estadística", "Modelación"],
    finalMessage: "¡Listo para el Diploma IB!",
    roadmap: [
      { id: 1, weekTitle: "Semana 1", mainTopic: "Modelado de Funciones", icon: <TrendingUp />, session1: "Modelos Lineales y Exp.", session2: "Regresión e Interpolación" },
      { id: 2, weekTitle: "Semana 2", mainTopic: "Estadística y Probabilidad", icon: <Brain />, session1: "Pearson vs Spearman", session2: "Probabilidad Condicionada", assessment: "Quiz Estadística" },
      { id: 3, weekTitle: "Semana 3", mainTopic: "Distribuciones Discretas", icon: <Activity />, session1: "Valor Esperado E(X)", session2: "Distribución Binomial (GDC)" },
      { id: 4, weekTitle: "Semana 4", mainTopic: "La Distribución Normal", icon: <ClipboardCheck />, session1: "Estandarización (Z-scores)", session2: "Normal Inversa", assessment: "Evaluación Probabilidad" },
      { id: 5, weekTitle: "Semana 5", mainTopic: "Pruebas de Hipótesis I", icon: <Calculator />, session1: "Independencia Chi-Cuadrado", session2: "El Proceso de Prueba (p-val)" },
      { id: 6, weekTitle: "Semana 6", mainTopic: "Pruebas de Hipótesis II", icon: <Calculator />, session1: "Prueba t-Student (t-test)", session2: "Revisión General (Paper 2)", assessment: "Simulacro Paper 2" },
    ]
  }
];

/* =========================================================================
   2. COMPONENTES UI (MODAL Y ROADMAP)
   ========================================================================= */

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto">
      <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl animate-slideUp">
          <button onClick={onClose} className="absolute top-4 right-4 z-20 bg-white/20 hover:bg-white/40 text-slate-800 rounded-full p-2 transition">
            <X className="w-6 h-6" />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

const RoadmapView = ({ course }) => {
  if (!course) return null;

  const borderColor = `border-${course.color}-500`;

  return (
    <div className={`bg-gradient-to-br from-slate-900 to-slate-800 min-h-[600px] p-4 md:p-10 text-white relative overflow-hidden`}>
      {/* Icono de fondo decorativo GIGANTE */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none transform scale-[10] origin-top-right translate-x-10 -translate-y-10">
        {course.icon}
      </div>

      <div className="relative z-10">
        <div className="text-center mb-10 mt-6 md:mt-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-3 text-xs md:text-sm font-medium text-cyan-200">
            <Star className="w-3 h-3 fill-cyan-200" /> Programa Intensivo
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 mb-2">
            {course.title.toUpperCase()}
          </h2>
          <p className="text-slate-300 text-sm md:text-lg">Tu ruta de aprendizaje semana a semana.</p>
        </div>

        <div className="relative max-w-5xl mx-auto pb-10">
          
          {/* LÍNEA DE TIEMPO CENTRAL */}
          <div className="absolute left-5 md:left-1/2 top-4 bottom-0 w-1 md:-ml-0.5 bg-gradient-to-b from-slate-700 via-slate-500 to-slate-700 rounded-full opacity-50"></div>

          {course.roadmap.map((week, index) => {
             const isEven = index % 2 === 0;
             return (
               <div key={week.id} className={`relative flex flex-col md:flex-row items-center md:justify-between w-full mb-10 md:mb-16 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                 
                 <div className="hidden md:block md:w-[45%]"></div>
                 
                 <div className={`absolute left-5 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-900 border-4 border-white/20 z-10 font-bold text-sm shadow-lg`}>
                   {week.id}
                 </div>

                 <div className={`w-full md:w-[45%] pl-14 md:pl-0 z-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                   {/* TARJETA BLANCA */}
                   <div className={`bg-white p-5 rounded-xl shadow-lg border-l-4 ${borderColor} transition duration-300 transform hover:scale-[1.02] relative`}>
                     
                     {/* BADGE DE EVALUACIÓN (Si existe) */}
                     {week.assessment && (
                       <div className="absolute -top-3 -right-3 bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md animate-bounce">
                         <i className="fas fa-pencil-alt mr-1"></i> {week.assessment}
                       </div>
                     )}

                     <div className={`flex items-start justify-between gap-2 mb-2`}>
                       <div>
                          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{week.weekTitle}</span>
                          <h3 className="font-bold text-lg text-slate-900 leading-tight">{week.mainTopic}</h3>
                       </div>
                       {/* Icono pequeño en color del curso */}
                       <div className={`text-${course.color}-600 bg-${course.color}-50 p-2 rounded-lg`}>
                         {/* Clonamos el icono para forzar tamaño pequeño dentro de la tarjeta */}
                         {React.cloneElement(week.icon, { className: "w-5 h-5" })}
                       </div>
                     </div>
                     
                     <div className="space-y-3 mt-3">
                        <div className="flex gap-3 items-start relative pl-2">
                          <div className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                          <div className="flex-1">
                            <span className="text-[10px] bg-cyan-100 text-cyan-700 px-1.5 py-0.5 rounded uppercase font-bold mr-2">S1</span>
                            <span className="text-sm text-slate-600 font-medium">{week.session1}</span>
                          </div>
                        </div>
                        <div className="flex gap-3 items-start relative pl-2">
                          <div className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                          <div className="flex-1">
                            <span className="text-[10px] bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded uppercase font-bold mr-2">S2</span>
                            <span className="text-sm text-slate-600 font-medium">{week.session2}</span>
                          </div>
                        </div>
                     </div>
                   </div>
                 </div>
               </div>
             );
          })}

          <div className="relative flex justify-center mt-12 pl-0 md:pl-0 z-20">
            <div className="group bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold py-3 px-6 md:px-8 rounded-full shadow-[0_0_25px_rgba(236,72,153,0.4)] border border-white/20 transform hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-3">
              <Rocket className="w-5 h-5 group-hover:animate-bounce" />
              <span className="text-sm md:text-base">{course.finalMessage}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   3. SECCIONES PRINCIPALES
   ========================================================================= */

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Mapeo de nombres a IDs sin tildes para navegación suave
  const navItems = [
    { name: 'Inicio', id: 'inicio' },
    { name: 'Metodología', id: 'metodologia' },
    { name: 'Cursos', id: 'cursos' },
    { name: 'Precios', id: 'precios' },
  ];

  return (
    <nav className="bg-slate-900 text-white fixed w-full top-8 z-40 shadow-lg border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <GraduationCap className="text-yellow-500 w-8 h-8 mr-2" strokeWidth={1.5} />
            <span className="font-sans font-black text-xl tracking-tighter">
              IB <span className="text-yellow-500">ACADEMY</span>
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a key={item.name} href={`#${item.id}`} className="hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium transition">
                  {item.name}
                </a>
              ))}
              <a 
                href={getWhatsAppLink("Estoy interesado en el curso de verano")} 
                target="_blank" 
                rel="noreferrer" 
                className="bg-yellow-500 text-slate-900 px-4 py-2 rounded-full text-sm font-bold hover:bg-yellow-400 transition shadow-lg flex items-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4" /> Contactar
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-slate-900 px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <a key={item.name} href={`#${item.id}`} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section id="inicio" className="h-screen flex items-center justify-center relative pt-16 bg-slate-900 overflow-hidden">
    <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Background" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900"></div>
    </div>

    <div className="text-center px-4 max-w-5xl mx-auto relative z-10">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
        <div className="inline-flex items-center bg-black/40 backdrop-blur-md border border-slate-600 rounded-full px-4 py-2 shadow-lg">
          <span className="flex h-3 w-3 relative mr-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
          <span className="text-white text-xs md:text-sm font-bold tracking-wide uppercase">
            Clases Grupales (Máx 8) • Vía Google Meet
          </span>
        </div>
        <div className="inline-flex items-center bg-yellow-500/10 backdrop-blur-md border border-yellow-500 text-yellow-500 px-4 py-2 rounded-full text-xs md:text-sm font-black uppercase tracking-widest animate-pulse">
          <Calendar className="w-4 h-4 mr-2" /> Inicio: 5 de Enero
        </div>
      </div>
      <h1 className="text-4xl md:text-7xl font-sans font-black text-white mb-6 leading-tight drop-shadow-xl">
        ¿Tu meta es un <span className="text-yellow-500">7</span> en el IB?
      </h1>
      <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light max-w-3xl mx-auto">
        Asegura tu Diploma desde casa. Cursos intensivos con <strong>Nivelación y Adelanto</strong> en Física y Matemáticas (Nivel Medio SL).
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href="#precios" className="bg-yellow-500 text-slate-900 font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:bg-yellow-400 hover:scale-105 transition transform flex items-center justify-center gap-2">
          <Zap className="w-5 h-5" /> Ver Oferta Preventa
        </a>
        <a 
          href={getWhatsAppLink("Estoy interesado en el curso de verano")} 
          target="_blank" 
          rel="noreferrer" 
          className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white/10 transition flex items-center justify-center gap-2"
        >
          <WhatsAppIcon className="w-5 h-5" /> Escribir al WhatsApp
        </a>
      </div>
    </div>
  </section>
);

const Methodology = () => (
  <section id="metodologia" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="text-blue-900 font-bold tracking-widest uppercase text-sm">Metodología Flexible</span>
        <h2 className="text-3xl md:text-4xl font-sans font-black text-slate-900 mt-2">Estudia desde donde estés</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg mt-4">Combinamos lo mejor de las clases en vivo con la flexibilidad del material grabado.</p>
      </div>

      {/* METODOLOGÍA ACTUALIZADA: 3 COLUMNAS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-20">
        
        {/* Card 1: Videos */}
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm relative group hover:border-blue-900 transition flex flex-col">
          <div className="absolute -top-6 -left-6 bg-blue-900 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">1</div>
          <h3 className="text-xl font-bold text-slate-900 mb-4 mt-2">Videos de Teoría (Grabados)</h3>
          <p className="text-gray-600 flex-grow">No pierdas tiempo en clase copiando teoría. Tendrás acceso a videos explicativos en HD para verlos <strong>antes</strong> de la sesión o para repasar.</p>
          <div className="mt-6 flex items-center text-blue-900 font-semibold text-sm">
            <PlayCircle className="mr-2 w-5 h-5" /> Acceso 24/7
          </div>
        </div>

        {/* Card 2: Sesiones en Vivo (ACTUALIZADO) */}
        <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl relative group flex flex-col transform md:-translate-y-4 border-4 border-yellow-500">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-slate-900 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg border-4 border-white">2</div>
          <h3 className="text-xl font-bold mb-4 mt-4 text-center">Sesiones en Vivo</h3>
          <p className="text-gray-300 mb-4 text-center flex-grow">
            Clases <strong>grupales exclusivas</strong> (máx. 8 alumnos) de <strong>90 minutos</strong> enfocadas en resolver ejercicios tipo examen.
          </p>
          <div className="bg-white/10 p-3 rounded-lg border border-white/20 text-center">
             <p className="text-xs text-yellow-500 font-bold uppercase mb-1 flex justify-center items-center gap-2">
                <Users className="w-3 h-3" /> Aulas de Máx 8 Alumnos
             </p>
             <p className="text-[10px] text-gray-300">Atención personalizada asegurada.</p>
          </div>
        </div>

        {/* Card 3: Evaluaciones (NUEVO) */}
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm relative group hover:border-red-600 transition flex flex-col">
          <div className="absolute -top-6 -right-6 bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">3</div>
          <h3 className="text-xl font-bold text-slate-900 mb-4 mt-2">Feedback Asincrónico</h3>
          <p className="text-gray-600 flex-grow">Cada 2 semanas recibirás una <strong>evaluación corta</strong> para resolver en casa. Envíala y recibe corrección personalizada por correo.</p>
          <div className="mt-6 flex items-center text-red-600 font-semibold text-sm">
            <FileText className="mr-2 w-5 h-5" /> Revisión Individual
          </div>
        </div>

      </div>
      
      <div className="bg-slate-100 rounded-3xl p-8 md:p-12 border border-slate-200">
        <h3 className="text-center text-2xl font-bold text-slate-900 mb-10">Progresión de Aprendizaje</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md text-center md:text-left">
            <div className="text-green-500 mb-4"><Sprout className="w-10 h-10 mx-auto md:mx-0" /></div>
            <h4 className="font-bold text-lg mb-2">Comprender</h4>
            <p className="text-sm text-gray-600">Ejercicios base para asegurar conceptos.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center md:text-left">
            <div className="text-blue-500 mb-4"><Hammer className="w-10 h-10 mx-auto md:mx-0" /></div>
            <h4 className="font-bold text-lg mb-2">Aplicar</h4>
            <p className="text-sm text-gray-600">Resolución de Paper 1 y conexión de temas.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center md:text-left">
            <div className="text-red-500 mb-4"><Brain className="w-10 h-10 mx-auto md:mx-0" /></div>
            <h4 className="font-bold text-lg mb-2">Analizar</h4>
            <p className="text-sm text-gray-600">Preguntas desafío (Sección B) para asegurar el 7.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Professor = () => (
  <section id="profesor" className="py-16 bg-slate-50 border-y border-slate-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-500 rounded-full transform translate-x-3 translate-y-3"></div>
            
            {/* SECCIÓN FOTO DE PERFIL */}
            <img 
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
              /* PARA USAR TU FOTO:
                 1. Asegúrate de haber descomentado la línea de 'import' arriba.
                 2. Cambia la línea 'src' de arriba por:
                    src={myPhoto} 
              */
              alt="Profesor IB" 
              className="relative rounded-full w-64 h-64 object-cover border-4 border-white shadow-xl" 
            />
            
          </div>
        </div>
        
        <div className="w-full md:w-2/3 text-center md:text-left">
          <span className="text-blue-900 font-bold uppercase text-sm tracking-wider">Director Académico & Lead Tutor</span>
          <h2 className="text-3xl font-black text-slate-900 mb-4 mt-2">Hola, soy [Tu Nombre]</h2>
          <p className="text-lg text-gray-700 mb-4">
            Como fundador de <strong>IB Academy</strong>, he diseñado una metodología específica para que domines Física y Matemáticas sin estrés.
          </p>
          <p className="text-gray-600 mb-6">
            Con años de experiencia en el programa del Diploma, mi objetivo es brindarte no solo clases, sino un <strong>sistema de estudio integral</strong> (clases en vivo + plataforma grabada) que te garantice resultados.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <span className="bg-white border border-slate-300 px-4 py-2 rounded-full text-sm font-semibold text-gray-600 flex items-center gap-2">
              <Presentation className="text-yellow-500 w-4 h-4" /> Metodología Propia
            </span>
            <span className="bg-white border border-slate-300 px-4 py-2 rounded-full text-sm font-semibold text-gray-600 flex items-center gap-2">
              <UserCheck className="text-blue-900 w-4 h-4" /> Tutor Especializado
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CoursesSection = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Safelist for dynamic classes (necesario para que Tailwind no purgue los colores)
  const colors = {
    blue: "border-blue-500 text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 border-blue-200",
    indigo: "border-indigo-500 text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border-indigo-200",
    orange: "border-orange-500 text-orange-600 hover:text-orange-700 bg-orange-50 hover:bg-orange-100 border-orange-200",
    yellow: "border-yellow-500 text-yellow-600 hover:text-yellow-700 bg-yellow-50 hover:bg-yellow-100 border-yellow-200"
  };

  return (
    <section id="cursos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-sans font-black text-center text-slate-900 mb-4">Nuestros Cursos Online</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">Programas de Nivel Medio (SL) con opción de nivelación.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COURSES_DATA.map((course) => (
            <div key={course.id} className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-${course.color}-500 flex flex-col relative transform md:hover:-translate-y-2`}>
              {course.tag && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md">
                  {course.tag}
                </div>
              )}
              <div className="p-6 flex-grow flex flex-col">
                <div className={`text-${course.color}-500 mb-4`}>{course.icon}</div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-1">{course.title}</h3>
                
                {/* ETAPA DE NIVELACIÓN (Nuevo) */}
                {course.highlightText && (
                  <div className="flex items-center gap-1.5 text-green-600 font-bold text-xs mb-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    {course.highlightText}
                  </div>
                )}

                <p className="text-xs font-bold text-gray-400 uppercase mb-3">{course.grade}</p>
                <p className="text-sm text-gray-600 mb-4">{course.description}</p>
                
                <ul className="text-sm space-y-2 text-gray-700 mb-6">
                  {course.features.map((feat, i) => (
                    <li key={i} className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" /> {feat}</li>
                  ))}
                </ul>

                <button 
                  onClick={() => setSelectedCourse(course)}
                  className={`mt-auto w-full flex justify-between items-center font-bold text-${course.color}-600 bg-${course.color}-50 hover:bg-${course.color}-100 py-3 px-4 rounded-lg text-sm transition group border border-${course.color}-200`}
                >
                  <span>Ver Roadmap</span>
                  <ArrowRight className="w-4 h-4 transition transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={!!selectedCourse} onClose={() => setSelectedCourse(null)}>
        <RoadmapView course={selectedCourse} />
      </Modal>
    </section>
  );
};

const Testimonials = () => (
  <section className="py-16 bg-white border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-black text-center text-slate-900 mb-12">Lo que dicen mis estudiantes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { text: "Tenía miedo de entrar a 5to sin base. En la primera semana repasamos lo que me faltaba de mecánica y pude entender los temas nuevos sin problemas.", author: "Camila R., Colegio Abraham Lincoln" },
          { text: "Math AA SL se me hacía difícil, pero aquí me enseñaron trucos para resolver el Paper 1 sin calculadora. Súper recomendado.", author: "Sebastián M." },
          { text: "Poder ver las grabaciones de los temas de 4to antes de la clase en vivo me salvó. Llegaba a la clase lista para participar.", author: "Andrea L." }
        ].map((item, i) => (
          <div key={i} className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-100">
            <div className="text-yellow-500 mb-4 flex gap-1"><Star className="w-4 h-4 fill-yellow-500" /><Star className="w-4 h-4 fill-yellow-500" /><Star className="w-4 h-4 fill-yellow-500" /><Star className="w-4 h-4 fill-yellow-500" /><Star className="w-4 h-4 fill-yellow-500" /></div>
            <p className="text-gray-600 italic mb-4">"{item.text}"</p>
            <div className="font-bold text-slate-900">- {item.author}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="precios" className="py-20 bg-slate-900 text-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <span className="text-yellow-500 font-bold tracking-widest uppercase">Inversión Inteligente</span>
        <h2 className="text-4xl font-sans font-black mt-2">Planes de Verano</h2>
        <p className="text-gray-300 mt-4">Precios de Preventa válidos hasta el 20 de Diciembre.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Plan Individual */}
        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 flex flex-col hover:border-white transition duration-300">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold">1 Curso a Elección</h3>
            <span className="bg-slate-700 text-xs px-2 py-1 rounded">Cualquier Curso</span>
          </div>
          <p className="text-gray-400 text-sm mb-6">Ideal si solo necesitas reforzar una materia específica.</p>
          <div className="flex items-end mb-6">
            <span className="text-4xl font-bold">S/ 750</span>
            <span className="text-gray-400 ml-2 line-through text-lg">S/ 950</span>
          </div>

          {/* OPCIÓN DE RESERVA - NUEVO */}
          <div className="mb-6 bg-slate-700/50 p-3 rounded-lg border border-slate-600">
            <p className="text-sm font-bold text-yellow-400 flex items-center gap-2 mb-1">
                <Wallet className="w-4 h-4" />
                ¡Separa tu vacante con S/ 200!
            </p>
            <p className="text-xs text-slate-300">Y completa el pago hasta la quincena de Enero.</p>
          </div>

          <ul className="space-y-4 mb-8 flex-grow text-sm">
            {/* NUEVA CARACTERÍSTICA - GRUPAL */}
            <li className="flex items-center">
              <Users className="w-4 h-4 text-yellow-500 mr-3" /> 
              <strong>Grupo Reducido (Máx. 8 alumnos)</strong>
            </li>
            <li className="flex items-center">
              <Check className="w-4 h-4 text-yellow-500 mr-3" /> 
              <span><strong>12 Sesiones en Vivo</strong> <span className="text-yellow-500 text-xs">(90 min c/u)</span></span>
            </li>
            <li className="flex items-center"><Check className="w-4 h-4 text-yellow-500 mr-3" /> Grabaciones + Videoteca</li>
            <li className="flex items-center"><Check className="w-4 h-4 text-yellow-500 mr-3" /> Material y Ejercicios</li>
            <li className="flex items-center"><Check className="w-4 h-4 text-yellow-500 mr-3" /> Acceso a Grupo de WhatsApp</li>
            <li className="flex items-center"><Check className="w-4 h-4 text-yellow-500 mr-3" /> <strong>3 Evaluaciones con Feedback</strong></li>
          </ul>
          <a 
            href={getWhatsAppLink("Hola, me gustaria separar mi vacante con S/ 200 para el curso de...")}
            target="_blank" 
            rel="noreferrer" 
            className="block w-full text-center bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white font-bold py-3 rounded-lg transition"
          >
            Seleccionar mi Curso
          </a>
        </div>

        {/* Pack Doble */}
        <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl p-8 border-2 border-yellow-500 relative transform md:scale-105 shadow-2xl flex flex-col">
          <div className="absolute top-0 right-0 bg-yellow-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-bl-lg uppercase">Ahorra S/ 350</div>
          <h3 className="text-2xl font-bold mb-1">Pack Doble / Ingeniería</h3>
          <p className="text-blue-200 text-xs mb-6 font-bold uppercase tracking-wide">Math AA + Física (Recomendado)</p>
          <div className="flex items-end mb-6">
            <span className="text-5xl font-bold">S/ 1,290</span>
            <span className="text-blue-200 ml-2 text-sm">Antes S/ 1,500</span>
          </div>

          {/* OPCIÓN DE RESERVA - NUEVO */}
          <div className="mb-6 bg-indigo-800/50 p-3 rounded-lg border border-indigo-500/50">
            <p className="text-sm font-bold text-yellow-400 flex items-center gap-2 mb-1">
                <Wallet className="w-4 h-4" />
                ¡Separa tu vacante con S/ 200!
            </p>
            <p className="text-xs text-blue-100">Y completa el pago hasta la quincena de Enero.</p>
          </div>

          <ul className="space-y-4 mb-8 flex-grow text-sm">
            <li className="flex items-center"><Star className="w-4 h-4 text-yellow-500 mr-3" /> <strong>Acceso Total a 2 Cursos</strong></li>
            {/* NUEVA CARACTERÍSTICA - GRUPAL */}
            <li className="flex items-center">
              <Users className="w-4 h-4 text-white mr-3" /> 
              <strong>Grupos Reducidos (Máx. 8 alumnos)</strong>
            </li>
            <li className="flex items-center">
              <Check className="w-4 h-4 text-white mr-3" /> 
              <span>24 Sesiones en vivo <span className="text-yellow-300 font-bold">(90 min c/u)</span></span>
            </li>
            <li className="flex items-center"><Check className="w-4 h-4 text-white mr-3" /> Banco de Preguntas Past Papers</li>
            <li className="flex items-center"><Check className="w-4 h-4 text-white mr-3" /> Asesoría Personalizada (1 hr extra)</li>
            <li className="flex items-center"><Check className="w-4 h-4 text-white mr-3" /> <strong>Evaluaciones Quincenales</strong></li>
          </ul>
          <a 
            href={getWhatsAppLink("Hola, quiero separar mi vacante para el Pack Doble con S/ 200")}
            target="_blank" 
            rel="noreferrer" 
            className="block w-full text-center bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold py-3 rounded-lg transition shadow-lg"
          >
            ¡Quiero el Descuento!
          </a>
          <p className="text-center text-xs text-blue-200 mt-3">*¿Deseas otra combinación? Escríbenos.</p>
        </div>
      </div>
    </div>
  </section>
);

// NUEVO COMPONENTE FAQ ITEM para manejar el click en todo el recuadro
const FAQItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`group bg-slate-50 rounded-lg border border-slate-200 cursor-pointer overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white shadow-md' : 'hover:bg-slate-100'}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="p-4">
        <div className="font-bold text-slate-900 flex justify-between items-center select-none">
          {item.q}
          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
        <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'}`}>
           <div className="overflow-hidden">
             <p className="text-gray-600 text-sm">{item.a}</p>
           </div>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => (
  <section className="py-16 bg-white">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-black text-center text-slate-900 mb-8">Preguntas Frecuentes</h2>
      
      <div className="space-y-4">
        {[
          { q: "¿Son clases particulares o grupales?", a: "Son clases grupales exclusivas (máximo 8 estudiantes). Esto garantiza un ambiente participativo, similar a una clase particular, pero con la riqueza de aprender de las dudas de tus compañeros." },
          { q: "¿Qué pasa si no puedo asistir a una clase en vivo?", a: "No te preocupes. Todas las sesiones se graban y se suben a nuestra plataforma privada el mismo día. Podrás verlas las veces que quieras." },
          { q: "¿Cuáles son los métodos de pago?", a: "Aceptamos transferencias bancarias (BCP, Interbank) y billeteras digitales como Yape o Plin. Escríbenos al WhatsApp para enviarte los datos." },
          { q: "¿Puedo separar mi vacante?", a: "¡Sí! Puedes asegurar tu precio de preventa abonando S/ 200 ahora y completando el pago restante hasta la quincena de Enero." },
          { q: "¿Necesito comprar algún libro adicional?", a: "No. Nosotros te brindamos todo el material digital, guías de ejercicios y bancos de preguntas (Past Papers) necesarios para el curso." },
          { q: "¿Cómo funcionan las evaluaciones?", a: "Cada dos semanas te enviaremos una evaluación corta para resolver en casa. Nos la envías escaneada y te la devolvemos corregida con comentarios detallados para que sepas exactamente qué mejorar." }
        ].map((item, i) => (
          <FAQItem key={i} item={item} />
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contacto" className="bg-slate-950 text-gray-400 py-12 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
      <div>
        <h4 className="text-white font-bold text-lg mb-4">Sobre IB Academy</h4>
        <p>Somos una academia digital enfocada exclusivamente en el Bachillerato Internacional. Nuestra misión es potenciar tu rendimiento académico a través de una metodología moderna, flexible y 100% online.</p>
      </div>
      <div>
        <h4 className="text-white font-bold text-lg mb-4">Contacto</h4>
        <ul className="space-y-2">
          <li>
            <a href={getWhatsAppLink("Hola, tengo una consulta")} target="_blank" rel="noreferrer" className="hover:text-white transition flex items-center">
              <WhatsAppIcon className="mr-2 text-green-500 w-5 h-5" /> +51 920 257 909
            </a>
          </li>
          <li className="flex items-center"><ClipboardCheck className="w-4 h-4 mr-2 text-yellow-500" /> info@ibacademy.com</li>
          <li className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-yellow-500" /> Online desde Lima, Perú</li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold text-lg mb-4">Métodos de Pago</h4>
        <div className="flex space-x-4 items-center">
          {/* Logo Yape - URL Estable Wikipedia */}
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Yape_text_app_icon.png/240px-Yape_text_app_icon.png" 
            alt="Yape" 
            className="h-10 w-auto hover:opacity-80 transition cursor-pointer rounded-lg" 
            title="Yape"
          />
          {/* Logo Plin - URL Estable Seeklogo (Coincide con tu archivo PNG) */}
          <img 
            src="https://seeklogo.com/images/P/plin-logo-9D0D8CC0F3-seeklogo.com.png" 
            alt="Plin" 
            className="h-10 w-auto hover:opacity-80 transition cursor-pointer rounded-full" 
            title="Plin"
            onError={(e) => { e.target.style.display = 'none'; }} 
          />
          
          {/* Icono Banco con fondo */}
          <div className="h-10 w-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition cursor-pointer border border-white/10" title="Transferencia BCP/Interbank">
            <Landmark className="text-white w-6 h-6" />
          </div>
        </div>
        <p className="mt-4 text-xs">© 2026 IB Academy. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
);

/* =========================================================================
   4. APP PRINCIPAL
   ========================================================================= */

function App() {
  return (
    <div className="font-sans text-slate-800 bg-slate-50 pt-8">
      {/* Banner Superior */}
      <div className="fixed top-0 left-0 w-full bg-red-600 text-white text-xs md:text-sm font-bold text-center py-2 z-50 shadow-md">
        🔥 ¡ÚLTIMOS DÍAS DE PREVENTA! <br />
        Asegura tu precio especial hasta el 20 de Diciembre.
      </div>

      <Navbar />
      <Hero />
      <Methodology />
      <Professor />
      <CoursesSection />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;