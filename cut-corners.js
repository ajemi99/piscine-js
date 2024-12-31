function checkNumberComa (float){
   let c =0
   if( float < 0){
      float = -float
      c++
   }

while( float >=1 ){
let x = 1

while( x <= float){
 x *= 10 

}
 float -= x / 10
 
}

return float

}

function round (float){
   let x = 0
   let c = 0
  
   if (float < 0){
      float = -float

      c++
   } 
    if (float == 0 && c != 0){

   return -0
   }
  

x = float - (checkNumberComa(float))

if ( checkNumberComa(float) + 0.5 >=1 && c == 0 ){
let k = 0
 k = x + 1
return k
}
if ( checkNumberComa(float) + 0.5 >1 && c != 0  ){
   let k = 0
   k = x + 1
return -k

}
if (c != 0 ){
   return -x
}


return x

}

function  ceil ( float){
   let c = 0
  let x = 0
   if (float < 0){
      float = -float

      c++
   }
 if (float == 0 && c != 0){

      return -0
      }
   x = float - (checkNumberComa(float))
if (checkNumberComa(float) > 0 && c == 0){
   return x + 1
}
if (checkNumberComa(float) > 0 && c != 0){
   return -x
}
if (c != 0){
   return -x
}

return x
}

function floor (float){

   let c = 0
  let x = 0
   if (float < 0){
      float = -float

      c++
   } 
   if (float == 0 && c != 0){

      return -0
      }


   x = float - (checkNumberComa(float))
if (checkNumberComa(float) > 0 && c == 0){
   return x 
}
if (checkNumberComa(float) > 0 && c != 0){
   return -(x+1)
}
if (c != 0){
   return -x
}

return x


}

function trunc (float){

   let c = 0
  let x = 0
   if (float < 0){
      float = -float

      c++
   }
    if (float == 0 && c != 0){

      return -0
      }
   x = float - (checkNumberComa(float))
   if(c==0){

      return x
   }
   if (c!=0){

      return -x
   }

return x

}
console.log(Math.floor(-2));
console.log(floor(-2));