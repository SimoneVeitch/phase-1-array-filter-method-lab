function findMatching(drivers, query) {
    return drivers.filter(function (driver) {
        return driver.toLowerCase ().includes(query.toLowerCase());
    });
}

console.log(findMatching(drivers, 'JOHN'));

function fuzzyMatch(drivers, query) {
    return drivers.filter(function(driver) {
        return driver.startsWith(query)
        }); 
      }
console.log(fuzzyMatch(drivers, 'Ja'))

function matchName(drivers, query) {
    return drivers.filter(function(driver) {
         return driver.name === query
        });
      }
console.log(matchName(drivers, 'Alice Johnson'));

