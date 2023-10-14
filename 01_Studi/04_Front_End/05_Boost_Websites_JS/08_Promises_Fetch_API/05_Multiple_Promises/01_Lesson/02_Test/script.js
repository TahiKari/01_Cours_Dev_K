// Test

startChrono()

const myFirstPromise = new Promise(resolve => {
  setTimeout(() => {
    resolve()
  }, 1000)
})

const mySecondPromise = new Promise(resolve => {
  setTimeout(() => {
    resolve()
  }, 3000)
})

// stopChrono();
/*Promise.all([myFirstPromise, mySecondPromise]).then(() => {
  console.log('Toutes les promesse sont revenues')
  stopCrono()
})*/

Promise.race([myFirstPromise, mySecondPromise]).then(() => {
    console.log('Au moins une de mes promesse est revenue')
    stopChrono()
})