const num1Ele = document.getElementById("num1") as HTMLInputElement;
const num2Ele = document.getElementById("num2") as HTMLInputElement;
const btnEle = document.querySelector("button")!;

const numResults: number[] = [];
const textResults: string[] = [];

type NumOrString = number | string;
type ResultType = { val: number; timeStamp: Date };

interface ResultObj {
  val: number;
  timeStamp: Date;
}

function add(num1: NumOrString, num2: NumOrString) {
  if (typeof num1 === "number" && typeof num2 === "number") return num1 + num2;
  else if (typeof num1 === "string" && typeof num2 === "string")
    return num1 + " " + num2;
  else +num1 + +num2;
}

function printResult(resultObj: ResultObj) {
  console.log(resultObj.val);
  return resultObj.timeStamp;
}

// console.log(add(1, 6));

btnEle.addEventListener("click", () => {
  const num1 = num1Ele.value;
  const num2 = num2Ele.value;

  const result = add(+num1, +num2);
  numResults.push(result as number);

  const stringResult = add(num1, num2);
  textResults.push(stringResult as string);

  console.log(result);
  console.log(stringResult);
  console.log(printResult({ val: result as number, timeStamp: new Date() }));
  console.log(numResults, textResults);
});
