import React from 'react';
import './App.css';
import { Routers } from "routes/Routes"
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncGetUser } from 'slices/UserSlice';
import { fetchAsyncGetListProductInCart } from 'slices/ProductSlice';

//set user, token local
//check token and remove token if expired
//keep login if token is valid, if the local has no tokens, reloading will be lost

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      dispatch(fetchAsyncGetUser())
    }
  }, [dispatch])

  //reomove count loaded
  useEffect(() => {
    window.onclick = () => {
      console.log("fgfgfg")
    }

    window.ondestroy = (e) => {
      console.log(e.clientY)
      // if (window.event.clientY < 0) {
      console.log(e)
      if (e.clientY < 0) {
        localStorage.removeItem('loaded')
      }

      // }

    }
  }, []);

  return (
    <div>
      <Routers />
    </div >
  );
}

export default App;
