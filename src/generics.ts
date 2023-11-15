const returnValue = <T>(value: T): T => value;

const massage = returnValue<string>("hello world");

const numero = returnValue<number>(15);

function getFirstValueFromArray<Type>(array: Type[]) {
  return array[0];
}

const getFirstValueStringFromArray = getFirstValueFromArray<string>([
  "vitor",
  "victoria",
]);
const getFirstValueNumberFromArray = getFirstValueFromArray<number>([1, 2]);

// Promises
const returnPromise = async (): Promise<string> => {
  return "5";
};

// Classes
class GenericNumber<T> {
  zeroValue: T;
  sum: (x: T, y: T) => T;

  constructor(zeroValue: T, sum: (x: T, y: T) => T) {
    this.zeroValue = zeroValue;
    this.sum = sum;
  }
}

const myGenericNumber = new GenericNumber<number>(0, (x: number, y: number) => {
  return x + y;
});
