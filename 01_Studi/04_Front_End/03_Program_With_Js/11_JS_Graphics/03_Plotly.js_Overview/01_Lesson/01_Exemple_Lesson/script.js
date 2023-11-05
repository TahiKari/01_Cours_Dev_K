// Exemple 1
/*
// intallation "npm" via le terminal
npm i plotly.js
*/

console.log('----------------------------------------')

// Exemple 2
/*
// Installation via webpack
npm install --save ify-loader
npm install --save-dev webpack
*/

/*
...
      module: {
          rules: [
              {
                  test: /\.js$/,
                  loader: 'ify-loader'
              }
          ]
      },
  ...
*/

console.log('----------------------------------------')

// Exemple 3
/*
let graphDiv = document.getElementById('tester')

let data = [
  {
    x: [1999, 2000, 2001, 2002],
    y: [10, 15, 13, 17],
    type: 'scatter'
  }
]

let layout = {
  title: 'Sales Growth',
  xaxis: {
    title: 'Year',
    showgrid: false,
    zeroline: false
  },
  yaxis: {
    title: 'Percent',
    showline: false
  }
}
Plotly.newPlot(graphDiv, data, layout)
let dataRetrievedLater = graphDiv.data
let layoutRetrievedLater = graphDiv.layout
*/

console.log('----------------------------------------')

// Exemple 4

let graphDiv = document.getElementById('tester')

let data = [
  {
    x: [1999, 2000, 2001, 2002],
    y: [10, 15, 13, 17],
    type: 'scatter'
  }
]

let layout = {
  title: 'Sales Growth',
  xaxis: {
    title: 'Year',
    showgrid: false,
    zeroline: false
  },
  yaxis: {
    title: 'Percent',
    showline: false
  }
}
Plotly.newPlot(graphDiv, data, layout)
let dataRetrievedLater = graphDiv.data
let layoutRetrievedLater = graphDiv.layout


console.log('----------------------------------------')

// Exemple 5

let tester = document.getElementById('tester');
Plotly.newPlot( tester, [
  {
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 4, 8, 16] 
  }
], 
  { 
    margin: { t: 0 }
});

console.log('----------------------------------------')

// Exemple 6
/*

*/

console.log('----------------------------------------')

// Exemple 7
/*

*/

console.log('----------------------------------------')
