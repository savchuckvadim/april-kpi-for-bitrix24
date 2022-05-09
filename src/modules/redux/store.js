import {
    
  applyMiddleware,
    combineReducers, createStore,
} from "redux";

import ThunkMiddleware from 'redux-thunk';
import sheetsReducer from "./reducers/sheets-reducer";

import statisticsReducer from "./reducers/statistics-reducer";


// const customizedMiddleware = getDefaultMiddleware ({
//     serializableCheck: false
//   })
const reducers = combineReducers({
    sheets: sheetsReducer,
    statistics: statisticsReducer   
})

// let store = configureStore({reducer: reducers}, applyMiddleware(ThunkMiddleware));

const store = createStore(reducers,  applyMiddleware(ThunkMiddleware))
// configureStore({
//     reducer: reducers,
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({
//         thunk: ThunkMiddleware,
//         serializableCheck: false,
//       }),
//   })

  export default store;
window.store = store
