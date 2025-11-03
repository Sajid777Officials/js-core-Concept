//Question 01

let filter=function(Arr,fn){
const filteredArr=[];
for (let i = 0; i < Arr.length; i++){
    if(fn(arr[i],i)){
        filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

//Question 02
let reduce = function(nums , fn ,init){
  let val=init;
  if (nums.length===0){
    return val;
}

for(let i=0; i<nums.length;i++){
  val=fn(val,nums[i]);
}
return val;
}
console.log(reduce([1,2,3,4], (a,b) => a + b, 0));

 
//Question02


