// Code your solution here:
function driversWithRevenueOver(driver, revenue){
  return driver.filter( d => d.revenue > revenue);
};

function driverNamesWithRevenueOver(driver, revenue){
  return driver.filter( d => d.revenue > revenue).map( d => d.name);
};

function exactMatch(driver, obj){
  return driver.filter (function (d) {
    for (let key in d) {
   if (obj.hasOwnProperty(key) && d[key] == obj[key]) {
     return d;  
  }
   }
 })
};

function exactMatchToList(driver, obj) {
  return driver.filter (function (d) {
    for (let key in d) {
   if (obj.hasOwnProperty(key) && d[key] == obj[key]) {
     return d;  
  }
   }
 }).map(d => d.name);
}