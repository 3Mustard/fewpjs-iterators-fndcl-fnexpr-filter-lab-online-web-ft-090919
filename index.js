 function findMatching(drivers,stringArg){
   return drivers.filter(driver => driver.toLowerCase() === stringArg.toLowerCase());
 }