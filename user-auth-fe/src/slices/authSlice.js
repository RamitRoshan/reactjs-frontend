import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'; 
import axios from '../config/axios'; 

export const registerUser = createAsyncThunk('auth/registerUser', async ({ formData, redirect}, {rejectWithValue} ) => {
    try {
        const response = await axios.post('/users/register', formData); 
        alert("successfully registered"); 
        redirect(); 
        console.log(response.data); 
    } catch(err) {
        // console.log(err); 
        const message = err.response.data.error;
        console.log(message)
        return rejectWithValue(message);
    }
}); 


export const loginUser = createAsyncThunk("auth/loginUser", async ({formData, redirect}, { rejectWithValue }) => {
    try {
      //will check if login credentials are valid
      const response = await axios.post("/users/login",formData);
      console.log(response.data);
      //save token
      localStorage.setItem("token", response.data.token);

      //once the frontend receives the token, make another api call to get the 
      // user account information and save in store.
      const userResponse  = await axios.get('/users/account', {headers: { Authorization:
      localStorage.getItem('token')}});
      redirect();
      return userResponse.data;
    } catch (err) { 
      const message = err.response.data.error;
      return rejectWithValue(message);  
    }
});


export const fetchUser = createAsyncThunk("auth/fetchUser", async(_, {rejectWithValue}) => {
  try{
    const response = await axios.get("/users/account", {headers: {
      Authorization: localStorage.getItem('token')
    }})
    return response.data;

  }catch(err){
    const msg = err.response.data.error;
    return rejectWithValue(msg);
  }
});

 

const authSlice = createSlice({
    name: 'auth', 
    initialState: {
        user: null, 
        isLoggedIn: false, 
        error: null 
    },
    reducers: {
      logout: (state) => {
        state.isLoggedIn = false;
        state.user = null;
      }
    },
    extraReducers: (builder) => {
      builder.addCase(registerUser.rejected,(state, action) => {
        state.error = action.payload;
      });

      builder.addCase(loginUser.fulfilled,(state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.error = null;
      });

      builder.addCase(loginUser.rejected,(state, action) => {
        state.error = action.payload;
      });

      builder.addCase(fetchUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
      });
    }
}); 

export const {logout} = authSlice.actions;
export default authSlice.reducer;


// ...existing code...
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from '../config/axios';

// export const registerUser = createAsyncThunk(
//   'auth/registerUser',
//   async ({ formData, redirect }, { rejectWithValue }) => {
//     try {
//       const response = await axios.post('/users/register', formData);
//       redirect && redirect();
//       return response.data;
//     } catch (err) {
//       const message =
//         err?.response?.data?.error ||
//         err?.response?.data?.message ||
//         err?.message ||
//         'Registration failed';
//       return rejectWithValue(message);
//     }
//   }
// );

// export const loginUser = createAsyncThunk(
//   'auth/loginUser',
//   async ({ formData }, { rejectWithValue }) => {
//     try {
//       const response = await axios.post('/users/login', formData);
//       const token = response.data?.token;
//       if (!token) throw new Error('No token returned from login');
//       localStorage.setItem('token', token);
//       const userResponse = await axios.get('/users/account', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       return userResponse.data;
//     } catch (err) {
//       const message =
//         err?.response?.data?.error ||
//         err?.response?.data?.message ||
//         err?.message ||
//         'Login failed';
//       return rejectWithValue(message);
//     }
//   }
// );

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: null,
//     isLoggedIn: false,
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     logout(state) {
//       state.user = null;
//       state.isLoggedIn = false;
//       state.error = null;
//       localStorage.removeItem('token');
//     },
//     setUser(state, action) {
//       state.user = action.payload;
//       state.isLoggedIn = !!action.payload;
//     }
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(registerUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(registerUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload || null;
//         state.isLoggedIn = !!action.payload;
//       })
//       .addCase(registerUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || action.error?.message;
//       })
//       .addCase(loginUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload;
//         state.isLoggedIn = true;
//         state.error = null;
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || action.error?.message;
//       });
//   },
// });

// export const { logout, setUser } = authSlice.actions;
// export default authSlice.reducer;
// ...existing code...



// -----

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