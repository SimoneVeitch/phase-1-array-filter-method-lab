// Code your solution here

/* findMatching()
      1) returns all drivers that match the passed in name
      2) returns matching drivers if case does not match but letters do
      3) returns an empty array if there is no match*/

function findMatching(drivers, query) {
    return drivers.filter(function (driver) {
        return driver.toLowerCase() === query.toLowerCase();
    });
}

/* To implement the findMatching function, we need to filter the array of drivers based on whether their names match the provided string, ignoring case. 
This function uses the filter method to iterate over the drivers array. For each driver, it converts both the driver's name and the query string to lowercase using the toLowerCase method and then checks if they are equal. This ensures that the comparison is case insensitive.
In the findMatching function, the inner function passed to the filter method serves as a callback function. This callback function is applied to each element (driver) in the drivers array when filter is called. The purpose of this inner function is to check if the lowercase version of each driver's name (driver.toLowerCase()) matches the lowercase version of the query string (query.toLowerCase()).

By using a function within a function in this way, you can encapsulate the logic for filtering the drivers based on a case-insensitive match, keeping the code concise and easy to understand. The inner function is a way to define the specific criterion for filtering the array, and using it as a callback to the filter method allows for a clean and readable implementation of the filtering logic.*/

/* fuzzyMatch()
      1) returns a driver if beginning provided letters match
      2) does not return drivers if only middle or ending letters match
      3) does not return drivers if only middle or ending letters match */

      function fuzzyMatch(drivers, query) {
        return drivers.filter(function(driver) {
            return driver.startsWith(query)
        }); 
      }

/* matchName()
      4) accesses the data structure to check if name matches*/

      function matchName(drivers, query) {
        return drivers.filter(function(driver) {
            return driver.name === query
        });
      }