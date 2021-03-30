// // factorize

// factorize(3)

// // largest word from a sentence.

//  function largestOfFour(arr) {
//   return arr;
// }

// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// // ans = [5,27,39,1001]
let arrayHandler = (arr, result = [], oldArray) => {
  let lastItem = arr.pop();
  if (Array.isArray(lastItem)) {
    return arrayHandler(lastItem, result, arr);
  } else {
    if (arr.length) {
      result.push(lastItem);
      return arrayHandler(arr, result, oldArray);
    } else if (oldArray?.length) {
      result.push(lastItem);
      return arrayHandler(oldArray, result, arr);
    } else {
      result.push(lastItem);
      return result;
    }
  }
};

let arrayFlater = (arr, result = []) => {
  let lastItem = arr.pop();
  if (Array.isArray(lastItem)) {
    arr = arr.concat(lastItem);
    return arrayFlater(arr, result);
  } else if (arr.length) {
    result.push(lastItem);
    return arrayFlater(arr, result);
  } else {
    result.push(lastItem);
    return result.reverse();
  }
};

var arr = [
  "daniyal",
  "noman",[],
  "aijaz",
  ["mani", "mohsin"],
  [
    "mani1",
    "mohsin1",[]
    ["kjhkj", ["jhjkhgjhgjh", ["jhgjhghghg"]]],
    [
      "mani1",
      "mohsin1",[],
      [
        "kjhkj",[],
        [
          "jhjkhgjhgjh",
          [
            "jhgjhghghg",
            ["mani1", "mohsin1", ["kjhkj", ["jhjkh,gjhgjh",[[]], ["jhgjhghghg"],[],]]],
          ],
        ],
      ],
    ],
  ],
  [
    "mani2",[],
    "mohsin2",
    [
      "daniyal",
      "noman",
      "aijaz",[],
      ["mani", "mohsin"],
      [
        "mani1",
        "mohsin1",
        ["kjhkj", ["jhjkhgjhgjh", ["jhgjhghghg"]]],
        ["mani1", "mohsin1", ["kjhkj", ["jhjkhgjhgjh", ["jhgjhghghg"]]]],
      ],
      ["mani2", "mohsin2"],
    ],
  ],
];
// let newArra = arrayFlater(arr);
// console.log("newArray", newArra);
const test123 = arrayFlater(arr)
console.log("======= flat",test123)




function flatDeep(arr, d = 1) {
  return d > 0
    ? arr.reduce(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
        []
      )
    : arr.slice();
}

// flatDeep(arr, Infinity);
// console.log("==>", flatDeep(arr, Infinity));


// convert numbers to words;

const numToWords = num => {
  console.log("==",num)
  const ones = ['','one','two','three','four','five','six','seven','eight','nine',];
  const elevens = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','ninteen','twenty']
  const tens = ['','ten','twenety','thirty','fourty','fifty','sixty','seventy','eighty','nintghy'];

  let nums = [];
  let result = "";
  let i = 0;
  while(i<num.length){
    console.log(i,"num",num[i],num.length)
    if(nums.length === 0 && Number(num[i]) === 0){
      console.log("===",nums)
    }
    else nums.push(num[i])
    i++
  }
  let k = 0;

  while(k < nums.length){

    console.log("nums",nums)

    if(k === 0 && nums.length < 2){
      result += ones[nums[0]];
    }

    else if(k === 1 && nums.length > 1 && nums.length < 3 && nums[0] < 2){
      result += elevens[nums[k]] + " "
    }
    else if(k === 0 && nums.length > 1 && nums.length < 3 && nums[0] > 1 ){
      result += tens[nums[k]] + " "
    }else if(k === 1 && nums.length > 1 && nums.length < 3 && nums[0] > 1){
      result += ones[nums[k]]
    }else if(nums.length === 3 ){
      if( k === 0)  result += ones[nums[k]]+ " hundred" + " ";
      else if( k=== 1) result += tens[nums[k]] + " ";
      else result += ones[nums[k]]+ " "
    }else if(nums.length === 4){

      if( k === 0)  result += ones[nums[k]]+ " thousand" + " ";
      else if( k === 1)  result += ones[nums[k]]+ " hunders" + " ";
      else if( k=== 2) result += tens[nums[k]] + " ";
      else result += ones[nums[k]]+ " "
    }else if(nums.length === 5){

      if(Number(nums[0]) === 1 ){
        // if( k === 0)  result += tens[nums[k]]+ "" + " ";
        if( k === 1)  result += elevens[nums[k]]+ " thousand" + " ";
        else if( k === 2)  result += ones[nums[k]]?ones[nums[k]]+ " hundreds" + " ":"";
        else if( k=== 3) result += tens[nums[k]] + " ";
        else if(k===4)result += ones[nums[k]]+ " "
      }else{

        
        if( k === 0)  result += tens[nums[k]]+ "" + " ";
        else if( k === 1)  result += ones[nums[k]]+ " thousand" + " ";
        else if( k === 2)  result += ones[nums[k]]?ones[nums[k]]+ " hundreds" + " ":"";
        else if( k=== 3) result += tens[nums[k]] + " ";
        else result += ones[nums[k]]+ " ";
      }
    }
    k++
  }
  return result + " only";
}

console.log("==>",numToWords("44444"))
