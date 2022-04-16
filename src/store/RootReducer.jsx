
import reducerUser from "slices/UserSlice";
import reducerProduct from "slices/ProductSlice";
const { configureStore } = require("@reduxjs/toolkit");
const rootReducer = {
    user: reducerUser,
    product: reducerProduct
}
const store = configureStore({
    reducer: rootReducer,
})
export default store

