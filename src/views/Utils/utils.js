/* eslint-disable prettier/prettier */

//Function to handle to reload after login
export const delayForExecution =(ms) =>{
  console.log('reloading');
  return new Promise( resolve => setTimeout(resolve,ms))
}


