import { createContext } from 'react'
import initialState from './initialState.js'

let Context = null

if (!Context) {
  Context = createContext(initialState)
}

module.exports = {
  Provider: Context.Provider,
  Consumer: Context.Consumer,
  initialState
}
