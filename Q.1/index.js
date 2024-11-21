
function sum(x){
  let total = x;

  function add(y){
    if(y===undefined){
        return total       
    }else{
      total +=y;
    }
    return add;
  }
  return add;
}

console.log(sum(1)(2)(3)(4)(5)());
console.log(sum(3)(7)());
