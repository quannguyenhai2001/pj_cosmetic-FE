import CallApiByBody from "common/ConfigApi/CallApiByBody";
import CallApiByParams from "common/ConfigApi/CallApiByParams";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

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
            const response = await CallApiByBody("cart/get-list-product.php", "get", null)
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
            const response = await CallApiByParams("products/filter-product.php", "get", arg)
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


//filter
export const fetchAsyncTestFile = createAsyncThunk(
    "product/fetchAsyncTestFile",
    async (arg, { rejectWithValue }) => {
        try {
            const response = await CallApiByBody("thungrac/test-cloudinary.php", "post", arg)
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
        listCategories: [],

        //header > nav > cart
        listProductInCart: [],

        //header > nav > search
        ListProductsBySearch: [],

        //screen products
        listProducts: [],
        errorListProducts: false,
        listManufacturers: [],

        //screen detail product
        detailProduct: [],



    },
    reducers: {
        setListCategories: (state, action) => {
            state.listCategories = action.payload
        },
        deleteListProducts: (state, action) => {
            state.listProducts = []
        },
        deleteLErrorListProducts: (state, action) => {
            state.listProducts = false
        },
        deleteSearchListProducts: (state, action) => {
            state.searchListProducts = []
        }
    },
    extraReducers: {
        //get list manu
        [fetchAsyncGetManu.fulfilled]: (state, action) => {
            state.listManufacturers = action.payload
            // console.log(action.payload)
        },
        [fetchAsyncGetManu.rejected]: (state, action) => {
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
            state.listProductInCart = JSON.parse(action.payload.data)
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
            state.ListProductsBySearch = action.payload.data
            console.log(action.payload)
        },
        [fetchAsyncSearchProducts.rejected]: (state, action) => {
            state.ListProductsBySearch = []
        },
        //filter product
        [fetchAsyncFilterProduct.fulfilled]: (state, action) => {
            state.listProducts = action.payload
            state.errorListProducts = false
            // console.log(action.payload)
        },
        [fetchAsyncFilterProduct.rejected]: (state, action) => {
            state.errorListProducts = true
            // console.log(action.payload)
        },





        //test
        [fetchAsyncTestFile.fulfilled]: (state, action) => {
            console.log(action.payload)
        },
        [fetchAsyncTestFile.rejected]: (state, action) => {
            console.log(action.payload)
        },
    }
})
const { reducer, actions } = productSlice
export const { setListCategories, deleteListProducts, deleteLErrorListProducts, deleteSearchListProducts } = actions
export default reducer

