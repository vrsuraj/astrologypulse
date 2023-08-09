import { ICommonComponentObject } from "../interface/ICommon";

// Helper function to find component by type
export const findComponent = (type: string, components: ICommonComponentObject[]) =>
  components.find((comp: ICommonComponentObject) => comp.type === type);


// tarot random array 
  export function randomIntArrayInRange(start:number, end:number, count = 1) {
  if (count <= 0 || end - start + 1 < count) {
    return [];
  }

  var numbers:Array<number> = [];

  while (numbers.length < count) {
    var randomNumber = Math.floor(Math.random() * (end - start + 1)) + start;

    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }

  return numbers;
}

// deep search array
export function filterArrayByNestedPropertyValue(array:any[], keyPath:any, targetValue:string) {
    function findNestedProperty(obj:any, keys:string) {
        if (!keys.length || !obj) return obj;
        return findNestedProperty(obj[keys[0]], keys.slice(1));
    }
    return array.filter(item => findNestedProperty(item, keyPath) === targetValue);
}