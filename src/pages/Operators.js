import React from 'react';
import { CodeBlock } from '../App';

const Operators = () => (
    <section id="operators" className="content-section">
        <h2>Operators</h2>
        <p>Aurora provides a standard set of operators for performing calculations and comparisons, which follow common precedence rules (multiplication/division before addition/subtraction).</p>
        <h3>Arithmetic Operators</h3>
        <p>Used for mathematical calculations on integer values.</p>
        <pre><CodeBlock language="javascript">{`let sum = 10 + 5;      // 15
let difference = 20 - 8; // 12
let product = 7 * 6;     // 42
let quotient = 100 / 25; // 4`}</CodeBlock></pre>
        <h3>Comparison & Logical Operators</h3>
        <p>Used for comparing values and inverting boolean logic. These expressions always evaluate to either <code>true</code> or <code>false</code>.</p>
        <pre><CodeBlock language="javascript">{`10 > 5;     // true
10 < 5;     // false
10 == 10;   // true
10 != 5;    // true
!true;      // false
!"hello";  // false (any non-null, non-false value is "truthy")`}</CodeBlock></pre>
    </section>
);

export default Operators;