// Ma solution

let userCredential = {
  email: null,
  password: null
}

const handleFormInChange = event => {
  userCredential.email = event.target.value
}

const handlePasswordChange = event => {
  userCredential.password = event.target.value
}

;<form>
  <input
    type='email'
    value={userCredential.email}
    onChange={handleFormInChange}
  ></input>
  <input
    type='password'
    value={userCredential.password}
    onChange={handlePasswordChange}
  ></input>
  <button type='submit'>Me connecter</button>
</form>

console.log('-------------------------------------')
