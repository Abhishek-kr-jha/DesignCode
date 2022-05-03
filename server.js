var inp = 'C1e7h3P4k11'
var spl = inp.split('')
console.log(spl)
var num = []
var str=[]
var newArr=[]
for (i = 0; i < spl.length; i++) {
  console.log(spl[i])
  var digit=spl[i]*1
  if(digit){
  //num.push(digit)
  newArr.push(digit)
  
  }else{
  str.push(spl[i])
  newArr.push(spl[i])
  }
 
  console.log(digit)
}
console.log(num)
console.log(str)
console.log(newArr)