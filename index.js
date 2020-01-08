 function findMatching(drivers,stringArg){
   return drivers.filter(driver => driver.toLowerCase() === stringArg.toLowerCase());
 }
 
 function matchName(drivers,stringArg){
   //drivers are objects with name: key
   //return drivers names who match the argument
   return drivers.filter(driver => driver.name === stringArg)
 }