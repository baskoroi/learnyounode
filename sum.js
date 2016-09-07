let args = process.argv.slice(2);

if (args.length === 0) {
    console.log("Please insert one or more numbers.");
} else {
    let check = args.map((el) => !isNaN(el));
    if (check.includes(false)) {
        console.log("One of your arguments is not a number. Please try again.");
    } else {
        let sum = args.reduce((prev, cur) => Number(prev) + Number(cur));
        console.log(sum);
    }
}