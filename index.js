 function findMatching(drivers,stringArg){
   drivers.forEach(driver => driver.toLowerCase());
   stringArg.toLowerCase();
   drivers.filter(driver => {return driver === stringArg});
 }