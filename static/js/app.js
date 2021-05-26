// from data.js
var sightingsData = data;

// Create variable to select the table body to insert data
var tbody = d3.select("tbody");

console.log(sightingsData);

// Loop through the objects in UFO data to append rows
sightingsData.forEach((ufoSighting) => {

    var row = tbody.append("tr");

//Loop through the keys and values within objects to append data to rows
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  
  });



// Select the button for DateTime Filter
var button = d3.select("#filter-btn");


// Create event handlers 
button.on("click", runEnter);


// Complete the event handler function for the form
function runEnter() {
    tbody.html("");
  // Prevent the page from refreshing

    d3.event.preventDefault();

  // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime1");

    var inputValue = inputElement.property("value");
    
  // Get the value property of the input element
    var filterData = sightingsData.filter(sightingDay => sightingDay.datetime == inputValue);

    filterData.forEach((ufoSighting) => {

    var row = tbody.append("tr");

//Loop through the keys and values within objects to append data to rows
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  
    });


};