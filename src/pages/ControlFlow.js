import React from 'react';
import { CodeBlock } from '../App';

const ControlFlow = () => (
    <section id="control-flow" className="content-section">
        <h2>Control Flow</h2>
        <p>Aurora's primary control flow construct is the <code>if-else</code> expression. It is an <strong>expression</strong>, not a statement, which means it evaluates to a value that can be assigned to a variable.</p>
        <pre><CodeBlock language="javascript">{`let temperature = 30;
let report = if (temperature > 25) {
  "It's a hot day!";
} else {
  "It's cool and pleasant.";
};
print(report); // Outputs: "It's a hot day!"`}</CodeBlock></pre>
    </section>
);

export default ControlFlow;