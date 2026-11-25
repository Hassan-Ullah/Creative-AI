'use client';
import { useState } from 'react';

const TEMPLATES = [
  { id: 1, title: 'Blog Idea Generator', prompt: 'Give me 5 blog ideas about AI for beginners' },
  { id: 2, title: 'Caption Writer', prompt: 'Write 3 Instagram captions for a design studio' },
  { id: 3, title: 'Design Prompt Helper', prompt: 'Create a design brief for a modern coffee brand' },
];

export default function Home() {
  const [prompt, setPrompt] = useState(TEMPLATES[0].prompt);
  const [output, setOutput] = useState('Your AI output will appear here. Connect your API key in .env.local to make it live.');

  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>
      <p style={{ color: '#7c3aed', fontWeight: 700 }}>✨ Creative-AI • Open Source</p>
      <h1 style={{ fontSize: 44, lineHeight: 1.1 }}>Turn ideas into<br />creative outputs with AI.</h1>
      <p style={{ color: '#64748b', maxWidth: 600 }}>Open-source AI-assisted creativity for developers, students & creators. Pick a template, edit the prompt, and generate.</p>

      <div style={{ display: 'flex', gap: 10, margin: '20px 0', flexWrap: 'wrap' }}>
        {TEMPLATES.map((t) => (
          <button key={t.id} onClick={() => setPrompt(t.prompt)} style={{ padding: '8px 14px', borderRadius: 999, border: '1px solid #e2e8f0', background: prompt === t.prompt ? '#111' : '#fff', color: prompt === t.prompt ? '#fff' : '#111', cursor: 'pointer' }}>{t.title}</button>
        ))}
      </div>

      <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} rows={4} style={{ width: '100%', padding: 14, borderRadius: 12, border: '1px solid #e2e8f0', fontSize: 15 }} />
      <button onClick={() => setOutput(`Demo output for: "${prompt}"\n\n1. Idea 1 — Start simple, ship fast\n2. Idea 2 — Make it open & reusable\n3. Idea 3 — Learn in public`)} style={{ marginTop: 12, padding: '12px 20px', borderRadius: 10, background: '#7c3aed', color: '#fff', border: 'none', fontWeight: 700, cursor: 'pointer' }}>Generate →</button>

      <div style={{ marginTop: 20, background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12, padding: 16, whiteSpace: 'pre-wrap' }}>{output}</div>
      <p style={{ color: '#94a3b8', fontSize: 13, marginTop: 16 }}>Built by Muhammad Hassan Ullah • MIT Licensed • <a href="https://github.com/Hassan-Ullah/Creative-AI">Contribute on GitHub</a></p>
    </main>
  );
}
