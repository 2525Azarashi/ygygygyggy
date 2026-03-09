import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Maximize2, Download, Share2, BarChart3, TrendingUp, ArrowDown, Info } from "lucide-react";

function ImageSection({ graph }: any) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Parallax Image */}
      <div className="absolute inset-0 z-0">
        <motion.div style={{ y }} className="relative w-full h-[130%]">
          <img
            src={graph.src}
            alt={graph.title}
            className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-1000"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${graph.id}/1920/1080?grayscale`;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950" />
        </motion.div>
      </div>

      {/* Content Overlay */}
      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 max-w-5xl w-full px-6 flex flex-col lg:flex-row gap-12 items-center"
      >
        <div className="w-full lg:w-2/3 shadow-2xl shadow-emerald-500/10 rounded-3xl overflow-hidden border border-white/10 group">
          <div className="relative aspect-[16/9]">
            <img
              src={graph.src}
              alt={graph.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${graph.id}/1200/675`;
              }}
            />
            <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500" />
          </div>
        </div>

        <div className="w-full lg:w-1/3 space-y-6 text-center lg:text-left">
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-emerald-500 font-mono text-xs tracking-[0.3em] uppercase mb-4">{graph.subtitle}</p>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-6 uppercase italic">
              {graph.title.split(' ').map((word: string, i: number) => (
                <span key={i} className={i === 0 ? "text-white" : "text-emerald-500"}>
                  {word}{' '}
                </span>
              ))}
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              {graph.description}
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="flex items-center gap-2 px-6 py-3 bg-white text-zinc-950 font-bold rounded-full hover:bg-emerald-500 transition-all active:scale-95">
                <Maximize2 className="w-4 h-4" />
                <span>EXPAND</span>
              </button>
              <button className="p-3 border border-white/20 rounded-full hover:bg-white/10 transition-all">
                <Download className="w-5 h-5" />
              </button>
              <button className="p-3 border border-white/20 rounded-full hover:bg-white/10 transition-all">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default function App() {
  const graphs = [
    { 
      id: "graph1", 
      title: "CORE ANALYSIS", 
      subtitle: "Strategic Insight 01",
      src: "/graph.jpg", 
      description: "データの深層に潜むパターンを抽出し、ビジネスの意思決定を加速させるための核心的な分析結果です。" 
    },
    { 
      id: "graph2", 
      title: "FUTURE TRENDS", 
      subtitle: "Strategic Insight 02",
      src: "/graph2.jpg", 
      description: "市場の動向を予測し、次なる一手を見極めるためのトレンド予測。未来を形作るための羅針盤となります。" 
    },
  ];

  return (
    <div className="relative bg-zinc-950 text-zinc-100 font-sans selection:bg-emerald-500/30">
      {/* Fixed Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="max-w-screen-2xl mx-auto px-8 h-24 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BarChart3 className="w-6 h-6 text-white" />
            <span className="text-2xl font-black tracking-tighter uppercase italic">VISUAL.DATA</span>
          </div>
          <div className="flex items-center gap-12 text-[10px] font-bold uppercase tracking-[0.4em]">
            <span className="text-zinc-500">2026 EDITION</span>
            <button className="px-6 py-2 border border-white/30 rounded-full hover:bg-white hover:text-black transition-all">
              MENU
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Intro */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-zinc-950/60 z-10" />
          <img 
            src="/graph.jpg" 
            className="w-full h-full object-cover blur-sm opacity-30" 
            onError={(e) => (e.target as HTMLImageElement).src = "https://picsum.photos/seed/hero/1920/1080?blur=10"}
          />
        </motion.div>

        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-emerald-500 font-mono text-sm tracking-[0.5em] uppercase mb-8"
          >
            Digital Exhibition
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-7xl md:text-[12rem] font-black tracking-tighter leading-none uppercase mb-12"
          >
            THE <br /> <span className="text-emerald-500">VISION</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex flex-col items-center gap-4"
          >
            <p className="text-zinc-400 max-w-md text-sm uppercase tracking-widest leading-loose">
              Scroll to explore the intersection of <br /> raw data and visual aesthetics.
            </p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mt-12"
            >
              <ArrowDown className="w-6 h-6 text-emerald-500" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Image Sections */}
      {graphs.map((graph, i) => (
        <ImageSection key={graph.id} graph={graph} index={i} />
      ))}

      {/* Stats Summary - Minimalist Footer Style */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-24">
          <div>
            <h4 className="text-emerald-500 font-mono text-xs tracking-widest uppercase mb-8">The Mission</h4>
            <p className="text-zinc-400 leading-relaxed">
              私たちは、単なる数字の羅列を、誰もが直感的に理解できる「視覚的な物語」へと変換します。
              データは、正しく提示されたとき、それ自体が芸術となります。
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex items-end gap-4">
              <span className="text-6xl font-black tracking-tighter">24</span>
              <span className="text-zinc-500 uppercase text-xs tracking-widest mb-2">Projects Analyzed</span>
            </div>
            <div className="flex items-end gap-4">
              <span className="text-6xl font-black tracking-tighter text-emerald-500">12.5%</span>
              <span className="text-zinc-500 uppercase text-xs tracking-widest mb-2">Efficiency Growth</span>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-emerald-500 font-mono text-xs tracking-widest uppercase mb-8">Contact</h4>
            <p className="text-zinc-100 font-bold text-xl tracking-tight">hello@visual-insight.data</p>
            <div className="flex gap-6 pt-4">
              <TrendingUp className="w-5 h-5 text-zinc-500" />
              <Info className="w-5 h-5 text-zinc-500" />
              <Share2 className="w-5 h-5 text-zinc-500" />
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-8 border-t border-white/5 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-600">
          © 2026 VISUAL DATA EXHIBITION / ALL RIGHTS RESERVED
        </p>
      </footer>
    </div>
  );
}
