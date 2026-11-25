'use client';
import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Wand2, Copy, Check, Zap, Globe, Cpu } from 'lucide-react';

const TEMPLATES = [
  { id: 'blog', icon: '✍️', title: 'Blog Idea Generator', prompt: 'Give me 5 viral blog ideas about AI for beginners', tag: 'Content' },
  { id: 'caption', icon: '📸', title: 'Caption Writer', prompt: 'Write 3 Instagram captions for a modern design studio', tag: 'Social' },
  { id: 'brand', icon: '🎨', title: 'Brand Designer', prompt: 'Create a brand identity brief for a modern coffee brand', tag: 'Design' },
  { id: 'code', icon: '💻', title: 'Code Helper', prompt: 'Explain React Server Components like I am 5', tag: 'Code' },
];

export default function Home() {
  const [prompt, setPrompt] = useState(TEMPLATES[0].prompt);
  const [output, setOutput] = useState('Your AI output will appear here.\n\nConnect ANTHROPIC_API_KEY in .env.local + use Vercel AI SDK v5 to go live.');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);
    // Demo mode - replace with: const { text } = await generateText({ model: anthropic('claude-sonnet-4-5'), prompt })
    await new Promise(r => setTimeout(r, 900));
    setOutput(`✨ Generated for: "${prompt}"\n\n1. Start simple, ship fast — MVP first\n2. Make it open & reusable — components > pages\n3. Learn in public — document everything`);
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#0a0a0b] text-white">
      <header className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <div className="font-bold text-lg tracking-tight">✨ Creative-AI</div>
        <div className="flex gap-2 text-sm"><span className="px-3 py-1.5 rounded-full bg-white/10">v0.1 • Open Source</span><a href="https://github.com/Hassan-Ullah/Creative-AI" className="px-3 py-1.5 rounded-full bg-white text-black font-semibold">GitHub →</a></div>
      </header>

      <section className="max-w-6xl mx-auto px-6 pt-14 pb-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/15 border border-violet-500/30 text-violet-300 text-xs"><Zap size={14}/> Next.js 15 • React 19 • AI SDK v5 • Tailwind v4</motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-bold tracking-tighter mt-6 leading-[1.05]">Turn ideas into<br /><span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-orange-300 bg-clip-text text-transparent">creative outputs</span><br />with AI.</motion.h1>
        <p className="text-zinc-400 max-w-xl mx-auto mt-5">Open-source AI creativity playground. Built with the latest 2026 stack — Server Components, streaming, and modern DX.</p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          {TEMPLATES.map(t => (
            <button key={t.id} onClick={() => setPrompt(t.prompt)} className={`p-4 rounded-2xl border text-left transition ${prompt===t.prompt ? 'bg-white text-black border-white' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}>
              <div className="text-2xl">{t.icon}</div><div className="font-semibold text-sm mt-2">{t.title}</div><div className="text-xs opacity-60">{t.tag}</div>
            </button>
          ))}
        </div>
        <textarea value={prompt} onChange={e=>setPrompt(e.target.value)} rows={3} className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-[15px] outline-none focus:border-violet-500" />
        <div className="flex gap-3 mt-3">
          <button onClick={generate} disabled={loading} className="flex-1 bg-violet-600 hover:bg-violet-500 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2">{loading ? 'Generating...' : <><Wand2 size={18}/> Generate with AI</>}</button>
          <button onClick={()=>{navigator.clipboard.writeText(output); setCopied(true); setTimeout(()=>setCopied(false),1500)}} className="px-4 rounded-xl bg-white/10 border border-white/10 flex items-center gap-2">{copied ? <Check size={18}/> : <Copy size={18}/>} {copied ? 'Copied!' : 'Copy'}</button>
        </div>
        <div className="mt-4 bg-zinc-900/80 border border-white/10 rounded-2xl p-5 whitespace-pre-wrap text-sm leading-relaxed text-zinc-200">{output}</div>
        <div className="grid grid-cols-3 gap-3 mt-6 text-center">
          <div className="bg-white/5 rounded-2xl p-4"><Cpu className="mx-auto mb-1"/><p className="text-xs text-zinc-400">AI SDK v5 + Claude Sonnet 4.5</p></div>
          <div className="bg-white/5 rounded-2xl p-4"><Sparkles className="mx-auto mb-1"/><p className="text-xs text-zinc-400">Turbopack • 10x Faster Dev</p></div>
          <div className="bg-white/5 rounded-2xl p-4"><Globe className="mx-auto mb-1"/><p className="text-xs text-zinc-400">Deploy on Vercel Edge</p></div>
        </div>
        <p className="text-center text-zinc-500 text-xs mt-8">MIT Licensed • Built by Muhammad Hassan Ullah • Next.js 15 • React 19 • TypeScript • Tailwind v4 • shadcn/ui • Zustand • Zod • Biome</p>
      </section>
    </main>
  );
}
