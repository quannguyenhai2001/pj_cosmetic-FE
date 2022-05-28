import CallApiByBody from "common/ConfigApi/CallApiByBody";
import CallApiByParams from "common/ConfigApi/CallApiByParams";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


//get all products
export const fetchAsyncGetAllProducts = createAsyncThunk(
    "product/fetchAsyncGetAllProducts",
    async (arg, { rejectWithValue }) => {
        try {
            const response = await CallApiByBody("products/get-products.php", "get", null)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);

//manu
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

//search
export const fetchAsyncSearchProducts = createAsyncThunk(
    "product/fetchAsyncSearchProducts",
    async (arg, { rejectWithValue }) => {
        try {
            const response = await CallApiByParams("products/get-products.php", "get", arg)
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
            const response = await CallApiByParams("products/get-products.php", "get", arg)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);

//detail
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

export const fetchAsyncGetListCommentByProduct = createAsyncThunk(
    "product/fetchAsyncGetListCommentByProduct",
    async (arg, { rejectWithValue }) => {
        try {
            const response = await CallApiByParams("comments/get-each-by-product.php", "get", arg)
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

export const fetchAsyncDeleteProductInCart = createAsyncThunk(
    "product/fetchAsyncDeleteProductInCart",
    async (arg, { rejectWithValue }) => {
        try {
            const response = await CallApiByBody("cart/delete-product.php", "delete", arg)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);

//comment
export const fetchAsyncCreateComment = createAsyncThunk(
    "product/fetchAsyncCreateComment",
    async (arg, { rejectWithValue }) => {
        try {
            const response = await CallApiByBody("comments/create-comment.php", "post", arg)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);
export const fetchAsyncUpdateComment = createAsyncThunk(
    "product/fetchAsyncUpdateComment",
    async (arg, { rejectWithValue }) => {
        try {
            const response = await CallApiByBody("comments/update-comment.php", "put", arg)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);
export const fetchAsyncDeleteComment = createAsyncThunk(
    "product/fetchAsyncDeleteComment",
    async (arg, { rejectWithValue }) => {
        try {
            const response = await CallApiByBody("comments/delete-comment.php", "delete", arg)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);


//bill
export const fetchAsyncCreateBill = createAsyncThunk(
    "product/fetchAsyncCreateBill",
    async (arg, { rejectWithValue }) => {
        try {
            const response = await CallApiByBody("bills/create-bill.php", "post", arg)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);

export const fetchAsyncGetListProductOfBill = createAsyncThunk(
    "product/fetchAsyncGetListProductOfBill",
    async (arg, { rejectWithValue }) => {
        try {
            const response = await CallApiByBody("bills/get-all-products-from-bill-details.php", "get", null)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);


//rating
export const fetchAsyncCreateRating = createAsyncThunk(
    "product/fetchAsyncCreateRating",
    async (arg, { rejectWithValue }) => {
        try {
            const response = await CallApiByBody("ratings/create-rating.php", "POST", arg)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);
//image
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
        //home
        listAllProducts: [],

        //header > cate
        listCategories: [],

        //header > nav > cart
        listProductInCart: [],

        //header > nav > search
        ListProductsBySearch: [],

        //screen products
        listProducts: {},
        errorListProducts: false,
        listManufacturers: [],


        //screen detail product
        detailProduct: [],
        listComments: [],

        //order
        listProductsInOrder: [],



    },
    reducers: {
        setListCategories: (state, action) => {
            state.listCategories = action.payload
        },
        deleteListProducts: (state, action) => {
            state.listProducts = []
        },
        deleteLErrorListProducts: (state, action) => {
            state.errorListProducts = false
        },
        deleteSearchListProducts: (state, action) => {
            state.searchListProducts = []
        },
        deleteDetailProduct: (state, action) => {
            state.detailProduct = []
        },

        deleteListComments: (state, action) => {
            state.listComments = []
        },
        deleteListProductInCart: (state, action) => {
            state.listProductInCart = []
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

        //get all products
        [fetchAsyncGetAllProducts.fulfilled]: (state, action) => {
            state.listAllProducts = action.payload.data
            // console.log(action.payload)
        },
        [fetchAsyncGetAllProducts.rejected]: (state, action) => {
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
            console.log(action.payload)
        },
        [fetchAsyncFilterProduct.rejected]: (state, action) => {
            state.errorListProducts = true
            state.listProducts = []
            // console.log(action.payload)
        },

        //get detail product
        [fetchAsyncGetDetailProduct.fulfilled]: (state, action) => {
            state.detailProduct = action.payload.data
            // console.log(action.payload)
        },
        [fetchAsyncGetDetailProduct.rejected]: (state, action) => {
            console.log(action.payload)
        },




        //cart
        //get list product in cart
        [fetchAsyncGetListProductInCart.fulfilled]: (state, action) => {
            state.listProductInCart = action.payload.data
            // console.log(action.payload)
        },
        [fetchAsyncGetListProductInCart.rejected]: (state, action) => {
            state.listProductInCart = []
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
        //fetchAsyncDeleteProductInCart
        [fetchAsyncDeleteProductInCart.fulfilled]: (state, action) => {
            console.log(action.payload)
        },
        [fetchAsyncDeleteProductInCart.rejected]: (state, action) => {
            console.log(action.payload)
        },





        //get comment by product
        [fetchAsyncGetListCommentByProduct.fulfilled]: (state, action) => {
            state.listComments = action.payload.data
            // console.log(action.payload.data)
        },
        [fetchAsyncGetListCommentByProduct.rejected]: (state, action) => {
            console.log(action.payload)
        },
        //create comment
        [fetchAsyncCreateComment.fulfilled]: (state, action) => {

            console.log(action.payload)
        },
        [fetchAsyncCreateComment.rejected]: (state, action) => {

            console.log(action.payload)
        },

        //update comment

        [fetchAsyncUpdateComment.fulfilled]: (state, action) => {
            console.log(action.payload)
        },
        [fetchAsyncCreateComment.rejected]: (state, action) => {

            console.log(action.payload)
        },

        //delete comment
        [fetchAsyncDeleteComment.fulfilled]: (state, action) => {

            console.log(action.payload)
        },
        [fetchAsyncDeleteComment.rejected]: (state, action) => {

            console.log(action.payload)
        },



        //create bill
        [fetchAsyncCreateBill.fulfilled]: (state, action) => {
            console.log(action.payload)
        },
        [fetchAsyncCreateBill.rejected]: (state, action) => {
            console.log(action.payload)
        },
        [fetchAsyncGetListProductOfBill.fulfilled]: (state, action) => {
            state.listProductsInOrder = action.payload.data
            console.log(action.payload)
        },
        [fetchAsyncGetListProductOfBill.rejected]: (state, action) => {
            console.log(action.payload)
        },

        //rating
        [fetchAsyncCreateRating.fulfilled]: (state, action) => {
            // state.listProductsInOrder = action.payload.data
            console.log({
                rating: action.payload
            })
        },
        [fetchAsyncCreateRating.rejected]: (state, action) => {
            console.log(action.payload)
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
export const { setListCategories, deleteListProducts, deleteListProductInCart, deleteLErrorListProducts, deleteSearchListProducts, deleteListComments, deleteDetailProduct } = actions
export default reducer

