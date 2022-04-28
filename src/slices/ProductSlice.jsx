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
export const fetchAsyncAddProductToCart = createAsyncThunk(
    "product/fetchAsyncAddProductToCart",
    async (arg, { rejectWithValue }) => {
        try {
            const response = await CallApiByBody("cart/add-product.php", "put", arg)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);
export const fetchAsyncDecreaseQuantityProduct = createAsyncThunk(
    "product/fetchAsyncDecreaseQuantityProduct",
    async (arg, { rejectWithValue }) => {
        try {
            const response = await CallApiByBody("cart/decrease-quantity-product.php", "put", arg)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);

//search
export const fetchAsyncSearchProducts = createAsyncThunk(
    "product/fetchAsyncSearchProducts",
    async (arg, { rejectWithValue }) => {
        try {
            const response = await CallApiByParams("products/search-product-by-key.php", "get", arg)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);

//filter
export const fetchAsyncFilterProduct = createAsyncThunk(
    "product/fetchAsyncFilterProduct",
    async (arg, { rejectWithValue }) => {
        try {
            const response = await CallApiByParams("products/filter-product.php", "get", arg)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);

const productSlice = createSlice({
    name: 'product',
    initialState: {
        //header > cate
        childCategoties: [],
        fatherCategories: [],
        mainCategories: [],

        //header > nav
        //cart
        listProductInCart: [],
        //search
        searchListProducts: [],

        //screen products
        listProducts: [],
        listManufacturers: [],

        //screen detail product
        detailProduct: [],



    },
    reducers: {
        setMainCategories: (state, action) => {
            state.mainCategories = action.payload
        },
        deleteListProducts: (state, action) => {
            state.listProducts = []
        },
        deleteSearchListProducts: (state, action) => {
            state.searchListProducts = []
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
            // console.log(JSON.parse(action.payload))
        },
        [fetchAsyncGetListProductInCart.rejected]: (state, action) => {
            console.log(action.payload)
        },
        //decrease quantity product
        [fetchAsyncDecreaseQuantityProduct.fulfilled]: (state, action) => {
            // state.listProductInCart = JSON.parse(action.payload)
            console.log(action.payload)
        },
        [fetchAsyncDecreaseQuantityProduct.rejected]: (state, action) => {
            console.log(action.payload)
        },
        //add product to cart
        [fetchAsyncAddProductToCart.fulfilled]: (state, action) => {
            console.log(action.payload)
        },
        [fetchAsyncAddProductToCart.rejected]: (state, action) => {
            console.log(action.payload)
        },
        //search product
        [fetchAsyncSearchProducts.fulfilled]: (state, action) => {
            state.searchListProducts = action.payload
            console.log(action.payload)
        },
        [fetchAsyncSearchProducts.rejected]: (state, action) => {
            state.searchListProducts = []
        },
        //filter product
        [fetchAsyncFilterProduct.fulfilled]: (state, action) => {
            state.listProducts = action.payload
            console.log(action.payload)
        },
        [fetchAsyncFilterProduct.rejected]: (state, action) => {
            console.log(action.payload)
        },
    }
})
const { reducer, actions } = productSlice
export const { setMainCategories, deleteListProducts, deleteSearchListProducts } = actions
export default reducer

