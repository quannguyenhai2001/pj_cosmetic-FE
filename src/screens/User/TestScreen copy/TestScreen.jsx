
import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncPostFile } from 'slices/ProductSlice';

const TestScreen = () => {
    const dispatch = useDispatch();
    const [sendimage, setSendimage] = React.useState({});
    const changeHandle = (e) => {

        setSendimage(e.target.files[0])
    }
    const submit = (e) => {
        e.preventDefault();
        let data = new FormData();

        data.append("sendimage", sendimage);
        console.log(sendimage)
        dispatch(fetchAsyncPostFile(data));
    }
    return (
        <>
            <form onSubmit={submit}>
                <input type="file" name="sendimage[]" onChange={changeHandle} multiple />
                <button>Submit</button>
            </form>
            <img src="/api1/auth-file/uploads/download.jpg" alt="dsds" />
        </>
    );
};

export default TestScreen;