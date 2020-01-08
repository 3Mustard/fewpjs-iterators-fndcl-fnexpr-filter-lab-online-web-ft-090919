 function findMatching(drivers,stringArg){
   return drivers.filter(driver => driver.toLowerCase() === stringArg.toLowerCase());
 }
 
 function matchName(drivers,stringArg){
   return drivers.filter(driver => driver.name.toLowerCase() === stringArg.toLowerCase());
 }
 
 function fuzzyMatch(drivers,stringArg){
   return drivers.filter(driver => driver.name[0].toLowerCase() === stringArg.toLowerCase());
 }