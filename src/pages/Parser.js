import React from 'react';
import { CodeBlock } from '../App';

const Parser = () => (
    <section id="parser" className="content-section">
        <h2>The Parser</h2>
        <p>The parser takes the flat stream of tokens from the lexer and transforms it into a hierarchical data structure called an **Abstract Syntax Tree (AST)**. The AST accurately represents the grammatical structure and relationships within the code. It's like taking the words from the lexer and building a sentence diagram that understands subjects, verbs, and objects.</p>
        <p>Aurora uses a **Recursive Descent** parser with a technique called **Pratt Parsing**. This is an elegant method for parsing expressions that cleanly handles operator precedence (e.g., ensuring <code>2 + 3 * 4</code> is correctly interpreted as <code>2 + (3 * 4)</code>).</p>
        <pre><CodeBlock language="go">{`// An example AST node for a 'let' statement
// in ast/ast.go
type LetStatement struct {
    Token token.Token // The token.LET token
    Name  *Identifier
    Value Expression
}`}</CodeBlock></pre>
    </section>
);

export default Parser;