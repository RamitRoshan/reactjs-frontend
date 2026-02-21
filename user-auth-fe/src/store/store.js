import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import notesReducer from "../slices/notesSlice";
import { loadNotesFromLocalStorage } from "../slices/notesSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    notes: notesReducer,
  },
});

// Load notes from localStorage on app initialization
const savedNotes = localStorage.getItem("notes");
if (savedNotes) {
  try {
    const notes = JSON.parse(savedNotes);
    store.dispatch(loadNotesFromLocalStorage(notes));
  } catch (error) {
    console.error("Failed to load notes from localStorage:", error);
  }
}

export default store;
