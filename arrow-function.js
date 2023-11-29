function sum(a, b) {
    return a + b;

}
console.log(sum(20, 10));


const sum2 = (a, b) => {
    return a + b;
}

const sum3 = (a, b) => a + b;
const res = sum3(10, 20);

function calculate(a, b, operation) {
    return operation(a, b);
}
function substact(a, b) {
    return a - b;
}

calculate(9, 3, substact);

calculate(9, 3, (a, b) => a / b);

function universalGreeting(name, greetingFunction) {
    return greetingFunction(name);
}

function englishGreeting(name) {
    return `Hello, ${name}`;
}

const res2 = universalGreeting("John", englishGreeting);
console.log(res2);
const res3 = universalGreeting("Sayochi", (name => `Konnichiwa, ${name}`));
console.log(res3);