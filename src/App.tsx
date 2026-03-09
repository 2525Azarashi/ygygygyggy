import { motion } from "motion/react";
import { Maximize2, Download, Share2, BarChart3, TrendingUp, Info } from "lucide-react";

export default function App() {
  const graphs = [
    { 
      id: "graph1", 
      title: "主要データ分析", 
      subtitle: "Primary Data Analysis",
      src: "/graph.jpg", 
      description: "期間別の推移と主要な指標の相関を示しています。データの連続性と特異点を明確に可視化しました。" 
    },
    { 
      id: "graph2", 
      title: "トレンド予測", 
      subtitle: "Trend Forecasting",
      src: "/graph2.jpg", 
      description: "将来の予測値と現状の乖離を可視化しています。機械学習モデルに基づいた高精度な予測結果です。" 
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-emerald-500/30">
      {/* Immersive Background Gradient */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[25%] -left-[10%] w-[70%] h-[70%] bg-emerald-900/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[25%] -right-[10%] w-[70%] h-[70%] bg-blue-900/10 blur-[120px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 border-b border-white/5 bg-zinc-950/50 backdrop-blur-md sticky top-0">
        <div className="max-w-screen-2xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <BarChart3 className="w-5 h-5 text-zinc-950" />
            </div>
            <span className="text-xl font-bold tracking-tight uppercase italic">Visual Insight</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Archive</a>
            <a href="#" className="hover:text-white transition-colors">Reports</a>
            <a href="#" className="hover:text-white transition-colors">Settings</a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-screen-2xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <header className="mb-24 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 uppercase leading-none">
              Data <span className="text-emerald-500">Exhibition</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-3xl leading-relaxed">
              複雑な数値を視覚的な芸術へと昇華。
              最新の分析結果を、最も美しい形でここに提示します。
            </p>
          </motion.div>
        </header>

        {/* Stats Grid - Minimalist */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {[
            { label: "Total Analysis", value: "24", icon: BarChart3 },
            { label: "Growth Rate", value: "+12.5%", icon: TrendingUp },
            { label: "System Status", value: "Optimal", icon: Info },
            { label: "Last Update", value: "Today", icon: Maximize2 },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm"
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-2">{stat.label}</p>
              <p className="text-2xl font-bold tracking-tight">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Gallery Section - Emphasized Photos */}
        <section className="space-y-32">
          {graphs.map((graph, i) => (
            <motion.div
              key={graph.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Image Container - The Focus */}
              <div className="w-full lg:w-3/5 group relative">
                <div className="absolute -inset-4 bg-emerald-500/10 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative aspect-[16/10] bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src={graph.src}
                    alt={graph.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${graph.id}/1200/750?grayscale`;
                    }}
                  />
                  {/* Overlay Controls */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <div className="flex gap-4">
                      <button className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all">
                        <Maximize2 className="w-5 h-5" />
                      </button>
                      <button className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all">
                        <Download className="w-5 h-5" />
                      </button>
                      <button className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full lg:w-2/5 space-y-6">
                <div>
                  <p className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-2">{graph.subtitle}</p>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">{graph.title}</h2>
                </div>
                <div className="h-px w-24 bg-emerald-500/50" />
                <p className="text-zinc-400 text-lg leading-relaxed">
                  {graph.description}
                </p>
                <div className="pt-4">
                  <button className="px-8 py-4 bg-white text-zinc-950 font-bold rounded-full hover:bg-emerald-500 transition-colors duration-300 uppercase tracking-widest text-xs">
                    View Full Report
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 bg-zinc-950 py-20 mt-32">
        <div className="max-w-screen-2xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
              <div className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-zinc-950" />
              </div>
              <span className="text-lg font-bold uppercase italic tracking-tight">Visual Insight</span>
            </div>
            <p className="text-zinc-500 text-sm max-w-xs">
              データと美学の融合。次世代のインサイトプラットフォーム。
            </p>
          </div>
          <div className="flex gap-12 text-xs font-mono uppercase tracking-widest text-zinc-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
