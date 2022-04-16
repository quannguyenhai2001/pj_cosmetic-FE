import CallApiByBody from "common/ConfigApi/CallApiByBody";


const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchAsyncGetChildCategories = createAsyncThunk(
    "user/fetchAsyncGetChildCategories",
    async (arg, { rejectWithValue }) => {
        try {
            const response = await CallApiByBody("categories/all-child-categories.php", "get", null)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);
export const fetchAsyncGetFatherCategories = createAsyncThunk(
    "user/fetchAsyncGetFatherCategories",
    async (arg, { rejectWithValue }) => {
        try {
            const response = await CallApiByBody("categories/all-father-categories.php", "get", null)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);
const productSlice = createSlice({
    name: 'product',
    initialState: {
        childCategoties: [],
        fatherCategories: [],
        mainCategories: []
    },
    reducers: {
        setMainCategories: (state, action) => {
            state.mainCategories = action.payload
        }
    },
    extraReducers: {
        [fetchAsyncGetChildCategories.fulfilled]: (state, action) => {
            state.childCategoties = action.payload
        },
        [fetchAsyncGetChildCategories.rejected]: (state, action) => {
            console.log("failed")
        },
        [fetchAsyncGetFatherCategories.fulfilled]: (state, action) => {
            state.fatherCategories = action.payload
        },
        [fetchAsyncGetFatherCategories.rejected]: (state, action) => {
            console.log("failed")
        },
    }
})
const { reducer, actions } = productSlice
export const { setMainCategories } = actions
export default reducer

