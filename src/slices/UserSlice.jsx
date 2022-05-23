import CallApiByBody from "common/ConfigApi/CallApiByBody";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


export const fetchAsyncSignUp = createAsyncThunk(
    "user/fetchAsyncSignUp",
    async (arg, { rejectWithValue }) => {
        try {
            const response = await CallApiByBody("auth/sign-up.php", "post", arg)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);

export const fetchAsyncSignIn = createAsyncThunk(
    "user/fetchAsyncSignIn",
    async (arg, { rejectWithValue }) => {
        try {
            const response = await CallApiByBody("auth/sign-in.php", "post", arg)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);
export const fetchAsyncGetUser = createAsyncThunk(
    "user/fetchAsyncGetUser",
    async (arg, { rejectWithValue }) => {
        try {
            const response = await CallApiByBody("auth/get-user.php", "get", null)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);
export const fetchAsyncUpdateUser = createAsyncThunk(
    "user/fetchAsyncUpdateUser",
    async (arg, { rejectWithValue }) => {
        try {
            const response = await CallApiByBody("auth/update-user.php", "post", arg)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);




const userSlice = createSlice({
    name: 'user',
    initialState: {
        userDetail: '',

    },
    reducers: {
        deleteUserDetail: (state, action) => {
            state.userDetail = ''
            localStorage.clear()
        }
    },
    extraReducers: {
        [fetchAsyncSignUp.fulfilled]: (state, action) => {
            console.log("create user")
        },
        [fetchAsyncSignUp.rejected]: (state, action) => {
            console.log(action.payload)
        },
        [fetchAsyncSignIn.fulfilled]: (state, action) => {
            state.userDetail = action.payload.user
            localStorage.setItem("token", action.payload.token)
            console.log("sign in")
        },
        [fetchAsyncSignIn.rejected]: (state, action) => {
            console.log(action.payload)
        },
        [fetchAsyncGetUser.fulfilled]: (state, action) => {
            state.userDetail = action.payload.data
            // console.log(action.payload)
        },
        [fetchAsyncGetUser.rejected]: (state, action) => {
            console.log("error login")
        },
        [fetchAsyncUpdateUser.fulfilled]: (state, action) => {

            console.log(action.payload)
        },
        [fetchAsyncUpdateUser.rejected]: (state, action) => {
            console.log(action.payload)
        },
    }
})
const { reducer, actions } = userSlice
export const { deleteUserDetail } = actions
export default reducer

