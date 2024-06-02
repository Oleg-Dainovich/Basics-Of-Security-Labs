const jso = require('javascript-obfuscator');
const fs = require('node:fs');
const readline = require('readline');

const data = fs.readFileSync('../lab4/index.js', 'utf-8');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let obfuscationResult = jso.obfuscate(data,
    {
        compact: false,
        controlFlowFlattening: false,
        controlFlowFlatteningThreshold: 0,
        numbersToExpressions: false,
        simplify: false,
        sourceMapMode: 'inline',
        stringArrayWrappersChainedCalls: false,
        identifierNamesGenerator:'mangled',
        deadCodeInjection: false,
        deadCodeInjectionThreshold: 0,
        renameProperties: false,
        renameVariables: false,
        stringArrayShuffle: false,
        splitStrings: false,
        stringArray: false,
        stringArrayThreshold: 0
    }
);

let obf_num = '';
let ans = {
    first: false,
    second: false,
    third: false
};

console.log('0) Выполнить\n1) Преобразования форматирования\n2) Преобразования структур данных\n3) Преобразования потока управления\n');

function performOperations(numbers) {
    let positiveNumbers = numbers.filter(num => num >= 0);
 
    let squaredNumbers = positiveNumbers.map(num => num * num);

    let randomNumbers = squaredNumbers.map(num => num + Math.floor(Math.random() * 10));

    for (let i = randomNumbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomNumbers[i], randomNumbers[j]] = [randomNumbers[j], randomNumbers[i]];
    }
  
    let uniqueNumbers = Array.from(new Set(randomNumbers));
  
    uniqueNumbers.sort((a, b) => a - b);
  
    let product = uniqueNumbers.reduce((acc, curr) => acc * curr, 1);
  
    let isPrime = isNumberPrime(product);
  
    let binaryNumber = product.toString(2);
  
    let result = {
      positiveNumbers,
      squaredNumbers,
      randomNumbers,
      uniqueNumbers,
      product,
      isPrime,
      binaryNumber
    };

    let unusedVar1 = 'Hello';
    let unusedVar2 = 'World';
  
    return result;
  }

  function isNumberPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }

function pp() {
    rl.question('', (input) => {
        number = parseFloat(input);
        if (!isNaN(number)) {
            if (number === 0) {
                if (ans.first == true) {
                    obf_num += '1';
                }
                if (ans.second == true) {
                    obf_num += '2';
                }
                if (ans.third == true) {
                    obf_num += '3';
                }
                fs.writeFileSync(`../lab4/lab6/obf_index${obf_num}.js`, obfuscationResult.getObfuscatedCode());
                process.exit(1);
            }
            else if (number === 1) {
                ans.first = true;
                obfuscationResult = jso.obfuscate(data,
                    {
                        compact: false,
                        controlFlowFlattening: false,
                        controlFlowFlatteningThreshold: 0,
                        numbersToExpressions: false,
                        simplify: true,
                        sourceMapMode: 'inline',
                        stringArrayWrappersChainedCalls: false,
                        identifierNamesGenerator:'mangled',
                        deadCodeInjection: false,
                        deadCodeInjectionThreshold: 0,
                        renameProperties: false,
                        renameVariables: false,
                        stringArrayShuffle: false,
                        splitStrings: false,
                        stringArray: false,
                        stringArrayThreshold: 0
                    }
                );
            }
            else if (number === 2) {
                ans.second = true;
                obfuscationResult = jso.obfuscate(data,
                    {
                        compact: false,
                        controlFlowFlattening: false,
                        controlFlowFlatteningThreshold: 0,
                        numbersToExpressions: false,
                        simplify: false,
                        sourceMapMode: 'inline',
                        stringArrayWrappersChainedCalls: false,
                        identifierNamesGenerator:'mangled',
                        deadCodeInjection: false,
                        deadCodeInjectionThreshold: 0,
                        renameProperties: false,
                        renameVariables: false,
                        stringArrayShuffle: false,
                        splitStrings: false,
                        stringArray: true,
                        stringArrayThreshold: 1
                    }
                );
            }
            else if (number === 3) {
                ans.third = true;
                obfuscationResult = jso.obfuscate(data,
                    {
                        compact: false,
                        controlFlowFlattening: false,
                        controlFlowFlatteningThreshold: 0,
                        numbersToExpressions: false,
                        simplify: false,
                        sourceMapMode: 'inline',
                        stringArrayWrappersChainedCalls: false,
                        identifierNamesGenerator:'mangled',
                        deadCodeInjection: true,
                        deadCodeInjectionThreshold: 0.5,
                        renameProperties: false,
                        renameVariables: false,
                        stringArrayShuffle: false,
                        splitStrings: false,
                        stringArray: false,
                        stringArrayThreshold: 0
                    }
                );
            }
            else {
                console.log('Некорректный ввод. Попробуйте еще раз.');
            }
        }
        else {
            console.log('Некорректный ввод. Попробуйте еще раз.');
        }
        pp();
    });
}

pp();
