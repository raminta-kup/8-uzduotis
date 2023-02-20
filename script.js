/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {
    this.sum = function (num1, num2) {
        return num1 + num2;
    }
    this.subtraction = function (num1, num2) {
        return num1 - num2;
    }
    this.multiplaction = function (num1, num2) {
        return num1 * num2;
    }
    this.division = function (num1, num2) {
        return num1 / num2;
    }
}

const Result = new Calculator();
console.log(Result.sum(4, 2));
console.log(Result.subtraction(4, 2));
console.log(Result.multiplaction(4, 2));
console.log(Result.division(4, 2));

