import { configureStore, MiddlewareArray } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import reducers from './reducers/index'
import thunk from 'redux-thunk'

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducer,
    middleware: new MiddlewareArray().concat(thunk)
})

let persistor = persistStore(store)

export { store, persistor }
