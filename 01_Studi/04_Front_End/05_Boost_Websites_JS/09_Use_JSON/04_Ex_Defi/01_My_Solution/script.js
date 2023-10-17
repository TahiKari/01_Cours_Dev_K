// Ma solution

const json =
  '[{"id":33,"name":"Boni Avenue"},{"id":34,"name":"Shaw Boulevard"},{"id":35,"name":"Rue Madeleine"},{"id":36,"name":"Shaw Boulevard"}]'

const select = document.getElementById('button')

const populateSelect = () => {
  const data = JSON.parse(json)
  let ele = document.getElementById('select')
  for (let i = 0; i < data.length; i++) {
    // POPULATE SELECT ELEMENT WITH JSON.
    let option = document.createElement('option')
    option.value = data[i]['id']
    option.innerText = data[i]['name']
    ele.append(option)
  }
}

select.addEventListener('click', populateSelect)
