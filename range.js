function range(start, end, step) {
  var i = [];

  if(start < end || step <= 0) {
    return [];
  }
  for (var j = start; j <= end; j += step){
    i.push(j);
  }
  return i;
}