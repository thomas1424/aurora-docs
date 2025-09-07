import React from 'react';
import { CodeBlock } from '../App';

const Variables = () => (
    <section id="variables" className="content-section">
        <h2>Variables & Data Types</h2>
        <p>Variables are declared using the <code>let</code> keyword. Aurora is <strong>dynamically typed</strong>, which means you do not declare the type of a variable. The type is determined at runtime based on the value assigned to it.</p>
        <pre><CodeBlock language="javascript">{`let language = "Aurora"; // Type is String
let version = 1;        // Type is Integer
let is_awesome = true;    // Type is Boolean`}</CodeBlock></pre>
        <h3>Core Data Types</h3>
        <ul>
            <li><strong>Integers:</strong> 64-bit signed integers (e.g., <code>10</code>, 
            <code>-500</code>).</li>
            <li><strong>Booleans:</strong> <code>true</code> or <code>false</code>. Used for logic and control flow.</li>
            <li><strong>Strings:</strong> UTF-8 text enclosed in double quotes <code>"..."</code>. Supports concatenation with <code>+</code>.</li>
            <li><strong>Null:</strong> A special type representing the intentional absence of a value. Functions without an explicit <code>return</code> will return <code>null</code>.</li>
        </ul>
    </section>
);

export default Variables;
