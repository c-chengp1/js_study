let indent = " ".repeat(4),
  indentLevel = 0;

let newIndent = indent.repeat(++indentLevel);
console.log(++indentLevel);
console.log(newIndent.length);
