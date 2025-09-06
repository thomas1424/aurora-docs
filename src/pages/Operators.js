import React from 'react';
import { CodeBlock } from '../App';

const Operators = () => (
    <section id="operators" className="content-section">
        <h2>Operators</h2>
        <p>Aurora provides a standard set of operators for performing calculations and comparisons.</p>
        <h3>Arithmetic Operators</h3>
        <pre><CodeBlock language="javascript">{`5 + 2;      // 7
5 * 2;      // 10`}</CodeBlock></pre>
        <h3>Comparison & Logical Operators</h3>
        <pre><CodeBlock language="javascript">{`10 > 5;     // true
10 == 10;   // true
!true;      // false`}</CodeBlock></pre>
    </section>
);

export default Operators;