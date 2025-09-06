import React from 'react';
import { CodeBlock } from '../App';
const Installation = () => (
<section id="installation" className="content-section">
<h2>Installation</h2>
<p>Getting Aurora running is a simple two-step process. You first need the Go compiler toolchain, and then you build the interpreter from the provided source code.</p>
<h3>1. Install Go</h3>
<p>Download and install the Go toolchain from the <a href="https://go.dev/dl/" target="_blank" rel="noopener noreferrer">official Go website</a>. After installation, verify it's working by opening a terminal and running <code>go version</code>.</p>
<h3>2. Build Aurora</h3>
<p>With Go installed, place all the Aurora source files into a single project directory. Navigate to that directory and run the build command:</p>
<pre><CodeBlock language="bash">go build -o aurora .</CodeBlock></pre>
</section>
);
export default Installation;