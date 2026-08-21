import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles, Copy, Check } from 'lucide-react';
import { personalInfo, techStack, projects } from '../data/portfolio';
import { triggerConfetti } from '../utils/helpers';

export const DeveloperTerminal = () => {
  const [history, setHistory] = useState([
    { type: 'system', text: "Welcome to Pratik's Interactive Dev Console v2.5.0" },
    { type: 'system', text: "Type 'help' or click quick commands below to explore." },
  ]);
  const [input, setInput] = useState('');
  const [copied, setCopied] = useState(false);
  const terminalContainerRef = useRef(null);
  const inputRef = useRef(null);
  const isInitialMount = useRef(true);

  const availableCommands = [
    { cmd: 'help', desc: 'List all commands' },
    { cmd: 'skills', desc: 'View core technical competencies' },
    { cmd: 'projects', desc: 'List featured repositories' },
    { cmd: 'experience', desc: 'View training & work background' },
    { cmd: 'contact', desc: 'Get direct reachout details' },
    { cmd: 'sudo hire', desc: 'Recruitment easter egg 🎉' },
    { cmd: 'clear', desc: 'Clear terminal screen' },
  ];

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    // Only scroll the terminal's internal container, never the window
    if (terminalContainerRef.current) {
      terminalContainerRef.current.scrollTop = terminalContainerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (rawCmd) => {
    const trimmed = rawCmd.trim().toLowerCase();
    if (!trimmed) return;

    const newHistory = [...history, { type: 'user', text: rawCmd }];

    switch (trimmed) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: availableCommands.map((c) => `  • ${c.cmd.padEnd(12)} - ${c.desc}`).join('\n'),
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: `[Frontend]: React.js, Redux Toolkit, JavaScript (ES6+), Tailwind CSS, Vite, Axios\n[Backend]:  Node.js, Express.js, REST APIs, JWT Auth, Custom Middleware\n[Database]: MongoDB, Mongoose, MySQL\n[Tools]:    Git, GitHub, VS Code, Postman, npm`,
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: projects.map((p, i) => `${i + 1}. ${p.title}\n   Stack: ${p.technologies.slice(0, 4).join(', ')}\n   URL: ${p.liveDemoUrl}`).join('\n\n'),
        });
        break;

      case 'experience':
        newHistory.push({
          type: 'output',
          text: `Role: MERN Stack Trainer & Mentor\nCompany: Know-IT C-DAC ACTS, Pune\nFocus: React, Node, Express, MongoDB & 150+ Mentored Engineers`,
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `Email:    ${personalInfo.email}\nLinkedIn: ${personalInfo.socials.linkedin}\nGitHub:   ${personalInfo.socials.github}\nStatus:   ${personalInfo.status}`,
        });
        break;

      case 'sudo hire':
      case 'sudo hire-pratik':
      case 'hire':
        triggerConfetti();
        newHistory.push({
          type: 'success',
          text: `🚀 [ACCESS GRANTED]: Pratik Kamble is currently ready for high-impact MERN / React developer roles!\nEmail sent directly to: ${personalInfo.email}\nLet's build something phenomenal together.`,
        });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'whoami':
        newHistory.push({
          type: 'output',
          text: `guest@pratik-portfolio-terminal (Recruiter / Developer Mode)`,
        });
        break;

      default:
        newHistory.push({
          type: 'error',
          text: `command not found: "${trimmed}". Type 'help' to see valid commands.`,
        });
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden font-mono text-sm">
      {/* Title Bar */}
      <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900/90 border-b border-slate-800 text-slate-400">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs font-semibold text-slate-300 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-indigo-400" />
            pratik@mern-dev: ~
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={copyEmail}
            className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? 'Copied' : 'Copy Email'}</span>
          </button>
        </div>
      </div>

      {/* Terminal Screen */}
      <div
        ref={terminalContainerRef}
        className="p-5 h-72 sm:h-80 overflow-y-auto space-y-3 bg-[#080c14] text-slate-300 selection:bg-indigo-500 selection:text-white"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((item, idx) => (
          <div key={idx} className="leading-relaxed">
            {item.type === 'user' && (
              <div className="flex items-center gap-2 text-cyan-400">
                <span className="text-indigo-400 font-bold">pratik@dev:~$</span>
                <span>{item.text}</span>
              </div>
            )}

            {item.type === 'system' && (
              <div className="text-slate-400 italic text-xs">
                # {item.text}
              </div>
            )}

            {item.type === 'output' && (
              <pre className="text-slate-300 font-mono text-xs sm:text-sm whitespace-pre-wrap pl-2 border-l-2 border-slate-700/50 py-1">
                {item.text}
              </pre>
            )}

            {item.type === 'success' && (
              <pre className="text-emerald-400 font-mono text-xs sm:text-sm whitespace-pre-wrap pl-2 border-l-2 border-emerald-500 py-1 bg-emerald-950/20 rounded-r-lg">
                {item.text}
              </pre>
            )}

            {item.type === 'error' && (
              <div className="text-rose-400 text-xs pl-2 border-l-2 border-rose-500">
                {item.text}
              </div>
            )}
          </div>
        ))}

        {/* Live prompt */}
        <div className="flex items-center gap-2 text-cyan-400 pt-1">
          <span className="text-indigo-400 font-bold">pratik@dev:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-white focus:outline-none font-mono text-sm caret-indigo-400"
            placeholder="Type 'help' or a command..."
            autoComplete="off"
            spellCheck="false"
          />
        </div>
      </div>

      {/* Quick click command chips */}
      <div className="p-3 bg-slate-900/60 border-t border-slate-800/80 flex flex-wrap items-center gap-2 text-xs">
        <span className="text-slate-500 font-mono text-[11px] mr-1">Quick Run:</span>
        {availableCommands.slice(0, 5).map((item, idx) => (
          <button
            key={idx}
            onClick={() => handleCommand(item.cmd)}
            className="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-indigo-600/80 text-slate-300 hover:text-white border border-slate-700 transition-all active:scale-95"
          >
            {item.cmd}
          </button>
        ))}
        <button
          onClick={() => handleCommand('sudo hire')}
          className="px-2.5 py-1 rounded-lg bg-indigo-500/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/40 transition-all font-bold flex items-center gap-1 active:scale-95"
        >
          <Sparkles className="w-3 h-3 text-amber-400" />
          sudo hire
        </button>
      </div>
    </div>
  );
};
