import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";
import nameReducer from "../slices/nameSlice";

const store = configureStore({
  reducer: {
    count: counterReducer,
    name: nameReducer,
  },
});

export default store;

/*

1. Create a new slice - nameSlice
      * initialState - {name: 'YOUR_NAME'}

2. Register the reducer in the store

3. Create ShowName Component
      * extract the name from the store
      * Display the name in the h2 tags
*/
