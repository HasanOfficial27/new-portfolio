import Home2 from "./components/Extra";
import Home from "./pages/Home";
import Extra2 from "./pages/Extra2";

// f;ldj

export default function App() {
  return (
    <div className="bg-slate-900 text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      {/* Global Custom Styles */}
      <style>{`
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #0f172a; }
        ::-webkit-scrollbar-thumb { background: #334155; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #475569; }
        
        .typing-cursor::after {
          content: '|';
          animation: blink 1s step-start infinite;
        }
        @keyframes blink { 50% { opacity: 0; } }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Render Components */}
      <Home2 />
      {/* <Home /> */}
      {/* <Extra2 /> */}
    </div>
  );
}
