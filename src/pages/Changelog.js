import React from 'react';

const Changelog = () => (
    <section id="changelog" className="content-section">
        <h2>Changelog</h2>
        <h3>v0.1 - Initial Release</h3>
        <p>This is the first public release, establishing a stable core language with essential features for simple scripting and educational purposes.</p>
        <ul>
            <li>Core Language: Lexer, parser, and tree-walking evaluator.</li>
            <li>Data Types: Integers, Booleans, Strings, and <code>null</code>.</li>
            <li>Variables: Declaration with the <code>let</code> keyword.</li>
            <li>Control Flow: Expression-based <code>if-else</code>.</li>
            <li>Functions: Full support for first-class functions and closures.</li>
            <li>REPL: An interactive Read-Eval-Print Loop.</li>
        </ul>
    </section>
);

export default Changelog;