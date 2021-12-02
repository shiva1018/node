console.log("max!!")
//max value display
console.log(process.argv)
//string to array json.parse
const[,,num]=process.argv;
console.log("input string",num)
const arr=JSON.parse(num)
console.log("convert string to array" ,arr)
console.log("max number",Math.max(...arr))