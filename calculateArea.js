const calculateRectangleArea = function (length, width) {
  if (Math.sign(length) < 0 || Math.sign(width) < 0){
    return undefined
  } else {
    return length * width;
  }
}

const calculateTriangleArea = function (base, height) {
  if (Math.sign(base) < 0 || Math.sign(height) < 0) {
    return undefined;
  } else {
  return base * height / 2;
  }
}

const calculateCircleArea = function (radius) {
  if (radius < 0) {
    return undefined;
  } else {
  return Math.PI * (radius * radius);
  }
}

console.log(calculateRectangleArea(10, 5));
console.log(calculateTriangleArea(10, 5));
console.log(calculateCircleArea(10));