"use strict";
const num1Ele = document.getElementById("num1");
const num2Ele = document.getElementById("num2");
const btnEle = document.querySelector("button");
const numResults = [];
const textResults = [];
function add(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number")
        return num1 + num2;
    else if (typeof num1 === "string" && typeof num2 === "string")
        return num1 + " " + num2;
    else
        +num1 + +num2;
}
function printResult(resultObj) {
    console.log(resultObj.val);
    return resultObj.timeStamp;
}
// console.log(add(1, 6));
btnEle.addEventListener("click", () => {
    const num1 = num1Ele.value;
    const num2 = num2Ele.value;
    const result = add(+num1, +num2);
    numResults.push(result);
    const stringResult = add(num1, num2);
    textResults.push(stringResult);
    console.log(result);
    console.log(stringResult);
    console.log(printResult({ val: result, timeStamp: new Date() }));
    console.log(numResults, textResults);
});
const myPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res("it Worked!");
    }, 1000);
});
myPromise.then((result) => {
    console.log(result.split(" "));
});
