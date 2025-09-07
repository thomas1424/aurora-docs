import React, { useState, useEffect, useRef } from 'react'; // CORRECTED: Added useState, useEffect, useRef
import { NavLink } from 'react-router-dom';
// We also import CodeBlock and HeroSection from our main App component
import { CodeBlock } from '../App';


// --- NEW SVG Icon for the scroll arrow ---
const ChevronDownIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
);

// --- UPDATED HeroSection with scroll arrow ---
const HeroSection = () => (
  <section className="hero">
    <h1 className="hero-title gradient-text">Simple. Modern. Expressive.</h1>
    <p className="hero-subtitle">A simple scripting language built from scratch in Go, designed for clarity, education, and ease of use.</p>
    <NavLink to="/docs/installation" className="get-started-button">Get Started</NavLink>
    <div className="scroll-down-indicator">
        <ChevronDownIcon />
    </div>
  </section>
);

// --- UPDATED FeatureShowcase to handle scroll animations ---
const FeatureShowcase = ({ title, description, code }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(ref.current);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className={`feature-showcase ${isVisible ? 'visible' : ''}`} style={{ margin: '80px 0' }}>
            <h2>{title}</h2>
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '32px',
                alignItems: 'center'
            }}>
                <p style={{ lineHeight: 1.8 }}>{description}</p>
                <pre><CodeBlock language="javascript">{code}</CodeBlock></pre>
            </div>
        </div>
    );
};


const Intro = () => (
  <>
    <HeroSection />
    <div className="content-container">
      <div className="content-section">
        
        <FeatureShowcase
          title="Intuitive and Readable"
          description="Aurora uses a familiar C-family syntax that is clean and easy to read. With dynamic typing and a focus on simplicity, you can express your ideas with less boilerplate, making it perfect for both beginners and experienced scripters."
          code={`// Variables are simple
let name = "Aurora";

// Functions are first-class citizens
let greet = fn(n) {
  return "Hello, " + n + "!";
};

print(greet(name));`}
        />

        <FeatureShowcase
          title="Expression-Oriented by Design"
          description="In Aurora, most constructs are expressions that return a value. This allows for a more functional and declarative style of programming. Assign the result of an if/else block directly to a variable for more concise and elegant code."
          code={`let age = 20;

let status = if (age >= 18) {
  "Adult";
} else {
  "Minor";
};

// 'status' is now "Adult"
print(status);`}
        />

        <FeatureShowcase
          title="Powerful Closures"
          description="Functions in Aurora support closures, capturing the environment where they were created. This enables powerful patterns like private state and function factories, bringing a level of sophistication typically found in much larger languages."
          code={`let createGreeter = fn(greeting) {
  return fn(name) {
    // Captures 'greeting'
    return greeting + ", " + name;
  };
};

let helloGreeter = createGreeter("Hello");
print(helloGreeter("World"));
// Outputs: Hello, World`}
        />

        <div style={{ textAlign: 'center', marginTop: '80px' }}>
          <h2>Ready to get started?</h2>
          <p>Dive into the installation guide and start writing your first Aurora script in minutes.</p>
          <NavLink to="/docs/installation" className="get-started-button" style={{marginTop: '24px'}}>
            Go to Installation
          </NavLink>
        </div>

      </div>
    </div>
  </>
);

export default Intro;