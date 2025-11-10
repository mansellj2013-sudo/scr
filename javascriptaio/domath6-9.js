function doMath(value, mathToDo) {
  let result = mathToDo(value);
  return result;
}
const circumference = doMath(4, function (radius) {
  return 2 * Math.PI * radius;
});
circumference;
