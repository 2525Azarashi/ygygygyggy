import { motion } from "motion/react";
import { LayoutDashboard, BarChart3, TrendingUp, Info } from "lucide-react";

export default function App() {
  const graphs = [
    { id: "graph1", title: "主要データ分析 (graph.jpg)", src: "/graph.jpg", description: "期間別の推移と主要な指標の相関を示しています。" },
    { id: "graph2", title: "トレンド予測 (graph2.jpg)", src: "/graph2.jpg", description: "将来の予測値と現状の乖離を可視化しています。" },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-zinc-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="w-6 h-6 text-emerald-600" />
            <h1 className="text-xl font-semibold tracking-tight">Graph Viewer</h1>
          </div>
          <div className="flex items-center gap-4 text-sm text-zinc-500">
            <span>2026-03-08</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-2">データダッシュボード</h2>
          <p className="text-zinc-500 max-w-2xl">
            アップロードされたグラフ画像を一覧で確認できます。各画像は自動的に最適化され、
            レスポンシブなグリッドレイアウトで表示されます。
          </p>
        </motion.div>

        {/* Stats Summary (Optional flair) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { label: "総分析数", value: "24", icon: BarChart3, color: "text-blue-600" },
            { label: "成長率", value: "+12.5%", icon: TrendingUp, color: "text-emerald-600" },
            { label: "ステータス", value: "正常", icon: Info, color: "text-amber-600" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm flex items-center gap-4"
            >
              <div className={`p-3 rounded-xl bg-zinc-50 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-zinc-500">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Graphs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {graphs.map((graph, i) => (
            <motion.div
              key={graph.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden group"
            >
              <div className="p-6 border-b border-zinc-100 flex items-center justify-between">
                <h3 className="font-semibold text-lg">{graph.title}</h3>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">JPG Asset</span>
              </div>
              <div className="aspect-video bg-zinc-100 relative overflow-hidden">
                <img
                  src={graph.src}
                  alt={graph.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback if image doesn't exist yet
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${graph.id}/800/450?grayscale`;
                  }}
                />
              </div>
              <div className="p-6">
                <p className="text-zinc-600 text-sm leading-relaxed">
                  {graph.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-zinc-200 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-400">
          <p>© 2026 Graph Viewer Application</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-600 transition-colors">利用規約</a>
            <a href="#" className="hover:text-zinc-600 transition-colors">プライバシーポリシー</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
