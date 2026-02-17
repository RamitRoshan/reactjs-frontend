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
//       const token = response.data.token;

// const userResponse = await axios.get('/users/account', {
//   headers: {
//     Authorization: `Bearer ${token}`
//   }
// });

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
      // Authorization: `Bearer ${localStorage.getItem('token')}`

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


 