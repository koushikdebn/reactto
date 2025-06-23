import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './ActionCreator'; // Ensure this matches your file structure

export default configureStore({
  reducer: {
    counter: counterReducer, // Key matches the slice name
  },
});
