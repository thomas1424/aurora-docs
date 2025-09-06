import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom'; // Import router components
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaGithub } from "react-icons/fa";

// --- SVG Components ---
const Logo = () => ( <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 4L4 96H26L50 48.8L74 96H96L50 4Z" fill="url(#aurora-gradient)" /><defs><linearGradient id="aurora-gradient" x1="50" y1="4" x2="50" y2="96" gradientUnits="userSpaceOnUse"><stop stopColor="var(--color-accent-purple)" /><stop offset="1" stopColor="var(--color-accent-red)" /></linearGradient></defs></svg> );
const SunIcon = () => ( <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg> );
const MoonIcon = () => ( <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg> );

// --- Reusable CodeBlock (Exported for pages) ---
export const CodeBlock = ({ children, language = 'go' }) => {
  const customTheme = { ...atomDark, 'pre[class*="language-"]': { ...atomDark['pre[class*="language-"]'], backgroundColor: 'transparent', margin: 0 } };
  return ( <SyntaxHighlighter language={language} style={customTheme}>{children.trim()}</SyntaxHighlighter> );
};

// --- HeroSection (Exported for Intro page) ---
export const HeroSection = () => (
  <section className="hero">
    <h1 className="hero-title gradient-text">Simple. Modern. Expressive.</h1>
    <p className="hero-subtitle">A simple scripting language built from scratch in Go, designed for clarity, education, and ease of use.</p>
    <NavLink to="/docs/installation" className="get-started-button">Get Started</NavLink>
  </section>
);

// --- Layout Components ---
const Header = ({ theme, setTheme, onMenuClick }) => (
  <header className="header">
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <button className="mobile-menu-button" onClick={onMenuClick}>☰</button>
      <NavLink to="/" className="header-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
        <Logo />
        <span style={{ color: 'var(--color-text-primary)' }}>Aurora</span>
        <span style={{ fontSize: '0.7em', fontWeight: '600', padding: '2px 6px', borderRadius: '6px', backgroundColor: 'var(--color-panel-border)', color: 'var(--color-text-secondary)'}}>
          v0.1
        </span>
      </NavLink>
    </div>
    <div className="header-nav">
      <div className="header-nav-tools">
        <button className="tool-button" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </button>
        <a href="https://github.com/thomas1424/aurora" target="_blank" rel="noopener noreferrer" className="tool-button">
          <FaGithub size={18} />
        </a>
      </div>
    </div>
  </header>
);

const Sidebar = ({ sections, onLinkClick, className = '' }) => (
  <aside className={`sidebar ${className}`}>
    <nav className="sidebar-nav">
      <ul>
        {sections.map(section => (
          section.level === 0
            ? <h3 key={section.path}>{section.title}</h3>
            : <li key={section.path}>
                <NavLink to={section.path} onClick={onLinkClick}>
                  {section.title}
                </NavLink>
              </li>
        ))}
      </ul>
    </nav>
  </aside>
);

const Footer = () => ( /* ... same as before ... */ );

// --- Main App Shell ---
function App() {
  const [theme, setTheme] = useState('dark');
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  
  // Close sidebar on page navigation for mobile
  useEffect(() => {
    setSidebarOpen(false);
  }, [location]);

  const sections = [
    { title: 'Getting Started', path: 'getting-started', level: 0 },
    { title: 'Installation', path: '/docs/installation', level: 1 },
    { title: 'Usage', path: '/docs/usage', level: 1 },
    { title: 'Language Guide', path: 'language-guide', level: 0 },
    { title: 'Variables & Types', path: '/docs/variables', level: 1 },
    { title: 'Operators', path: '/docs/operators', level: 1 },
    { title: 'Control Flow', path: '/docs/control-flow', level: 1 },
    { title: 'Functions & Closures', path: '/docs/functions', level: 1 },
    { title: 'Implementation Deep Dive', path: 'implementation-deep-dive', level: 0 },
    { title: 'The Lexer', path: '/docs/lexer', level: 1 },
    { title: 'The Parser', path: '/docs/parser', level: 1 },
    { title: 'The Evaluator', path: '/docs/evaluator', level: 1 },
    { title: 'Changelog', path: '/docs/changelog', level: 0 },
    { title: 'Community', path: 'community', level: 0 },
    { title: 'Discord', path: '/docs/discord', level: 1 },
  ];

  return (
    <div className="App">
      <Header theme={theme} setTheme={setTheme} onMenuClick={() => setSidebarOpen(!isSidebarOpen)} />
      <Sidebar sections={sections} onLinkClick={() => setSidebarOpen(false)} className={isSidebarOpen ? 'open' : ''} />
      
      <div className="main-content-area">
        <Outlet /> {/* This is where the magic happens - the current page's content is rendered here */}
        <Footer />
      </div>
    </div>
  );
}

export default App;