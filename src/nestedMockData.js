export default function generateData(depth, number) {
    let result = '{\n';
    result = recurs(result, depth, number);
    result += '}\n'.repeat(depth) + '}';
    return result;
}

function recurs (result, depth, number) {
  if (depth === 0) {
    for (let i = 0; i < number; i++) {
        result += `"number_${i}": { \n`;
        result += `"code": "n${i}", \n`;
        result += `"name": "number ${i}" \n}`;
        result += (i === number - 1) ? `\n` : `,\n`
    }
    return result;
  } else {
    result += `"depth${depth}": { \n`;
    result += `"code": "d${depth}", \n`;
    result += `"name": "depth ${depth}", \n`;
    return recurs(result, depth - 1, number);
  }
}