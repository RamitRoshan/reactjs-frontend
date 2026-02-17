// import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
// import axiosInstance from "../config/axios"

// export const registerUser = createAsyncThunk(
//   'auth/registerUser',
//   async (formData, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.post('/users/register',formData);

//       return response.data; 

//     } catch (err) {
//       return rejectWithValue(
//         err.response?.data?.error || "Registration failed"
//       );
//     }
//   }
// );

// //Login
// export const loginUser = createAsyncThunk(
//   "auth/loginUser",
//   async (formData, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.post(
//         "/users/login",
//         formData
//       );

//       // save token
//       localStorage.setItem("token", response.data.token);

//       return response.data;
//     } catch (err) {
//       return rejectWithValue(
//         err.response?.data?.error || "Login failed"
//       );
//     }
//   }
// );

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     user: null,
//     isLoggedIn: false,
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder

//       //Register
//       .addCase(registerUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(registerUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload;
//         state.isLoggedIn = true;
//       })
//       .addCase(registerUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       //login
//       .addCase(loginUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload;
//         state.isLoggedIn = true;
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default authSlice.reducer;


import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'; 
import axios from '../config/axios'; 

export const registerUser = createAsyncThunk('auth/registerUser', async ({ formData, redirect} ) => {
    try {
        const response = await axios.post('/users/register', formData); 
        alert("successfully registered"); 
        redirect(); 
        console.log(response.data); 
    } catch(err) {
        console.log(err); 
    }
}); 

const authSlice = createSlice({
    name: 'auth', 
    initialState: {
        user: null, 
        isLoggedIn: false, 
        error: null 
    }
}); 

export default authSlice.reducer;