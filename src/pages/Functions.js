import React from 'react';
import { CodeBlock } from '../App';

const Functions = () => (
    <section id="functions" className="content-section">
        <h2>Functions & Closures</h2>
        <p>Functions are the fundamental building blocks of Aurora programs. They are <strong>first-class citizens</strong>, meaning they can be treated like any other value: assigned to variables, passed as arguments to other functions, and returned from other functions.</p>
        <h3>Higher-Order Functions</h3>
        <p>Because functions are first-class, you can create higher-order functions—functions that operate on other functions. This is a powerful functional programming pattern.</p>
        <pre><CodeBlock language="javascript">{`let apply = fn(f, value) {
  return f(value);
};

let double = fn(x) {
  return x * 2;
};

// Here, we pass the 'double' function as an argument.
let result = apply(double, 10); // result is 20
print(result);`}</CodeBlock></pre>
        <h3>Closures</h3>
        <p>Aurora fully supports closures. A closure is a function that "remembers" the environment (the variables and scopes) in which it was created. This allows for powerful patterns like data encapsulation and creating private state.</p>
        <pre><CodeBlock language="javascript">{`let createCounter = fn() {
  let count = 0;
  return fn() {
    count = count + 1;
    return count;
  };
};

let counterA = createCounter();
print(counterA()); // 1
print(counterA()); // 2

// counterB has its own separate 'count' variable.
let counterB = createCounter();
print(counterB()); // 1`}</CodeBlock></pre>
    </section>
);

export default Functions;