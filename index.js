// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(
    function(driver) {
      return driver.revenue > revenue;
    }
  );
};

function driverNamesWithRevenueOver(drivers, revenue) {
  let filteredDrivers = driversWithRevenueOver(drivers, revenue);
  return filteredDrivers.map(
    function(driver) {
      return driver.name;
    }
  );
};

function exactMatch(drivers, toMatch) {
  return drivers.filter(
    function(driver) {
      let match = false;

      for(const key in toMatch) {
        match = driver[key] === toMatch[key];
      };

      return match;
    }
  );
};

function exactMatchToList(drivers, toMatch) {
  matched = exactMatch(drivers, toMatch);

  return matched.map(
    function(driver) {
      return driver.name;
    }
  );
};
