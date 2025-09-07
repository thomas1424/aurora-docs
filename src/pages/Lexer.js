import React from 'react';
import { CodeBlock } from '../App';

const Lexer = () => (
    <section id="lexer" className="content-section">
        <h2>The Lexer</h2>
        <p>The first stage of interpretation is **lexical analysis**, performed by the lexer (or tokenizer). The lexer's job is to take the raw source code string and convert it into a sequence of discrete **tokens**. Think of this as breaking an English sentence into individual words and punctuation marks.</p>
        <p>Each token represents the smallest meaningful unit of the language, such as a keyword (<code>let</code>, <code>fn</code>), an operator (<code>+</code>, <code>=</code>), a literal value (<code>123</code>, <code>"hello"</code>), or an identifier (<code>myVar</code>).</p>
        <pre><CodeBlock language="go">{`// The Go struct for a single token
// in token/token.go
type Token struct {
    Type    TokenType // e.g., INT, IDENT, LET
    Literal string    // The raw text, e.g., "123", "myVar"
}`}</CodeBlock></pre>
    </section>
);

export default Lexer;