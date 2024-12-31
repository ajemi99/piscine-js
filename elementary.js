function multiply(a,b){
 let res =0
 let c=0
 if (a<0&&b>0){
   a=-a
   c++
 }

 if (b<0&&a>0){
   b=-b
   c++
 }

 if(a<0&&b<0){
   a=-a
   b=-b
 }

 for(let i=0 ; i<b ; i++){
   res+=a
 }

 if(c==0 ){
   return res
 }


 return -res
}




  function divide(a,b){
   
   let c=0

   if ( b === 0 ){
      return undefined
   }
   let cou=0

   if (a < 0 && b < 0){
      a = -a
      b = -b
    }

   if (a < 0 && b > 0){
         a = -a
         cou++
      }

 if ( b < 0 && a > 0){
      b = -b
      cou++
 }

 let x=a;

   for ( let i = 0 ; i < x ; i++ ){
      if (a >= b){
      a = a-b
      c++
   }

   if (a < b && cou == 0){
      return c

      }
   }

   if (c === 0) {
      return 0
   }
   
   return -c

  }
  

//   console.log((divide(-123, 22)) );

  function modulo(a,b){

   let x = 0;
    x = a - multiply(divide(a, b), b) 
    
    return x

  }
 
//   const rep = modulo(-123, -22)
//   console.log(rep)