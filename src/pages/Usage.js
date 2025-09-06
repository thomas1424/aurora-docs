import React from 'react';
import { CodeBlock } from '../App';

const Usage = () => (
  <section id="usage" className="content-section">
    <h2>Usage</h2>
    <h3>Interactive REPL</h3>
    <p>The REPL (Read-Eval-Print Loop) is ideal for quick experiments. Run the interpreter without arguments to start it:</p>
    <pre><CodeBlock language="bash">./aurora</CodeBlock></pre>
    <h3>Executing Script Files</h3>
    <p>To run a program, pass the script file (e.g., <code>program.aurora</code>) as an argument:</p>
    <pre><CodeBlock language="bash">./aurora path/to/your/program.aurora</CodeBlock></pre>
  </section>
);

export default Usage;