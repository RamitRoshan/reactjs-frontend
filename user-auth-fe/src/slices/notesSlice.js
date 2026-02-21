import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
  error: null,
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      const now = new Date().toLocaleString();
      const newNote = {
        id: Date.now(),
        title: action.payload.title,
        description: action.payload.description,
        createdAt: now,
        updatedAt: now,
      };
      state.notes.push(newNote);
      state.error = null;
      // Save to localStorage
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
      state.error = null;
      // Save to localStorage
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    updateNote: (state, action) => {
      const note = state.notes.find((note) => note.id === action.payload.id);
      if (note) {
        note.title = action.payload.title;
        note.description = action.payload.description;
        note.updatedAt = new Date().toLocaleString();
      }
      state.error = null;
      // Save to localStorage
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    loadNotesFromLocalStorage: (state, action) => {
      state.notes = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  addNote,
  deleteNote,
  updateNote,
  loadNotesFromLocalStorage,
  setError,
  clearError,
} = notesSlice.actions;
export default notesSlice.reducer;
