import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice.js'
import colorReducer from './colorSlice.js'
import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage: storage,
  /*blacklist: ['counter']*/
  whitelist: ['counter']
}

const rootReducer = combineReducers({
  counter: counterReducer,
  color: colorReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store =  configureStore({
  reducer: {
    reducer: persistedReducer
  }
})

const persistor = persistStore(store)

export { persistor, store}
