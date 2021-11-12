import { configureStore, combineReducers } from "@reduxjs/toolkit";
import playerOpts from './Reducers/PlayerOptionsReducers'

const reducer = combineReducers({playerOptions: playerOpts})

export const store = configureStore({ reducer }, )