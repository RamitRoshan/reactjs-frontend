import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
  name: "name",
  initialState: { value: "Veer Savarkar" },
});

export default nameSlice.reducer;
