import CallApiByBody from "common/ConfigApi/CallApiByBody";
import CallApiByParams from "common/ConfigApi/CallApiByParams";


const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchAsyncGetChildCategories = createAsyncThunk(
    "product/fetchAsyncGetChildCategories",
    async (arg, { rejectWithValue }) => {
        try {
            const response = await CallApiByBody("categories/get-all-child-categories.php", "get", null)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);
export const fetchAsyncGetFatherCategories = createAsyncThunk(
    "product/fetchAsyncGetFatherCategories",
    async (arg, { rejectWithValue }) => {
        try {
            const response = await CallApiByBody("categories/get-all-father-categories.php", "get", null)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);
export const fetchAsyncGetManu = createAsyncThunk(
    "product/fetchAsyncGetManu",
    async (arg, { rejectWithValue }) => {
        try {
            const response = await CallApiByBody("manufacturers/get-all-manufacturers.php", "get", null)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);
export const fetchAsyncGetListProductByChidCategories = createAsyncThunk(
    "product/fetchAsyncGetListProductByChidCategories",
    async (arg, { rejectWithValue }) => {
        try {
            const response = await CallApiByParams("products/get-products-by-chid-categories.php", "get", arg)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);

export const fetchAsyncGetDetailProduct = createAsyncThunk(
    "product/fetchAsyncGetDetailProduct",
    async (arg, { rejectWithValue }) => {
        try {
            const response = await CallApiByParams("products/get-detail-product.php", "get", arg)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);

//cart

export const fetchAsyncGetListProductInCart = createAsyncThunk(
    "product/fetchAsyncGetListProductInCart",
    async (arg, { rejectWithValue }) => {
        try {
            const response = await CallApiByParams("cart/get-list-product.php", "get", null)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);



const productSlice = createSlice({
    name: 'product',
    initialState: {
        //screem nav
        childCategoties: [],
        fatherCategories: [],
        mainCategories: [],

        //screen list products
        listProducts: [],
        listManufacturers: [],

        //screen detail product
        detailProduct: [],

        //cart
        listProductInCart: []
    },
    reducers: {
        setMainCategories: (state, action) => {
            state.mainCategories = action.payload
        },
        deleteListProducts: (state, action) => {
            state.listProducts = []
        }
    },
    extraReducers: {
        //get child categories
        [fetchAsyncGetChildCategories.fulfilled]: (state, action) => {
            state.childCategoties = action.payload
        },
        [fetchAsyncGetChildCategories.rejected]: (state, action) => {
            console.log("don't get child categories")
        },
        //get father categories
        [fetchAsyncGetFatherCategories.fulfilled]: (state, action) => {
            state.fatherCategories = action.payload
        },
        [fetchAsyncGetFatherCategories.rejected]: (state, action) => {
            console.log("don't get father categories")
        },
        //get list manu
        [fetchAsyncGetManu.fulfilled]: (state, action) => {
            state.listManufacturers = action.payload
            // console.log(action.payload)
        },
        [fetchAsyncGetManu.rejected]: (state, action) => {
            console.log(action.payload)
        },
        //get list products by child categories
        [fetchAsyncGetListProductByChidCategories.fulfilled]: (state, action) => {
            state.listProducts = action.payload
            // console.log(action.payload)
        },
        [fetchAsyncGetListProductByChidCategories.rejected]: (state, action) => {
            console.log(action.payload)
        },
        //get detail product
        [fetchAsyncGetDetailProduct.fulfilled]: (state, action) => {
            state.detailProduct = action.payload
            console.log(action.payload)
        },
        [fetchAsyncGetDetailProduct.rejected]: (state, action) => {
            console.log(action.payload)
        },
        //get list product in cart
        [fetchAsyncGetListProductInCart.fulfilled]: (state, action) => {
            state.listProductInCart = JSON.parse(action.payload)
            console.log(JSON.parse(action.payload))
        },
        [fetchAsyncGetListProductInCart.rejected]: (state, action) => {
            console.log(action.payload)
        },

    }
})
const { reducer, actions } = productSlice
export const { setMainCategories, deleteListProducts } = actions
export default reducer

