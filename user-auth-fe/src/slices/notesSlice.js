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
      const newNote = {
        id: Date.now(),
        title: action.payload.title,
        description: action.payload.description,
        createdAt: new Date().toLocaleString(),
      };
      state.notes.push(newNote);
      state.error = null;
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
      state.error = null;
    },
    updateNote: (state, action) => {
      const note = state.notes.find((note) => note.id === action.payload.id);
      if (note) {
        note.title = action.payload.title;
        note.description = action.payload.description;
      }
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { addNote, deleteNote, updateNote, setError, clearError } =
  notesSlice.actions;
export default notesSlice.reducer;
