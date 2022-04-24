import React from 'react';
import './App.css';
import { Routers } from "routes/Routes"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import listCategories from 'utils/listCategories';
import { fetchAsyncGetUser } from 'slices/UserSlice';
import { setMainCategories } from 'slices/ProductSlice';
import { fetchAsyncGetChildCategories, fetchAsyncGetFatherCategories } from 'slices/ProductSlice'
//set user, token local
//check token and remove token if expired
//keep login if token is valid, nếu local k còn token reload lại sẽ mất

function App() {
  const dispatch = useDispatch()
  const childCategories = useSelector(state => state.product.childCategoties)
  const state = useSelector(state => state.user.userDetail)
  const fatherCategories = useSelector(state => state.product.fatherCategories)
  React.useEffect(() => {
    const MainCategories = listCategories(childCategories, fatherCategories)
    dispatch(setMainCategories(MainCategories))
  }, [childCategories, fatherCategories, dispatch])
  useEffect(() => {
    dispatch(fetchAsyncGetChildCategories())
    dispatch(fetchAsyncGetFatherCategories())
    const token = localStorage.getItem('token')
    if (token) {
      dispatch(fetchAsyncGetUser())
    }
  }, [dispatch])

  return (
    <div>
      <Routers />
    </div >
  );
}

export default App;
