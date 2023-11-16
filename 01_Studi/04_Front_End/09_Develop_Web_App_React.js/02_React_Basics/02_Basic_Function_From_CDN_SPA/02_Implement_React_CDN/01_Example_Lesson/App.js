const element = React.createElement('h2', {}, 'Hello React !' )
const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(element)