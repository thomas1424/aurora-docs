import React from 'react';
import { CodeBlock } from '../App';

const Functions = () => (
    <section id="functions" className="content-section">
        <h2>Functions & Closures</h2>
        <p>Functions are <strong>first-class citizens</strong> in Aurora, supporting higher-order functions and closures. This means they can be treated like any other value: assigned to variables, passed as arguments, and returned from other functions.</p>
        <h3>Closures</h3>
        <p>A closure is a function that "remembers" the environment in which it was created. This allows for powerful patterns like data encapsulation.</p>
        <pre><CodeBlock language="javascript">{`let createCounter = fn() {
  let count = 0;
  return fn() {
    count = count + 1;
    return count;
  };
};

let counterA = createCounter();
print(counterA()); // 1
print(counterA()); // 2`}</CodeBlock></pre>
    </section>
);

export default Functions;