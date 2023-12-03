import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'username',
  initialState: {
    value: 'Utilisateur inconnu'
  },
  reducers: {
    setUserName: (state, action) => {
      console.log(state, action)
      state.value = action.payload
    }
  }
})

export const { setUserName } = userSlice.actions
export default userSlice.reducer