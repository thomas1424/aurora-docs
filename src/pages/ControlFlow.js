import React from 'react';
import { CodeBlock } from '../App';

const ControlFlow = () => (
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
        <p>The <code>else</code> block is optional. If it's omitted and the condition is false, the expression evaluates to <code>null</code>.</p>
        <pre><CodeBlock language="javascript">{`let value = 10;
let message = if (value > 20) {
  "Greater than 20";
};

// 'message' is now null because the condition was false
// and there was no else block.`}</CodeBlock></pre>
    </section>
);

export default ControlFlow;