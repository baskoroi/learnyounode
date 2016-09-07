let args = process.argv.filter((e, i) => i >= 2);
let sum = args.reduce((prev, cur) => Number(prev) + Number(cur));
console.log(sum);