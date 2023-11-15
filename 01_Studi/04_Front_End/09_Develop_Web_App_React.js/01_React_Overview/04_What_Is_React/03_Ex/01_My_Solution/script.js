// Ma solution
let authenticatedUser = {
  firstname: 'Jim',
  lastname: 'Halpert'
}

;<h1>
  Bonjour {authenticatedUser.firstname} {authenticatedUser.lastname} !
</h1>

let termsOfServiceAccepted = false

const handleCheckbox = event => {
  termsOfServiceAccepted = event.target.checked
}

;<form>
  <input
    type='checkbox'
    value={termsOfServiceAccepted}
    onChange={handleCheckbox}
  />
</form>

console.log('-------------------------------------')
