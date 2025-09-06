import React, { useState, useEffect, useRef } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// --- SVG Components ---
const Logo = () => (
  <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 4L4 96H26L50 48.8L74 96H96L50 4Z" fill="url(#aurora-gradient)" />
    <defs>
      <linearGradient id="aurora-gradient" x1="50" y1="4" x2="50" y2="96" gradientUnits="userSpaceOnUse">
        <stop stopColor="var(--color-accent-purple)" />
        <stop offset="1" stopColor="var(--color-accent-red)" />
      </linearGradient>
    </defs>
  </svg>
);
// CORRECTED: GitHub icon with fill="currentColor" to inherit CSS color
const GitHubIcon = () => ( <svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.19.01-.82.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21-.15.46-.55.38A8.013 8.013 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg> );
// CORRECTED: Added 'const' keyword to define the components
const SunIcon = () => ( <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg> );
const MoonIcon = () => ( <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" stroke="currentColor" strokeWidth="0"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg> );

// --- Reusable UI Components ---
const CodeBlock = ({ children, language = 'go' }) => {
  const customTheme = { ...atomDark, 'pre[class*="language-"]': { ...atomDark['pre[class*="language-"]'], backgroundColor: 'transparent', margin: 0 } };
  return ( <SyntaxHighlighter language={language} style={customTheme}>{children.trim()}</SyntaxHighlighter> );
};

// --- Layout Components ---
const Header = ({ theme, setTheme, onMenuClick }) => (
  <header className="header">
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <button className="mobile-menu-button" onClick={onMenuClick}>☰</button>
      <a href="#" className="header-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
        <Logo />
        <span style={{ color: 'var(--color-text-primary)' }}>Aurora</span>
        <span style={{ fontSize: '0.7em', fontWeight: '600', padding: '2px 6px', borderRadius: '6px', backgroundColor: 'var(--color-panel-border)', color: 'var(--color-text-secondary)'}}>
          v0.1
        </span>
      </a>
    </div>
    <div className="header-nav">
      <div className="header-nav-tools">
        <button className="tool-button" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </button>
        <a href="https://github.com/thomas1424/aurora" target="_blank" rel="noopener noreferrer" className="tool-button">
          <GitHubIcon />
        </a>
      </div>
    </div>
  </header>
);

const Sidebar = ({ sections, activeSection, onLinkClick, className = '' }) => (
  <aside className={`sidebar ${className}`}>
    <nav className="sidebar-nav">
      <ul>
        {sections.map(section => (
          section.level === 0
            ? <h3 key={section.id}>{section.title}</h3>
            : <li key={section.id}>
                <a href={`#${section.id}`} onClick={onLinkClick} className={activeSection === section.id ? 'active' : ''}>
                  {section.title}
                </a>
              </li>
        ))}
      </ul>
    </nav>
  </aside>
);

const HeroSection = () => (
  <section className="hero">
    <h1 className="hero-title gradient-text">Simple. Modern. Expressive.</h1>
    <p className="hero-subtitle">A simple scripting language built from scratch in Go, designed for clarity, education, and ease of use.</p>
    <a href="#installation" className="get-started-button">Get Started</a>
  </section>
);

const Footer = () => (
    <footer className="footer">
        <div className="footer-content">
            <div className="footer-branding">
                <div className="footer-logo">
                    <Logo />
                    <span>Aurora</span>
                </div>
                <p className="footer-tagline">
                    A simple, modern scripting language designed for clarity, education, and ease of use.
                </p>
            </div>
            <div className="footer-links">
                <div className="footer-column">
                    <h4>Learn Aurora</h4>
                    <ul>
                        <li><a href="#installation">Installation</a></li>
                        <li><a href="#usage">Usage</a></li>
                        <li><a href="#changelog">Changelog</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Channels</h4>
                    <ul>
                        <li><a href="https://github.com/thomas1424/aurora" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        <li><a href="#discord">Discord</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Community</h4>
                    <ul>
                        <li><a href="#">Code of Conduct</a></li>
                        <li><a href="#">Contributing</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>More</h4>
                    <ul>
                        <li><a href="#">About</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <p className="footer-copyright">Copyright © 2025, Thomas Pan, Documentation Created with React.</p>
    </footer>
);


// --- Documentation Content ---
// CORRECTED: This now includes ALL sections so the sidebar will work.
const sections = [
  { id: 'getting-started', title: 'Getting Started', level: 0 },
  { id: 'installation', title: 'Installation', level: 1 },
  { id: 'usage', title: 'Usage', level: 1 },
  { id: 'language-guide', title: 'Language Guide', level: 0 },
  { id: 'variables', title: 'Variables & Types', level: 1 },
  { id: 'operators', title: 'Operators', level: 1 },
  { id: 'control-flow', title: 'Control Flow', level: 1 },
  { id: 'functions', title: 'Functions & Closures', level: 1 },
  { id: 'implementation-deep-dive', title: 'Implementation Deep Dive', level: 0 },
  { id: 'lexer', title: 'The Lexer', level: 1 },
  { id: 'parser', title: 'The Parser', level: 1 },
  { id: 'evaluator', title: 'The Evaluator', level: 1 },
  { id: 'changelog', title: 'Changelog', level: 0 },
  { id: 'v0-1', title: 'v0.1', level: 1 },
  { id: 'community', title: 'Community', level: 0 },
  { id: 'discord', title: 'Discord', level: 1 },
];

function App() {
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('');
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const observer = useRef(null);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find(entry => entry.isIntersecting)?.target.id;
      if (visibleSection) setActiveSection(visibleSection);
    }, { rootMargin: '-80px 0px -80% 0px' });

    const elements = sections.filter(s => s.level > 0).map(s => document.getElementById(s.id));
    elements.forEach(el => el && observer.current.observe(el));
    return () => observer.current.disconnect();
  }, []);

  const handleLinkClick = () => setSidebarOpen(false);

  return (
    <div className="App">
      <Header theme={theme} setTheme={setTheme} onMenuClick={() => setSidebarOpen(!isSidebarOpen)} />
      <Sidebar sections={sections} activeSection={activeSection} onLinkClick={handleLinkClick} className={isSidebarOpen ? 'open' : ''} />
      
      <main className="main-content">
        <HeroSection />
        <div className="content-container">
            <section id="installation" className="content-section">
                <h2>Installation</h2>
                <p>Getting Aurora running is a simple two-step process. You first need the Go compiler toolchain, and then you build the interpreter from the provided source code.</p>
                <h3>1. Install Go</h3>
                <p>Download and install the Go toolchain from the <a href="https://go.dev/dl/" target="_blank" rel="noopener noreferrer">official Go website</a>. After installation, verify it's working by opening a terminal and running <code>go version</code>. You should see output like <code>go version go1.22.1 linux/amd64</code>.</p>
                <h3>2. Build Aurora</h3>
                <p>With Go installed, place all the Aurora source files into a single project directory. Navigate to that directory in your terminal and run the build command:</p>
                <pre><CodeBlock language="bash">go build -o aurora .</CodeBlock></pre>
            </section>

            <section id="usage" className="content-section">
                <h2>Usage</h2>
                <h3>Interactive REPL</h3>
                <p>The REPL (Read-Eval-Print Loop) is ideal for quick experiments. Run the interpreter without arguments to start it:</p>
                <pre><CodeBlock language="bash">./aurora</CodeBlock></pre>
                <h3>Executing Script Files</h3>
                <p>To run a program, pass the script file (e.g., <code>program.aurora</code>) as an argument:</p>
                <pre><CodeBlock language="bash">./aurora path/to/your/program.aurora</CodeBlock></pre>
            </section>
            
            {/* THIS IS THE NEWLY ADDED CONTENT */}
            <section id="variables" className="content-section">
                <h2>Variables & Data Types</h2>
                <p>Variables are declared using the <code>let</code> keyword. Aurora is <strong>dynamically typed</strong>, which means you do not declare the type of a variable. The type is determined at runtime based on the value assigned to it.</p>
                <pre><CodeBlock language="javascript">{`let language = "Aurora"; // Type is String
let version = 1;        // Type is Integer
let is_awesome = true;    // Type is Boolean`}</CodeBlock></pre>
                <h3>Core Data Types</h3>
                <ul>
                    <li><strong>Integers:</strong> 64-bit signed integers (e.g., <code>10</code>, <code>-500</code>).</li>
                    <li><strong>Booleans:</strong> <code>true</code> or <code>false</code>. Used for logic and control flow.</li>
                    <li><strong>Strings:</strong> UTF-8 text enclosed in double quotes <code>"..."</code>. Supports concatenation with <code>+</code>.</li>
                    <li><strong>Null:</strong> A special type representing the intentional absence of a value. Functions without an explicit <code>return</code> will return <code>null</code>.</li>
                </ul>
            </section>

            <section id="operators" className="content-section">
                <h2>Operators</h2>
                <p>Aurora provides a standard set of operators for performing calculations and comparisons.</p>
                <h3>Arithmetic Operators</h3>
                <pre><CodeBlock language="javascript">{`5 + 2;      // 7
5 - 2;      // 3
5 * 2;      // 10
5 / 2;      // 2 (integer division)`}</CodeBlock></pre>
                <h3>Comparison & Logical Operators</h3>
                <pre><CodeBlock language="javascript">{`10 > 5;     // true
10 == 10;   // true
10 != 5;    // true
!true;      // false`}</CodeBlock></pre>
            </section>

            <section id="control-flow" className="content-section">
                <h2>Control Flow</h2>
                <p>Aurora's primary control flow construct is the <code>if-else</code> expression. A key feature of the language is that <code>if-else</code> is an <strong>expression</strong>, not a statement. This means it evaluates to a value, which can be assigned directly to a variable.</p>
                <pre><CodeBlock language="javascript">{`let temperature = 30;
let weather_report = if (temperature > 25) {
  "It's a hot day!";
} else {
  "It's cool and pleasant.";
};

print(weather_report); // Outputs: "It's a hot day!"`}</CodeBlock></pre>
            </section>

            <section id="functions" className="content-section">
                <h2>Functions & Closures</h2>
                <p>Functions are the fundamental building blocks of Aurora programs. They are <strong>first-class citizens</strong>, meaning they can be treated like any other value: assigned to variables, passed as arguments to other functions, and returned from other functions.</p>
                <h3>Higher-Order Functions</h3>
                <p>Because functions are first-class, you can create higher-order functions—functions that operate on other functions.</p>
                <pre><CodeBlock language="javascript">{`let apply = fn(f, value) {
  return f(value);
};
let double = fn(x) {
  return x * 2;
};
let result = apply(double, 10); // result is 20`}</CodeBlock></pre>
            </section>

            <section id="lexer" className="content-section">
                <h2>The Lexer</h2>
                <p>The first stage of interpretation is **lexical analysis**, performed by the lexer. Its job is to take the raw source code string and convert it into a sequence of discrete **tokens**, like breaking a sentence into words.</p>
            </section>

            <section id="parser" className="content-section">
                <h2>The Parser</h2>
                <p>The parser takes the stream of tokens and transforms it into an **Abstract Syntax Tree (AST)**. The AST represents the grammatical structure of the code, handling things like operator precedence.</p>
            </section>

            <section id="evaluator" className="content-section">
                <h2>The Evaluator</h2>
                <p>The evaluator, or interpreter, is the engine that brings the code to life. It takes the AST and executes it by "walking" the tree and performing the action that each node represents.</p>
            </section>

            <section id="v0-1" className="content-section">
                <h2>v0.1 - Initial Release</h2>
                <p>This is the first public release of the Aurora programming language. The focus of this version is to establish a stable core language with essential features for simple scripting and educational purposes.</p>
            </section>

            <section id="discord" className="content-section">
                <h2>Join the Community</h2>
                <p>The official Aurora Discord server is coming soon! It will be the best place to ask questions, share what you're building, and connect with other developers.</p>
            </section>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;