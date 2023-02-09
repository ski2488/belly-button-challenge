// #1 Use the D3 library to read in samples.json from the URL

const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);
});



// #2 Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual
//let title = `Test`

let otu_ids = ["OTU 1", "OTU 2", "OTU 3", "OTU 4", "OTU 5", "OTU 6", "OTU 7", "OTU 8", "OTU 9", "OTU 10"]

let sample_values = [90, 100, 110, 120, 130, 140, 150, 160, 170, 180]

let trace1 = {
  y: otu_ids,
  x: sample_values,
  type: 'bar',
  orientation: 'h'
};

let data = [trace1];

//let layout = {
//  title: title
//};

//Plotly.newPlot("bar", data, layout);
Plotly.newPlot("bar", data);



// #3 Create a bubble chart that displays each sample.

let otu_ids2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let sample_values2 = [90, 100, 110, 120, 130, 140, 150, 160, 170, 180]

let otu_labels2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var trace2 = {
    x: otu_ids2,
    y: sample_values2,
    text: otu_labels2,
    mode: 'markers',
    marker: {
        color: otu_ids2,
        size: sample_values2
    }
  };
  
  var data2 = [trace2];
  
  var layout2 = {
    showlegend: false
  };
  
  Plotly.newPlot('bubble', data2, layout2);



// #5 Display each key-value pair from the metadata JSON object somewhere on the page

let indivdual_dict = {
    id: 940,
    ethnicity: 'Causcasian',
    gender: 'F',
    age: 24,
    location: 'Beaufort/NC',
    bbtype: 'I',
    wfreq: 2
 }


 