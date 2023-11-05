// Exemple 2
/*
// Dans le terminal taper :
npm install chart.js
*/

console.log('----------------------------------------')

// Exemple 3
/*
// l est important de noter que lorsque Chart.js est téléchargé directement depuis le repository GitHub, celui-ci ne contient plus toutes les dépendances. Il est donc nécessaire de procéder à l’ajout d’un script autonome, en l'occurrence il s’agit de pnpm.
iwr https://get.pnpm.io/install.ps1 -useb | iex
*/

console.log('----------------------------------------')

// Exemple 6

let ctx = document.querySelector('#myChart')
new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Paris', 'New-York', 'Madrid', 'Moscou', 'Berlin', 'Auckland'],
    datasets: [
      {
        label: ' Nombre d’habitants',
        data: [12, 19, 7, 5, 2, 3],
        backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple', 'orange']
      }
    ]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Mon premier graphique avec Chart Js'
      }
    },
    legend: {
      position: 'bottom'
    }
  }
})


console.log('----------------------------------------')

// Exemple 6
/*
 type: 'line',
    data: {
      labels: ['Paris ', 'London', 'New York', 'Singapore', 'Shanghai', 'Sydney'],
*/

console.log('----------------------------------------')

// Exemple 7
/*
datasets: [{
        label: 'Nombre de résident en million',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
*/

console.log('----------------------------------------')

// Exemple 8
/*
options: {
                title: {
                    display: true,
                    text: 'Mon premier graphique avec Chart Js'
                },
                legend: {
                    position: 'bottom'
                }
                            }
        })
*/