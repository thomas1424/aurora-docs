import React from 'react';
import { CodeBlock } from '../App';

const Evaluator = () => (
    <section id="evaluator" className="content-section">
        <h2>The Evaluator</h2>
        <p>The evaluator, or interpreter, is the engine that brings the code to life. It takes the AST produced by the parser and executes it. Aurora uses a **tree-walking interpreter**.</p>
        <p>The core of the evaluator is a function, often called <code>Eval</code>, which recursively "walks" the AST from its root node down to its leaves. As it visits each node, it performs the action that the node represents. For an <code>InfixExpression</code> node, it evaluates the left and right children first, then applies the operator to their results. This recursive process naturally follows the structure of the program.</p>
        <pre><CodeBlock language="go">{`// A snippet of the evaluator's main loop
// in evaluator/evaluator.go
func Eval(node ast.Node, env *object.Environment) object.Object {
	switch node := node.(type) {
	  // ...
    case *ast.InfixExpression:
      left := Eval(node.Left, env)
      right := Eval(node.Right, env)
      return evalInfixExpression(node.Operator, left, right)
    // ...
  }
}`}</CodeBlock></pre>
    </section>
);

export default Evaluator;